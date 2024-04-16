import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firbase.init";
export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const TwitterProvider = new TwitterAuthProvider();
  const [user, setUser] = useState(null);

  //sign in with email and password
  const createEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Create for Google
  const createForGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //Create for Github
  const createForGithub = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Create for Twitter
  const createForTwitter = () => {
    signInWithPopup(auth, TwitterProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //LoginEmailAnd Password
  const logInEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user
  const UpdateUser = (name, photoUrl, phone) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
      PhoneNumber: phone,
    });
  };

  //SignOut User
  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    createForGoogle,
    createForTwitter,
    createForGithub,
    logOutUser,
    createEmailAndPassword,
    logInEmailAndPassword,
    UpdateUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Provider;
