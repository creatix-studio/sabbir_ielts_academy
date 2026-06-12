import { Link } from "react-router-dom";
import { Headphones, FileText, PlaneTakeoff, BookOpenCheck, DollarSign, CheckCircle2, Megaphone, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { useEnrollment } from "../context/EnrollmentContext";

export function StudyAbroad() {
  const { openEnrollment } = useEnrollment();

  const handleScrollToServices = () => {
    const el = document.getElementById("services-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex-grow pt-[72px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center py-24 overflow-hidden bg-brand-navy">
        {/* Parallax Background */}
        <motion.div 
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed origin-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24"
        >
          <span className="font-grotesk text-sm font-bold uppercase tracking-widest text-[#f5b7ba] mb-6 block">স্টাডি অ্যাব্রোড সার্ভিসেস</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            আপনার স্বপ্নের বিশ্ববিদ্যালয়ে পড়ার সুযোগ তৈরি করুন
          </h1>
          <p className="font-sans text-lg text-blue-100 mb-10 max-w-2xl mx-auto opacity-90">
            সঠিক দিকনির্দেশনা, ডকুমেন্টস প্রসেসিং থেকে শুরু করে ভিসা সাপোর্ট—সবকিছুতেই আমরা আছি আপনার পাশে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openEnrollment("Study Abroad Consultation")}
              className="bg-brand-red text-white px-8 py-4 font-grotesk font-semibold text-lg uppercase tracking-wider hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer"
            >
              ফ্রি কাউন্সেলিং বুক করুন
            </button>
            <button 
              onClick={handleScrollToServices}
              className="border-2 border-white/80 text-white px-8 py-4 font-grotesk font-semibold text-lg uppercase tracking-wider hover:bg-white hover:text-brand-navy hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer"
            >
              সার্ভিসসমূহ দেখুন
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <motion.section 
        id="services-grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-bright pb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">আমাদের স্টাডি অ্যাব্রোড সার্ভিসসমূহ</h2>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">
              আপনার বিদেশ যাত্রার প্রতিটি পদক্ষেপে আমরা আপনাকে সঠিক গাইডেন্স প্রদান করি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-outline-variant rounded-lg p-8 hover:border-brand-navy hover:shadow-xl transition-all duration-300 group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 -mr-8 -mt-8 group-hover:scale-110 transition-transform"></div>
              <Headphones className="text-brand-navy w-12 h-12 mb-6 group-hover:-translate-y-1 transition-transform" />
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 relative z-10">কাউন্সেলিং ও ইউনিভার্সিটি সিলেকশন</h3>
              <p className="font-sans text-on-surface-variant mb-6 relative z-10">
                আপনার প্রোফাইল, বাজেট এবং লক্ষ্যের উপর ভিত্তি করে সঠিক দেশ এবং বিশ্ববিদ্যালয় নির্বাচনে সহায়তা।
              </p>
              <Link to="#" className="mt-auto inline-flex items-center font-grotesk font-bold text-brand-red hover:text-brand-navy transition-colors uppercase gap-2 hover:gap-3 relative z-10">
                বিস্তারিত জানুন <span>&rarr;</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-outline-variant rounded-lg p-8 hover:border-brand-navy hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row gap-8 lg:col-span-2 overflow-hidden relative">
              <div className="flex-1 flex flex-col relative z-10">
                <FileText className="text-brand-navy w-12 h-12 mb-6 group-hover:-translate-y-1 transition-transform" />
                <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">ডকুমেন্টেশন ও অ্যাপ্লিকেশন প্রসেসিং</h3>
                <p className="font-sans text-on-surface-variant mb-6">
                  SOP লেখা, রেকমেন্ডেশন লেটার সংগ্রহ এবং নির্ভুলভাবে ইউনিভার্সিটিতে আবেদন করার সম্পূর্ণ প্রক্রিয়া।
                </p>
                <Link to="#" className="mt-auto inline-flex items-center font-grotesk font-bold text-brand-red hover:text-brand-navy transition-colors uppercase gap-2 hover:gap-3">
                  বিস্তারিত জানুন <span>&rarr;</span>
                </Link>
              </div>
              <div className="flex-1 hidden md:block rounded-lg overflow-hidden relative z-10 border border-outline-variant/30">
                <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Documentation" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-outline-variant rounded-lg p-8 hover:border-brand-navy hover:shadow-xl transition-all duration-300 group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-full opacity-50 -ml-8 -mt-8 group-hover:scale-110 transition-transform"></div>
              <PlaneTakeoff className="text-brand-navy w-12 h-12 mb-6 group-hover:-translate-y-1 transition-transform relative z-10" />
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 relative z-10">ভিসা ও ট্রাভেল সাপোর্ট</h3>
              <p className="font-sans text-on-surface-variant mb-6 relative z-10">
                ভিসা ইন্টারভিউ প্রস্তুতি, আর্থিক ডকুমেন্টস গোছানো এবং ফ্লাইটের আগে প্রয়োজনীয় দিকনির্দেশনা।
              </p>
              <Link to="#" className="mt-auto inline-flex items-center font-grotesk font-bold text-brand-red hover:text-brand-navy transition-colors uppercase gap-2 hover:gap-3 relative z-10">
                বিস্তারিত জানুন <span>&rarr;</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-outline-variant rounded-lg p-8 hover:border-brand-navy hover:shadow-xl transition-all duration-300 group flex flex-col">
              <BookOpenCheck className="text-brand-navy w-12 h-12 mb-6 group-hover:-translate-y-1 transition-transform" />
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">টেস্ট প্রেপারেশন</h3>
              <p className="font-sans text-on-surface-variant mb-6">
                IELTS, PTE, GRE, বা TOEFL-এর জন্য আমাদের বিশেষজ্ঞ ট্রেইনারদের সাথে স্পেশাল কোর্স।
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-red-50 text-brand-red font-grotesk text-xs px-2 py-1 rounded font-bold">IELTS</span>
                <span className="bg-red-50 text-brand-red font-grotesk text-xs px-2 py-1 rounded font-bold">PTE</span>
                <span className="bg-red-50 text-brand-red font-grotesk text-xs px-2 py-1 rounded font-bold">GRE</span>
              </div>
              <Link to="#" className="mt-auto inline-flex items-center font-grotesk font-bold text-brand-red hover:text-brand-navy transition-colors uppercase gap-2 hover:gap-3">
                বিস্তারিত জানুন <span>&rarr;</span>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-outline-variant rounded-lg p-8 hover:border-brand-navy hover:shadow-xl transition-all duration-300 group flex flex-col">
              <DollarSign className="text-brand-navy w-12 h-12 mb-6 group-hover:-translate-y-1 transition-transform" />
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">স্কলারশিপ গাইডেন্স</h3>
              <p className="font-sans text-on-surface-variant mb-6">
                যোগ্যতা অনুযায়ী বিভিন্ন দেশের ফুল-ফান্ডেড বা আংশিক স্কলারশিপ খোঁজা এবং আবেদনের সহায়তা।
              </p>
              <Link to="#" className="mt-auto inline-flex items-center font-grotesk font-bold text-brand-red hover:text-brand-navy transition-colors uppercase gap-2 hover:gap-3">
                বিস্তারিত জানুন <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-surface-container-low px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">আমাদের কাজ করার পদ্ধতি</h2>
            <p className="font-sans text-lg text-on-surface-variant mb-10">
              একটি সুশৃঙ্খল প্রক্রিয়ার মাধ্যমে আমরা আপনার স্টাডি অ্যাব্রোড স্বপ্নকে বাস্তবে রূপ দিই।
            </p>
            <ul className="space-y-8">
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-red mt-1 mr-4 shrink-0 w-6 h-6" />
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">প্রাথমিক মূল্যায়ন (Free Assessment)</h4>
                  <p className="font-sans text-on-surface-variant">আপনার একাডেমিক রেজাল্ট এবং পছন্দ নিয়ে বিস্তারিত আলোচনা।</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-red mt-1 mr-4 shrink-0 w-6 h-6" />
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">দেশ ও কোর্স নির্বাচন</h4>
                  <p className="font-sans text-on-surface-variant">ক্যারিয়ার গোলের সাথে সামঞ্জস্যপূর্ণ সেরা অপশনগুলো বাছাই করা।</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-red mt-1 mr-4 shrink-0 w-6 h-6" />
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">প্রয়োজনীয় টেস্ট প্রস্তুতি</h4>
                  <p className="font-sans text-on-surface-variant">IELTS বা অন্যান্য রিকোয়ারমেন্ট পূরণে আমাদের একাডেমিতে প্রস্তুতি।</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-red mt-1 mr-4 shrink-0 w-6 h-6" />
                <div>
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">আবেদন ও ভিসা প্রসেসিং</h4>
                  <p className="font-sans text-on-surface-variant">নিখুঁতভাবে সব ডকুমেন্টস সাবমিট করা এবং ভিসার জন্য প্রস্তুত করা।</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative p-6">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-red-200 -z-10 rounded-tl-xl hover:scale-110 transition-transform"></div>
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Counseling" className="w-full h-auto rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-500 z-10 bg-white" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-blue-200 -z-10 rounded-br-xl hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white border-t border-outline-variant px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <Megaphone className="text-brand-red w-16 h-16 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">আপনার প্রোফাইল নিয়ে কনফিউজড?</h2>
          <p className="font-sans text-lg text-on-surface-variant mb-10">
            আমাদের এক্সপার্টদের সাথে কথা বলুন। আমরা আপনার প্রোফাইল অ্যাসেস করে সঠিক দিকনির্দেশনা দিবো, একদম ফ্রিতে!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openEnrollment("Study Abroad Assessment")}
              className="bg-brand-red text-white px-8 py-4 font-grotesk font-semibold uppercase tracking-wider hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer"
            >
              অ্যাসেসমেন্ট ফর্ম পূরণ করুন
            </button>
            <button className="border-2 border-brand-navy text-brand-navy flex items-center justify-center gap-2 px-8 py-4 font-grotesk font-semibold uppercase tracking-wider hover:bg-brand-navy hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-sm">
              <PhoneCall size={20} /> সরাসরি কল করুন
            </button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
