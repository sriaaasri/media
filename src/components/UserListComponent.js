import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteRecord } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import {useThunk} from "../hooks/useThunk"

import AlbumsList from "./AlbumsList";

function UsersListComponent({user}){
    // const [isOpen , setIsOpen] = useState(false);
    const [removeUser , isLoading , error] = useThunk(deleteRecord);
  

    const handleDelete=(id)=>{
        removeUser(id);
    }
    

    const header =<>
           <Button danger  onClick={()=>{handleDelete(user)} } className="mr-3" loading={isLoading}><GoTrashcan/></Button>
            {error && <div>Error deleting user...</div>}
            {user.name}
            </>;

    return (
       <ExpandablePanel header={header}>
        <AlbumsList user={user}/>
       </ExpandablePanel>
         
    )

}
export default UsersListComponent;
