import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import app from "./app";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

import routes from "./routes";
import runConnect from "./database/models/connection";

app.use(routes);
app.use(cors(
  {
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT']
  }
));

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "127.0.0.1";

runConnect();

app.listen(PORT, () => {
  const statusServer =
    process.env.NODE_ENV === "test"
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URI}`;

  console.log(statusServer);
});