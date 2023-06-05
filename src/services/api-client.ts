import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c78ff45e05b648daa2c8f4f242f306cf"
    }
})