// import ParticlesLines from "@/components/ui/ParticlesLines";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, className = "" }) {
  return (
    <div className={className}>
      {/* <div className="absolute inset-0 -z-10 animate-gradient bg-[linear-gradient(270deg,_#4CF432,_#DEF2FF,_#AAF0D1)] bg-[length:400%_400%]" /> */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          className="w-full h-full object-cover "
          src="/green-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* <ParticlesLines /> */}

      <Header />
      {children}
      <Footer />
    </div>
  );
}
