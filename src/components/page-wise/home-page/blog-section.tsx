export default function BlogsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-gray-600">
            Insights, thoughts, industry trends, marketing tips, eDesign news, nerdy stuff, it's all here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-32 bg-white rounded-lg relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full absolute -bottom-2 -right-2"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">November 14, 2021</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">LaserNetUs Website Launch</h3>
              <p className="text-gray-600 text-sm">
                LaserNetUs has a new brand identity and website designed by eDesign Interactive. The homepage is dynamic
                and eye-catching. The website aims to highlight the innovative nature of high-intensity laser
                technology.
              </p>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">New Total Joint Center</div>
                  <div className="text-sm opacity-90">Advanced orthopedic care</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">February 21, 2021</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How we helped an Orthopedic Practice Increase their traffic
              </h3>
              <p className="text-gray-600 text-sm">
                We are honored and excited to be working with The Orthopedic Institute of New Jersey, the largest
                practice in Northwest New Jersey.
              </p>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">July 03, 2021</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Increasing Importance of Web Accessibility
              </h3>
              <p className="text-gray-600 text-sm">Is your website accessible to visitors with impairments?</p>
            </div>
          </article>
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
