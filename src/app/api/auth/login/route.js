import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Create a MySQL connection pool (reuse the same pool configuration as in registration logic)
const pool = mysql.createPool({
  host: process.env.NODE_ENV === 'development' ? process.env.DEV_HOST : process.env.PROD_HOST,
  user: process.env.NODE_ENV === 'development' ? process.env.DEV_USER : process.env.PROD_USER,
  password: process.env.NODE_ENV === 'development' ? "" : process.env.PROD_PASSWORD,
  database: process.env.NODE_ENV === 'development' ? process.env.DEV_DB_NAME : process.env.PROD_DB_NAME,
});

// Token generation function (reuse the same one from the registration logic)
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.name },
    process.env.JWT_LOGIN_KEY,
    { expiresIn: "5m" }
  );
};

// Login logic
export async function POST(req) {
  return new Promise(async (resolve, reject) => {
    try {
      const formData = await req.formData();
      const email = formData.get("email");
      const password = formData.get("password");

      // Check if the user exists in the database
      const [user] = await pool.execute(
        "SELECT * FROM register WHERE email = ?",
        [email]
      );

      if (user.length === 0) {
        // User not found
        return resolve(
          new Response(
            JSON.stringify({ error: "Invalid email or password" }),
            { status: 401 } // Unauthorized status code
          )
        );
      }

      const userRecord = user[0];

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, userRecord.password);

      if (!isPasswordValid) {
        // Invalid password
        return resolve(
          new Response(
            JSON.stringify({ error: "Invalid email or password" }),
            { status: 401 }
          )
        );
      }

      // Generate a token for the user
      const token = generateToken({ id: userRecord.id, email: userRecord.email });

      // Respond with the token
      return resolve(
        new Response(
          JSON.stringify({ message: "Login successful", token }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        )
      );
    } catch (error) {
      console.error("Error in login logic:", error);
      return resolve(
        new Response(JSON.stringify({ error: "Login failed" }), {
          status: 500,
        })
      );
    }
  });
}
