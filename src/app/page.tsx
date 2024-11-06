import VideoBackground from "./components/VideoBackground";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <div className="">
        <section id="home">
          <Navbar />
        </section>
      </div>
      <div className="relative z-10  justify-center h-full text-white text-center pt-18">
        <VideoBackground />
      </div>
      <Gallery />

      <About />
      <hr />
      <Contact />
    </div>
  );
}
