import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[819px] flex items-center bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ── Left column ── */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p
              className="text-label-sm font-semibold uppercase tracking-[0.08em] text-secondary"
              style={{ letterSpacing: "0.08em" }}
            >
              Premium London Renovations
            </p>

            {/* Headline */}
            <h1 className="font-manrope font-bold text-on-surface leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: "48px" }}>
              Transparent Pricing.<br />Precision Execution.
            </h1>

            {/* Body */}
            <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-lg">
              Expert painting and decoration services for London&rsquo;s finest
              residences. Get an instant, fixed-price estimate and book your
              project with confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#estimator"
                className="inline-block bg-primary text-white text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-800 transition-colors duration-150 font-manrope"
              >
                Start My Estimate
              </Link>
              <Link
                href="/portfolio"
                className="inline-block border border-on-surface text-on-surface text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-colors duration-150 font-manrope"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAYDOvddJTwFMo62g7VOu7MP75fHmOaqwLwcs5-SPAKKG2WmiN_pB22WoeG3e3wqq9X2q2X0iIjsKx4DInC7npnrXDKrBcCXiWH9WlI_QN2K5c4AgUFTSC1O7xEsgNDn1XafVfNG9WH077Q8n8VscYIZ7fgi28QAWQypm-F5kdHhcJTXsImNCno_idDTKKU9tli3roGkoPLYkjEKuXSky35ajeW7LtR_K30WXjBpjZK26qVPlozMLiFwe-saU91QFvva2H9pxp4ITj"
              alt="Beautifully renovated London living room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
