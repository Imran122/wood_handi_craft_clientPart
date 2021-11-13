import { useState, useEffect } from "react";
import initializeFirebase from "../components/Authentication/Firebase/firebase.initialize";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
//initalize firebase app
initializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    //declare a state to checking admin or not for dashboard
    const [admin, setAdmin] = useState(false);
    //google login system
    const googleProvider = new GoogleAuthProvider();
    //google signing method
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                //saveUser(user.email, user.displayName, 'PUT')
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/';
                history.replace(destination)

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }





    //register with email password

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save User to mongo Db
                saveUser(email, name, 'POST')
                //update profile data to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                })

                history.replace('/')

            })
            .catch((error) => {

                setAuthError(error.message)


            })
            .finally(() => setIsLoading(false))
    }



    //signIn function for user signin
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
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

    //using useEffect to check and call api for checking user is admin or not
    useEffect(() => {
        fetch(`https://nameless-beyond-44160.herokuapp.com/users/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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

    //save user to mongo DB
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://nameless-beyond-44160.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        saveUser,
        admin
    }
}
export default useFirebase;