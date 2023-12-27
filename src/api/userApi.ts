import axios from "axios";

export const getInfoUser = async () => {
    const res = await axios.get("https://api.ipify.org/").then(res => res.data)
    return res
}