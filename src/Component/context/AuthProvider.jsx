import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // Google login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    const logOut = () => {
        return signOut(auth);
    }

    const logIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        logOut,
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;