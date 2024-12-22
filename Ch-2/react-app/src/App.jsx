import "./App.css";
import UserCard from "./components/UserCard";
import wall from "./assets/wall.jpg"
import mp from './assets/mp.jpg'
import pc from './assets/pc.jpg'
const App = () => {
  return (
    <div className="container" >
      <UserCard name="Nikhil" desc="desc1" image={wall} style={{"border-radius":"10px"}}/>
      <UserCard  name="Maharana" desc="desc2" image={mp} style={{"border-radius":"10px"}}/>
      <UserCard name="Prithviraj" desc="desc3" image={pc} style={{"border-radius":"10px"}} />
    </div>
  );
};

export default App;
