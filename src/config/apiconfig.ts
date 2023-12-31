import axios, { AxiosInstance } from 'axios'
const TOKEN_APIKEY = '7904bd3411594c70cc03cf720a6d9963'
const getdata = localStorage.getItem('token');
let currentToken = '';
if (getdata) {
  const tokenModel = JSON.parse(getdata);
  currentToken = tokenModel.data?.access_token;
}

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: `https://api-gw.vietmap.io/platform/testing-vml/v1.1/inside-service/api/TokenAuth/CortextAuthenticate?UserNameOrEmailAddress=loinh@vietmap.vn&apikey=${TOKEN_APIKEY}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

class PromotionApi {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-gw.vietmap.io/platform/testing-vml/v1.1/promotion-service',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentToken}`,
      },
      params: {
        apikey: TOKEN_APIKEY,
      },
    });
  }
}

const http = new Http().instance
const promotionapi = new PromotionApi().instance

const apiconfig_promotion = {
  http,
  promotionapi
}
export default apiconfig_promotion
