import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersSlice } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";


const store = configureStore({
    reducer:{
        users:usersSlice.reducer,
        albums:albumsApi.reducer,
        photos:photosApi.reducer

    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    },
    // middleware:(getDefaultMiddleware)=>{
    //     return getDefaultMiddleware()
    //     .concat(photosApi.middleware);
    // }
});

setupListeners(store.dispatch);


export {store};
export * from "./thunks/fetchUsers";
export * from "./thunks/AddUsers";
export * from "./thunks/DeleteUser";
export {useFetchAlbumsQuery , useAddAlbumMutation , useDeleteAlbumMutation} from "./apis/albumsApi";
export {useFetchPhotosQuery , useAddPhotoMutation,useDeletePhotoMutation} from "./apis/photosApi";


 

