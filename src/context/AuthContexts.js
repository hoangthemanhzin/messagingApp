import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
//import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../firebase';
//=====================Write Code Here===========================
const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
//export default useAuth;
let AC = {
    name : null,
    email : null,
    Uid : null
};
export const AuthProvider = ( {children} ) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useHistory();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log('load');
            setUser(user);
            setLoading(false);
            if(user){
                history.push('/chats');
            }else{
                history.push('/');
            }
            console.log(user);
        })
    },[user, history]);
    const value = { user };
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export default AC;
