const { default: axios } = require("axios");

export const postApi = async (postData, url) => {
  try {
    let response = await axios({
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: postData,
    });
    if (response.status === 200) {
      if (response.data.responsecode === "501") {
        window.location = "/";
      }
      else {return response.data};
    } else {
      return {
        status: "error",
        message: "Server Error",
        responsecode: "500",
        data: null,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
      responsecode: "500",
      data: null,
    };
  }
};

export const getApi = async (url) => {
  try {
    let response = await axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      if (response.data.responsecode === "501") {
        window.location = "/";
      }
      else {return response.data};
    } else {
      return {
        status: "error",
        message: "Server Error",
        responsecode: "500",
        data: null,
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message,
      responsecode: "500",
      data: null,
    };
  }
};