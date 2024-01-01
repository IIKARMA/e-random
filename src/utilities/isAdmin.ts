import env from "react-dotenv";
import { getInfoUser } from "src/api/userApi";
const getUser = async () => {
    const user = await getInfoUser();
    return user
}
export const isAdmin = (): boolean => {
    const user = getUser()
    console.log(([env.API_ADMIN1,].includes(String(user))));

    return ([env.API_ADMIN1,].includes(String(user)))
}