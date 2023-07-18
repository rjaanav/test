import { Capacitor } from '@capacitor/core';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithCredential,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

export const signInWithGoogle = async () => {
  //console.log('executing sign in function');/
  if (Capacitor.isNativePlatform()) {
    // 1. Create credentials on the native layer
    const result = await FirebaseAuthentication.signInWithGoogle();
    // 2. Sign in on the web layer using the id token
    const credential = GoogleAuthProvider.credential(result.credential?.idToken);
    const auth = getAuth();
    await signInWithCredential(auth, credential);
  } else {
    //console.log('executing non native sign in');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
};
