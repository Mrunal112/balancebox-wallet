import "dotenv/config";
import app from "./app";
import serverConfig from "./config/server.config";
import { connectDB } from "./config/db";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(serverConfig.port, async () => {
      console.log(`Server running on port ${serverConfig.port}`);
    });
  } catch (error) {
    console.log("Error connecting to the server.");
  }
};

startServer();
