import heroImg from "@/assets/HeroImg.png";

export default function HeroSection() {
  return (
    <section
      className="bg-white bg-cover bg-center px-6 py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-6 sm:p-10 md:p-14 rounded-lg">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left z-10">
          <p className="text-gray-600 text-xs sm:text-sm mb-2">
            Quality cleaning at a fair price.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Specialized, efficient, <br />
            and thorough cleaning <br />
            services
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-lg mx-auto lg:mx-0">
            We provide Performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-xs mx-auto lg:mx-0">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto">
              Get Start Now
            </button>
            <button className="border border-gray-700 hover:border-gray-400 px-6 py-3 rounded-md text-sm font-medium text-gray-700 w-full sm:w-auto">
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
