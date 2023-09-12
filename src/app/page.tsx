"use client"
import { CldUploadButton, CldImage  } from 'next-cloudinary';
import {useState} from 'react';
export type uploadResult = {
  info:{
    public_id:string,
  };
  event:"success"
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
   <div>
   <CldUploadButton 
    uploadPreset="mlaemdbd"
    onUpload={(result:uploadResult)=>{
      setImageId(result.info.public_id)
      console.log(result.info.public_id)
    }}
   />
   {imageId &&
   <CldImage
  width="400"
  height="300"
  src={imageId}
  // tint="70:blue:green:purple"
  sizes="100vw"
  alt="Description of my image"
/>}
</div>
  )
}
