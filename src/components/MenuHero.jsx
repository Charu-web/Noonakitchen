export default function MenuHero() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 pt-16 pb-24">

      <div className="grid grid-cols-2 items-center">

        <div>
          <p className="text-[#f8aa00] uppercase font-bold tracking-[4px] mb-5">
            Fuel Your Fitness With
          </p>

          <h1 className="text-7xl font-black leading-none">
            Crafted Daily
            <br />
            <span className="text-[#f8aa00]">
              With Real
            </span>
            <br />
            Ingredients
          </h1>

          <p className="text-gray-300 mt-8 max-w-[500px] text-xl leading-9">
            Tailored meal plans crafted by
            nutrition experts.
          </p>

          <button className="mt-10 bg-[#f8aa00] text-black rounded-full px-10 py-4 font-bold">
            View Subscription
          </button>
        </div>

        <div className="relative flex justify-center">

          <div className="absolute w-[600px] h-[600px] rounded-full bg-[#f8aa00]/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
            className="relative w-[650px]"
          />

        </div>

      </div>
    </section>
  );
}