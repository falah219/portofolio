import logo from "../assets/img/Group 12.png"
import logo2 from "../assets/img/Group 13.svg";
import github from "../assets/img/🦆 icon _github_.png";
import instagram from "../assets/img/🦆 emoji _instagram_.svg";
import linkedin from "../assets/img/🦆 emoji _linkedin_.svg";
import whatsapp  from "../assets/img/🦆 icon _whatsapp logo_.png";

export const Profile = () => {
  return (
    <main>
      <div className="bg-hitam flex flex-wrap-reverse">
          <div className="mx-5 md:ml-36 md:my-20 max-w-2xl">
            <div className="flex">
              <h3 className="text-ijoh text-lg md:text-xl text-left">Hi, i'm Falah Yudhstira Hanan</h3>
              <img className="w-12 -mt-3 ml-3" src={logo2} alt="" />
            </div>
            <h1 className="text-coklat text-2xl md:text-4xl text-left mt-5">Junior Front End Developer</h1>
            <p className="text-ijoh text-xs mt-10 leading-8 text-justify">Fresh Graduate dari Universitas Muhammadiyah Surakarta, jurusan Sarjana Informatika dengan motivasi
              yang tinggi untuk mencari pengalaman dan tantangan yang baru. Selain itu, saya sedang mempelajari Web
              Developer, terutama di Front End dengan menggunakan teknologi React JS.</p>
            <div className="my-10 flex">
              <button className="mr-7 text-white bg-ijoh p-2 rounded">Hire Me Now</button>
              <button className="text-ijoh border border-ijoh p-2">Donwload CV</button>
            </div>
            <div className="my-10 flex">
              <img className="w-10 mr-4" src={github} alt="" />
              <img className="w-10 mr-4" src={instagram} alt="" />
              <img className="w-10 mr-4" src={linkedin} alt="" />
              <img className="w-10 mr-4" src={whatsapp} alt="" />
            </div>
          </div>
          <div className="mx-36 my-20 w-max md:max-w-sm">
            <img src={logo} alt="" />
          </div>
      </div>
    </main>
  )
}
