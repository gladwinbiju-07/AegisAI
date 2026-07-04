const connectDatabase = require("./DB/database.js");
const app = require("./app.js");
const PORT = process.env.PORT || 8080;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `The Server is running on Port:${PORT} URL: http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  });
