import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    database: "users",
    host: "localhost",
    port: 1337,
    password: "iulianpavel20039"
});

export const connectDB = async () => {
    try {
        await pool.connect();
        console.log("Connected to PostreSQL");
    } catch(error) {
        console.log("Error while connecting to database: ", error)
    }
}