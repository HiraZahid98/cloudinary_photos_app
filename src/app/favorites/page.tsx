import { type } from 'os';
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '../../components/cloudinary_image';
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import FavoritesList from './favorites-list';


export default async function FavoritesPage(){

    const result = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(30)
    .execute()) as {resources: SearchResult[]};

    console.log(result,"results")
    return(
        <section >
            <ForceRefresh/>
            <div className='flex flex-col gap-8'>

                {/* top bar  */}
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>
               <FavoritesList
               initialResources={ result.resources}
               />     

            </div>
        </section>
    )
}