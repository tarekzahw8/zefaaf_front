import axios from "axios";
const token =sessionStorage.getItem("token")
const FetchInstance =axios.create({
    baseURL:"https://zefaafapi.com",
    headers:{
Authorization:`Bearer ${token}`
    }
})

export default FetchInstance