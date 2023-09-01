import DropMenu from "@/components/DropMenu";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Codigos from "./page";

export default function DataRow({Codigos}){
    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-violet-800 p-2 rounded cursor-pointer">
            <div className="flex gap-2">
              <ComputerDesktopIcon className="h-6 w-6" />
              <span>{Codigos.codigo}</span>
            </div>
            <div className="flex gap-2 items-center">
             
              <DropMenu />
            </div>
        </div>
    )
}