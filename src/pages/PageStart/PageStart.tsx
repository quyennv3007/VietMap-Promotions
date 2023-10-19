// import './ListPromotion.css';
import { useQuery } from '@tanstack/react-query'
import { getTokenApi } from '~/ApiPromotions/GetToken/utils/getToken'
import { getallPromotion } from '~/ApiPromotions/Promotions/utils/PromotionApi';
import {Promotion} from '~/ApiPromotions/Promotions/types'

const PageStart = () => {

  const  {isLoading, data: tokenApi} =  useQuery({
    queryKey: ['token'],
    queryFn: async() => await getTokenApi(),
    keepPreviousData: true
  })
  // console.log("🚀 ~ file: PageStart.tsx:12 ~ PageStart ~ isLoading:", isLoading)
  // console.log("🚀 ~ file: PageStart.tsx:12 ~ PageStart ~ data:", tokenApi)
 
  if(!isLoading){
    localStorage.setItem('token',JSON.stringify(tokenApi))
    let gettoken: any = localStorage.getItem('token')
    gettoken = JSON.parse(gettoken)
    console.log("🚀 ~ file: PageStart.tsx:16 ~ PageStart ~ gettoken:", gettoken.data.access_token)
    
  }

  const obj :Promotion  = {
    maxResultCount: 0,
    skipCount: 0,
    keyword: 'quyen test',
  }
  const  { data: promotion} =  useQuery({
    queryKey: ['token'],
    queryFn: async() => await getallPromotion(obj),
    keepPreviousData: true
  })
  console.log('🚀 ~ PageStart ~ promotion:', promotion);

  return (
    <div>
      <h1>List PageStart</h1>
    </div>
  )
}

export default PageStart
