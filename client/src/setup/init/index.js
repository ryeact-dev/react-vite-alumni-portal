import axios from 'axios';

const initializeApp = () => {
  // Setting base URL for all API request via axios
  axios.defaults.baseURL = import.meta.env.VITE_LOCAL_BASE_URL;
  axios.defaults.withCredentials = true;

  // if (process.env.NODE_ENV === "production")
  // console.log = function no_console() {};

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
  } else {
    // Prod build code

    // Removing console.log from prod
    console.log = () => {};

    // init analytics here
  }
};

export default initializeApp;
