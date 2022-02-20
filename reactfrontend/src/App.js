import './App.css';
import { useStare, useEffect, useState } from "react";
import axios from "axios";
// import Profile from './pages/Profie'
// import EditProfie from './pages/Profie'

function App() {
  const [profile, setProfile] = useState([]);
  useEffect(()=>{
    async function getALLProfile(){
      try {
        const profile = await axios.get("http://127.0.0.1:8000/api/profile")
        console.log(profile.data)
        setProfile(profile.data)
      } catch (error) {
        console.log(error)
      }
    }
    getALLProfile();
  }, [])

  return (
    <div className="App">
     <h1 className='header-web'>Welcome To My Profile</h1>
     <div className='body-info'>
      <div className='body'>
        <img src='./assets/me.jpg' className='img-me'/>
      </div>
      <div className='body'>
        <div className='text-info'>
          {profile.map((profile,i)=>{
            return(
              <h2>Name:<br/>{profile.name}</h2>
            );
          })}
        </div>
        <div className='text-info'>
          {profile.map((profile,i)=>{
            return(
              <h2>Nickname:<br/>
              {profile.nickname}</h2>
            );
          })}
        </div>
        <div className='text-info'>
          {profile.map((profile,i)=>{
            return(
              <h2>Email:<br/>
              {profile.email}</h2>
            );
          })}
        </div>
        <div className='text-info text-about'>
          {profile.map((profile,i)=>{
            return(
              <h2>About Me:<br/>
                {profile.about}</h2>
            );
          })}
        </div>
      </div>
     </div>
     
     {/* {
       profile.map((profile, i)=>{
         return(
           <h2>
             {profile.name}
             {profile.nickname}
             {profile.email}
           </h2>
         );
       })
     } */}
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Profile}/>
//       </Switch>
//     </Router>
//   );
// }

export default App;
