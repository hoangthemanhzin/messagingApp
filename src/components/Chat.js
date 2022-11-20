import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import  { useAuth }  from '../context/AuthContexts';
import axios from 'axios';
const Chats = ()=>{
    const history = useHistory();
    const { user } = useAuth();
    const handleLogout = async () =>{
        await auth.signOut();
        history.push("/");
    }
    const getFile = async(url) =>{
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type : 'image/jpeg'})
    }
    /*const [name, setName] = useState(null);
    let hehe;
    useEffect(auth.onAuthStateChanged((name) => {hehe = name}),[hehe]);
    console.log(hehe);
    */
   const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(!user){
            history.push("/");
            return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id" : "c12b0b1b-8a1f-4e45-be0e-ac7728a609bf",
                "user-name" : user.email,
                "user-secret" : user.uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);
            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);
                    axios.post('https://api.chatengine.io/users',
                        formdata,
                        { headers: { "private-key": "9d659855-bc84-488b-b771-20cdbb68aabe"}}
                    )
                    .then(() => { setLoading(false); })

                })
        })
    }, [user, history])
    if(!user || loading){
        return 'Loading...';
        //history.push("/");
    }
    return(
        <>
            <h1>HELLO❤😂😂💖</h1>
            <h2>You have successfully logged in:</h2>
            <iframe style={{height : 96, width : 96}} src={user.photoURL}></iframe>
            <h4>Name : {user.displayName}</h4>
            <h4>Email : {user.email}</h4>
            <br></br>
            <br></br>
            <button onClick={handleLogout}>Logout</button>
            <ChatEngine
                projectID="c12b0b1b-8a1f-4e45-be0e-ac7728a609bf"
 			    userName={user.email}
 			    userSecret={user.uid}
            />
        </>
    )
};
export default Chats;