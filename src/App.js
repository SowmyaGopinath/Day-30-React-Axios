import UserData from './Components/UserData'
import UserState from './Context/UserState';
import "./css/Responsive.css";

function App() {
  return (
    <>
      <UserState>
        <UserData />
      </UserState>
    </>
  );
}

export default App;