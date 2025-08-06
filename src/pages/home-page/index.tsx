import BlogsSection from '@root/src/components/home-page/blog-section';
import Footer from '@root/src/components/commons/footer';
import Header from '@root/src/components/commons/header';
import HeroSection from '@root/src/components/home-page/hero-section';
import OurWorksSection from '@root/src/components/home-page/our-works-section';

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
