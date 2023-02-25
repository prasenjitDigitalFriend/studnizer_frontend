import React from 'react';
import io from "socket.io-client";
const { SOCKET_URL } = require("./static.data.pnp");
const dataApi = require("./data.api");

// export const socket = io(SOCKET_URL, {
//     transports: ['polling'],
//     autoConnect: true,
//     query: {
//         "token": dataApi.TOKEN, "fb_token": dataApi.TOKEN, "type": "baker"
//     }
// });
// export const SocketContext = React.createContext();