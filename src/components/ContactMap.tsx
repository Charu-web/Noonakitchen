export default function ContactMap() {
  return (
    <section className="bg-black pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden rounded-[40px]">
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}