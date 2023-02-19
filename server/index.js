import "./config/loadEnv.js"
import app from "./config/app.js";
import dbConnect from "./config/database.js";
import appRoutes from "./routes/appRoutes.js";


dbConnect();

appRoutes(app);


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});