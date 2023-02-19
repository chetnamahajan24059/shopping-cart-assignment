import bcrypt from "bcryptjs";
import User from "../models/user.js";

const authController = () => {
    return {
        register: async (req, res) => {
            try {
                // Get user input
                const { first_name, last_name, email, password } = req.body;

                // Validate user input
                if (!(email && password && first_name && last_name)) {
                    res.status(400).send("All input is required");
                }

                // check if user already exist
                // Validate if user exist in our database
                const oldUser = await User.findOne({ email });

                if (oldUser) {
                    return res.status(409).send("User Already Exist. Please Login");
                }

                //Encrypt user password
                const encryptedPassword = await bcrypt.hash(password, 10);

                // Create user in our database
                const user = await User.create({
                    first_name,
                    last_name,
                    email: email.toLowerCase(), // sanitize: convert email to lowercase
                    password: encryptedPassword,
                });

                // return new user
                const response = user.toAuthJSON();
                res.status(201).json(response);

            } catch (err) {
                console.log(err);
            }
        },

        login: async (req, res) => {
            try {
                // Get user input
                const { email, password } = req.body;

                // Validate user input
                if (!(email && password)) {
                    res.status(400).send("All input is required");
                }
                // Validate if user exist in our database
                const user = await User.findOne({ email });

                const isValidPassword = (await bcrypt.compare(password, user.password));

                if (user && isValidPassword) {
                    // return existing user
                    const response = user.toAuthJSON();
                    res.status(200).json(response);
                }
                else {
                    res.status(400).send("Invalid Credentials");
                }
            } catch (err) {
                console.log(err);
            }
        },
    };
}

export default authController;