import { getToken } from "../type";
import apiconfig_promotion from "~/config/apiconfig";

export const getTokenApi= async () => {

     const response = await apiconfig_promotion.http.get<getToken>('token',{
        params:{     
        }
    })
    return response.data ?? '';
}
