export default function DoctorConsultation() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-[40px]">
          <div className="bg-gradient-to-r from-[#F8AA00] to-black">
            <img
              src="/doctor.png"
              alt=""
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="bg-[#F8AA00] p-14">
            <p className="uppercase text-xs">
              Premium Benefit
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Master the Craft of
              Healthy Eating.
            </h2>

            <p className="mt-8">
              We don't just feed you. We optimize
              your nutrition.
            </p>

            <div className="mt-12">
              <div className="flex justify-between mb-2">
                <span>Your Progress</span>

                <span className="font-bold">
                  75/100 meals
                </span>
              </div>

              <div className="h-4 rounded-full bg-white">
                <div className="h-4 w-[75%] bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}