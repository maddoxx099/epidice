import React from "react";

const Home = () => {
  return (
    <div>
      <main className="bg-white relative overflow-hidden h-screen">
        <header className=" flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              Watch.ME
            </div> */}
            {/* <div className="flex items-center">
              <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Watch
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Product
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Contact
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Carrer
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              </button>
            </div> */}
          </div>
        </header>
        <div className="bg-white flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="font-bebas-neue py-5 uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-black text-gray-800">
                Lorem
                <span className="text-5xl sm:text-7xl">Ipsum</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at justo cursus, semper dolor non, aliquam metus. Nunc
                consectetur lorem quis dapibus scelerisque. Suspendisse est
                nisl, vehicula ut facilisis sed, mollis eu odio. Maecenas
                blandit rutrum nunc gravida posuere. Aenean condimentum dui eget
                ex fringilla, fringilla mattis orci accumsan. Duis nunc lorem,
                ultrices ut purus vel, auctor vestibulum magna. Duis aliquet leo
                sit amet nulla accumsan aliquet. Phasellus eu lacinia lorem.
                Suspendisse rutrum venenatis erat ac volutpat.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-400 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="https://raw.githubusercontent.com/maddoxx099/epidice/master/public/iphone.png"
                className="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
