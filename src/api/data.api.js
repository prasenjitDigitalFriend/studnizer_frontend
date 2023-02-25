const { APP_ID } = require("./static.data.pnp.js");

module.exports = {
    APP_ID: APP_ID,
    USERID: localStorage.getItem("user_id", ""),
    USERNAME: () => {
        return localStorage.getItem("username", "")
    },
    PROFILE_PIC: () => {
        return localStorage.getItem("profile_pic", "")
    },
    DEPT: () => {
        return localStorage.getItem("dept", "")
    }
}

