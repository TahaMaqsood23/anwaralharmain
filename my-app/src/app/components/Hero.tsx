import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen p-24">
      <div className="uppercase text-white tracking-[1.5rem] font-medium text-2xl px-0 py-8">
        <h1 className=" text-shadow-sm shadow-black opacity-90 text-center">
          Plan Your Umrah Journey With Us!
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="bg-white opacity-60 text-sm font-bold text-black uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6  border-2 border-white hover:bg-white hover:opacity-90">
            View Details
          </button>
          <button className="bg-white opacity-60 text-sm font-bold text-black uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6  border-2 border-white hover:bg-white hover:opacity-90">
            {/* bg-white opacity-70 text-sm font-bold text-black uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6  border-2 border-black hover:bg-white hover:text-black */}
            {/* bg-transparent text-sm font-bold text-white uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6  border-2 border-white hover:bg-white hover:text-black hover:cursor-pointer text-shadow-xsm shadow-black opacity-90 */}
            Contact Us
          </button>
        </div>
      </div>
      <video
        src={"/bgvideo.mp4"}
        autoPlay
        muted
        loop
        className="absolute z-[-1] h-full w-full object-cover justify-center"
      />
    </main>
  );
}



