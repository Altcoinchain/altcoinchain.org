import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

const LOCAL_STORAGE_TOKEN_KEY = 'oes-nautilus_token';

type AuthContextType = {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    login: () => null,
    logout: () => null,
});

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (token: string) => {
        window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
