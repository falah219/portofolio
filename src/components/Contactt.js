import panah from "../assets/img/panah.svg";
import pesan from "../assets/img/pesan.svg";
import phone from "../assets/img/phone.svg";
import linkedin2 from "../assets/img/linkedin2.svg";

export const Contactt = () => {
  return (
    <section id="contact" className="bg-hitam py-10 pb-16">
        <h1 className="text-coklat text-4xl my-5">Lets Make Your Success Project</h1>
        <p className="text-coklat text-sm font-serif">Click on one below for discussion</p>
        <div className="my-15 grid grid-cols-1 md:grid-cols-3 justify-items-center">
          <div className="flex flex-col my-10">
            <div className="my-5">
              <center>
                <img src={panah} alt="" />
              </center>
            </div>
            <div className="my-5">
              <center>
                <a href="mailto:falahyudhistira219@gmail.com" target="blank"><img src={pesan} alt="" /></a>            
              </center>
            </div>
            <p className="text-coklat">falahyudhistira219@gmail.com</p>
          </div>
          <div className="flex flex-col my-10">
            <div className="my-5">
              <center>
                <img src={panah} alt="" />
              </center>
            </div>
            <div className="my-5">
              <center>
                <a href="https://api.whatsapp.com/send/?phone=%2B6281326043795&text&type=phone_number&app_absent=0" target="blank">
                  <img src={phone} alt="" />
                </a>
              </center>
            </div>
            <p className="text-coklat">081326043795</p>
          </div>
          <div className="flex flex-col my-10">
            <div className="my-5">
              <center>
                <img src={panah} alt="" />
              </center>
            </div>
            <div className="my-5">
              <center>
                <a href="https://linkedin.com/in/falahyudhistira" target="blank">
                  <img src={linkedin2} alt=""/>
                </a>
              </center>
            </div>
            <p className="text-coklat">falahyudhistira</p>
          </div>
        </div>
      </section>
  )
}
