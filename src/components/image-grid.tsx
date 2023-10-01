'use client'
import { SearchResult } from "@/app/gallery/page";
import {ReactNode} from 'react'


const MAX_COLUMNS = 4;
export function ImageGrid({
  images,
  getImage,
}:{
  images:SearchResult[];
  getImage: (imageData:SearchResult) => ReactNode;
}){

    function getCoulumns(colIndex: number) {
      return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex
      );
    }

     return (
        <div className="grid grid-cols-4 gap-4">
        {[getCoulumns(0), getCoulumns(1), getCoulumns(2), getCoulumns(3)].map(
          (column, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {column.map(getImage)}
            </div>
          )
        )}
      </div>
     )
}