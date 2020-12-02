const router = require("express-promise-router")();
const userController = require("../controllers/users.js");
router.route("/register").post(userController.registerCA);
router.route("/points").post(userController.addCAPoints);
router.route("/all").get(userController.getAllCA);
// router.route("/celestaId").post(userController.findByCelestaId);
module.exports = router;
 