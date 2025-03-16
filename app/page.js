import Image from "next/image";
import Grid from "./components/Grid";
// import home1 from "./public/IMG_9019.jpg";

import home2 from "../public/maninstall.webp";

import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-2">
        Get A New Boiler Installed In
        <span className=" text-red-600 "> Just 48 Hours !</span>
      </h1>

      <Grid>
        {/* <div className="mt">
          <h1 className="text-center text-6xl font-bold mb-6">
            Modern luxe <span className="text-yellow-400">Homes</span>
          </h1>
          <p className="pl-5 text-xl font-semibold tracking-widest animate-pulse">
            Offering you the opportunity to live comfortably in a luxurious yet
            affordable homes. Discover the perfect blend of elegance and
            affordability with our luxurious homes that dont break the bank.
            Experience high-end finishes, spacious layouts, and modern
            amenities, all designed to provide you with a comfortable lifestyle.
            Enjoy the sophistication of upscale living while staying within your
            budget. Your dream home awaits!
          </p>
      
        </div> */}
        <Carousel />
        <Contact />
        {/* <div className=" relative aspect-square ml-4">
          <Image
            src={home2}
            fill
            className="object-contain"
            alt="Logo Of Homeland Ghana"
          />
        </div> */}
      </Grid>
    </div>
  );
}
