import React from "react";
interface UserDataContextType {
  user: UserDataProps | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataProps | null>>;
}

export interface UserDataProps {
  uid: string;
  name: string;
  email: string;
  password: string;
}

const UserDataContext = React.createContext<UserDataContextType | undefined>(
  undefined
);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserDataProps | null>(null);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUser = (): UserDataContextType => {
  const context = React.useContext(UserDataContext);
  if(!context) {
    throw new Error('useUser deve ser usado dentro do UserDataProvider')
  }
  return context
};
