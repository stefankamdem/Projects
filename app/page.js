import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans">
      <header className="w-full p-4 bg-gray-800 text-white flex justify-center gap-8">
        <a href="#home">Home</a>
        <a href="#about">About</a>
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
          <p>I'm a 2nd-year CS student interested in full-stack development and AI. I enjoy building small projects and learning new technologies.</p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc ml-5">
            <li>CLI Tool (coming soon)</li>
            <li>Web App (coming soon)</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600">linkedin.com/in/yourprofile</a></p>
        </section>
      </main>

      <footer className="w-full p-4 text-center border-t">
        © 2025 Your Name
      </footer>
    </div>
  )
}
