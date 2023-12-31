import { createContext, ReactNode, useState  } from "react";

interface  AuthContextData {
    user: UserProps | null;
    isAuthenticated: boolean | null;
    signIn: (credentials: SignInProps ) => Promise<void> | null;
}

//type AuthContextData = {
//   user: UserProps;
//  isAuthenticated: boolean;
//  signIn: (credentials: SignInProps ) => Promise<void>;
//}

type UserProps = {
    id: string; 
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode; 
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, setUser ] = useState<UserProps | null>(null);

    
    const isAuthenticated = !!user;

   async function signIn(){
        alert("CLICOU NO LOGIN")
    }

    return(
        <AuthContext.Provider value={{ user,  isAuthenticated, signIn }}>
            { children }
        </AuthContext.Provider>
    )
}