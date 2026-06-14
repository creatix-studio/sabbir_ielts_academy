import React, { useState, useEffect } from "react";
import { useEnrollment } from "../../context/EnrollmentContext";
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  FileText, 
  Check, 
  Send,
  MessageSquare,
  Sparkles,
  ClipboardList
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function ContactModal() {
  const { isContactOpen, closeContact } = useEnrollment();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Contact Form Fields State
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phoneNumber: "",
    subject: "Admission Inquiry",
    notes: ""
  });

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    if (isContactOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isContactOpen, closeContact]);

  if (!isContactOpen) return null;

  const updateField = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phoneNumber || !formData.subject) {
      alert("অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।\nPlease fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate real database or API submission with elegant delay
    setTimeout(() => {
      // Store to local history to show data collection is functional
      try {
        const stored = localStorage.getItem("sabbir_contact_data");
        const list = stored ? JSON.parse(stored) : [];
        const newRecord = {
          ...formData,
          id: `CNT-${Date.now()}`,
          date: new Date().toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        list.push(newRecord);
        localStorage.setItem("sabbir_contact_data", JSON.stringify(list));
      } catch (err) {
        console.error("Local storage error:", err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      email: "",
      phoneNumber: "",
      subject: "Admission Inquiry",
      notes: ""
    });
    setIsSuccess(false);
    closeContact();
  };

  const contactRefId = `SABBIR-CONTACT-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <AnimatePresence>
      <div id="contact-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        
        {/* Modal Window Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-blue-50 relative z-50 my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#580c10] text-white px-6 py-5 md:px-8 md:py-6 flex justify-between items-center relative overflow-hidden">
            {/* Subtle academic background motif */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_right,_white_1px,_transparent_1px)] bg-[size:16px_16px]"></div>
            
            <div className="relative z-10 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <MessageSquare size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight">যোগাযোগ ও জিজ্ঞাসা ফোরাম</h3>
                <p className="font-sans text-xs text-[#ffd1d3]">Contact & General Inquiry Form</p>
              </div>
            </div>

            <button 
              onClick={closeContact}
              className="text-white/85 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-10 cursor-pointer"
              aria-label="Close contact modal"
            >
              <X size={20} />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col">
              
              {/* Context bar inside form */}
              <div className="bg-[#ffd1d3]/20 border-b border-[#ffd1d3]/30 px-6 py-3.5 md:px-8 font-sans text-xs text-[#580c10] font-semibold flex items-center gap-2">
                <span className="w-2- h-2 rounded-full bg-red-600 animate-pulse shrink-0 w-2 h-2"></span>
                <span>অনুগ্রহ করে নিচের তথ্যগুলো বাংলায় অথবা ইংরেজিতে টাইপ করুন।</span>
              </div>

              {/* Form Input fields */}
              <div className="p-6 md:p-8 flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
                
                {/* studentName Field */}
                <div>
                  <label className="block text-xs md:text-sm font-sans font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                    <User size={15} className="text-[#580c10]" />
                    STUDENT NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="আপনার সম্পূর্ণ নাম লিখুন (Full Name)"
                    value={formData.studentName}
                    onChange={(e) => updateField("studentName", e.target.value)}
                    className="w-full border border-gray-300 focus:border-[#580c10] focus:ring-1 focus:ring-[#580c10] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                  />
                </div>

                {/* email and phoneNumber layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* phoneNumber Field */}
                  <div>
                    <label className="block text-xs md:text-sm font-sans font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                      <Phone size={15} className="text-[#580c10]" />
                      PHONE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="মোবাইল নম্বর (e.g. 017XXXXXXXX)"
                      value={formData.phoneNumber}
                      onChange={(e) => updateField("phoneNumber", e.target.value)}
                      className="w-full border border-gray-300 focus:border-[#580c10] focus:ring-1 focus:ring-[#580c10] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* email Field (optional) */}
                  <div>
                    <label className="block text-xs md:text-sm font-sans font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                      <Mail size={15} className="text-[#580c10]" />
                      EMAIL <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="ইমেইল অ্যাড্রেস (your@email.com)"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full border border-gray-300 focus:border-[#580c10] focus:ring-1 focus:ring-[#580c10] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* SUBJECT Field */}
                <div>
                  <label className="block text-xs md:text-sm font-sans font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                    <BookOpen size={15} className="text-[#580c10]" />
                    SUBJECT <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className="w-full border border-gray-300 focus:border-[#580c10] focus:ring-1 focus:ring-[#580c10] rounded-xl px-4 py-3 text-sm font-sans outline-none bg-white font-medium text-gray-700"
                  >
                    <option value="Admission Inquiry">ভর্তি সংক্রান্ত জিজ্ঞাসা (Admission Inquiry)</option>
                    <option value="IELTS Course Outlines">আইএলটিএস কোর্স প্ল্যান (IELTS Course Outlines)</option>
                    <option value="Spoken English Batch">স্পোকেন ইংলিশ ব্যাচ (Spoken English Batch)</option>
                    <option value="Study Abroad Consultation">বিদেশে উচ্চশিক্ষা পরামর্শ (Study Abroad Consultation)</option>
                    <option value="Technical Support">অন্যান্য প্রশ্ন (Other Questions / Support)</option>
                  </select>
                </div>

                {/* NOTES Field */}
                <div>
                  <label className="block text-xs md:text-sm font-sans font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                    <FileText size={15} className="text-[#580c10]" />
                    NOTES <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="আপনার বার্তা বা প্রশ্নটি এখানে বিস্তারিত লিখুন..."
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="w-full border border-gray-300 focus:border-[#580c10] focus:ring-1 focus:ring-[#580c10] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors resize-none"
                  />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 md:px-8 md:py-5 flex justify-end gap-3 rounded-b-3xl">
                <button
                  type="button"
                  onClick={closeContact}
                  className="px-5 py-2.5 border border-gray-300 hover:bg-gray-100 text-gray-700 font-sans text-xs md:text-sm font-bold rounded-xl transition-colors cursor-pointer"
                >
                  বাতিল করুন (Cancel)
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#580c10] hover:bg-[#8b151b] disabled:bg-gray-400 text-white font-sans text-xs md:text-sm font-bold px-7 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>সেন্ড হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>SUBMIT</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* SUCCESS STATEMENT / INFORMATION COLLECTED */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center flex flex-col items-center gap-5"
            >
              <div className="w-16 h-16 bg-[#ffd1d3]/30 rounded-full flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 bg-[#ffd1d3]/50 rounded-full animate-ping opacity-50"></div>
                <Check size={32} className="text-[#580c10] relative z-10 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[10px] bg-[#ffd1d3] text-[#580c10] font-sans font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block">
                  Message Collected
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#00174e]">আপনার বার্তাটি সফলভাবে জমা হয়েছে।</h3>
                <p className="font-sans text-xs md:text-sm text-gray-500 mt-1 max-w-sm leading-relaxed">
                  ধন্যবাদ! আপনার জিজ্ঞাসা রেকর্ড করা হয়েছে। একাডেমির একজন প্রতিনিধি অতি শীঘ্রই আপনার সাথে ইনবক্স বা সরাসরি কল ব্যাক করে যোগাযোগ করবেন।
                </p>
              </div>

              {/* Data Slips showing collected values */}
              <div className="w-full bg-[#fcf8f8] border border-dashed border-[#ffd1d3] rounded-2xl p-5 text-left relative overflow-hidden max-w-sm shadow-inner">
                <div className="absolute top-0 right-0 py-1 px-3 bg-[#580c10] text-[#ffd1d3] text-[9px] font-sans font-extrabold uppercase tracking-wider rounded-bl-xl">
                  LIVE STATUS
                </div>

                <h4 className="font-sans font-bold text-xs text-[#00174e] border-b pb-2 mb-3 border-gray-100 flex items-center gap-1.5">
                  <ClipboardList size={14} className="text-[#580c10]" />
                  Collected Information (স্লিপ)
                </h4>

                <div className="flex flex-col gap-2 text-xs font-sans">
                  <div>
                    <span className="text-gray-400 block text-[9px]">STUDENT NAME</span>
                    <span className="font-bold text-[#580c10]">{formData.studentName}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-gray-400 block text-[9px]">PHONE NUMBER</span>
                      <span className="font-mono font-semibold text-gray-800">{formData.phoneNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px]">EMAIL</span>
                      <span className="font-mono font-medium text-gray-600 truncate block">
                        {formData.email || <span className="text-gray-400 italic font-mono">Not Provided</span>}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[9px]">SUBJECT</span>
                    <span className="font-semibold text-gray-700">{formData.subject}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[9px]">NOTES</span>
                    <p className="font-sans text-gray-600 leading-relaxed text-xs bg-white border border-gray-100 p-2 rounded-lg mt-0.5 max-h-24 overflow-y-auto">
                      {formData.notes}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="w-full max-w-sm bg-[#580c10] hover:bg-[#8b151b] text-white font-sans font-bold py-3 rounded-xl transition-all cursor-pointer shadow-md text-xs sm:text-sm uppercase tracking-wider mt-2"
              >
                পড়া শেষ (Close)
              </button>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
