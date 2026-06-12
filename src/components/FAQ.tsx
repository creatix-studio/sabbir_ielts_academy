import React, { useState } from "react";
import { HelpCircle, ChevronDown, BookOpen, MessageSquare, GraduationCap, Compass, HelpCircle as HelpIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEnrollment } from "../context/EnrollmentContext";

interface FAQItem {
  question: string;
  answer: string;
  category: "all" | "ielts" | "spoken" | "global";
}

export function FAQSection() {
  const { openEnrollment } = useEnrollment();
  const [activeCategory, setActiveCategory] = useState<"all" | "ielts" | "spoken" | "global">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "সব প্রশ্ন (All FAQ)", icon: Compass },
    { id: "ielts", label: "IELTS Preparation", icon: BookOpen },
    { id: "spoken", label: "Spoken English", icon: MessageSquare },
    { id: "global", label: "Global Education", icon: GraduationCap },
  ] as const;

  const faqData: FAQItem[] = [
    {
      question: "আমি কি একাডেমিক নাকি জেনারেল ট্রেনিং (GT) পরীক্ষা দেব?",
      answer: "আপনি যদি বিদেশে উচ্চশিক্ষা (Bachelor, Master, PhD) এর জন্য যেতে চান, তবে আপনাকে Academic IELTS দিতে হবে। অন্যদিকে, আপনি যদি ইমিগ্রেশন, পিআর (PR) বা চাকরির উদ্দেশ্যে বিশেষত কানাডা, অস্ট্রেলিয়া বা যুক্তরাজ্যে যেতে চান, তবে General Training (GT) IELTS দিতে হবে। আমাদের কোর্সে উভয় মডিউলের জন্য ডেডিকেটেড ম্যাটেরিয়াল রয়েছে।",
      category: "ielts"
    },
    {
      question: "আউটকাম গ্যারান্টি বা টার্গেট স্কোর অর্জনে একাডেমির কোনো বিশেষ সাপোর্ট আছে কি?",
      answer: "হ্যাঁ! SabbirIELTS একাডেমিতে আমরা প্রতিটি শিক্ষার্থীর উইকনেস পয়েন্ট টার্গেট করে কাস্টমাইজড স্টাডি প্ল্যান দেই। আমাদের স্পেশাল ১-টু-১ ওয়ান সেশন, আনলিমিটেড স্পিকিং পার্টনার প্র্যাকটিস ক্লাবের সুবিধা রয়েছে। আপনার কাঙ্ক্ষিত স্কোর না আসা পর্যন্ত আমাদের মেন্টররা আপনাকে গাইড করে থাকেন।",
      category: "ielts"
    },
    {
      question: "একেবারে প্রথম থেকে শুরু করতে চাইলে স্পোকেন ইংলিশ কোর্সটি কি সাহায্য করবে?",
      answer: "অবশ্যই! আমাদের স্পোকেন ইংলিশ কোর্সটি সম্পূর্ণ বিজ্ঞানসম্মত উপায়ে মাতৃভাষার মতো করে প্র্যাকটিস করিয়ে ভয় দূর করার জন্য তৈরি। একদম বেসিক গ্রামার, সঠিক উচ্চারণ (Pronunciation) ও প্রতিদিনের কথোপকথনের বাক্য দিয়ে ক্লাস শুরু হয়, যা আপনাকে দ্রুত সাবলীল ও আত্মবিশ্বাসী করে তুলবে।",
      category: "spoken"
    },
    {
      question: "স্পোকেন ও ফ্লুয়েন্সি ক্লাসে প্র্যাকটিস এর জন্য কোনো স্পেশাল ক্লাব আছে কি?",
      answer: "হ্যাঁ, আমাদের শিক্ষার্থীদের জন্য রয়েছে ২৪/৭ অনলাইন ও সেমি-লাইভ স্পিকিং স্পেস এবং মেন্টরশিপ সাপোর্ট। আপনি প্রতিদিন নির্দিষ্ট সময়ে লাইভ গ্রুপ চ্যাট এবং সহপাঠীদের সাথে কথা বলে নিজের জড়তা ও ভয় পুরোপুরি দূর করে নিতে পারবেন।",
      category: "spoken"
    },
    {
      question: "ইউনিভার্সিটি সিলেকশন এবং স্কলারশিপের ব্যাপারে ফ্রিতে কাউন্সেলিং পাব কিভাবে?",
      answer: "আমাদের 'এখনই ভর্তি হন' বা 'ফ্রি কাউন্সেলিং বুক করুন' বাটনে ক্লিক করে ফর্মটি পূরণ করুন। আমাদের ট্রেইন্ড গ্লোবাল এডুকেশন এক্সপার্ট এবং কনসালটেন্ট দ্রুত আপনার সাথে যোগাযোগ করে সম্পূর্ণ বিনামূল্যে আপনার প্রোফাইল ও বাজেট অনুযায়ী সেরা দেশ, ইউনিভার্সিটি ও স্কলারশিপের অফার নির্ধারণে সাহায্য করবেন।",
      category: "global"
    },
    {
      question: "ভিসা প্রসেসিং ও আইএফএস-ব্যাংক স্পন্সরশিপের ক্ষেত্রে আপনারা কি সাহায্য করেন?",
      answer: "হ্যাঁ, যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা এবং অস্ট্রেলিয়ার জন্য সঠিক একাডেমিক ডকুমেন্টস তৈরি, ব্যাংক স্পন্সর গাইডলাইন, ফিনান্সিয়াল স্টেটমেন্ট প্রিপারেশন এবং কমপ্লিট ভিসা ফাইল তৈরিতে আমরা সাহায্য করি। বিশেষ করে ব্যাংক স্টেটমেন্ট ও ফান্ড সোর্স দেখানোর নিখুঁত সমাধান আমরা দিয়ে থাকি।",
      category: "global"
    },
    {
      question: "ক্লাসগুলো কি রেকর্ডেড ফাইল হিসেবে পরবর্তীতে পাওয়া যাবে?",
      answer: "হ্যাঁ! আমাদের প্রতিটি লাইভ ক্লাসের জন্য আমাদের ডেডিকেটেড লার্নিং পোর্টালে এইচডি (HD) কোয়ালিটির ব্যাকআপ রেকর্ডিং আপলোড করা থাকে। আপনি আপনার কাজের ফাকে যেকোনো সময় চাইলে ক্লাসগুলো পুনরায় দেখে রিভিশন দিয়ে নিতে পারবেন।",
      category: "all"
    },
    {
      question: "ভর্তির পর পেমেন্ট কি কি কিস্তিতে (Installments) পরিশোধ করা সম্ভব?",
      answer: "আমাদের প্রিমিয়াম কোর্সগুলোর ক্ষেত্রে শিক্ষার্থীদের সুবিধার্থে সহজ কিস্তি সুবিধা (২টি ধাপে পেমেন্ট সম্পন্ন করার ব্যবস্থা) রয়েছে। আরো বিস্তারিত জানতে সরাসরি আমাদের হেল্পলাইন নম্বরে যোগাযোগ করতে পারেন অথবা এখনই ফর্মটি পূরণ করে রাখতে পারেন।",
      category: "all"
    }
  ];

  // If activeCategory is not 'all', filter. Otherwise, show all.
  const filteredFaqs = activeCategory === "all" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface-container shadow-inner border-t border-b border-outline-variant/30 overflow-hidden relative">
      {/* Background elements to sustain parallax/depth theme */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#EDB0B3]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-[#00174e]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-grotesk text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 bg-red-50 text-brand-red px-3 py-1.5 rounded-full">
            সচরাচর জিজ্ঞাসিত প্রশ্নাবলী
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#00174e] mb-6 tracking-tight">
            প্রশ্ন ও সঠিক সমাধান (FAQ)
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const IsActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedIndex(null); // Close accordion on change
                }}
                className={`flex items-center gap-2 px-4.5 py-2.5 rounded-full font-grotesk text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  IsActive
                    ? "bg-[#00174e] text-white shadow-lg shadow-blue-900/10 scale-[1.03]"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-navy border border-gray-200"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Accordions */}
        <div className="space-y-4 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={`${faq.question}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? "border-[#00174e] shadow-xl shadow-blue-50/70" 
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <HelpIcon className={`w-5 h-5 shrink-0 mt-1 transition-colors ${
                        isExpanded ? "text-brand-red" : "text-gray-400"
                      }`} />
                      <span className="font-serif font-bold text-base sm:text-lg text-[#00174e] leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`p-1.5 rounded-full transition-all duration-300 ${
                      isExpanded ? "bg-[#00174e] text-white rotate-180" : "bg-neutral-100 text-gray-500"
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 md:px-8 md:pb-7 border-t border-gray-50">
                          <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
                            {faq.answer}
                          </p>
                          <div className="mt-5 flex gap-2">
                            <span className="text-[10px] sm:text-xs font-mono px-2 py-1 bg-gray-50 border border-gray-100 text-gray-400 rounded">
                              Category: {faq.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Secondary customized Call-to-Action for FAQ section */}
        <div className="bg-[#eef5fc] rounded-3xl p-6 sm:p-10 border border-blue-100/50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#00174e] mb-1">
              আরো জটিল কোনো প্রশ্ন বা কাস্টম চাহিদা আছে?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-md">
              আমাদের একাডেমিক রিলেশনস অ্যান্ড প্ল্যানিং টিম আপনাকে সঠিক কাউন্সিলিং করতে প্রস্তুত।
            </p>
          </div>
          <button
            onClick={() => openEnrollment("General Consulting")}
            className="bg-[#00174e] hover:bg-brand-red text-white py-3.5 px-7 font-grotesk text-xs sm:text-sm tracking-wider font-bold uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center gap-1 shrink-0"
          >
            <span>Ask Academic Advisor</span>
          </button>
        </div>

      </div>
    </section>
  );
}
