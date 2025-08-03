import ParticlesBackground from "@/components/ui/ParticlesBackground";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, className = "" }) {
  return (
    <div className={className}>
      <ParticlesBackground />

      <Header />
      {children}
      <Footer />
    </div>
  );
}
