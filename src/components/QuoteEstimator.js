"use client";

import { useState } from "react";
import { MdApartment, MdHome, MdDeck, MdCalendarToday, MdCall, MdHelpOutline } from "react-icons/md";

const pricingData = {
  Studio: { Refresh: 950, Enhanced: 1800, Premium: 3200 },
  "1-2 Bed": { Refresh: 1450, Enhanced: 2800, Premium: 4900 },
  "3 Bed": { Refresh: 1850, Enhanced: 3400, Premium: 5900 },
  "4+ Bed": { Refresh: 2400, Enhanced: 4200, Premium: 7200 },
  Exterior: { Refresh: 800, Enhanced: 1600, Premium: 2800 }
};

const addOnPrices = {
  "Ceiling Painting": 350,
  "Door and Frame Refurb": 120,
  "Radiator Enamelling": 85,
  "Window Cill Restoration": 45
};

export default function QuoteEstimator() {
  const [propertyType, setPropertyType] = useState("Flat");
  const [size, setSize] = useState("1-2 Bed");
  const [pkg, setPkg] = useState("Enhanced");
  const [addOns, setAddOns] = useState({
    "Ceiling Painting": 0,
    "Door and Frame Refurb": 0,
    "Radiator Enamelling": 0,
    "Window Cill Restoration": 0
  });

  const updateAddOn = (name, delta) => {
    setAddOns(prev => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta)
    }));
  };

  const calculateTotal = () => {
    let base = 0;
    if (propertyType === "Exterior") {
      base = pricingData["Exterior"][pkg];
    } else {
      base = pricingData[size][pkg] || 0;
      if (propertyType === "House") {
        base *= 1.2;
      }
    }

    let adds = 0;
    Object.entries(addOns).forEach(([name, qty]) => {
      if (qty > 0) adds += addOnPrices[name] * qty;
    });

    return base + adds;
  };

  const total = calculateTotal();

  return (
    <section id="estimator" className="py-section-padding bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-manrope font-semibold text-on-surface" style={{ fontSize: "32px" }}>
            Instant Project Estimator
          </h2>
          <p className="mt-3 text-body-md text-on-surface-variant max-w-xl mx-auto">
            Get a fixed-price estimate tailored to your exact requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (Steps) */}
          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* Step 1 */}
            <div>
              <h3 className="font-manrope font-semibold text-body-lg mb-4">Step 1: Property Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "Flat", icon: MdApartment },
                  { name: "House", icon: MdHome },
                  { name: "Exterior", icon: MdDeck }
                ].map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => {
                      setPropertyType(name);
                      if (name === "Exterior") setSize("Exterior");
                      else if (size === "Exterior") setSize("1-2 Bed");
                    }}
                    className={`p-6 border rounded-xl flex flex-col items-center gap-3 transition-colors duration-150 ${propertyType === name ? "border-primary bg-surface-container-low" : "border-outline-variant hover:border-on-surface"
                      }`}
                  >
                    <Icon size={48} className={propertyType === name ? "text-primary" : "text-on-surface-variant"} />
                    <span className="font-semibold text-on-surface">{name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            {propertyType !== "Exterior" && (
              <div>
                <h3 className="font-manrope font-semibold text-body-lg mb-4">Step 2: Project Size</h3>
                <div className="flex flex-wrap gap-3">
                  {["Studio", "1-2 Bed", "3 Bed", "4+ Bed"].map(s => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-colors duration-150 ${size === s ? "bg-primary text-white border-primary" : "border-outline-variant text-on-surface hover:border-on-surface"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            <div>
              <h3 className="font-manrope font-semibold text-body-lg mb-4">Step 3: Service Package</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { 
                    name: "Refresh", 
                    price: "£1,450+", 
                    desc: "Standard emulsion, minor filling, 2 coats. Perfect for rental updates.",
                    features: [
                      "Light surface clean",
                      "Removal of loose/flaky paint",
                      "Minor crack filling (hairline cracks)",
                      "Small hole filling up to 1 inch",
                      "2 coats of paint on walls"
                    ]
                  },
                  { 
                    name: "Enhanced", 
                    price: "£2,800+", 
                    desc: "Premium Farrow & Ball paint, wood prep, satin finish trim. POPULAR",
                    features: [
                      "Light surface clean",
                      "Removal of loose/flaky paint",
                      "Minor crack filling",
                      "Small hole filling up to 1 inch",
                      "2 coats of paint on walls",
                      "Medium hole repairs up to 2-4 inches",
                      "Stain treatment where needed",
                      "Undercoat/primer where required",
                      "Colour change included"
                    ]
                  },
                  { 
                    name: "Premium", 
                    price: "£4,900+", 
                    desc: "Full wall stripping, restorative plastering, heritage detail work.",
                    features: [
                      "Light surface clean",
                      "Removal of loose/flaky paint",
                      "Minor crack filling",
                      "Small hole filling up to 1 inch",
                      "2 coats of paint on walls",
                      "Medium hole repairs up to 2-4 inches",
                      "Stain treatment",
                      "Undercoat/primer",
                      "Colour change included",
                      "Large hole repairs over 4 inches",
                      "Skimming for smooth surfaces",
                      "Plastering where required",
                      "Wallpaper removal",
                      "High quality finish",
                      "Full surface preparation throughout",
                      "Premium Finish Guarantee"
                    ]
                  }
                ].map(({ name, price, desc, features }) => (
                  <button
                    key={name}
                    onClick={() => setPkg(name)}
                    className={`p-6 border rounded-xl text-left transition-colors duration-150 ${pkg === name ? "border-primary bg-surface-container-low" : "border-outline-variant hover:border-on-surface"
                      }`}
                  >
                    <div className="font-bold text-on-surface">{name}</div>
                    <div className="text-sm font-semibold text-secondary mt-1">{price}</div>
                    <div className="text-sm text-on-surface-variant mt-2">{desc}</div>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${pkg === name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="mt-4 pt-4 border-t border-outline-variant">
                          <ul className="space-y-2">
                            {features.map((feature, i) => (
                              <li key={i} className="flex gap-2 text-xs text-on-surface-variant items-start">
                                <span className="text-green-600 font-bold shrink-0">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="font-manrope font-semibold text-body-lg mb-4">Step 4: Optional Add-ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries({
                  "Ceiling Painting": "£350 per ceiling",
                  "Door and Frame Refurb": "£120 per door",
                  "Radiator Enamelling": "£85 per radiator",
                  "Window Cill Restoration": "£45 per window cill"
                }).map(([name, price]) => (
                  <div key={name} className="flex items-center justify-between p-4 border border-outline-variant rounded-xl bg-white">
                    <div className="flex flex-col">
                      <span className="font-semibold text-on-surface text-sm">{name}</span>
                      <span className="text-on-surface-variant text-xs">{price}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateAddOn(name, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-semibold text-sm">{addOns[name] || 0}</span>
                      <button 
                        onClick={() => updateAddOn(name, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div>
            <div className="sticky top-28 bg-surface-container-low p-8 rounded-2xl">
              <h3 className="font-manrope font-semibold text-body-lg mb-6 pb-4 border-b border-outline-variant">Quote Summary</h3>

              <div className="flex flex-col gap-4 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Type</span>
                  <span className="font-semibold text-on-surface">{propertyType}</span>
                </div>
                {propertyType !== "Exterior" && (
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Size</span>
                    <span className="font-semibold text-on-surface">{size}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Package</span>
                  <span className="font-semibold text-on-surface">{pkg}</span>
                </div>

                {Object.entries(addOns).filter(([_, qty]) => qty > 0).map(([name, qty]) => (
                  <div key={name} className="flex justify-between">
                    <span className="text-on-surface-variant">{name} x{qty}</span>
                    <span className="font-semibold text-on-surface">£{addOnPrices[name] * qty}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-outline-variant mb-8">
                <div className="text-on-surface-variant text-sm mb-1">Estimated Total</div>
                <div className="font-manrope font-bold text-[36px] text-primary">
                  £{total.toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full flex justify-center items-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-gray-800 transition-colors">
                  <MdCalendarToday className="text-[20px]" />
                  Book Project Site Visit
                </button>
                <button className="w-full flex justify-center items-center gap-2 border border-primary text-primary font-semibold py-3.5 rounded-lg hover:bg-black/5 transition-colors">
                  <MdCall className="text-[20px]" />
                  Request Callback
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 flex justify-center items-center gap-2 border border-outline-variant text-on-surface font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <MdHelpOutline className="text-[20px]" />
                    Question
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#20b858] transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-on-surface-variant mt-6 text-center leading-relaxed">
                *This is an estimate based on standard assumptions. Final price is confirmed after site survey. VAT included.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
