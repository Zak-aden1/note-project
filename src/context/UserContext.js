import React, {useState, useEffect, createContext} from 'react'
import firebase from '../firebase'

export const UseContext = createContext({});

const UserContext = (props) => {
    const [user, setUser] = useState('please Sign in');

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const signIn = () => {
        firebase.auth().signInWithRedirect(googleProvider);
    };
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null);
        });
    };

    const getUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    };

    useEffect(() => {
        getUser();
    }, []);
    return (
        <UseContext.Provider value={{ user, signIn, signOut }}>
            {props.children}
        </UseContext.Provider>
    )
}

export default UserContext
