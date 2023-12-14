import { useFetchAlbumsQuery , useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";

 import Button from "./Button";

import AlbumsListComponents from "./AlbumsListComponents";



function AlbumsList({user}){
const {data , error , isLoading } = useFetchAlbumsQuery(user);
// useFetchAlbumsQuery(user);

const [addAlbum , results]= useAddAlbumMutation();



let content;



if(isLoading){
    content=<Skeleton className ="h-10 w-full" times={3}/>
}
else if(error){
    content =<div>Error loading albums</div>
}
else{
    content = data.map((album)=>{
        return <AlbumsListComponents album={album} key ={album.id}/>
        
    })
}

const handleAdd =()=>{
    addAlbum(user);

}


return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h1 className="text-lg font-bold">Albums for {user.name}</h1>
            <Button primary  loading = {results.isLoading} onClick={handleAdd} >+Add Album</Button>
        </div>
        
        {content}
        
    </div>
)

}

export default AlbumsList;
