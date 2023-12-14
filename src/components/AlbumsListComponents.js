
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";
import { useDeleteAlbumMutation } from "../store";
import {GoTrashcan} from "react-icons/go"

function AlbumsListComponents({album}){
    const [deleteAlbum , result] = useDeleteAlbumMutation();
    const handleDeleteAlbum =(album)=>{

        deleteAlbum(album);
    
    }

    const header = <div className="flex flex-wrap justify-between">
            <Button danger className="mr-2" onClick={()=>handleDeleteAlbum(album)} loading ={result.isLoading} ><GoTrashcan/></Button>
            {album.title} 
        </div>
    return (
        <>
        <ExpandablePanel key={album.id} header={header} >
            <PhotosList  key = {album.id} album = {album}/>
        </ExpandablePanel>
        </>

    )
}

export default AlbumsListComponents;
