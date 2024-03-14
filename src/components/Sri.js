import sri from '../assets/sri.png'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function Sri() {
  return (
    <section className="flex px-5 py-32 bg-secondary justify-center">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-sri-font">
          Hi,
          <br /> I am Sri
          <p>I'm a Front end engineer</p>
        </h1>
        <div className="flex">
          <a href="#">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href="#">
            <AiOutlineGithub size={40} />
          </a>
          <a href="#"></a>
        </div>
      </div>
      <img className="w-1/3" src={sri} />
    </section>
  )
}
