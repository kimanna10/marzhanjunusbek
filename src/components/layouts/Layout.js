import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, className = "" }) {
  return (
    <div className={className}>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          className="object-cover w-full h-full "
          src="/backvideo.webm"
          autoPlay
          loop
          muted
          aria-hidden="true"
          playsInline
        />
      </div>

      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
