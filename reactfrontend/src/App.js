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
      <div className='body my-img'>
        <img src='./assets/me.jpg' className='img-me'/>
      </div>
      <div className='body'>
        <div className='text-info'>
          {profile.map((profile)=>{
            return(
              <div>
                <h2><text className='topic-text-info'>Name:</text><br/>{profile.name}</h2>
                <h2><text className='topic-text-info'>Nickname:</text><br/>{profile.nickname}</h2>
                <h2><text className='topic-text-info'>Email:</text><br/>{profile.email}</h2>
                <h2><text className='topic-text-info about-me-texdt-info'>About Me:</text><br/>{profile.about}</h2>
              </div>
            );
          })}
        </div>
      </div>
     </div>
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
