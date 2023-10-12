import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/javascript.svg";
import github_svg from "../assets/img/github.svg";
import react from "../assets/img/react.svg";

export const Skill = () => {
  return (
    <section id="skill" className="bg-ijohTuwek flex flex-wrap">
        <div className="my-10 mx-5 md:mx-10 lg:mx-32">
          <h1 className="text-coklat text-4xl my-10 text-left">My Achivement</h1>
          <div className="flex">
              <div className="text-left text-coklat mt-4 mr-10">
                <p className="text-2xl text-left">1+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="text-left text-coklat md:ml-8 mt-4">
                <span className="text-2xl">4+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
          </div>
        </div>
        <div className="my-3 md:my-10 mx-5 md:mx-10 lg:mx-32">
          <h1 className="text-coklat text-4xl my-5 md:my-10 text-left">Skills</h1>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 my-10">
            <div className="mr-10 md:mr-16 lg:mr-16 flex flex-col items-center justify-center">
              <img src={html} alt="" />
              <p className="text-coklat text-base mt-3">HTML</p>
            </div>
            <div className="mr-10 md:mr-16 lg:mr-16 flex flex-col items-center justify-center">
              <img src={css} alt="" />
              <p className="text-coklat text-base mt-3">CSS</p>
            </div>
            <div className="mr-10 md:mr-16 lg:mr-16 flex flex-col items-center justify-center">
              <img src={javascript} alt="" />
              <p className="text-coklat text-base mt-3">Javascript</p>
            </div>
            <div className="mr-10 md:mr-16 lg:mr-16 md:mt-0 mt-8 flex flex-col items-center justify-center">
              <img src={github_svg} alt="" />
              <p className="text-coklat text-base mt-3">Github</p>
            </div>
            <div className="mr-10 md:mr-16 lg:mr-16 md:mt-8 mt-8 lg:my-8 flex flex-col items-center justify-center">
              <img src={react} alt="" />
              <p className="text-coklat text-base mt-3">React JS</p>
            </div>
          </div>
        </div>
      </section>
  )
}
