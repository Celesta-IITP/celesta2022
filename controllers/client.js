const path = require("path");

module.exports = {
    build: (req, res, next) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    },
}