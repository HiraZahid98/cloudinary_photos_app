'use server'

import cloudinary from 'cloudinary'
export async function SetAsFavoriteAction(publicId:string, isFavorite:boolean){
  if(isFavorite){
    console.log("removing favorite from:", publicId)
    await cloudinary.v2.uploader.add_tag('favorite',[publicId])
}
else{
      await cloudinary.v2.uploader.remove_tag('favorite',[publicId])
  }
}