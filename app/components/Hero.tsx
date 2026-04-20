import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-amber-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:pr-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Pet Photography in Berlin
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed font-light">
              Capturing your pet's unique personality and best moments through professional photography. Creating timeless, intimate portraits that celebrate the bond you share.
            </p>
            <div className="flex gap-4">
              <a
                href="#offers"
                className="inline-block bg-amber-800 text-amber-50 px-10 py-4 font-light tracking-widest uppercase text-sm hover:bg-amber-900 transition"
              >
                Book a Session
              </a>
              <a
                href="/gallery"
                className="inline-block border-2 border-amber-800 text-amber-800 px-10 py-4 font-light tracking-widest uppercase text-sm hover:bg-amber-800 hover:text-amber-50 transition"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden" style={{ backgroundColor: '#f5e1d6' }}>
              <Image
                src="/gallery/2.jpeg"
                alt="Featured dog portrait"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
