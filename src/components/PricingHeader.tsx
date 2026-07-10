export default function PricingHeader() {
  return (
    <section className="py-28 bg-black text-center">
      <div className="inline-block border border-[#F8AA00] rounded-full px-6 py-2 text-xs uppercase tracking-widest text-[#F8AA00]">
        Subscription Plans
      </div>

      <h2 className="text-[72px] font-bold text-white mt-8 leading-none">
        Fuel Your Ambition.
        <br />
        <span className="text-[#F8AA00]">
          Choose Your Plan.
        </span>
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mt-6">
        Tailored nutrition protocols designed for
        peak cognitive and physical performance.
      </p>
    </section>
  );
}