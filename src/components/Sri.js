import sri from '../assets/sri.png'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Sri() {
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-sri-font">
          Hi,
          <br /> I am Sri
          <p>I'm a Frontend engineer</p>
        </h1>
        <div className="flex py-10">
          <a
            href="https://www.linkedin.com/in/sri-guru-girahha/"
            className="pr-5 hover:text-white"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href="https://github.com/mihosri"
            className="pr-5 hover:text-white"
          >
            <AiOutlineGithub size={40} />
          </a>
          <a href="#"></a>
        </div>
      </div>
      <img className="md:w-1/3" src={sri} />
    </section>
  )
}
