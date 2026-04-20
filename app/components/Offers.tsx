export default function Offers() {
  return (
    <section id="offers" className="py-32 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Photography Sessions</h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">Tailored portrait sessions crafted to capture your pet's unique spirit and personality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white border border-amber-200 p-12 flex flex-col hover:shadow-xl transition duration-500">
            <div className="mb-8">
              <div className="w-12 h-1 bg-amber-800 mb-6"></div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">Portrait Session</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-10 flex-grow font-light">
              An intimate session dedicated to capturing your pet's distinctive character and spirit. Includes professional direction and 3 hand-selected, expertly edited photographs.
            </p>
            <div className="border-t border-amber-200 pt-8 mb-10">
              <span className="text-4xl font-serif font-bold text-gray-900">€150</span>
              <p className="text-gray-600 text-xs mt-3 font-light">3 Premium Photographs</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-800 text-amber-50 text-center py-4 text-sm font-light hover:bg-amber-900 transition tracking-widest uppercase"
            >
              Inquire
            </a>
          </div>

          <div className="relative">
            <div className="bg-amber-800 text-amber-50 border border-amber-900 p-12 flex flex-col hover:shadow-2xl transition duration-500 md:scale-105">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-900 text-amber-50 px-6 py-2 text-xs font-light tracking-widest">
                MOST POPULAR
              </div>
              <div className="mb-8">
                <div className="w-12 h-1 bg-amber-200 mb-6"></div>
                <h3 className="text-2xl font-serif font-bold">Companion Sessions</h3>
              </div>
              <p className="text-amber-50 text-sm leading-relaxed mb-10 flex-grow font-light">
                Perfect for multi-pet households. An extended session celebrating the bond between your companions, with 5 curated, professionally edited images.
              </p>
              <div className="border-t border-amber-700 pt-8 mb-10">
                <span className="text-4xl font-serif font-bold">€250</span>
                <p className="text-amber-200 text-xs mt-3 font-light">5 Premium Photographs</p>
              </div>
              <a
                href="https://instagram.com/hundefotografberlin"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-50 text-amber-900 text-center py-4 text-sm font-light hover:bg-amber-100 transition tracking-widest uppercase"
              >
                Inquire
              </a>
            </div>
          </div>

          <div className="bg-white border border-amber-200 p-12 flex flex-col hover:shadow-xl transition duration-500">
            <div className="mb-8">
              <div className="w-12 h-1 bg-amber-800 mb-6"></div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">Bespoke Collection</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-10 flex-grow font-light">
              For discerning clients seeking something extraordinary. Custom vision, extended sessions, multiple locations, and unlimited selections from your shoot.
            </p>
            <div className="border-t border-amber-200 pt-8 mb-10">
              <span className="text-gray-900 text-sm font-light">Custom Pricing</span>
              <p className="text-gray-600 text-xs mt-3 font-light">Bespoke to your vision</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-800 text-amber-50 text-center py-4 text-sm font-light hover:bg-amber-900 transition tracking-widest uppercase"
            >
              Inquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
