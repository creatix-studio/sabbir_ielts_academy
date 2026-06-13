import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MonitorPlay, BookOpen, Globe, CheckCircle2, School, MessageSquare, Plane, ArrowRight, GraduationCap } from "lucide-react";
import { useEnrollment } from "../context/EnrollmentContext";
import { FAQSection } from "../components/FAQ";
import { TestimonialsSection } from "../components/Testimonials";
import { motion } from "motion/react";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const { openEnrollment } = useEnrollment();

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
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#00174e] mb-6">যেভাবে আমরা আপনাকে সাহায্য করতে পারি</h2>
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
                আমরা জটিল বিষয়গুলোকে সহজবোধ্য করে তুলি, যাতে শিক্ষার্থীরা আত্মবিশ্বাসের সাথে তাদের প্রস্তুতি নিতে পারে। আমাদের অভিজ্ঞ মেন্টররা প্রতিটি শিক্ষার্থীর ব্যক্তিগত প্রয়োজনের দিকে লক্ষ্য রেখে তাদের গাইড করেন।
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

      {/* Client Success Stories & Testimonials (Slider with mockup aesthetic style) */}
      <TestimonialsSection />

      {/* Modern Interactive FAQ Section */}
      <FAQSection />
    </main>
  );
}
