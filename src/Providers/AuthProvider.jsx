import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Config/firebase.config";
import  useAxiosOpen  from "../Hooks/useAxios"


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const axiosOpen = useAxiosOpen();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, pass) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const login = (email, pass) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = {email: currentUser.email};
                axiosOpen.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            } else {
                // todo: remove token
                localStorage.removeItem('access-token')
            }
            setIsLoading(false);

            return () => unsubscribe()
        })
    }, [axiosOpen])

    const authInfo = {
        user,
        isLoading,
        createUser,
        login,
        logOut,
        googleLogin,
        githubLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;