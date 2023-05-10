import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import app from "./app";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

app.use(cors);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  const statusServer =
    process.env.NODE_ENV === "test"
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URI}`;

  console.log(statusServer);
});