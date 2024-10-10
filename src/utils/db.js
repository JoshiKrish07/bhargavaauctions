import mysql from "mysql2/promise";


const db = mysql.createPool({
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

export default db;
