const redirectController = () => {
    return {
        redirect: async (req, res) => {
            // return 404
            res.status(404).json({
                success: "false",
                message: "Page not found",
                error: {
                    statusCode: 404,
                    message: "You reached a route that is not defined on this server",
                },
            });
        },
    };
}

export default redirectController;