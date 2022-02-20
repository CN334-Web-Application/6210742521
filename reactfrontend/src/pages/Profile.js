import { Component } from "react";
// import Profie from './pages/Profie'
// import EditProfie from './pages/Profie'
// import React {Component} from "react";

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="Row">
                    <div className="card-header">
                        <h4>
                            My Profile
                            <Link to={'edit-profile'} className="edit-profile-front-end">Edit my Profile</Link>
                        </h4>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        );
    }
}

// function App() {
//   const [profile, setProfile] = useState([]);
//   useEffect(()=>{
//     async function getALLProfile(){
//       try {
//         const profile = await axios.get("http://127.0.0.1:8000/api/profile")
//         console.log(profile.data)
//         setProfile(profile.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getALLProfile();
//   }, [])

//   return (
//     <div className="App">
//      <h1>Connect API Laravel</h1>
//      {
//        profile.map((profile, i)=>{
//          return(
//            <h2>
//              {profile.name}
//              {profile.nickname}
//              {profile.email}
//            </h2>
//          );
//        })
//      }
//     </div>
//   );
// }