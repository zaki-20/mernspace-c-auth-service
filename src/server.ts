import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      //   console.log(`Server is running on port ${PORT}`);
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startServer();
