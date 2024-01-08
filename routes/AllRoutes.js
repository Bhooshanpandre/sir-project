const routes = require("express").Router()

routes.use("/api/city",(require("../controller/CityController")))
routes.use("/api/signup",(require("../controller/SignupController")))
routes.use("/api/auth",(require("../controller/LoginController")))
routes.use("/api/user-profile",(require("../controller/UserProfileController")))
routes.use("/api/admin-auth",(require("../controller/AdminAuthController")))

module.exports = routes