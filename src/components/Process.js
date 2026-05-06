import { MdCalculate, MdVisibility, MdBrush, MdVerifiedUser } from "react-icons/md";

const steps = [
  {
    icon: MdCalculate,
    title: "1. Instant Quote",
    description:
      "Use our online estimator to get a baseline price for your project.",
  },
  {
    icon: MdVisibility,
    title: "2. Site Survey",
    description:
      "A project manager visits to confirm measurements and material selections.",
  },
  {
    icon: MdBrush,
    title: "3. Precision Work",
    description:
      "Our skilled crew executes the project with absolute attention to detail.",
  },
  {
    icon: MdVerifiedUser,
    title: "4. Final Walkthrough",
    description:
      "We don't leave until every corner is perfect and you are 100% satisfied.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-section-padding bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-manrope font-semibold text-on-surface"
            style={{ fontSize: "32px" }}
          >
            Our Seamless Process
          </h2>
          <p className="mt-3 text-body-md text-on-surface-variant max-w-xl mx-auto">
            From first enquiry to final sign-off, we&rsquo;ve designed every
            step to be transparent and stress-free.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="flex flex-col gap-5">
              {/* Icon box */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Icon className="text-secondary text-[28px]" />
              </div>

              {/* Step title */}
              <div>
                <h3 className="font-manrope font-semibold text-on-surface text-body-lg">
                  {title}
                </h3>
              </div>

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
