// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main
//       className="flex flex-col justify-center items-center h-screen p-24;
// "
//     >
//       <div className="uppercase text-[white] tracking-[1.5rem] font-medium text-[2rem] px-0 py-8">
//         <h1>deep blue cinematics</h1>
//         <div
//           className="flex items-center justify-center
//                 bg-transparent text-xs text-[white] uppercase tracking-[0.5rem] transition-[0.25s] duration-[background-color] mx-4 my-0 px-8 py-6 border-[solid] border-[1px] hover:bg-[white] hover:text-[black] hover:transition-[0.25s] hover:duration-[background-color] hover:cursor-pointer"
//         >
//           <button>our work</button>
//           <button>our story</button>
//         </div>
//       </div>
//       <video
//         src={require("../../public/bgvideo.mp4")}
//         autoPlay
//         muted
//         loop
//         className=" absolute z-[-1] h-full w-full object-cover"
//       />
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex flex-col justify-center items-center h-screen p-24">
//       <div className="uppercase text-white tracking-[1.5rem] font-medium text-2xl px-0 py-8">
//         <h1>Planning Umrah</h1>
//         <div className="flex items-center justify-center bg-transparent text-xs text-white uppercase tracking-[0.5rem] transition-[0.25s] duration-[background-color] mx-4 my-0 px-8 py-6 border-solid border-[1px] hover:bg-white hover:text-black hover:cursor-pointer">
//           <button className="mx-2">View Details</button>
//           <button className="mx-2">Contact Us</button>
//         </div>
//       </div>
//       <video
//         src={"/bgvideo.mp4"}
//         autoPlay
//         muted
//         loop
//         className="absolute z-[-1] h-full w-full object-cover"
//       />
//     </main>
//   );
// }

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen p-24">
      <div className="uppercase text-white tracking-[1.5rem] font-medium text-2xl px-0 py-8">
        <h1>Plan Your Umrah Journey With Us!</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="bg-transparent text-xs text-white uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6 border border-solid border-white hover:bg-white hover:text-black hover:cursor-pointer">
            View Details
          </button>
          <button className="bg-transparent text-xs text-white uppercase tracking-[0.5rem] transition duration-[0.25s] mx-4 my-0 px-8 py-6 border border-solid border-white hover:bg-white hover:text-black hover:cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
      <video
        src={"/bgvideo.mp4"}
        autoPlay
        muted
        loop
        className="absolute z-[-1] h-full w-full object-cover"
      />
    </main>
  );
}
