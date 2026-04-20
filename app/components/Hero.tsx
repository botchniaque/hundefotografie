export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-pink-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Pet Photography in Berlin
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Capturing your pet's unique personality and best moments through professional photography.
        </p>
        <a
          href="#offers"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
