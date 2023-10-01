import {FolderPlus} from "./icons/folder-plus"
import { Menu } from "./icons/menu"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  export function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
            <DropdownMenuItem>
                <FolderPlus className="mr-2 h-4 w-4" />
                <span>Add to Album</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  