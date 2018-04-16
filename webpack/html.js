module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        pretty: true
                    }
                }
            ]
        }
    }
};

