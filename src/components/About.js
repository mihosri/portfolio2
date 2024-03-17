import AboutImg from '../assets/aboutImg.jpg'
export default function About() {
  return (
    <section className='flex'>
      <div>
        <img src={AboutImg} />
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          Hello I am a passionate Front End Engineer who is skilled in HTML,
          CSS, JavaScript, TypeScript and React.
        </p>
      </div>
    </section>
  )
}
