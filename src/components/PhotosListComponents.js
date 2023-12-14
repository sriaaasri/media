import {useDeletePhotoMutation} from "../store"
// import Button from "./Button";
import { GoTrashcan } from "react-icons/go";


function PhotosListComponents({photo}){

    const [deletePhoto ] = useDeletePhotoMutation();

    const handleDelete =(photo)=>{
        deletePhoto(photo);
    }
    return (
        <div>
            <div className="relative m-2 cursor-pointer" onClick={()=>handleDelete(photo)}>
            <img className="h-20 w-20" src={photo.url} alt="random image which is generated"/>
            
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrashcan className="text-3xl"/>
            </div>
            </div>
            {/* <Button onClick={()=>handleDelete(photo)} loading={result.isLoading} danger>delete</Button>
             */}
            </div>
            
    )
}

export default PhotosListComponents;
