export const API_KEY = "AIzaSyAgLSSWU2EIbSGBKhFWAzt9rFnX_57uTaY";

export const value_converter = (val) => {
  if (val >= 1000000) {
    return Math.floor(val / 1000000) + "M";
  } else if (val >= 1000) {
    return Math.floor(val / 1000) + "K";
  } else {
    return val;
  }
};
