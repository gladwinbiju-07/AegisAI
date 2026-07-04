const mongoose = require("mongoose");

const connectDatabase = async () => {
  if (!process.env.DB_URL) {
    throw new Error(
      "DB_URL is not set. Create Backend/src/Config/.env with a DB_URL value."
    );
  }

  const con = await mongoose.connect(process.env.DB_URL);
  console.log(`Database connected: ${con.connection.host}`);
  return con;
};

module.exports = connectDatabase;
