import BlogsSection from "../../components/home-page/blog-section";
import Footer from "../../components/home-page/footer";
import Header from "../../components/home-page/header";
import HeroSection from "../../components/home-page/hero-section";
import OurWorksSection from "../../components/home-page/our-works-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <OurWorksSection />
      <BlogsSection />
      <Footer />
    </div>
  );
}
