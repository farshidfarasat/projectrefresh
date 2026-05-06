import { MdLocationOn, MdPayments, MdVerified } from "react-icons/md";

const items = [
  {
    icon: MdLocationOn,
    title: "London Expertise",
    body: "Deep understanding of London's architectural heritage, from Victorian terraces to modern penthouses.",
  },
  {
    icon: MdPayments,
    title: "Fixed Pricing",
    body: "No hidden costs or 'builder's surprises'. What we quote is what you pay, including all materials and VAT.",
  },
  {
    icon: MdVerified,
    title: "Guaranteed Quality",
    body: "Every project is backed by our comprehensive insurance and a 2-year craftsmanship warranty.",
  },
];

export default function Credibility() {
  return (
    <section id="services" className="py-20 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-4">
              <Icon className="text-secondary text-[32px]" />
              <h3
                className="font-manrope font-semibold text-on-surface"
                style={{ fontSize: "24px" }}
              >
                {title}
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
