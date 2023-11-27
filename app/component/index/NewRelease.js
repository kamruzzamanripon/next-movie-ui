/* eslint-disable react/jsx-key */
import Image from 'next/image';
import ImdbLogo from "../icons/ImdbLogo";
import NextPrev from "../icons/NextPrev";

const NewRelease = () => {
    return (
        <section className="mt-9 bg-blue-400 dark:bg-black p-5 rounded-md">
  <div className="flex items-center justify-between">
    <span className="font-semibold text-gray-700 text-base dark:text-white">New Release</span>
    <div className="flex items-center space-x-2 fill-gray-500">
    <NextPrev />
    </div>
  </div>
  <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
    { [...Array(3)].map((_,index)=>(
      <div className="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600" >
      <Image 
        src="/action-adventure-preview.jpg" 
        className=" h-4/5 object-cover w-full  " 
        alt="asas"
        width={105} 
        height={105} 
        layout="responsive"
      />
      <div className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
        <span className="capitalize  font-medium truncate">Tenet</span>
        <div className="flex space-x-2 items-center text-xs">
        <ImdbLogo />
          <span>7.4</span>
        </div>
      </div>
    </div>
    ))
    }
  </div>
</section>
    );
};

export default NewRelease;