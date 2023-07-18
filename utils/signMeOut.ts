import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { getAuth, signOut } from 'firebase/auth';

export const signMeOut = async () => {
  // 1. Sign out on the native layer
  await FirebaseAuthentication.signOut();
  // 1. Sign out on the web layer
  const auth = getAuth();
  await signOut(auth);
};
