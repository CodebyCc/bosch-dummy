import Image from "next/image";
import Link from "next/link";
import home1 from "../../public/10years.png";
import home2 from "../../public/royal-crest.png";
import home3 from "../../public/trustcare.png";

export default function Footer() {
  return (
    <footer className="text-white sw-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          {/* <div className="text-xl font-bold text-red-700 ">Bosch Worcester</div> */}

          <Image
            src={home2}
            alt="Logo of Bosch"
            width={200}
            height={200}
            // className={styles.pont}
          />
          <Image
            src={home1}
            alt="Logo of Bosch"
            width={200}
            height={200}
            // className={styles.pont}
          />
          <Image
            src={home3}
            alt="Logo of trustcare"
            width={300}
            height={200}
            // className={styles.pont}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold">
            <Link href="/" className="">
              Homeowner
            </Link>
            <Link href="/about" className=" ">
              Professional
            </Link>
            <Link href="/services" className=" ">
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
