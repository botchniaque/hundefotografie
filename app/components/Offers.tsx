export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Offers</h2>
        <p className="text-gray-600 mb-12">Professional pet photography packages</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">Portrait Session</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">
              Perfect for capturing your pet's unique personality. Includes a professional photoshoot and 3 selected photos.
            </p>
            <div className="mb-8">
              <span className="text-3xl font-bold text-gray-900">€150</span>
              <p className="text-gray-500 text-xs mt-1">including 3 photos</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-2 text-sm font-semibold hover:bg-gray-800 transition uppercase tracking-wide"
            >
              Jetzt Buchen
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">Multiple Pets</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">
              Have more than one furry friend? Get a session with all your pets together, with 5 selected photos.
            </p>
            <div className="mb-8">
              <span className="text-3xl font-bold text-gray-900">€200</span>
              <p className="text-gray-500 text-xs mt-1">including 5 photos</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-2 text-sm font-semibold hover:bg-gray-800 transition uppercase tracking-wide"
            >
              Jetzt Buchen
            </a>
          </div>

          <div className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 uppercase tracking-wide">Custom Package</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">
              Need something special? Extended sessions, location changes, or additional photos. Let's discuss!
            </p>
            <div className="mb-8">
              <span className="text-gray-900 text-sm font-semibold">Custom pricing</span>
              <p className="text-gray-500 text-xs mt-1">tailored to your needs</p>
            </div>
            <a
              href="https://instagram.com/hundefotografberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-900 text-white text-center py-2 text-sm font-semibold hover:bg-gray-800 transition uppercase tracking-wide"
            >
              Jetzt Buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
