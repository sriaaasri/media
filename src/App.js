// import { useSelector} from "react-redux";
import UsersList from "./components/UsersList";

function App() {
  // const users = useSelector((state)=>state.users);
  // console.log(JSON.stringify(users));
  return (
    <div  className="container w-85%">
      <UsersList/>
    </div>
  );
}

export default App;
