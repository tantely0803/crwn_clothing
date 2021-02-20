import { all , call } from 'redux-saga/effects';

import { fecthCollectionsStart } from './shop/shop.saga';
import  { userSagas }  from './user/user.saga';
import { cartSaga } from './cart/cart.saga';

export default function* rootSaga(){
    yield all([ call(fecthCollectionsStart) ,
                call(userSagas) , 
                call(cartSaga) ]);
}