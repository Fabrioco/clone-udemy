import React from "react";
import { auth, db } from "../services/firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  signUp: (name: string, email: string, password: string) => Promise<void>;

  signIn: (email: string, password: string) => Promise<void>;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserDataProps {
  uid: string;
  name: string;
  email: string;
  password: string;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState<UserDataProps>();

  const signUp = async (
    name: string,
    email: string,
    password: string
  ): Promise<void> => {
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = authResponse.user.uid;
      await setDoc(doc(db, "users", uid), {
        uid,
        name,
        email,
        password,
      });
      const data: UserDataProps = {
        uid,
        name,
        email,
        password,
      };
      navigate(`/dashboard/${uid}`);
      setUserData(data);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          alert("email ja em uso");
        }
      } else {
        console.error("error desconhecido:", error);
      }
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    const authResponse = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = authResponse.user.uid;
    const docSnap = await getDoc(doc(db, "users", uid));

    if (docSnap.exists()) {
      const data: UserDataProps = {
        uid: uid,
        name: docSnap.data()?.name,
        email: docSnap.data()?.email,
        password: docSnap.data()?.password,
      };
      setUserData(data);
      navigate(`/dashboard/${uid}`);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
