import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black pt-20">
      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f8aa00] rounded-[50px] py-20 px-10 text-center">
          <h2 className="text-black font-bold text-5xl md:text-6xl leading-tight">
            Ready to{" "}
            <span className="text-purple-500">
              BowlCraft
            </span>{" "}
            Your
            <br />
            Life?
          </h2>

          <p className="mt-4 text-black/70 max-w-xl mx-auto text-sm md:text-base">
            Join over 100,000 members who have transformed their health through
            our customized nutrition platform.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            {/* App Store */}
            <button className="bg-black rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition">
              <FaApple className="text-white text-3xl" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400">
                  DOWNLOAD ON THE
                </p>
                <p className="text-white font-medium">
                  App Store
                </p>
              </div>
            </button>

            {/* Play Store */}
            <button className="bg-black rounded-2xl px-6 py-4 flex items-center gap-3 hover:scale-105 transition">
              <FaGooglePlay className="text-white text-2xl" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400">
                  GET IT ON
                </p>
                <p className="text-white font-medium">
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-[1600px] mx-auto mt-28">
        <div className="bg-[#f8aa00] rounded-t-[60px] px-8 md:px-16 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* LEFT */}
            <div>
              <h3 className="text-4xl font-bold text-black">
                BowlCraft
              </h3>

              <p className="mt-6 text-black/80 max-w-xs leading-relaxed">
                Handcrafted bowls made with the freshest ingredients.
                Healthy, Custom, Delicious.
              </p>

              <div className="flex gap-4 mt-8">
                <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center cursor-pointer">
                  <FaTwitter className="text-white" />
                </div>

                <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center cursor-pointer">
                  <FaInstagram className="text-white" />
                </div>

                <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center cursor-pointer">
                  <FaFacebookF className="text-white" />
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="uppercase text-sm tracking-widest font-semibold mb-6">
                Navigate
              </h4>

              <ul className="space-y-4 text-black">
                <li>Home</li>
                <li>Menu</li>
                <li>Build Your Bowl</li>
                <li>Reviews</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="uppercase text-sm tracking-widest font-semibold mb-6">
                Company
              </h4>

              <ul className="space-y-4 text-black">
                <li>Reviews</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Sustainability</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="uppercase text-sm tracking-widest font-semibold mb-6">
                Get In Touch
              </h4>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <FaEnvelope />
                  <span>hello@bowlcraft.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt />
                  <span>(555) 123-4567</span>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1" />
                  <span>
                    123 Fresh Lane,
                    <br />
                    Green City
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-black/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black/80">
              © 2024 BowlCraft Inc. All rights reserved. Healthy, Custom,
              Delicious.
            </p>

            <div className="flex gap-8 text-sm text-black">
              <a href="#">Terms of Service</a>
              <a href="#">Accessibility</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;