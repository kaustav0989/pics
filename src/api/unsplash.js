import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {Authorization : 'Client-ID xDiBjkDkZ26LbHqEF9d03gf6zCc4-ILaKhXECvzAsT8'}
});