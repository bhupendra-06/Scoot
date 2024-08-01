import React from "react";

const AboutScoot = () => {
  return (
    <>
      <div
        id="about"
        className="sm:pt-5 md:pt-0 flex items-center justify-center flex-col-reverse md:flex-row lg:gap-10 xl:gap-20 overflow-hidden"
      >
        {/* TEST SIDE */}
        <div className="gsapUp max-w-7xl">
          <div className="pb-8 sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full lg:pb-28 xl:pb-24">
            <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 md:w-[400px] lg:w-[600px] xl:w-[750px] bg-slate-00 sm: lg:text-left">
                <h2 className="my-6 text-2xl sm:text-3xl md:text-4xl tracking-tight font-extrabold text-yellow">
                  About Us
                </h2>
                <p className="text-justify text-dim-grey">
                  Welcome to Scoot, where your mobility is our priority. We
                  specialize in providing top-quality scooter rentals that fit
                  your lifestyle and budget. Our fleet features a range of
                  scooters to suit your needs, whether you're a local resident
                  or a visitor. Our team is committed to delivering outstanding
                  service and making sure you have a smooth ride every time.
                  With straightforward pricing and easy booking, we make getting
                  around simpler and more enjoyable. Trust Scoot for all your
                  scooter rental needs and explore the world with ease!
                </p>
            </main>
          </div>
        </div>
        <div className=" gsapL">
          <img
            className="h-60 sm:h-auto w-full md:w-[400px] md:h-[300px] object-cover md:rounded-lg"
            // src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
            src="https://images.hindustantimes.com/auto/img/2023/08/15/600x338/Gen2_Ola_S1_Pro_new_1692084911315_1692084913975.jpg"
            alt="our company"
          />
        </div>
      </div>
    </>
  );
};

export default AboutScoot;
