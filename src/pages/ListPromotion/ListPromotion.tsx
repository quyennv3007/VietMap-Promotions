// import './ListPromotion.css';
import { getallPromotion } from '~/ApiPromotions/Promotions/utils/PromotionApi';
import {Promotion} from '~/ApiPromotions/Promotions/types'
import { useQuery } from '@tanstack/react-query'



const ListPromotion = () => {
  // code...
  const obj :Promotion  = {
    maxResultCount: 0,
    skipCount: 0,
    keyword: 'quyen test',
  }
  
  
  const data : any = useQuery({
    queryKey: ['promotion'],
    queryFn: () => getallPromotion(obj),
    keepPreviousData: true
  })
  console.log('data', data)


  return (
    <div className='tesst' >
      <h1>List Promotion</h1>
    </div>
  );
};

export default ListPromotion;
