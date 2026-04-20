export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-blue-100 to-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xl">Professional photo here</span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              Hi! I'm Anna Bochniak, a professional pet photographer based in Berlin. I have a passion for capturing the unique personality and charm of your beloved pets.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With years of experience in professional photography, I specialize in creating stunning portraits of dogs, cats, and other furry friends. Whether it's in a studio setting, at your home, or outdoors in Berlin's beautiful parks, I ensure every shot showcases your pet's best moments.
            </p>
            <p className="text-lg text-gray-700">
              My goal is to capture not just photos, but memories you'll cherish forever. Let's create something beautiful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
