import {FolderPlus } from "lucide-react"
import { Menu } from "./icons/menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { AddToAlbumDialog } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
  export function ImageMenu({image}:{image: SearchResult}) {
    const [open, setOpen] = useState(false)
    return (
        <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
            <DropdownMenuItem asChild>
                <AddToAlbumDialog image={image} onClose={()=> setOpen(false)}/>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  