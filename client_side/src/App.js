
import './App.css';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import Users from './Components/Users';
import Groups from './Components/Groups';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="app" element= {<MainContainer/>}>
          <Route path="welcome" element= {<Welcome/>}></Route>
          <Route path="chat" element= {<ChatArea/>}></Route>
          <Route path="users" element= {<Users/>}></Route>
          <Route path="groups" element= {<Groups/>}></Route>
          <Route path="create-groups" element= {<CreateGroups/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
