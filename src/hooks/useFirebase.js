import { useState, useEffect } from "react";
import initializeFirebase from "../components/Authentication/Firebase/firebase.initialize";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
//initalize firebase app
initializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message)
                console.log(error.message);

            })
            .finally(() => setIsLoading(false))
    }



    //signIn function for user signin
    const loginUser = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }



    //if user chnage state then it will save auth data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    //signout function code
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError
    }
}
export default useFirebase;