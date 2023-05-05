import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase.init'
import { useState } from 'react';
import Register from './components/Register';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider(); 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth,googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      console.error('Error : ', error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch( ()=>{
      setUser({});
    })
  }

  return (
    <div className="w-50 mx-auto">
      {
        user.uid ? 
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick= {handleGoogleSignIn}>Google Sign In</button>
      }
      
      {
        user.uid && <div>
          <h2>Name: {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
      <Register></Register>
    </div>
  );
}

export default App;
