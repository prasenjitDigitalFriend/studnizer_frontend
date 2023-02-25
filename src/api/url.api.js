const { API } = require("./static.data.pnp.js");

module.exports = {
    login: API + "student/login",
    signUp: API + "student/create-student",
    profilePicUpload: API + "student/profile-pic-upload",
}