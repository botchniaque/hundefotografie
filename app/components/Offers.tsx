export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Offers</h2>
        <p className="text-gray-600 mb-12">Professional pet photography packages</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Portrait Session</h3>
            <p className="text-gray-600 mb-6">
              Perfect for capturing your pet's unique personality. Includes a professional photoshoot and 3 selected photos.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">€150</span>
              <p className="text-gray-600 text-sm">including 3 photos</p>
            </div>
            <a
              href="https://instagram.com/hundephotographberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact via Instagram
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-pink-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiple Pets</h3>
            <p className="text-gray-600 mb-6">
              Have more than one furry friend? Get a session with all your pets together, with 5 selected photos.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">€200</span>
              <p className="text-gray-600 text-sm">including 5 photos</p>
            </div>
            <a
              href="https://instagram.com/hundephotographberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Contact via Instagram
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Package</h3>
            <p className="text-gray-600 mb-6">
              Need something special? Extended sessions, location changes, or additional photos. Let's discuss!
            </p>
            <div className="mb-6">
              <span className="text-gray-900 text-sm">Custom pricing</span>
              <p className="text-gray-600 text-sm">tailored to your needs</p>
            </div>
            <a
              href="https://instagram.com/hundephotographberlin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Contact via Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
