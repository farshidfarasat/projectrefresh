import { MdWaterDrop, MdBolt, MdConstruction } from "react-icons/md";

const services = [
  {
    icon: MdWaterDrop,
    title: "Plumbing",
    description:
      "High-end bathroom installations and radiator modernisations.",
  },
  {
    icon: MdBolt,
    title: "Electrical",
    description:
      "Smart home integration and aesthetic lighting design.",
  },
  {
    icon: MdConstruction,
    title: "General Renovation",
    description:
      "Plastering, tiling, and structural refinements for luxury homes.",
  },
];

export default function BeyondPainting() {
  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-manrope font-semibold text-on-surface"
            style={{ fontSize: "32px" }}
          >
            Beyond Painting
          </h2>
          <p className="mt-3 text-body-md text-on-surface-variant max-w-xl mx-auto">
            A complete renovation service under one roof — so you never have to
            juggle multiple tradespeople again.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border border-outline-variant rounded-2xl p-8 flex flex-col gap-5 hover:border-on-surface hover:shadow-md transition-all duration-200 cursor-default"
            >
              <Icon className="text-secondary text-[32px]" />
              <h3
                className="font-manrope font-semibold text-on-surface"
                style={{ fontSize: "24px" }}
              >
                {title}
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
