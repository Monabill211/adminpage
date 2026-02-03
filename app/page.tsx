import Image from "next/image";
import Admincnrol from "./Admincntrol";
import Navbar from "./navbar"
import Contact from "./contact"
export default function Home() {
  return (
    <div dir='rtl' className="flex">
    <Admincnrol />
    <div className="flex flex-col w-full">

   
    <Navbar />

     <Contact /> 
    </div>
    </div>
  );
}
