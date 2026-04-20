export default function Offers() {
  return (
    <section id="offers" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-6">Exquisite Collections</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">Tailored photography experiences for your beloved companion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-300 p-12 flex flex-col hover:shadow-2xl transition duration-500">
            <div className="mb-8">
              <div className="w-12 h-1 bg-gray-900 mb-6"></div>
              <h3 className="text-2xl font-light text-gray-900 tracking-wide">Portrait Session</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow font-light">
              An intimate session dedicated to capturing your pet's distinctive character and spirit. Includes professional direction and 3 hand-selected, expertly edited photographs.
            </p>
            <div className="border-t border-gray-300 pt-8 mb-10">
              <span className="text-3xl font-light text-gray-900">€150</span>
              <p className="text-gray-500 text-xs mt-3 font-light">3 Premium Photographs Included</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-4 text-sm font-light hover:bg-gray-800 transition tracking-widest uppercase"
            >
              Inquire
            </a>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-300 p-12 flex flex-col hover:shadow-2xl transition duration-500 md:scale-105">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-2 text-xs font-light tracking-widest">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <div className="w-12 h-1 bg-gray-900 mb-6"></div>
              <h3 className="text-2xl font-light text-gray-900 tracking-wide">Companion Sessions</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow font-light">
              Perfect for multi-pet households. An extended session celebrating the bond between your companions, with 5 curated, professionally edited images.
            </p>
            <div className="border-t border-gray-300 pt-8 mb-10">
              <span className="text-5xl font-light text-gray-900">€250</span>
              <p className="text-gray-500 text-xs mt-3 font-light">5 Premium Photographs Included</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-4 text-sm font-light hover:bg-gray-800 transition tracking-widest uppercase"
            >
              Inquire
            </a>
          </div>

          <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-300 p-12 flex flex-col hover:shadow-2xl transition duration-500">
            <div className="mb-8">
              <div className="w-12 h-1 bg-gray-900 mb-6"></div>
              <h3 className="text-2xl font-light text-gray-900 tracking-wide">Bespoke Collection</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow font-light">
              For discerning clients seeking something extraordinary. Custom vision, extended sessions, multiple locations, and unlimited selections from your shoot.
            </p>
            <div className="border-t border-gray-300 pt-8 mb-10">
              <span className="text-gray-900 text-sm font-light">Custom Pricing</span>
              <p className="text-gray-500 text-xs mt-3 font-light">Bespoke to your vision</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-4 text-sm font-light hover:bg-gray-800 transition tracking-widest uppercase"
            >
              Inquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
