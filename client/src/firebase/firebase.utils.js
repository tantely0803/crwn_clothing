import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



var config = {
    apiKey: "AIzaSyA6cKZxF3GMT8x6rtv3iDZdDNZF6t6-7kA",
    authDomain: "crwn-db-c580b.firebaseapp.com",
    databaseURL: "https://crwn-db-c580b.firebaseio.com",
    projectId: "crwn-db-c580b",
    storageBucket: "crwn-db-c580b.appspot.com",
    messagingSenderId: "778592273812",
    appId: "1:778592273812:web:dcf371c3f6b866bd0b3b81"
  };

  //initialise
  firebase.initializeApp(config );


  // creation user or get user
  export const createUserProfilDocument = async (userAuth , additionalData ) => {
      if (!userAuth) return ;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists)
      {
          const { displayName , email } = userAuth;

          const createdAt = new Date();

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })      

          } catch ( error  )
          {
                console.log('error creating user ' , error.message);
          }
      }

      return userRef;

  }



  export const addCollectionAndDocuments = async ( collectionKey , objectsToAdd ) => {
      const collectionRef = firestore.collection( collectionKey );

      const batch = firestore.batch();
      objectsToAdd.forEach(
          obj => {
              const newDocRef = collectionRef.doc();
              batch.set(newDocRef , obj);
          }
      );

      return await  batch.commit();
  };

export  const convertCollectionsSnapshotToMap =  collectionsSnapshot  => {
      const transformedCollection = collectionsSnapshot.docs.map ( docSnapshot => {
          const { title , items } = docSnapshot.data();

      return {
         routeName : encodeURI( title.toLowerCase() ),
         id: docSnapshot.id,
          items,
         title,
        
      };    
    });

  return   transformedCollection.reduce(( accumulator , collection ) => { 
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});
  };

  // check user session 
  export const getCurrentUser = () => {
      return new Promise( ( resolve , reject ) => { 
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
              unsubscribe();
              resolve(userAuth);
          } , reject )
       });
  }


//google authentification
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  export default firebase;

