import sri from '../assets/sri.png'

export default function Sri() {
  return (
    <section className="flex px-5 py-32 bg-secondary justify-center">
      <h1 className="w-1/3 text-white text-4xl">
        Hi,
        <br /> I am Sri
        <p>I am a Front end engineer</p>
      </h1>
      <img className="w-1/2" src={sri} />
    </section>
  )
}
