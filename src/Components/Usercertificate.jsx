import React from "react";
import { useLocation } from "react-router-dom";

const Usercertificate = () => {
  const { state } = useLocation();

  return (

    <main className="border bg-white h-full    ">
      <div className="flex justify-center py-12 " >

     
    
      <section className="  flex flex-col gap-8 w-[40%]">
        <span className="flex font-semibold items-center gap-2">
          <h1 className="text-3xl">Welcome</h1>
          <span className="text-2xl">{state.name},</span>
        </span>

        <div className="flex flex-col gap-6">
          <div className="flex gap-12 justify-center">
            <span className="flex-1">
              <img
                src={state.Photo}
                alt={state.name}
                className="w-20 h-full object-fit"
              />
            </span>
            <span className="flex flex-col gap-3">
              <span className="flex items-center gap-6">
                <p className="text-teal-400 font-semibold text-2xl">
                  Certificate Number:
                </p>
                <p className="text-red-500 text-2xl font-semibold">
                  {state["Certificate Number"]}
                </p>
              </span>
              <span className="p-2 flex flex-col bg-red-500 rounded-md max-w-[22rem] text-sm">
                <span className="text-black font-bold ">Remarks:</span>
                <p className="text-black ">
                  {state.name} is an outstanding and a very creative young man
                  who is willing to work hard
                </p>
              </span>
            </span>
          </div>


          

        
          <div className="flex flex-col
          [&>span]:flex [&>span]:items-center gap-9 [&>span]:border-b-2  [&>span]:pb-2
          [&>span>span]:w-[80%]
          ">
            <span>
              <span className="text-red-900
              font-semibold">
                Name:
              </span>
              <span className="text-blue-300 font-semibold">
                {state.name}
              </span>
            </span>
            <span>
              <span className="text-red-900
              font-semibold">Role</span>

              <span className="text-blue-300 font-semibold">
                {state.Role}
              </span>
            </span>
            <span>
              <span className="text-red-900 font-semibold">
                Organization
              </span>

              <span className="text-blue-300  font-semibold">
                {state.Organization}
              </span>
            </span>
            <span>
              <span className="text-red-900
              font-semibold">
                Internship Organizer
              </span>

              <span className="text-blue-300  font-semibold">
                {state.Organizer}
              </span>
            </span>
            <span>
              <span className="text-red-900
              font-semibold">
                Internship Name
              </span>

              <span className="text-blue-300  font-semibold">
                {state["Internship Name"]}
              </span>
            </span>
            <span>
              <span className="text-red-900
              font-semibold">
                Internship date
              </span>
              <span className="text-blue-300 font-semibold">
                {state["Internship From"]} to {state["Internship To"]}
              </span>
            </span>
          </div>
          <div>
          <div className="flex justify-center gap-8"> 
  <div className="bg-red-500 p-4 rounded">
    <div className="flex justify-center">
      <span className="flex flex-col gap-3 rounded-md max-w-[5rem] text-sm items-center justify-center">
        <span className="text-white font-semibold">Download</span>
      </span>
    </div>
  </div>
  <div className=" bg-[#00cba9] p-4 rounded ml-4">
    <div className="flex justify-center">
      <span className="flex flex-col gap-3 rounded-md max-w-[5rem] text-sm items-center justify-center">
        <span className="text-white font-semibold">Print</span>
        </span>
        
           
    </div>
  </div>
  
</div>


                
          </div>    
          
        </div>
        
      </section>
      
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
  <linearGradient id="gradient" gradientTransform="rotate(90)">
  <stop offset="0%" stopColor="#FF7256" />
  <stop offset="0%" stopColor="#FF7256" />
    <stop offset="100%" stopColor="#00cba9" />
    <stop offset="0%" stopColor="#00cba9" />
    
  </linearGradient>
  <path fill="url(#gradient)" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,165.3C672,160,768,160,864,154.7C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>


    </main>
 
  );
};  

export default Usercertificate;



