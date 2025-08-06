export default function OurWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What we do</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Application */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-red-500 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Application</h3>
            <p className="text-gray-600 text-sm">Platform independent business solutions for maximum availability</p>
          </div>

          {/* SEO */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-1 left-1"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO</h3>
            <p className="text-gray-600 text-sm">Let the world find you on top of others</p>
          </div>

          {/* Game Development */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-6 bg-yellow-500 rounded-lg relative">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 right-1"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Game Development</h3>
            <p className="text-gray-600 text-sm">Interactive games with perfect graphics</p>
          </div>

          {/* IoT/AI/Robotic */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded relative">
                <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                <div className="w-2 h-2 bg-white rounded-full absolute bottom-1 right-1"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Iot/ AI/ Robotic</h3>
            <p className="text-gray-600 text-sm">Advanced autonomous technologies to make life simple</p>
          </div>
        </div>
      </div>
    </section>
  );
}
