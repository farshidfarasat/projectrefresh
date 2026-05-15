import { useState, useEffect } from "react";
import { MdClose, MdCheckCircle } from "react-icons/md";

export default function CallbackModal({ isOpen, onClose, quoteSummary }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setSubmitted(false);
    }
  }, [isOpen]);

  const isFormValid = () => {
    const phoneDigits = phone.replace(/\D/g, "");
    return name.trim() !== "" && phoneDigits.length >= 10;
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    // TODO: send to n8n webhook — payload: { name, phone, type: "callback", quoteSummary }
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-1 hover:bg-neutral-100 rounded-full transition cursor-pointer"
        >
          <MdClose size={22} className="text-neutral-500" />
        </button>

        <h2 className="text-xl font-semibold">Request a Call</h2>
        <p className="text-sm text-neutral-500 mt-1">We'll call you within 1 working hour</p>

        {submitted ? (
          <div className="mt-5">
            <MdCheckCircle size={56} className="text-green-500 mt-4 mx-auto block" />
            <h3 className="text-lg font-semibold text-center mt-4">Call Requested</h3>
            <p className="text-sm text-neutral-600 text-center mt-2">
              We'll call you on {phone} within 1 working hour.
            </p>
            <div className="mt-6 space-y-2">
              <button 
                onClick={onClose}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition cursor-pointer"
              >
                Done
              </button>
              <a 
                href="sms:+447758690085" 
                className="block text-center text-sm text-neutral-500 underline hover:text-neutral-700 transition cursor-pointer"
              >
                Prefer to text? Message us
              </a>
            </div>
          </div>
        ) : (
          <>
            {quoteSummary && (
              <div className="bg-neutral-50 rounded-lg p-3 mt-4 text-sm flex justify-between items-center">
                <span className="text-neutral-700">
                  {quoteSummary.type} · {quoteSummary.size} · {quoteSummary.package}
                </span>
                <span className="font-semibold">£{quoteSummary.price.toLocaleString()}</span>
              </div>
            )}
            
            <div className="mt-5 space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Your name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone number</label>
                <input 
                  type="tel" 
                  placeholder="07712 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-black transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className={`w-full py-3.5 rounded-lg font-semibold transition ${
                  isFormValid() ? "bg-black text-white hover:bg-neutral-800 cursor-pointer" : "bg-black text-white opacity-50 cursor-not-allowed"
                }`}
              >
                Request Call
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
