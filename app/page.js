import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <header className="w-full p-4 bg-gray-800 text-white flex justify-center gap-8">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header>

      <main className="flex-1 w-full max-w-4xl p-8">
        <section id="home" className="mb-16 text-center">
          <h1 className="text-4xl font-bold">Stefan Kamdem</h1>
          <p className="mt-2 text-lg">2nd Year CS Student | Aspiring Software Engineer</p>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>I&apos;m a 2nd-year CS student interested in full-stack development and AI. I enjoy building small projects and learning new technologies.</p>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc ml-5">
            <li>Python</li>
            <li>JavaScript (including HTML & CSS)</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>Linux</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc ml-5">
            <li>Redis Database (Python)</li>
            <li>Rock Paper Scissors Game(HTML, CSS, JavaScript)</li>
            <li>Portfolio (HTML, JavaScript, Node.js, TailwindCSS)</li>
            <li>Game (coming soon)</li>
            <li>AI (coming soon)</li>
            <li>CLI Tool (coming soon)</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: stefankamdem@gmail.com</p>
          <p>GitHub: <a href="https://github.com/stefankamdem" className="text-blue-600">github.com/stefankamdem</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/stefan-kamdem-3231481b7/" className="text-blue-600">linkedin.com/in/stefan-kamdem</a></p>
        </section>
      </main>

      <footer className="w-full p-4 text-center border-t">
        © 2025 Stefan Kamdem
      </footer>
    </div>
  )
}
