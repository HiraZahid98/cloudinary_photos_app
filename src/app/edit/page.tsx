import { CldImage } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import {useState} from 'react'
export default async function EditPage({SearchParams:{publicId}}:{
    SearchParams:{
        publicId:string
    }
}){
    console.log(publicId)
    const [transformation, setTransformation] = useState<undefined  | "generative-fill" | "blur" | "grayscale" |"pixelate" | "removeBackground">()
    return(
        <>
            <section>
                <div className="flex flex-col gap-8">
                    {/* top bar  */}
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-bold">Edit {publicId}</h1>
                    </div>   
                    <div className="flex gap-4">
                        <Button variant="ghost" onClick={()=>setTransformation(undefined)}>Clear All</Button>
                        <Button onClick={()=>setTransformation('generative-fill')}>Apply Generative Fill</Button>
                        <Button onClick={()=>setTransformation('blur')}>Apply Blur</Button>
                        <Button onClick={()=>setTransformation('grayscale')}>Convert to Gray</Button>
                        <Button onClick={()=>setTransformation('pixelate')}>Pixelate</Button>
                        <Button onClick={()=>setTransformation('removeBackground')}>Remove Background</Button>

                    </div>
                   <div className="grid grid-cols-2 gap-12">
                    <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     />  
                     {transformation === 'generative-fill' &&  <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     crop="pad"
                     fillBackground
                     /> 
                     }  

                    {transformation === 'blur' &&  <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     blur="800"
                     /> 
                     }  


{transformation === 'grayscale' &&  <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     grayscale
                     /> 
                    }

{transformation === 'pixelate' &&  <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     pixelate
                     /> 
                }

{transformation === 'pixelate' &&  <CldImage
                     src={publicId}
                     width={300}
                     height={200}
                     alt="some image"
                     removeBackground
                     /> 
            }
                     </div>             
                    </div>
            </section>
        </>
    )
}