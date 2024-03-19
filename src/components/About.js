import AboutImg from '../assets/aboutpic.png'
export default function About() {
  return (
    <section className="flex bgcolor">
      <div className="w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="text-white">
            Hello I am a passionate Front End Engineer who is skilled in HTML,
            CSS, JavaScript, TypeScript and React.
          </p>
        </div>
      </div>
    </section>
  )
}
