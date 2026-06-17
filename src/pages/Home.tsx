import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MonitorPlay, BookOpen, Globe, CheckCircle2, School, MessageSquare, Plane, ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { useEnrollment } from "../context/EnrollmentContext";
import { FAQSection } from "../components/FAQ";
import { TestimonialsSection } from "../components/Testimonials";
import { StudyAbroadBanner } from "../components/StudyAbroadBanner";
import { motion } from "motion/react";

const OFFLINE_COURSES = [
  {
    id: "off1",
    title: "Basic to IELTS",
    tag: "BEGINNER",
    duration: "4.5–6.5 Months",
    classes: "76+",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "off2",
    title: "IELTS Focus",
    tag: "INTERMEDIATE",
    isPopular: true,
    duration: "2.5–5 Months",
    classes: "52+",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "off3",
    title: "IELTS Crash",
    tag: "INTENSIVE",
    duration: "1.5 Months",
    classes: "31+",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "off4",
    title: "PTE Focus",
    tag: "INTENSIVE",
    duration: "2 Months",
    classes: "18",
    image: "https://images.unsplash.com/photo-1496181130204-755241544e3f?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "off5",
    title: "Spoken English",
    tag: "ALL LEVELS",
    duration: "3 Months",
    classes: "50",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop"
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const { openEnrollment, openContact } = useEnrollment();

  const services = [
    {
      id: "01",
      icon: GraduationCap,
      title: "IELTS Preparation",
      tags: "Academic IELTS • General Training • Live Speaking & Vocabulary",
      description: [
        "IELTS কিন্তু শুধু একটা পরীক্ষা না, এইটা একটা যুদ্ধক্ষেত্র।",
        "যেখানে আপনাকে Planning করে জিততে হবে। আপনি অনেক Brilliant বা গায়ের জোরে এই যুদ্ধে জিতবেন না।",
        "আপনি Cambridge বই এ হাত দেওয়ার আগে প্রত্যেকটা Module এর কাজটা কি, কোন সমস্যার আপনি সম্মুখীন হবেন আর আপনার Strategy কি হওয়া দরকার, সেটা আগেই ঠিক করে নিতে হবে।",
        "কখন Scan করবেন আর কখন Skim করবেন, সেটাও জানতে হবে।",
        "বাজারে হাজার ডজন ডাক্তার আছে। কিন্তু দিনশেষে আপনাকে ঠিক করতে হবে কার ঔষুধ খাবেন।",
        "সঠিক মানুষের হাতে না পড়লে লোক দেখানো ট্রিকস এন্ড কি ওয়ার্ড শিখে আপনার IELTS Preparation হবে পাহাড়সম কঠিন।",
        "একটি ফ্রি ক্লাস করে বুঝে নিন IELTS এ ভালো রেজাল্ট করার সকল রহস্য।",
        "ফ্রি ক্লাসটি করতে আজই যোগাযোগ করুন।"
      ],
      btnLabel: "BOOK YOUR FREE CLASS",
      onClickAction: () => openEnrollment("Free IELTS Class"),
      link: "/ielts",
      activeBg: "bg-[#eef5fc]", // Soft blue/slate
      activeText: "text-[#00174e]",
      accentBorder: "border-[#00174e]",
      btnBorderHoverColors: "hover:bg-[#00174e] hover:text-white"
    },
    {
      id: "02",
      icon: MessageSquare,
      title: "Spoken English",
      tags: "Fluency Booster • Professional Presentation • Pronunciation Practice • Real-life Conversations",
      description: [
        "ইংরেজি ভাষা শিখার জন্য লাগে দুইটা জিনিস:",
        "একটি হলো বাক্য আর একটি হলো কথা বলার সেন্স।",
        "এখন কথা হলো বাক্য কিভাবে বানাবো?",
        "উত্তর হলো বাক্য কি দিয়ে শুরু করতে হবে এবং কি দিয়ে শেষ করতে হবে; সে ফর্মুলা জানতে হবে।",
        "আর একটি সমস্যা হলো কোন সময় কোন Verb বসাবো।",
        "কারণ Verb এর তো অনেক রুপ হয় ( Go, goes, gone, going)",
        "উত্তর হলো সঠিক Verb বসানোর জন্য আপনাকে বুঝতে হবে আপনি তখন কোন সিচুয়েশনে এ আছেন।",
        "এতো কিছু বলার পরেও যদি না বুঝতে পারেন; একটি ফ্রি ক্লাসের জন্য আজি রেজিষ্টেশন করুন এবং নিজের জীবন থেকে আর দুইটি মিনিট ব্যায় করে এখনি কল করুন"
      ],
      btnLabel: "BOOK YOUR FREE CLASS",
      onClickAction: () => openEnrollment("Free Spoken English Class"),
      link: "/spoken-english",
      activeBg: "bg-[#EDB0B3]", // Custom requested coral-rose pastel
      activeText: "text-[#2d0f11]",
      accentBorder: "border-[#2d0f11]",
      btnBorderHoverColors: "hover:bg-[#2d0f11] hover:text-white"
    },
    {
      id: "03",
      icon: Plane,
      title: "Global Education",
      tags: "University Selection • Scholarship Counselling • Visa Processing Support",
      description: "যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা ও অস্ট্রেলিয়ায় উচ্চশিক্ষার জন্য বিশ্ববিদ্যালয় নির্বাচন থেকে শুরু করে ভিসা প্রসেসিং পর্যন্ত সম্পূর্ণ সহায়তা। অভিজ্ঞ কনসালটেন্টদের সাথে আপনার ফাইল নিরাপদে প্রসেস করুন।",
      btnLabel: "BOOK FREE COUNSELING",
      link: "/services",
      activeBg: "bg-[#fcf0f2]", // Soft pale pink/rose
      activeText: "text-[#581c20]",
      accentBorder: "border-[#581c20]",
      btnBorderHoverColors: "hover:bg-[#581c20] hover:text-white"
    }
  ];

  const slides = [
    "https://res.cloudinary.com/de67njaee/image/upload/v1781095405/zjcxs6fbh8rax3caext2_txkjma.webp",
    "https://res.cloudinary.com/de67njaee/image/upload/v1781095402/w78tucjolclgqcrquun5_m2nyr5.webp",
    "https://res.cloudinary.com/de67njaee/image/upload/v1781095404/owdun28sxmpp7jmwmrp2_gckoko.webp",
    "https://res.cloudinary.com/de67njaee/image/upload/v1781095403/u9bnwi6ttub5rdbwp7n9_wmjtwt.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="flex-grow pt-[56px] md:pt-[110px]">
      {/* Premium Hero Banner (Academic Style) */}
      <section className="relative bg-[#d02830] text-center pt-20 pb-32 md:pt-28 md:pb-52 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative background pattern */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-28 -mt-28"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-black/15 rounded-full blur-3xl -mr-32 -mb-32"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.12] tracking-tight max-w-4xl">
            গায়ের জোরে নয় <span className="font-grotesk italic tracking-wide text-[#fcd8da]">Planning</span> করে IELTS- এ সফল হোন
          </h1>
          
          <p className="font-sans text-base md:text-xl text-[#fcd8da] mt-6 max-w-2xl opacity-95 leading-relaxed">
            বাংলাদেশের শিক্ষার্থীদের জন্য আমরা সহজ ভাষায় মানসম্পন্ন IELTS প্রস্তুতি, স্পোকেন ইংলিশ ও গ্লোবাল এডুকেশন সাপোর্ট প্রদান করি।
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <button 
              onClick={() => openEnrollment("IELTS Preparation")}
              className="bg-white text-[#d02830] px-8 py-4 font-grotesk font-bold text-sm uppercase tracking-wider hover:bg-[#a01a20] hover:text-white hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center rounded shadow-lg cursor-pointer"
            >
              Admission Open
            </button>
            <a 
              href="#mock-test" 
              className="border-2 border-white/60 bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-grotesk font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-[#d02830] hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center rounded"
            >
              MOC TEST
            </a>
          </div>
        </motion.div>
      </section>

      {/* Overlapping Hero Image Slideshow Section */}
      <motion.section 
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 -mt-20 md:-mt-36 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto rounded-[12px] sm:rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 sm:border-4 md:border-8 border-white/25 hover:border-white/55 transition-all duration-300 transform hover:scale-[1.002] bg-white relative w-full aspect-[16/9]">
          {slides.map((slide, idx) => (
            <img 
              key={slide}
              src={slide} 
              alt={`SabbirIELTS Academy graduates slide ${idx + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
              referrerPolicy="no-referrer"
            />
          ))}
          
          {/* Subtle dots indicator at the bottom of the slideshow */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80 w-2"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Redesigned Quick Stats Bar underneath the Overlapping Image */}
      <motion.section 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-8 bg-surface-bright border-b border-outline-variant"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#00174e]">
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/30 transition-colors">
              <div className="bg-blue-50/70 p-3 rounded-lg">
                <MonitorPlay size={24} className="text-[#00174e]" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold">লাইভ ক্লাস</span>
                <span className="font-sans text-xs text-on-surface-variant">ইন্টার‌্যাকটিভ ডিজিটাল কন্টেন্ট</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/30 transition-colors">
              <div className="bg-blue-50/70 p-3 rounded-lg">
                <BookOpen size={24} className="text-[#00174e]" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold">Cambridge স্ট্যান্ডার্ড</span>
                <span className="font-sans text-xs text-on-surface-variant">সম্পূর্ণ অফিসিয়াল মেটেরিয়াল</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50/30 transition-colors">
              <div className="bg-blue-50/70 p-3 rounded-lg">
                <Globe size={24} className="text-[#00174e]" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold">গ্লোবাল এডুকেশন</span>
                <span className="font-sans text-xs text-on-surface-variant">নিশ্চিত গ্লোবাল অ্যাডমিশন সাপোর্ট</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section with Interactive List */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-surface-container-low overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-red font-grotesk text-sm font-bold uppercase tracking-widest mb-4">আমাদের সেবাসমূহ</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#00174e] mb-6">আপনার কাঙ্ক্ষিত লক্ষ্য অর্জনে আমাদের বিশেষায়িত সেবা</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          {/* Interactive Stacked Service Cards */}
          <div className="bg-white rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden border border-outline-variant/60 mb-16 animate-fade-in">
            {services.map((service, idx) => {
              const isActive = activeService === idx;
              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  onMouseEnter={() => setActiveService(idx)}
                  onClick={() => setActiveService(idx)}
                  className={`relative border-b last:border-b-0 border-outline-variant/60 transition-all duration-700 ease-out cursor-pointer p-8 md:p-12 select-none flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                    isActive ? `${service.activeBg} ${service.activeText}` : "bg-white text-brand-navy hover:bg-neutral-50/50"
                  }`}
                >
                  {/* Service Icon Column */}
                  <div className="md:w-1/12 shrink-0 mt-1">
                    <div className={`p-3.5 rounded-full border transition-all duration-500 flex items-center justify-center w-14 h-14 ${
                      isActive 
                        ? "bg-[#00174e] text-white border-[#00174e] shadow-lg scale-110 rotate-3" 
                        : "bg-neutral-50 text-[#00174e]/40 border-outline-variant/30"
                    }`}>
                      <service.icon size={24} className="stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Main Content Column */}
                  <div className="flex-grow w-full md:w-11/12">
                    {/* Header Row: Title */}
                    <div className="flex flex-col mb-2">
                      <h3 className="font-serif text-2xl md:text-[38px] font-bold tracking-tight mb-2 transition-colors duration-500">
                        {service.title}
                      </h3>
                      {/* Tags List */}
                      <p className={`font-sans text-xs md:text-sm tracking-wide font-medium transition-colors duration-500 ${
                        isActive ? "text-[#00174e]/85" : "text-on-surface-variant/70"
                      }`}>
                        {service.tags}
                      </p>
                    </div>

                    {/* Expandable Details Block */}
                    <div
                      className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        isActive ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className={`font-sans text-base md:text-lg leading-relaxed max-w-4xl mb-8 space-y-3 ${isActive ? "text-neutral-800" : "text-on-surface-variant"}`}>
                        {Array.isArray(service.description) ? (
                            service.description.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{service.description}</p>
                        )}
                      </div>

                      {/* Discuss Project Style Pillar Call-To-Action Button */}
                      <div>
                        {service.onClickAction ? (
                          <button
                            onClick={(e) => { e.stopPropagation(); service.onClickAction(); }}
                            className={`inline-flex items-center justify-center font-grotesk text-xs tracking-widest font-bold uppercase border px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                              isActive 
                                ? `${service.accentBorder} bg-transparent ${service.activeText} hover:bg-black hover:text-white hover:border-black` 
                                : "border-brand-navy hover:bg-brand-navy hover:text-white"
                            }`}
                          >
                            {service.btnLabel}
                          </button>
                        ) : (
                          <Link
                            onClick={(e) => e.stopPropagation()}
                            to={service.link}
                            className={`inline-flex items-center justify-center font-grotesk text-xs tracking-widest font-bold uppercase border px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                              isActive 
                                ? `${service.accentBorder} bg-transparent ${service.activeText} hover:bg-black hover:text-white hover:border-black` 
                                : "border-brand-navy hover:bg-brand-navy hover:text-white"
                            }`}
                          >
                            {service.btnLabel}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Mock Test CTA underneath */}
          <div id="mock-test" className="max-w-5xl mx-auto bg-brand-navy border border-brand-navy p-8 md:p-12 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">ফ্রি মক টেস্ট দিয়ে নিজের অবস্থা যাচাই করুন</h3>
              <p className="font-sans text-blue-100 opacity-90 text-sm md:text-base">
                প্রতি সপ্তাহে আমাদের ক্যাম্পাসে রিয়েল এক্সাম এনভায়রনমেন্টে মক টেস্ট দিন।
              </p>
            </div>
            <button 
              onClick={() => openEnrollment("IELTS Preparation")}
              className="relative z-10 bg-white text-brand-navy px-8 py-4 font-grotesk font-semibold uppercase tracking-wider hover:bg-brand-red hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm whitespace-nowrap cursor-pointer"
            >
              রেজিস্ট্রেশন করুন
            </button>
          </div>
        </div>
      </motion.section>

      {/* OFFLINE COURSES SECTION */}
      <section className="py-24 bg-white border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header row with geolocation badge */}
          <div className="flex flex-col mb-12">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 border-2 border-[#121f35] py-2 px-5 bg-white text-[#121f35] rounded-sm font-sans text-xs font-black uppercase tracking-wider shadow-sm">
                <MapPin size={14} className="text-[#d02830] animate-pulse" />
                DHAKA • CHITTAGONG • SYLHET
              </span>
            </div>
            
            <h2 className="font-sans text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none">
              <span className="text-[#121f35]">OFFLINE</span>{" "}
              <span className="text-[#d02830]">COURSES</span>
            </h2>
          </div>

          {/* Grid Layout of 6 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFLINE_COURSES.map((course, index) => (
              <div 
                key={course.id}
                className={`group flex flex-col bg-white border border-slate-200/80 rounded-2xl md:rounded-tr-[3.5rem] md:rounded-bl-[3.5rem] overflow-hidden transition-all duration-500 ease-out relative ${
                  course.isPopular 
                    ? "shadow-[0_20px_40px_rgba(208,40,48,0.12)] border-[#d02830]/50 ring-2 ring-[#d02830]/10 ring-offset-2" 
                    : "shadow-[0_15px_30px_rgba(18,31,53,0.04)] hover:shadow-[0_25px_45px_rgba(18,31,53,0.12)]"
                } hover:-translate-y-2`}
              >
                {/* Popular red tag with micro animations */}
                {course.isPopular && (
                  <div className="absolute top-0 right-0 z-20 bg-gradient-to-r from-[#d02830] to-[#e63946] text-white text-[10px] font-sans font-black tracking-widest uppercase px-5 py-2 md:rounded-bl-2xl flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    MOST POPULAR
                  </div>
                )}

                {/* Subtle digital numbering badge on each card */}
                <div className="absolute top-4 right-4 z-10 font-sans text-sm font-black text-white/40 group-hover:text-[#d02830]/80 transition-colors duration-300 md:group-hover:translate-x-[-10px] pointer-events-none">
                  0{index + 1}
                </div>

                {/* Course Image Header with overlay text */}
                <div className="relative h-64 w-full overflow-hidden shrink-0 border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale contrast-[1.10] brightness-95 transition-all duration-700 ease-out group-hover:scale-108 group-hover:rotate-1"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Advanced duo-tone color grading overlay to fit academy's branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121f35] via-[#121f35]/50 to-[#d02830]/10 mix-blend-multiply opacity-85 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121f35]/95 via-[#121f35]/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-[#121f35]/10 text-[#121f35] text-[10px] font-sans font-black tracking-widest px-3.5 py-1.5 uppercase rounded-full shadow-sm">
                    {course.tag}
                  </div>

                  {/* Title overlay at the bottom */}
                  <div className="absolute bottom-5 left-6 right-6 text-left">
                    <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-[#ffd1d3] transition-colors duration-300">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 border-b border-slate-100 divide-x divide-slate-100 bg-slate-50/40 p-1">
                  <div className="flex flex-col items-center justify-center py-4 px-3 text-center">
                    <span className="text-[9px] font-sans font-black tracking-widest text-[#121f35]/40 uppercase mb-0.5">DURATION</span>
                    <span className="text-sm font-sans font-extrabold text-slate-800 tracking-tight">{course.duration}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4 px-3 text-center">
                    <span className="text-[9px] font-sans font-black tracking-widest text-[#121f35]/40 uppercase mb-0.5">CLASSES</span>
                    <span className="text-sm font-sans font-extrabold text-slate-800 tracking-tight">{course.classes} Classes</span>
                  </div>
                </div>

                {/* Dynamic Sliding Action Button */}
                <button
                  onClick={() => openEnrollment(course.title)}
                  className="w-full bg-[#121f35] group-hover:bg-[#d02830] text-white font-sans text-xs md:text-sm tracking-widest font-black uppercase py-5 transition-all duration-500 text-center cursor-pointer relative overflow-hidden flex items-center justify-center gap-1.5 mt-auto"
                >
                  <span>VIEW DETAILS</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 font-bold">→</span>
                </button>
              </div>
            ))}

            {/* Custom Interactive Not Sure card matching styling */}
            <div className="flex flex-col bg-[#121f35] border border-transparent rounded-2xl md:rounded-tr-[3.5rem] md:rounded-bl-[3.5rem] p-8 relative overflow-hidden shadow-[0_20px_40px_rgba(18,31,53,0.15)] text-white justify-between min-h-[380px] group transition-all duration-500 hover:-translate-y-2">
              {/* Subtle diagonal stripes custom backdrop */}
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-20" 
                style={{ 
                  backgroundImage: "linear-gradient(45deg,#ffffff 25%,transparent 25%,transparent 50%,#ffffff 50%,#ffffff 75%,transparent 75%,transparent)",
                  backgroundSize: "28px_28px"
                }}
              ></div>

              {/* Glowing decorative ambient light */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#d02830]/20 rounded-full blur-2xl"></div>

              <div className="relative z-10 flex flex-col gap-6 md:gap-7 justify-start items-center text-center mt-4">
                <div className="p-4 bg-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Plane className="text-[#d02830] rotate-45 group-hover:translate-y-[-2px] transition-transform duration-300" size={28} />
                </div>
                <div>
                  <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2 leading-tight text-center">
                    NOT SURE<br />WHICH COURSE?
                  </h3>
                  <p className="text-[10px] md:text-xs font-sans tracking-widest text-white/50 font-black uppercase">
                    TALK TO OUR EXPERT COUNSELORS DIRECTLY
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-full mt-6">
                <button
                  onClick={() => openContact()}
                  className="w-full bg-[#d02830] hover:bg-white hover:text-[#d02830] text-white font-sans text-xs md:text-sm tracking-widest font-black uppercase py-4 px-6 transition-all duration-300 rounded-xl shadow-lg hover:shadow-2xl text-center flex items-center justify-center gap-2 cursor-pointer border border-[#d02830] hover:border-white"
                >
                  <span>FREE COUNSELING</span>
                  <span className="font-bold transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Us / Who We Are */}
      <motion.section 
        id="about" 
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-surface-bright"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-brand-red font-grotesk text-sm font-bold uppercase tracking-widest mb-4 bg-red-50 text-brand-red px-3 py-1 rounded-sm">আমরা কারা</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">প্রশিক্ষণকে সহজ ও সাশ্রয়ী করা আমাদের লক্ষ্য</h2>
              <div className="w-20 h-1 bg-brand-red mb-8 rounded-full"></div>
              <p className="font-sans text-lg text-on-surface-variant mb-6 leading-relaxed">
                SabbirIELTS Academy-তে আমরা বিশ্বাস করি যে, সঠিক গাইডেন্স এবং অধ্যবসায় থাকলে যেকোনো শিক্ষার্থী কাঙ্ক্ষিত স্কোর অর্জন করতে পারে। আমাদের উদ্দেশ্য হলো মানসম্মত ইংরেজি শিক্ষা এবং গ্লোবাল এডুকেশন কনসালটেন্সি প্রতিটি শিক্ষার্থীর দোরগোড়ায় পৌঁছে দেওয়া।
              </p>
              <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                যেখানে আমরা আপনাকে স্কিলের সাথে দক্ষ করে তুলতে চাই। আপনাকে আপনার সাথে পরিচয় করিয়ে দিতে চাই।
                <br /><br />
                যেখানে আপনি বুঝতে পারবেন, আপনার সমস্যা কি? এবং তার সমাধান কি। আমরা সস্তা ট্রিকস নয় টেকনিকে বিশ্বাসি এবং টিপস নয় প্লানিং এ বিশ্বাসি।
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" />
                  <span className="font-sans text-on-surface font-medium">অভিজ্ঞ ও সার্টিফাইড মেন্টর প্যানেল</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" />
                  <span className="font-sans text-on-surface font-medium">মক টেস্ট এবং নিয়মিত মূল্যায়ন</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" />
                  <span className="font-sans text-on-surface font-medium">
                    <span className="font-grotesk font-bold">1-to-1</span> প্রবলেম সলভিং সেশন
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-12 gap-4 h-[380px] sm:h-[450px] md:h-[500px]">
              {/* Left tall portrait card */}
              <div className="col-span-7 h-full">
                <img 
                  src="https://res.cloudinary.com/de67njaee/image/upload/v1781100647/axblcvumvz6sfvlcebe5_jdjjcr.webp" 
                  alt="IELTS Preparation Focus" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[24px] shadow-lg hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
              {/* Right column with two stacked landscape cards */}
              <div className="col-span-5 flex flex-col gap-4 h-full">
                <div className="flex-1 min-h-0">
                  <img 
                    src="https://res.cloudinary.com/de67njaee/image/upload/v1781100647/poaypzs27qfctyvdryuv_zip3x9.webp" 
                    alt="Interactive Speaking Class" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[24px] shadow-md hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex-1 min-h-0">
                  <img 
                    src="https://res.cloudinary.com/de67njaee/image/upload/v1781100647/xqodakevqqwdb4sofms9_jhea8p.webp" 
                    alt="Study Consultation" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[24px] shadow-md hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOUNDER'S BRUTALIST QUOTE BANNER */}
      <section className="relative overflow-hidden bg-[#0a0c10] py-24 border-t border-b border-gray-900 text-white">
        
        {/* Underlaying minimalist grid network background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #1a2035 1px, transparent 1px), linear-gradient(to bottom, #1a2035 1px, transparent 1px)",
            backgroundSize: "45px 45px"
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Quote details column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Massive red quote mark */}
              <div className="font-serif text-[#d02830] text-7xl md:text-8xl leading-none select-none h-10 mb-4 text-left">
                “
              </div>
              
              {/* Heavy quotation headline */}
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-8 leading-tight text-left">
                ভাষা ও IELTS-এ শ্রেষ্ঠত্বের নির্ভরযোগ্য নাম — <span className="text-[#d02830]">Sabbir IELTS Academy</span>
              </h2>

              {/* Subtext description in elegant translation */}
              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 text-left">
                Kings International Institute, Dubai থেকে ইংরেজি সাহিত্যে এম.এ সম্পন্ন করা এবং ব্রিটিশ কাউন্সিলের ৭ ব্যান্ড স্কোরধারী সাব্বির হোসেনের হাত ধরেই গড়ে উঠেছে Sabbir IELTS Academy। দীর্ঘ ৮.৫ বছরেরও বেশি সময়ের অভিজ্ঞতায় ১৫০০+ শিক্ষার্থীকে সফলভাবে IELTS ও স্পোকেন মেন্টরিং দিয়েছেন তিনি। তাঁর বিশেষায়িত কারিকুলাম ও ব্যক্তিগত গাইডেন্স আপনাকে প্রথমবারেই কাঙ্ক্ষিত স্কোর অর্জনে সাহায্য করবে।
              </p>

              {/* Monochromatic dividing line */}
              <div className="w-full border-t border-slate-800 my-6"></div>

              {/* Founder identities */}
              <div className="text-left">
                <h4 className="font-serif text-xl font-bold text-white tracking-wide">
                  Sabbir Hossain
                </h4>
                <p className="font-sans text-xs font-black tracking-widest text-[#d02830] uppercase mt-1">
                  IELTS INSTRUCTOR | LANGUAGE TRAINER
                </p>
              </div>

            </div>

            {/* Profile image column with perfectly clean borders */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative p-1 w-full max-w-[360px] aspect-[4/5] sm:aspect-[3/4]">
                
                {/* Main monochrome photorealistic image */}
                <div className="w-full h-full border border-slate-800 rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/de67njaee/image/upload/v1781372226/m7enbobnnt5gm65fxdyj_alpj9t.webp" 
                    alt="Sabbir Hossain - IELTS Instructor & Language Trainer" 
                    className="w-full h-full object-cover grayscale contrast-[1.12] brightness-[0.93] transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Success Stories & Testimonials (Slider with mockup aesthetic style) */}
      <TestimonialsSection />

      {/* Insert Study Abroad Branding Belt */}
      <StudyAbroadBanner />

      {/* Modern Interactive FAQ Section */}
      <FAQSection />
    </main>
  );
}
