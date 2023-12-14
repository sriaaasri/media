
import { useState } from "react";
import { GoChevronLeft , GoChevronDown } from "react-icons/go";
function ExpandablePanel({header , children}){
     const [isOpen , setIsOpen] = useState(false);

     const handleClick=()=>{
        setIsOpen(!isOpen)
     }
    return (
        <div className="mb-2 border rounded">
        <div className="flex p-2 items-center justify-between ">
            <div className="flex flex-row items-center justify-between">
         {header}
         </div>
         <div  onClick={handleClick} className="cursor-pointer">
         {isOpen ? <GoChevronDown/> : <GoChevronLeft/>}
         </div>
         </div>
         { isOpen && <div className=" p-2 border-t">{children}</div>}
         </div>

    );
}

export default ExpandablePanel;
