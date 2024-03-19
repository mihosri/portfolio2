import AboutImg from '../assets/aboutpic.png'
export default function About() {
  return (
    <section className="flex bgcolor">
      <div className="w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="w-1/2">
        <h1>About Me</h1>
        <p>
          Hello I am a passionate Front End Engineer who is skilled in HTML,
          CSS, JavaScript, TypeScript and React.
        </p>
      </div>
    </section>
  )
}
