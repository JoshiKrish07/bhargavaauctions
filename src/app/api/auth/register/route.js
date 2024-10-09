import mysql from "mysql2/promise";
import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import cors from "@/lib/cors";
import uploadImgToCloudinary from "@/lib/cloudinary";
export const config = {
  api: {
    bodyParser: false,    // disable next js body parsing
  },
}

// Create the uploads directory path
const uploadsDir = path.join(process.cwd(), "profileiamge");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up multer for file uploads
// const upload = multer({ dest: `${uploadsDir}/` });

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
    { id: user.id, useremail: user.email },
    process.env.JWT_REGISTER_KEY,
    { expiresIn: "1h" }
  );
};

// POST API route
export async function POST(req) {
  // Handle CORS
  const corsHeaders = cors(req);

  // If it's an OPTIONS request, return early
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    // Extract form data including the file
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const mobile = formData.get("mobile");
    const address = formData.get("address");
    const state = formData.get("state");
    const pincode = formData.get("pincode");
    const handlename = formData.get("handlename");

    // Extract file
    const profilePic = formData.get("profilePic");

    let imagePath = null;

    if (profilePic && typeof profilePic === "object" && profilePic.name) {

      // path to store image
      // imagePath = `profileiamge/${profilePic.name}`;    
      // const buffer = await profilePic.arrayBuffer();
      // await fs.promises.writeFile(imagePath, Buffer.from(buffer));


      // uploading on cloudinary

      try {
        const buffer = await profilePic.arrayBuffer();
        const publicId = `profile_image/${Date.now()}_${profilePic.name}`;
        const result = await uploadImgToCloudinary(Buffer.from(buffer), publicId);
    
        // save result.secure_url or result.public_id to your database
        if(result.secure_url) {
          imagePath = result.secure_url;
        }
    
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    
    // Check if the user already exists
    const [existingUser] = await pool.execute(
      "SELECT * FROM register WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({
          error: "User with this email is already registered",
        }),
        { status: 409 } 
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
      imagePath || "default-image-path",
      handlename,
    ];

    const [result] = await pool.execute(
      "INSERT INTO register (name, email, password, mobile, address, state, pincode, profileimage, handlename) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      valuesToInsert
    );

    const token = generateToken({ id: result.insertId, email });

    return new Response(
      JSON.stringify({ message: "User registered successfully", token }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Registration failed" }),
      { status: 500, headers: corsHeaders }
    );
  }
}

