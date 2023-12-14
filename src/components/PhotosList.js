import {useFetchPhotosQuery , useAddPhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import PhotosListComponents from "./PhotosListComponents";
function PhotosList({album}){
    
    const {data, error , isFetching} = useFetchPhotosQuery(album);
    const [addPhoto , result] = useAddPhotoMutation();
   
    // console.log(data);

    let content;

    


    if(isFetching){
        content=<Skeleton className ="h-10 w-full" times={3}/>
    }
    else if(error){
        content =<div>Error loading albums</div>
    }
    else{
        content=data.map((photo)=>{
        return <PhotosListComponents key={photo.id} photo={photo} />

    }) 

    }
   

    

    const handleAddPhoto=(album)=>{
        addPhoto(album);
    }
    
    
    return (
        <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button  primary onClick={()=>handleAddPhoto(album)} loading={result.isLoading}>+Add Photo</Button>
           
        </div>
        <div className="mx-8 flex flex-wrap flex-row justify-center">
            {content}
        </div>
        </div>
    )
};

export default PhotosList;
