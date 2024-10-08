import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

// Create the uploads directory path
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up multer for file uploads
const upload = multer({ dest: uploadsDir });

// Create a MySQL connection pool
const pool = mysql.createPool({
  host:
    process.env.NODE_ENV === "development"
      ? process.env.DEV_HOST
      : process.env.PROD_HOST,
  user:
    process.env.NODE_ENV === "development"
      ? process.env.DEV_USER
      : process.env.PROD_USER,
  password:
    process.env.NODE_ENV === "development" ? "" : process.env.PROD_PASSWORD,
  database:
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DB_NAME
      : process.env.PROD_DB_NAME,
});

// Token generation
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.name },
    process.env.JWT_REGISTER_KEY,
    { expiresIn: "1h" }
  );
};

// POST API route
export async function POST(req) {
  return new Promise(async (resolve, reject) => {
    // Use multer to handle only the file upload
    upload.single("profilePic")(req, {}, async (error) => {
      if (error) {
        console.error("Multer error:", error);
        return resolve(
          new Response(JSON.stringify({ error: "File upload failed" }), {
            status: 500,
          })
        );
      }

      // Create a FormData object to extract other fields
      const formData = await req.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const mobile = formData.get("mobile");
      const address = formData.get("address");
      const state = formData.get("state");
      const pincode = formData.get("pincode");
      const handlename = formData.get("handlename");

      let imagePath = null;

      //   imagePath = path.join(uploadsDir, formData.get("profilePic").name); /
      imagePath = formData.get("profilePic").name;

      try {
        // Check if the user already exists
        const [existingUser] = await pool.execute(
          "SELECT * FROM register WHERE email = ?",
          [email]
        );

        if (existingUser.length > 0) {
          return resolve(
            new Response(
              JSON.stringify({
                error: "User with this email is already registered",
              }),
              { status: 409 } // Conflict status code
            )
          );
        }
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        const valuesToInsert = [
          name,
          email,
          hashedPassword,
          mobile,
          address,
          state,
          pincode,
          imagePath || "abc",
          handlename,
        ];

        const [result] = await pool.execute(
          "INSERT INTO register (name, email, password, mobile, address, state, pincode, profileimage, handlename) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          valuesToInsert
        );

        const token = generateToken({ id: result.insertId, email });

        return resolve(
          new Response(
            JSON.stringify({ message: "User registered successfully", token }),
            { status: 201, headers: { "Content-Type": "application/json" } }
          )
        );
      } catch (error) {
        console.error("Error in catch part:", error);
        return resolve(
          new Response(JSON.stringify({ error: "Registration failed" }), {
            status: 500,
          })
        );
      }
    });
  });
}
