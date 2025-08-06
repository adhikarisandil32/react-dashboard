import Footer from '@src/components/commons/footer';
import Header from '@src/components/commons/header';
import BlogsSection from '@src/components/page-wise/home-page/blog-section';
import HeroSection from '@src/components/page-wise/home-page/hero-section';
import OurWorksSection from '@src/components/page-wise/home-page/our-works-section';

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
