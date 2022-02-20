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
     <h1>Connect API Laravel</h1>
     {
       profile.map((profile, i)=>{
         return(
           <h2>
             {profile.name}
             {profile.nickname}
             {profile.email}
           </h2>
         );
       })
     }
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
