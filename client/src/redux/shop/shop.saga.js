import { takeLatest , call , put } from 'redux-saga/effects';

import ShopActionTypes from './shop.type';
import { firestore , convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fecthCollectionsSuccess ,  fecthCollectionsFailure } from '../shop/shop.action';

export function* fecthCollectionsAsync(){

   try{

    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call ( convertCollectionsSnapshotToMap , snapshot );
    yield put(fecthCollectionsSuccess(collectionsMap));
   }

   catch(error)
   {
    yield put(fecthCollectionsFailure(error.message));
   }

 
        
      // collectionRef
      //  .get()
      // .then(snapshot => { 
      //  const collectionsMap =   convertCollectionsSnapshotToMap(snapshot);
      //  dispatch(fecthCollectionsSuccess(collectionsMap));
      //  }).catch(error =>dispatch(fecthCollectionsFailure(error.message)));
          
}

export function* fecthCollectionsStart(){
    yield takeLatest( 
        ShopActionTypes.FETCH_COLLECTIONS_START , 
         fecthCollectionsAsync  );
}