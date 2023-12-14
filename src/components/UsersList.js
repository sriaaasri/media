import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { fetchUsers  , addUser } from "../store";
import useThunk from "../hooks/useThunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListComponent from "./UserListComponent";



function UsersList(){
    const [doFetchUsers , isLoadingUsers , loadingUsersError] = useThunk(fetchUsers)
   const [doAddUsers , isCreatingUser , creatingUserError] = useThunk(addUser);


    const {data} = useSelector((state)=>state.users);
     

     useEffect(()=>{
         doFetchUsers();
        } , [doFetchUsers]);

     const handleAdd =()=>{
      doAddUsers("testing");
   }
     
    
   let content ;

     if(isLoadingUsers){
      content = <Skeleton times={10} className="h-10 w-full"/>
   }
   else if(loadingUsersError){
      content =  <h1>error</h1>
   }
   else{
      content =data.map((user)=>{

         return <UsersListComponent user={user} key ={user.id}></UsersListComponent>
      })
   }

     return (
        <div >
            <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
           <Button  onClick={handleAdd} primary loading={isCreatingUser}>
               Add User
               </Button>
             </div>
            <div>
            {creatingUserError && "error while adding a user.."}
            </div>

            <div>{content}</div>
        </div>
     )
   
}

export default UsersList;
