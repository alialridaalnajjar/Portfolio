import { IoVolumeMediumSharp } from "react-icons/io5";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className=" bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md">
      <div>Ali Najjar</div>
      <div className="flex items-center gap-2 ">
        <div>
          <IoVolumeMediumSharp size={25} />
        </div>
        <div>
          <Menu  size={25}/>
        </div>
      </div>
    </div>
  );
}
