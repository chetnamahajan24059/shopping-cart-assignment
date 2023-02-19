import categoriesList from '../categories/index.get.json' assert { type: "json" };
import offerList from '../banners/index.get.json' assert { type: "json" };
import productList from '../products/index.get.json' assert { type: "json" };
import addToCartMessage from '../addToCart/index.post.json' assert { type: "json" };

const dataController = () => {
    return {
        categories: (req, res) => {
            res.send(categoriesList);
        },
        offers: (req, res) => {
            res.send(offerList);
        },
        products: (req, res) => {
            res.send(productList);
        },
        addToCart: (req, res) => {
            res.send(addToCartMessage);
        },
    };
};

export default dataController; 