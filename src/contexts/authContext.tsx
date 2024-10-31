import React from "react";
import { auth, db } from "../services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  signUp: (name: string, email: string, password: string) => Promise<void>;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
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
      navigate(`/dashboard/${uid}`);
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
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
