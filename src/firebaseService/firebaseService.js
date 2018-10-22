// import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// begin insert from marioplan/src/config/fbConfig.js
import 'firebase/firestore';
// end insert

class firebaseService {

  init() {
    // firebase.initializeApp(config);
    this.db = firebase.database();
    this.auth = firebase.auth();
    // move the following to src.store.js; see README.md steps 27-28
    // my add
    this.firestore = firebase.firestore();
    // end my add
    // begin insert from marioplan/src/config/fbConfig.js
    // firebase.initializeApp(config);
    // firebase.firestore().settings({ timestampsInSnapshots: true });
    // end insert
    // begin modify my add with mariplan insert
    // this.firestore = firebase.firestore().settings({ timestampsInSnapshots: true });
    // end modify my add with mariplan insert
  }

  // getUserData_orig = (userId) => {
  //   if (!firebase.apps.length) {
  //     return;
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.db.ref(`users/${userId}`)
  //       .once('value')
  //       .then((snapshot) => {
  //         const user = snapshot.val();
  //         resolve(user);
  //       });
  //   });
  // };

  getUserData = userId => {
    // console.log('userId', userId);
    // console.log('firebase.apps\n', firebase.apps);
    return new Promise((resolve, reject) => {
      if (!firebase.apps.length) {
        reject();
      }

      // ref: https://firebase.google.com/docs/firestore/query-data/get-data
      // const docRef = this.firestore.doc('users/azZBg5YjnyNFfk73nKZGolm9Mmg2');
      const docRef = this.firestore.doc(`users/${userId}`);

      docRef.get().then(doc => {
        if (doc.exists) {
          const data = doc.data();
          console.log("Document data:\n", data);
          resolve(data);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          reject();
        }
      }).catch(error => {
        console.log("Error getting document:\n", error);
        reject();
      });
    });
  };

  // updateUserData_orig = (user) => {
  //   if (!firebase.apps.length) {
  //     return;
  //   }
  //   return this.firestore.doc(`users/${user.uid}`)
  //     .set(user);
  // };

  updateUserData = user => {
    console.log('user\n', user);
    if (!firebase.apps.length) {
      return;
    }
    // return this.db.ref(`users/${user.uid}`)
    return this.firestore.doc(`users/${user.uid}`)
      .set(user);
  };

  onAuthStateChanged = (callback) => {
    if (!this.auth) {
      return;
    }
    this.auth.onAuthStateChanged(callback);
  };

  signOut = () => {
    if (!this.auth) {
      return;
    }
    this.auth.signOut();
  }

  // start my add

  saveDocToFirestore = (data, path) => {
    const collectionRef = this.firestore.collection(path);
    // console.info('submitting...', model);  
    collectionRef.add(data)
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
    // console.info('submitted: ', model);
  }

  //  end my add

}

const instance = new firebaseService();

export default instance;
