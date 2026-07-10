import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src="/video-cover.jpg"
              alt=""
              className="w-full h-[380px] object-cover"
            />

            <button className="absolute inset-0 m-auto w-20 h-20 bg-[#f8aa00] rounded-full flex items-center justify-center">
              <FaPlay />
            </button>
          </div>

          <div>
            <h2 className="text-6xl font-bold leading-tight">
              Design that speaks louder than words
            </h2>

            <p className="text-gray-400 mt-8">
              We believe exceptional design is about solving real-world
              problems and creating meaningful experiences.
            </p>

            <ul className="space-y-5 mt-10">
              <li>✓ User-Centric Architecture</li>
              <li>✓ Future-Proof Scalability</li>
              <li>✓ Data-Driven Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;