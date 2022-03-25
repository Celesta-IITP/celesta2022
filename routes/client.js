const router = require('express-promise-router')();
const ClientControllers = require("../controllers/client");

router.route('*')
    .get(ClientControllers.build)

module.exports=router;