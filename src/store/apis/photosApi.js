import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {faker} from "@faker-js/faker";


const photosApi = createApi({
    reducerPath:"photos",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3005"
    }),
    endpoints(builder){
        return {
            fetchPhotos:builder.query({
                providesTags:(result , error , album)=>{
                        const tags=result.map((photo)=>{
                            return {type:"AlbumPhotos" , id:photo.id};
                        })
                        tags.push({type:"Photo", id:album.id});
                        return tags;
                },
                query:(album)=>{
                    return{
                        url:"/photos",
                        params:{
                            albumId:album.id,

                        },
                        method:"GET"
                    };
                }
            }),
            addPhoto:builder.mutation({
                invalidatesTags:(result, error, album)=>{
                    return [{type:"Photo",id:album.id}]
                },
                query:(album)=>{
                    return {
                        url:"/photos",
                        method:"POST",
                        body:{
                            albumId:album.id,
                            url:faker.image.url(150, 150 , true),
                            userId:album.userId
                           
                        }
                    }
                }
            }),
            deletePhoto:builder.mutation({
                invalidatesTags:(result, error, photo)=>{
                        return [{type:"AlbumPhotos" , id:photo.id}];
                },
                query:(photo)=>{
                    
                    return {
                        url:`/photos/${photo.id}`,
                        method:"DELETE",

                    }
                }
            })
        }
    }

});

export const {useFetchPhotosQuery , useAddPhotoMutation , useDeletePhotoMutation} = photosApi
export {photosApi};