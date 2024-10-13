import axios from "axios";
const token =sessionStorage.getItem("token")
const FetchInstance =axios.create({
    baseURL:"https://b23c-102-44-235-49.ngrok-free.app",
    headers:{
Authorization:`Bearer ${token}`
    }
})

export default FetchInstance