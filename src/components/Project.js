import ecommerce from "../assets/img/ecommerce.webp";
import todoApp from "../assets/img/todo-app.webp";
import cinema from "../assets/img/cinema.webp";
import food from "../assets/img/food.webp";
import jatis from "../assets/img/jatis.webp";
export const Project = () => {
  return (
    <section id="project" className="bg-ijohTuwek py-20">
        <h1 className="text-4xl text-left text-coklat mx-10 md:mx-10 lg:mx-32 md:mb-15">My Latest Project</h1>
        <div className="flex items-center justify-center mt-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-xs text-left mt-10 md:mx-8 lg:mx-14">
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
                    <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">E-commerce Penjualan Cupang</h5>
                    <p className="mb-3 font-normal text-coklat text-xs">Web App / Multiple Pages</p>
                </div>
            </div>
            <div className="max-w-xs text-left mt-10 md:mx-8 lg:mx-14">                
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
                    <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">Todo List App</h5>
                    <p className="mb-3 font-normal text-coklat text-xs">Web App / Single Page</p>                    
                </div>
            </div>
            <div className="max-w-xs text-left mt-10 md:mx-8 lg:mx-14">                
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
                    <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">List Cinema with Imbd API</h5>
                    <p className="mb-3 font-normal text-coklat text-xs">Web App / Multiple Pages</p>                    
                </div>
            </div>
            <div className="max-w-xs text-left mt-10 md:mx-8 lg:mx-14">                
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
                    <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">What's the Food</h5>
                    <p className="mb-3 font-normal text-coklat text-xs">Mobile App</p>                    
                </div>
            </div>
            <div className="max-w-xs text-left mt-10 md:mx-8 lg:mx-14">                
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
                    <h5 className="my-2 text-lg font-bold tracking-tight text-coklat">Pemasukan Bulanan Jatis</h5>
                    <p className="mb-3 font-normal text-coklat text-xs">Web / Multiple Pages</p>
                    
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
