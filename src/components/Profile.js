import logo from "../assets/img/Group 12.png"
import logo2 from "../assets/img/Group 13.svg";
import github from "../assets/img/🦆 icon _github_.png";
import instagram from "../assets/img/🦆 emoji _instagram_.svg";
import linkedin from "../assets/img/🦆 emoji _linkedin_.svg";
import whatsapp  from "../assets/img/🦆 icon _whatsapp logo_.png";

export const Profile = () => {
  return (
    <section id="profile" className="bg-hitam flex flex-wrap-reverse pt-10">
          <div className="mx-5 md:ml-10 lg:ml-32 md:my-20 lg:max-w-2xl">
            <div className="flex">
              <h3 className="text-ijoh text-lg md:text-xl text-left">Hi, i'm Falah Yudhstira Hanan</h3>
              <img className="w-12 -mt-3 ml-1" src={logo2} alt="" />
            </div>
            <h1 className="text-coklat text-2xl md:text-4xl text-left mt-5">Junior Front End Developer</h1>
            <p className="text-ijoh text-xs mt-10 leading-8 text-justify">Fresh Graduate dari Universitas Muhammadiyah Surakarta, jurusan Sarjana Informatika dengan motivasi
              yang tinggi untuk mencari pengalaman dan tantangan yang baru. Selain itu, saya sedang mempelajari Web
              Developer, terutama di Front End dengan menggunakan teknologi React JS.</p>
            <div className="my-10 flex">
              <a href="mailto:falahyudhistira219@gmail.com" target="blank"><button className="mr-7 text-white bg-ijoh p-2 rounded">Hire Me Now</button></a>
              <a href="https://drive.google.com/uc?export=download&id=1ANgCASKhY47PEoyJ9pl0BPG3YHR2IDVl" target="blank"><button className="text-ijoh border border-ijoh p-2">Donwload CV</button></a>
            </div>
            <div className="my-10 flex">
              <a href="https://github.com/falah219" target="blank"><img className="w-10 mr-4" src={github} alt="" /></a>
              <a href="https://https://www.instagram.com/falahyudhistira" target="blank"><img className="w-10 mr-4" src={instagram} alt="" /></a>
              <a href="https://linkedin.com/in/falahyudhistira" target="blank"><img className="w-10 mr-4" src={linkedin} alt="" /></a>
              <a href="https://api.whatsapp.com/send/?phone=%2B6281326043795&text&type=phone_number&app_absent=0" target="blank"><img className="w-10 mr-4" src={whatsapp} alt="" /></a>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center my-20 w-60 md:w-full md:max-w-sm">
            <img src={logo} alt="" />
          </div>
      </section>
  )
}
