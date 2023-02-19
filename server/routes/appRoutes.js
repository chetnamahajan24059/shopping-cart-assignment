import authController from "../controllers/authController.js";
import redirectController from "../controllers/redirectController.js";
import dataController from "../controllers/dataController.js";
import auth from "../middleware/auth.js";

const { login, register } = authController();
const { redirect } = redirectController();
const {
    categories,
    products,
    offers,
    addToCart,
} = dataController();
const appRoutes = (app) => {
    // console.log("routes",process.env)

    app.post("/register", register);
    app.post("/login", login);
    app.get("/categories", categories);
    app.get("/products", auth, products);
    app.get("/offers", offers);
    app.post("/addToCart", auth, addToCart);

    // This should be the last route else any after it won't work
    app.use("*", redirect);

}

export default appRoutes;

