// helper Functions

import { colors } from "../constant/staticData";

export const handleCatch = (err) => {
    if (err.response && err.response.data === "Access denied. No token provided")
        return;
    if (typeof err === "string") {
        message.error(err);
    }
    else if (err?.response?.status === 403) {
        return;
    }
    else if (
        typeof err.response === "string"
    ) {
        message.error(err.response);
    } else if (err.response && err.response.data && err.response.data.error) {
        message.error(err.response.data.error);
    } else if (err.response && err.response.data) {
        message.error(err.response.data);
    } else {
        message.error("Some error has occured please refresh...");
    }
};

export function getColorCode(colorName) {
    if (typeof colors[colorName.toLowerCase()] != 'undefined')
      return colors[colorName.toLowerCase()];
  
    return "#fff";
  }
  