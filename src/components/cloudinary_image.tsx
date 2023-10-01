'use client'
import React from 'react'
import { CldImage, CldImageProps } from 'next-cloudinary'
import { Heart } from '@/components/icons/heart'
import {SetAsFavoriteAction} from '../app/gallery/actions'
import {useTransition, useState } from 'react'
import { SearchResult } from '../app/gallery/page'
import { FullHeart } from '@/components/icons/full_heart'
import { ImageMenu } from './image-menu'

export default function CloudinaryImage (
    props:
    {
      imageData: SearchResult; 
      onUnheart?:(unheartedResource:SearchResult)=>void;
    } & Omit<CldImageProps,"src">
  ) 
  {
  const [transition, startTransition] = useTransition();
  const {imageData, onUnheart } = props;
  const [isFavorited,setIsFavorited] = useState(imageData.tags.includes('favorite'))
  
  return (
  <div className='relative'>

  <CldImage {...props} src={imageData.public_id} alt=''/>
  {isFavorited? (
   <FullHeart 
   onClick={()=>{
    onUnheart?.(imageData)
    setIsFavorited(false)
     startTransition(() => {
       SetAsFavoriteAction(imageData.public_id,false)
     })
   }}
   className='absolute top-2 left-2 hover:text-white text-red-600 cursor-pointer'/>
  ):(  <Heart 
  onClick={()=>{
    setIsFavorited(true)
    startTransition(() => {
      SetAsFavoriteAction(imageData.public_id, true)
    })
  }}
  className='absolute top-2 left-2 hover:text-red-700 cursor-pointer'/>
)
}
 <ImageMenu/>
  </div>
  )
}

