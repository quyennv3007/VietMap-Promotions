import apiconfig_promotion from '~/config/apiconfig';
import { ListResponse, Response } from '../types';
const access_token: any = localStorage.access_token;

const getallPromotion = (data: any) =>
  apiconfig_promotion.promotionapi.post<ListResponse>('/api/promotion/get-all', {
    data: data,
  });
const getByIdPromotion = (id: any) =>
  apiconfig_promotion.promotionapi.get<Response>(`/api/promotion/get/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

const promotionAPI = {
  getallPromotion,
  getByIdPromotion,
};

export default promotionAPI;
