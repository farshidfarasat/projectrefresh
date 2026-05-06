import { MdStar } from "react-icons/md";

const testimonials = [
  {
    quote:
      "The transparency of the pricing was what sold me. No haggling, no unexpected costs. The quality of the finish on our Notting Hill townhouse is simply exceptional.",
    name: "James W.",
    location: "Notting Hill",
  },
  {
    quote:
      "Fast, professional, and incredibly clean. They managed the whole renovation while we were on holiday, and we came back to a brand new home. Truly stress-free.",
    name: "Sarah L.",
    location: "Islington",
  },
  {
    quote:
      "Project Refresh transformed our office and residential space with precision. The estimator was spot on, and the team was incredibly respectful of our heritage features.",
    name: "Marcus T.",
    location: "Marylebone",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 text-secondary">
    {[...Array(5)].map((_, i) => (
      <MdStar key={i} className="text-[20px]" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-section-padding bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-manrope font-semibold text-on-surface"
            style={{ fontSize: "32px" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, location }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
            >
              <Stars />
              <p className="italic text-body-md text-on-surface-variant leading-relaxed flex-1">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-on-surface font-manrope text-body-md">
                  {name}
                </p>
                <p className="text-label-sm text-on-surface-variant mt-0.5">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
