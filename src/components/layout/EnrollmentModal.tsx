import React, { useState, useEffect } from "react";
import { useEnrollment } from "../../context/EnrollmentContext";
import { 
  X, 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Award, 
  Check, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  HelpCircle,
  FileText,
  BookmarkCheck,
  CalendarDays
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function EnrollmentModal() {
  const { isOpen, selectedCourse, closeEnrollment } = useEnrollment();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    course: "",
    targetScore: "7.5",
    fullName: "",
    phone: "",
    email: "",
    proficiency: "Intermediate",
    preferredTime: "Evening",
    classMode: "Online",
    mockTest: true
  });

  // Pre-fill course when modal opens with context
  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, course: selectedCourse }));
    } else {
      setFormData(prev => ({ ...prev, course: "IELTS Preparation" }));
    }
  }, [selectedCourse, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnrollment();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnrollment]);

  if (!isOpen) return null;

  const updateField = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.course) return;
    if (step === 2 && (!formData.fullName || !formData.phone)) {
      alert("অনুগ্রহ করে আপনার নাম এবং ফোন নম্বর প্রদান করুন।\nPlease provide both your name and phone number.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real database or API submission with elegant delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setIsSuccess(false);
    closeEnrollment();
  };

  const registrationId = `SABBIR-IELTS-${Math.floor(100000 + Math.random() * 900000)}`;

  // Steps indicators
  const stepsList = [
    { title: "কোর্স নির্বাচন", sub: "Course Details" },
    { title: "ব্যক্তিগত তথ্য", sub: "Personal Info" },
    { title: "ক্লাস শিডিউল", sub: "Preferred Batch" }
  ];

  return (
    <AnimatePresence>
      <div id="enrollment-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        
        {/* Modal Window Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-blue-50 relative z-50 my-8"
        >
          {/* Header Bar */}
          <div className="bg-[#00174e] text-white px-6 py-5 md:px-8 md:py-6 flex justify-between items-center relative overflow-hidden">
            {/* Subtle light design overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_right,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 flex items-center gap-3">
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight">অ্যাডমিশন ও ফ্রি বুটক্যাম্প রেজিস্ট্রেশন</h3>
                <p className="font-sans text-xs text-[#d0e1fd]">SabbirIELTS Academy Interactive Form</p>
              </div>
            </div>

            <button 
              onClick={closeEnrollment}
              className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors relative z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col">
              
              {/* Steps Progress bar */}
              <div className="border-b border-gray-100 bg-[#eef5fc]/30 px-6 py-4 md:px-8">
                <div className="flex justify-between items-center">
                  {stepsList.map((s, index) => {
                    const stepNum = index + 1;
                    const isCompleted = step > stepNum;
                    const isCurrent = step === stepNum;
                    return (
                      <div key={index} className="flex items-center flex-1 last:flex-none">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isCompleted 
                              ? "bg-green-500 text-white" 
                              : isCurrent 
                              ? "bg-[#00174e] text-white ring-4 ring-blue-100" 
                              : "bg-gray-100 text-gray-400"
                          }`}>
                            {isCompleted ? <Check size={14} /> : stepNum}
                          </div>
                          <div className="hidden sm:block text-left">
                            <span className={`block text-xs font-serif font-bold ${isCurrent ? "text-[#00174e]" : "text-gray-400"}`}>
                              {s.title}
                            </span>
                            <span className="block text-[10px] text-gray-400 font-sans tracking-tight">
                              {s.sub}
                            </span>
                          </div>
                        </div>
                        {index < stepsList.length - 1 && (
                          <div className="flex-grow mx-4 h-0.5 max-sm:mx-2 bg-gray-100">
                            <div className={`h-full bg-[#00174e] transition-all duration-500`} style={{ width: step > stepNum ? "100%" : "0%" }}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Form Pages Container */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                
                {/* PAGE 1: Course Selection and Goals */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label className="block text-sm font-serif font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                        <BookOpen size={16} className="text-[#00174e]/70" />
                        আপনার কাঙ্ক্ষিত কোর্সটি নির্বাচন করুন <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-gray-400 font-sans mb-3 font-medium">Select the learning pathway you want to prepare for</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { name: "IELTS Preparation", desc: "For Academic & GT", icon: "🇬🇧" },
                          { name: "Spoken English", desc: "Fluency & Presentation", icon: "💬" },
                          { name: "Global Education", desc: "Study Abroad Help", icon: "✈️" }
                        ].map((item) => {
                          const isSelected = formData.course === item.name;
                          return (
                            <button
                              type="button"
                              key={item.name}
                              onClick={() => updateField("course", item.name)}
                              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer flex flex-col gap-1 ${
                                isSelected 
                                  ? "border-[#00174e] bg-[#eef5fc] shadow-md" 
                                  : "border-gray-200 hover:border-gray-300 hover:bg-neutral-50"
                              }`}
                            >
                              <span className="text-2xl mb-1">{item.icon}</span>
                              <span className="font-serif font-bold text-sm text-[#00174e] block">{item.name}</span>
                              <span className="font-sans text-[10px] text-gray-400 block">{item.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                        <Award size={16} className="text-[#00174e]/70" />
                        আপনার টার্গেট স্কোর / দক্ষতা লেভেল <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-gray-400 font-sans mb-3 font-medium">What is your targeted IELTS Score or Fluency ambition?</p>
                      
                      {formData.course === "Spoken English" ? (
                        <div className="grid grid-cols-3 gap-3">
                          {["Basic Fluency", "Professional", "Advanced Public Speaking"].map((level) => (
                            <button
                              type="button"
                              key={level}
                              onClick={() => updateField("targetScore", level)}
                              className={`py-3 px-1.5 text-center text-xs font-sans font-semibold rounded-lg border transition-all cursor-pointer ${
                                formData.targetScore === level
                                  ? "bg-[#00174e] text-white border-[#00174e]"
                                  : "border-gray-200 text-gray-600 hover:border-gray-300"
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-5 gap-2">
                          {["6.0", "6.5", "7.0", "7.5", "8.0+"].map((score) => (
                            <button
                              type="button"
                              key={score}
                              onClick={() => updateField("targetScore", score)}
                              className={`py-3 text-center text-xs font-mono font-bold rounded-lg border transition-all cursor-pointer ${
                                formData.targetScore === score
                                  ? "bg-[#00174e] text-white border-[#00174e]"
                                  : "border-gray-200 text-gray-600 hover:border-gray-300"
                              }`}
                            >
                              IELTS {score}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* PAGE 2: Personal Contact Information */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label className="block text-sm font-serif font-bold text-[#00174e] mb-2.5 flex items-center gap-1.5">
                        <User size={16} className="text-[#00174e]/70" />
                        শিক্ষার্থীর সম্পূর্ণ নাম <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="উদাঃ সাব্বির আহমেদ (e.g. Sabbir Ahmed)"
                          value={formData.fullName}
                          onChange={(e) => updateField("fullName", e.target.value)}
                          className="w-full border border-gray-300 focus:border-[#00174e] focus:ring-1 focus:ring-[#00174e] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-serif font-bold text-[#00174e] mb-2.5 flex items-center gap-1.5">
                          <Phone size={16} className="text-[#00174e]/70" />
                          মোবাইল নম্বর <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="উদাঃ 01712-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full border border-gray-300 focus:border-[#00174e] focus:ring-1 focus:ring-[#00174e] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-serif font-bold text-[#00174e] mb-2.5 flex items-center gap-1.5">
                          <Mail size={16} className="text-[#00174e]/70" />
                          ইমেইল এড্রেস
                        </label>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="w-full border border-gray-300 focus:border-[#00174e] focus:ring-1 focus:ring-[#00174e] rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-bold text-[#00174e] mb-2 flex items-center gap-1.5">
                        <HelpCircle size={16} className="text-[#00174e]/70" />
                        আপনার বর্তমান ইংরেজি দক্ষতা কেমন মনে করেন?
                      </label>
                      <p className="text-xs text-gray-400 font-sans mb-3 font-medium">Your perceived initial level of English capacity</p>
                      <div className="grid grid-cols-3 gap-3">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => {
                          const isSel = formData.proficiency === level;
                          return (
                            <button
                              type="button"
                              key={level}
                              onClick={() => updateField("proficiency", level)}
                              className={`py-2 px-1 border-2 text-xs font-sans font-bold rounded-xl transition-all cursor-pointer ${
                                isSel 
                                  ? "border-[#00174e] bg-[#eef5fc] text-[#00174e]" 
                                  : "border-gray-200 text-gray-500 hover:border-gray-300"
                              }`}
                            >
                              {level}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* PAGE 3: Slots and confirmation config */}
                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-serif font-bold text-[#00174e] mb-2.5 flex items-center gap-1.5">
                          <Clock size={16} className="text-[#00174e]/70" />
                          পছন্দসই ক্লাসের সময়সূচী <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => updateField("preferredTime", e.target.value)}
                          className="w-full border border-gray-300 focus:border-[#00174e] rounded-xl px-4 py-3 text-sm font-sans outline-none bg-white font-medium text-gray-700"
                        >
                          <option value="Morning">সকাল ১০:০০ - ১২:০০ (Morning Batch)</option>
                          <option value="Afternoon">বিকাল ০৩:০০ - ০৫:০০ (Afternoon Batch)</option>
                          <option value="Evening">সন্ধ্যা ০৭:০০ - ০৯:০০ (Evening/Corporate Batch)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-serif font-bold text-[#00174e] mb-2.5 flex items-center gap-1.5">
                          <MapPin size={16} className="text-[#00174e]/70" />
                          ক্লাসের ধরন (Class Mode) <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.classMode}
                          onChange={(e) => updateField("classMode", e.target.value)}
                          className="w-full border border-gray-300 focus:border-[#00174e] rounded-xl px-4 py-3 text-sm font-sans outline-none bg-white font-medium text-gray-700"
                        >
                          <option value="Online">অনলাইন লাইভ ক্লাস (Interactive Digital App)</option>
                          <option value="Offline">অফলাইন সরাসরি ক্লাস (Dhaka, Bangladesh Campus)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#eef5fc]/60 p-4 rounded-2xl border border-blue-50/70 flex items-start gap-4">
                      <div className="mt-1">
                        <input
                          id="mockTestCheckbox"
                          type="checkbox"
                          checked={formData.mockTest}
                          onChange={(e) => updateField("mockTest", e.target.checked)}
                          className="w-5 h-5 accent-[#00174e] rounded cursor-pointer"
                        />
                      </div>
                      <div>
                        <label htmlFor="mockTestCheckbox" className="font-serif font-bold text-sm text-[#00174e] cursor-pointer flex items-center gap-1">
                          আমি ১টি ফ্রি রিডিং ও রাইটিং মক টেস্ট দিতে আগ্রহী
                        </label>
                        <p className="font-sans text-xs text-gray-500 leading-relaxed mt-0.5">
                          Check here to enroll in our free diagnostical evaluation test on Cambridge Standard questions completely free.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[10px] text-gray-400 font-sans text-center">
                        রেজিস্ট্রেশন বাটনে টাচ করার মাধ্যমে আপনি SabbirIELTS Academy-র নিয়ম ও শর্তাবলীতে সম্মত হচ্ছেন।
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 md:px-8 md:py-5 flex justify-between items-center rounded-b-3xl">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-sans text-sm font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    পূর্ববর্তী (Back)
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#00174e] hover:bg-[#082264] text-white font-sans text-sm font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>পরবর্তী ধাপ</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-serif text-sm font-bold px-8 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>প্রসেস হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>কনফার্ম সাবমিট করুন</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* SUCCESS STATEMENT PAGE (MULTISTEP COMPLETED) */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center flex flex-col items-center gap-6"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 bg-green-200/40 rounded-full animate-ping opacity-60"></div>
                <BookmarkCheck size={40} className="text-green-500 relative z-10" />
              </div>

              <div>
                <span className="text-xs bg-green-100 text-green-800 font-sans font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3 inline-block">
                  Registration Confirmed
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#00174e]">অভিনন্দন! রেজিস্ট্রেশন সম্পন্ন হয়েছে।</h3>
                <p className="font-sans text-gray-500 text-sm mt-2 max-w-lg leading-relaxed">
                  আপনার আসনটি সুরক্ষিত করা হয়েছে। আমাদের ভর্তি বিষয়ক কনসালটেন্ট পরবর্তী ২৪ ঘণ্টার মধ্যে আপনাকে ফোন কলের মাধ্যমে যোগাযোগ করবেন।
                </p>
              </div>

              {/* Printable Interactive Ticket Card */}
              <div className="w-full bg-[#f8fbfa] border-2 border-dashed border-gray-200 rounded-3xl p-6 text-left relative overflow-hidden max-w-md shadow-sm">
                <div className="absolute top-0 right-0 py-1.5 px-4 bg-green-600 text-white text-[9px] font-sans font-extrabold uppercase tracking-wider rounded-bl-xl">
                  Verified Seat
                </div>
                
                <h4 className="font-serif text-brand-navy font-bold text-base mb-4 border-b pb-3 border-gray-100 flex items-center gap-1.5 text-[#00174e]">
                  <FileText size={16} />
                  রেজিস্ট্রেশন স্লিপ / Reciept Slip
                </h4>

                <div className="grid grid-cols-2 gap-y-3 gap-x-1 text-xs font-sans">
                  <div>
                    <span className="text-gray-400 block text-[10px]">APPLICATION ID</span>
                    <span className="font-mono font-bold text-[#00174e]">{registrationId}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">NAME</span>
                    <span className="font-serif font-bold text-[#00174e]">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">COURSE</span>
                    <span className="font-serif font-bold text-[#00174e]">{formData.course}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">CONTACT NO</span>
                    <span className="font-mono font-bold text-[#00174e]">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">BATCH TIMING</span>
                    <span className="font-sans font-bold text-[#00174e] flex items-center gap-1">
                      <Clock size={12} className="text-gray-400" />
                      {formData.preferredTime}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">CLASS MODE</span>
                    <span className="font-sans font-bold text-[#00174e] flex items-center gap-1">
                      <MapPin size={12} className="text-gray-400" />
                      {formData.classMode}
                    </span>
                  </div>
                </div>

                {formData.mockTest && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-[10px] text-green-700 bg-green-50/50 p-2 rounded-lg font-sans font-bold">
                    <Check size={14} className="shrink-0" />
                    <span>১টি ফ্রি মক টেস্ট এবং স্টাডি মেটেরিয়াল বরাদ্দ করন সফল!</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3 justify-center w-full max-w-md pt-2">
                <button
                  onClick={resetForm}
                  className="w-full bg-[#00174e] hover:bg-[#082264] text-white font-sans font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-md text-sm uppercase tracking-wider"
                >
                  ঠিক আছে (Close Window)
                </button>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
