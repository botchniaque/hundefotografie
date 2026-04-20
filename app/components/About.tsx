import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-amber-800 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="rounded-sm overflow-hidden" style={{ width: '100%', maxWidth: '400px', aspectRatio: '1', backgroundColor: '#f5e1d6' }}>
            <Image
              src="/gallery/4.jpeg"
              alt="Anna Bochniak portrait"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Hi! I'm Anna Bochniak, a professional pet photographer based in Berlin. I have a passion for capturing the unique personality and charm of your beloved pets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              With years of experience in professional photography, I specialize in creating stunning portraits of dogs, cats, and other furry friends. Whether it's in a studio setting, at your home, or outdoors in Berlin's beautiful parks, I ensure every shot showcases your pet's best moments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              My goal is to capture not just photos, but memories you'll cherish forever. Let's create something beautiful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
