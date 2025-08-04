export default function HeroSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We do the work you stay focused on your customers.
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Awwwsome is a digital agency passionate about storytelling, visual design, and technology. We help
              companies small to large around the world to help them engage their audiences and build brand awareness.
            </p>
            <p className="text-gray-600 mb-8">
              Our team can create amazing web experiences, beginning with deep market research, practical strategies,
              and professional execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Explore Projects
              </button>
              <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                About Us
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <img
              src="/assets/hero-image.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
