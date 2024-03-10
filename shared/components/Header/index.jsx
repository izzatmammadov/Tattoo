import styles from "./header.module.css"
import { Navbar } from '../Navbar'
import Image from "next/image"
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const getContent = () => {
    const { pathname } = router;

    switch (pathname) {
      case "/":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">Home</h1>;
      case "/about":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">About</h1>;
        case "/store":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">Store</h1>;
        case "/prices":
          return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">Prices</h1>;
          case "/contact":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">Contact</h1>;
        case "/faq":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">FAQ</h1>;
        case "/aftercare":
        return <h1 className="font-amita text-6xl text-white backdrop-blur-sm p-2">Aftercare</h1>;
    }
  };

  return (
    <header className="h-[100vh]">
        <div className={`${styles.header}`}>
          <div className="h-1/2 flex flex-col justify-center items-center" data-aos="zoom-in">
          {getContent()}
          <Image className="mt-auto animate-bounce" width={50} height={0} src={"/downfill.png"} alt="down"/>
          </div>
        </div>
        <Navbar/>
    </header>
  )
}
