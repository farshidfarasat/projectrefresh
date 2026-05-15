import { useState, useEffect, useMemo } from "react";
import { MdClose, MdCheckCircle } from "react-icons/md";

export default function BookingModal({ isOpen, onClose, quoteSummary }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
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
      setSelectedDate(null);
      setSelectedSlot(null);
      setName("");
      setPhone("");
      setSubmitted(false);
    }
  }, [isOpen]);

  const dates = useMemo(() => {
    const d = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // Start tomorrow

    while (d.length < 14) {
      if (currentDate.getDay() !== 0) { // 0 is Sunday
        d.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return d;
  }, []);

  const isFormValid = () => {
    const phoneDigits = phone.replace(/\D/g, "");
    return selectedDate && selectedSlot && name.trim() !== "" && phoneDigits.length >= 10;
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;
    // TODO: send to n8n webhook — payload: { name, phone, date, slot, quoteSummary }
    setSubmitted(true);
  };

  const formatDate = (d) => {
    if (!d) return "";
    return d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  const formatTimeRange = (slot) => {
    return slot === "morning" ? "10:00 – 14:00" : "16:00 – 20:00";
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
          className="absolute top-4 right-4 p-1 hover:bg-neutral-100 rounded-full transition"
        >
          <MdClose size={22} className="text-neutral-500" />
        </button>

        <h2 className="text-xl font-semibold">Book a Site Visit</h2>
        <p className="text-sm text-neutral-500 mt-1">Free, no obligation — takes 30 minutes</p>

        {submitted ? (
          <div className="mt-5">
            <MdCheckCircle size={56} className="text-green-500 mt-4 mx-auto block" />
            <h3 className="text-lg font-semibold text-center mt-4">Appointment Requested</h3>
            <p className="text-sm text-neutral-600 text-center mt-2">
              We'll confirm your visit on {formatDate(selectedDate)} between {formatTimeRange(selectedSlot)} shortly. Expect a text from us within an hour.
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
                className="block text-center text-sm text-neutral-500 underline hover:text-neutral-700 transition"
              >
                Need to change something? Text us
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
                <label className="text-sm font-medium mb-2 block">Pick a date</label>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {dates.map((date, idx) => {
                    const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 w-16 py-2.5 rounded-lg border text-center cursor-pointer transition ${
                          isSelected ? "bg-black text-white border-black" : "bg-white border-neutral-200 hover:bg-neutral-50"
                        }`}
                      >
                        <div className={`text-xs ${isSelected ? "text-white/70" : "text-neutral-500"}`}>
                          {date.toLocaleDateString("en-GB", { weekday: 'short' })}
                        </div>
                        <div className="text-base font-semibold">
                          {date.getDate()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Pick a time</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedSlot("morning")}
                    className={`rounded-lg py-3 px-4 border text-left transition ${
                      selectedSlot === "morning" ? "bg-black text-white border-black" : "bg-white border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    <div className={`text-xs ${selectedSlot === "morning" ? "text-white/70" : "text-neutral-500"}`}>Morning</div>
                    <div className="text-base font-semibold">10:00 – 14:00</div>
                  </button>
                  <button
                    onClick={() => setSelectedSlot("afternoon")}
                    className={`rounded-lg py-3 px-4 border text-left transition ${
                      selectedSlot === "afternoon" ? "bg-black text-white border-black" : "bg-white border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    <div className={`text-xs ${selectedSlot === "afternoon" ? "text-white/70" : "text-neutral-500"}`}>Afternoon</div>
                    <div className="text-base font-semibold">16:00 – 20:00</div>
                  </button>
                </div>
              </div>

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
                Confirm Appointment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
