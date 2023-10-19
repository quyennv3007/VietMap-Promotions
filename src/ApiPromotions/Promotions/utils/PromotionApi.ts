import { ListResponse,Response } from "../types";
import apiconfig_promotion from "~/config/apiconfig";
const access_token :any = localStorage.access_token

export const getallPromotion= (data:any) => 
apiconfig_promotion.promotionapi.post<ListResponse>('/api/promotion/get-all',{
    data:data
}) 
export const getByIdPromotion= (id:any) => 
apiconfig_promotion.promotionapi.get<Response>(`/api/promotion/get/${id}`,{
    headers:{
        'Authorization': `Bearer ${access_token}`
    }
}) 