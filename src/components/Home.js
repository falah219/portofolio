import { NavLink } from "react-router-dom";
import logo from "../assets/img/Group 12.png"
import logo2 from "../assets/img/Group 13.svg";
import github from "../assets/img/🦆 icon _github_.png";
import instagram from "../assets/img/🦆 emoji _instagram_.svg";
import linkedin from "../assets/img/🦆 emoji _linkedin_.svg";
import whatsapp  from "../assets/img/🦆 icon _whatsapp logo_.png";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import github_svg from "../assets/img/github.svg";
import react from "../assets/img/react.svg";
import ecommerce from "../assets/img/ecommerce.png";
import todoApp from "../assets/img/todo-app.png";
import cinema from "../assets/img/cinema.png";
import food from "../assets/img/food.png";
import jatis from "../assets/img/jatis.png";

export const Home = () => {
  return (
    <main>
      <section id="profile" className="bg-hitam flex flex-wrap-reverse">
          <div className="mx-5 md:ml-32 md:my-20 max-w-2xl">
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
          <div className="mx-36 my-20 w-128 md:max-w-sm">
            <img src={logo} alt="" />
          </div>
      </section>
      <section id="skill" className="bg-ijohTuwek flex flex-wrap gap-4">
        <div className="mx-5 md:mx-32 my-10 md:max-w-lg">
          <h1 className="text-coklat text-4xl my-10 text-left">My Achivement</h1>
          <div className="grid grid-cols-2 md:max-w-lg">
              <div className="text-left text-coklat mt-4 mr-10">
                <p className="text-2xl text-left">1+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="text-left text-coklat md:ml-8 mt-4">
                <span className="text-zxl">4+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
          </div>
        </div>
        <div className="mx-5 md:mx-44 my-3 md:my-10 md:max-w-lg">
          <h1 className="text-coklat text-4xl my-5 md:my-10 text-left">Skills</h1>
          <div className="grid grid-cols-3 my-10">
            <div className="mr-20">
              <img src={html} alt="" />
              <p className="text-coklat text-base mt-3">HTML</p>
            </div>
            <div className="mr-20">
              <img src={css} alt="" />
              <p className="text-coklat text-base mt-3">CSS</p>
            </div>
            <div className="mr-20">
              <img src={javascript} alt="" />
              <p className="text-coklat text-base mt-3">Javascript</p>
            </div>
            <div className="mr-20 mt-20">
              <img className="h-20" src={github_svg} alt="" />
              <p className="text-coklat text-base mt-3">Github</p>
            </div>
            <div className="mr-20 mt-20">
              <img src={react} alt="" />
              <p className="text-coklat text-base mt-3">React JS</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="bg-hitam pt-10 pb-16">
          <h1 className="text-coklat text-4xl my-10 text-center">My Experience Work</h1>
          <div className="flex mt-20">
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 md:ml-32" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="20" fill="#FF0000"/>
                <circle cx="32" cy="32" r="31" stroke="#4E9F3D" strokeWidth="2" strokeDasharray="8 8"/>
              </svg>
              <div className="ml-12 md:ml-40 line1"></div>
            </div>
            <div className="mx-10">
              <h1 className="text-coklat font-serif text-xl text-justify font-bold">Lembaga Bahasa dan Ilmu Pengetahuan Umum (LBIPU) Universitas Muhammadiyah Surakarta</h1>
              <h3 className="text-coklat font-serif text-left text-base mt-2">Information Technologi Intern</h3>
              <p className="text-coklat font-serif text-left text-xs mt-2">18 Agustus 2022 –17 September 2022</p>
              <div>
                <ul start="50" className="text-coklat text-sm text-left mt-6">
                  <li className="font-serif li-exp">Successful in creating a web design that will be used by LBIPU for its new website.</li>
                  <li className="font-serif li-exp">Succeed in web development using HTML, Bootstrap 4 UI, PHP, and MySQL</li>
                  <li className="font-serif li-exp">Successfully succeeded in the English language training program organized by LBIPU</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-5 md:ml-32">
                <circle cx="32" cy="32" r="20" fill="#FFD600"/>
                <circle cx="32" cy="32" r="31" stroke="#4E9F3D" strokeWidth="2" strokeDasharray="8 8"/>
              </svg>

              <div className="ml-12 md:ml-40 line2"></div>
            </div>
            <div className="mx-10">
              <h1 className="text-coklat font-serif text-xl text-justify font-bold">PT Informasi Teknologi Indonesia</h1>
              <h3 className="text-coklat font-serif text-left text-base mt-2">IT Developer Intern</h3>
              <p className="text-coklat font-serif text-left text-xs mt-2">05 September 2022 – 30 November 2022</p>
              <div>
                <ul start="50" className="text-coklat text-sm text-left mt-6">
                  <li className="font-serif li-exp">Successfully created a website using HTML, UI Bootstrap, and PHP using the MVC method.</li>
                  <li className="font-serif li-exp">Successfully added CRUD features to the website and used MySQL as the database.</li>
                  <li className="font-serif li-exp">Successfully added export data in Excel and PDF formats.</li>
                  <li className="font-serif li-exp">Successfully presented the results of the assignment to the instructor on duty.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="ml-5 md:ml-32">
                <circle cx="32" cy="32" r="20" fill="#00FF0A"/>
                <circle cx="32" cy="32" r="31" stroke="#4E9F3D" strokeWidth="2" strokeDasharray="8 8"/>
              </svg>

              <div className="ml-12 md:ml-40 line3"></div>
            </div>
            <div className="mx-10">
              <h1 className="text-coklat font-serif text-xl text-justify font-bold">Bangkit Academy 2022 by Google, GoTo, Traveloka</h1>
              <h3 className="text-coklat font-serif text-left text-base mt-2">Cloud Computing Learning Path</h3>
              <p className="text-coklat font-serif text-left text-xs mt-2">Februari – Juli 2022</p>
              <div>
                <ul start="50" className="text-coklat text-sm text-left mt-6">
                  <li className="font-serif li-exp">Successfully created a Web using flexbox and grid. As well as a responsive website.</li>
                  <li className="font-serif li-exp">Successfully created a Bookshelf REST API using javascript.</li>
                  <li className="font-serif li-exp">Successfully operate Google Cloud, such as servers, fees, firewalls and docker.</li>
                  <li className="font-serif li-exp max-w-4xl">Successfully completed the Whats the Food project with a team that uses machine learning,Flask Python for Rest API, Kotlin, and finally deploying REST API to Google Cloud using docker.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="ml-5 md:ml-32">
                <circle cx="32" cy="32" r="20" fill="#0085FF"/>
                <circle cx="32" cy="32" r="31" stroke="#4E9F3D" strokeWidth="2" strokeDasharray="8 8"/>
              </svg>

              <div className="ml-12 md:ml-40 line4"></div>
            </div>
            <div className="mx-10">
              <h1 className="text-coklat font-serif text-xl text-justify font-bold">Binar Academy</h1>
              <h3 className="text-coklat font-serif text-left text-base mt-2">Full Stack Developer</h3>
              <p className="text-coklat font-serif text-left text-xs mt-2">Agustus 2022 – Maret 2023</p>
              <div>
                <ul start="50" className="text-coklat text-sm text-left mt-6">
                  <li className="font-serif li-exp">Successfully developed a web game paper rock scissors using HTML, UI Bootstrap 4,and Javascript.</li>
                  <li className="font-serif li-exp">Successfully created a REST API using Express JS.</li>
                  <li className="font-serif li-exp">Successfully checking API using Postman</li>
                  <li className="font-serif li-exp">Successfully implemented database management using sequelize.</li>
                  <li className="font-serif li-exp">Successfully compiled Rest API documentation.</li>
                  <li className="font-serif li-exp">Successfully registered the game as a project that implements a single project application with ReactJS. </li>
                  <li className="font-serif li-exp">Code management using Github and collaboration with the team. </li>
                </ul>
              </div>
            </div>
          </div>
      </section>
      <section id="project" className="bg-ijohTuwek py-20">
        <h1 className="text-4xl text-left text-coklat ml-10 md:ml-32 mb-5 md:mb-15">My Latest Project</h1>
        <div className="ml-10 md:ml-32 grid grid-cols-1 md:grid-cols-3">
          <div className="max-w-xs shadow text-left mt-10">
              
                <div className="flex">
                  <img className="rounded-lg" src={ecommerce} alt="" />
                  <a href="https://github.com/falah219/mbanyumbiru" target="_blank" rel="noopener noreferrer">
                    <div className="-ml-10 mt-36 bg-hitam h-10 w-10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M2 23.6667L23.6667 2M23.6667 2V22.8M23.6667 2H2.86667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>                    
                  </a>
                </div>

              <div>
                  <NavLink href="#">
                      <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">E-commerce Penjualan Cupang</h5>
                  </NavLink>
                  <p className="mb-3 font-normal text-coklat text-xs">Web App / Multiple Pages</p>
                  
              </div>
          </div>
          <div className="max-w-xs shadow text-left mt-10">
              
                <div className="flex">
                  <img className="rounded-lg" src={todoApp} alt="" />
                  <a href="https://todo-list-halaf.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="-ml-10 mt-36 bg-hitam h-10 w-10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M2 23.6667L23.6667 2M23.6667 2V22.8M23.6667 2H2.86667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>                    
                  </a>
                </div>

              <div>
                  <NavLink href="#">
                      <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">Todo List App</h5>
                  </NavLink>
                  <p className="mb-3 font-normal text-coklat text-xs">Web App / Single Page</p>
                  
              </div>
          </div>
          <div className="max-w-xs shadow text-left mt-10">
              
                <div className="flex">
                  <img className="rounded-lg" src={cinema} alt="" />
                  <a href="https://github.com/falah219/02---CinemaAPI-Falyuha" target="_blank" rel="noopener noreferrer">
                    <div className="-ml-10 mt-36 bg-hitam h-10 w-10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M2 23.6667L23.6667 2M23.6667 2V22.8M23.6667 2H2.86667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>                    
                  </a>
                </div>

              <div>
                  <NavLink href="#">
                      <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">List Cinema with Imbd API</h5>
                  </NavLink>
                  <p className="mb-3 font-normal text-coklat text-xs">Web App / Multiple Pages</p>
                  
              </div>
          </div>
          <div className="max-w-xs shadow text-left mt-10">
              
                <div className="flex">
                  <img className="rounded-lg" src={food} alt="" />
                  <a href="https://github.com/What-s-The-Food" target="_blank" rel="noopener noreferrer">
                    <div className="-ml-10 mt-36 bg-hitam h-10 w-10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M2 23.6667L23.6667 2M23.6667 2V22.8M23.6667 2H2.86667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>                    
                  </a>
                </div>

              <div>
                  <NavLink href="#">
                      <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">What's the Food</h5>
                  </NavLink>
                  <p className="mb-3 font-normal text-coklat text-xs">Mobile App</p>
                  
              </div>
          </div>
          <div className="max-w-xs shadow text-left mt-10">
              
                <div className="flex">
                  <img className="rounded-lg" src={jatis} alt="" />
                  <a href="https://github.com/What-s-The-Food" target="_blank" rel="noopener noreferrer">
                    <div className="-ml-10 mt-36 bg-hitam h-10 w-10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M2 23.6667L23.6667 2M23.6667 2V22.8M23.6667 2H2.86667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>                    
                  </a>
                </div>

              <div>
                  <NavLink href="#">
                      <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">Pemasukan Bulanan Jatis</h5>
                  </NavLink>
                  <p className="mb-3 font-normal text-coklat text-xs">Web / Multiple Pages</p>
                  
              </div>
          </div>
          
        </div>
        

      </section>
      <section className="bg-hitam py-10 pb-16">
        <h1 className="text-coklat text-4xl my-5">Lets Make Your Success Project</h1>
        <p className="text-coklat text-sm font-serif">Click on one below for discussion</p>
        <div className="my-15 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center ml-36">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="54" viewBox="0 0 53 54" fill="none">
                <path d="M26.5002 2L26.5002 52M26.5002 52L2.88911 28.3889M26.5002 52L50.1113 28.3889" stroke="#D8E9A8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="101" height="80" viewBox="10 0 0 140 60" fill="none">
                <path d="M85.5 0H15.5C11.5218 0 7.70644 1.58035 4.8934 4.3934C2.08035 7.20644 0.5 11.0218 0.5 15V65C0.5 68.9782 2.08035 72.7936 4.8934 75.6066C7.70644 78.4196 11.5218 80 15.5 80H85.5C89.4782 80 93.2936 78.4196 96.1066 75.6066C98.9196 72.7936 100.5 68.9782 100.5 65V15C100.5 11.0218 98.9196 7.20644 96.1066 4.3934C93.2936 1.58035 89.4782 0 85.5 0ZM82.15 10L50.5 33.75L18.85 10H82.15ZM85.5 70H15.5C14.1739 70 12.9021 69.4732 11.9645 68.5355C11.0268 67.5979 10.5 66.3261 10.5 65V16.25L47.5 44C48.3655 44.6491 49.4181 45 50.5 45C51.5819 45 52.6345 44.6491 53.5 44L90.5 16.25V65C90.5 66.3261 89.9732 67.5979 89.0355 68.5355C88.0979 69.4732 86.8261 70 85.5 70Z" fill="#D8E9A8"/>
              </svg>
            </div>
            <p className="text-coklat">falahyudhistira219@gmail.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}
