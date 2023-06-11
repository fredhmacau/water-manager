import axios from "axios"

const instance = axios.create({
  baseURL: "https://drain-easy.onrender.com/v1.0/",
  
  
});

export default instance;