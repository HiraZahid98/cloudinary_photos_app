'use client'
import React from 'react'
import { CldImage } from 'next-cloudinary'
import { Heart } from '@/components/icons/heart'
import {SetAsFavoriteAction} from './actions'
import {useTransition, useState } from 'react'
import { SearchResult } from './page'
import { FullHeart } from '@/components/icons/full_heart'

export function CloudinaryImage (
  props:
  {
    imageData: SearchResult; 
    onUnheart?:(unheartedResource:SearchResult)=>void;
  } & Omit<CldImageProps, "src">
  ) 
  {
  const [transition, startTransition] = useTransition();
  const {imageData, onUnheart } = props;
  const [isFavorited,setIsFavorited] = useState(imageData.tags.includes('favorite'))
  
  return (
  <div className='relative'>

  <CldImage {...props} src={imageData.public_id}/>
  {isFavorited? (
   <FullHeart 
   onClick={()=>{
    onUnheart?.(imageData)
    setIsFavorited(false)
     startTransition(() => {
       SetAsFavoriteAction(imageData.public_id,false)
     })
   }}
   className='absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer'/>
  ):(  <Heart 
  onClick={()=>{
    setIsFavorited(true)
    startTransition(() => {
      SetAsFavoriteAction(imageData.public_id, true)
    })
  }}
  className='absolute top-2 right-2 hover:text-red-700 cursor-pointer'/>
)
}
 
  </div>
  )
}

