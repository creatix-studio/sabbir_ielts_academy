import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useEnrollment } from "../context/EnrollmentContext";

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  name: string;
  designation: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    title: "প্রথমবারেই ৭.৫ ব্যান্ড স্কোর!",
    quote: "SabbirIELTS একাডেমির আইএলটিএস প্ল্যানিং এবং গাইডলাইন ফলো করে প্রথমবারেই আমার ৭.৫ স্কোর এসেছে! বিশেষ করে স্পিকিং সেশন এবং রাইটিং ইভালুয়েশন অতুলনীয় ছিল। ধন্যবাদ সবাইকে!",
    name: "তানজিবা হাফসা (Tanziba Hafsa)",
    designation: "IELTS Candidate (Score 7.5), University of Windsor",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438545/xgafsgolt7o1sr8ie68d_qxo3rs.webp"
  },
  {
    id: 2,
    title: "ইংরেজি বলার ভয় কেটে গেছে!",
    quote: "কখনো ইংরেজি বলতে গিয়ে যে ভয়টা পেতাম, তা স্পোকেন ইংলিশ কোর্সের লাইভ কনভারসেশন ক্লাবের মাধ্যমে পুরোপুরি কেটে গেছে। এখন যেকোনো উপস্থাপনা বা ইন্টারভিউতে অনায়াসে ইংরেজিতে কথা বলি!",
    name: "বাহার অন্তু (Bahar Onto)",
    designation: "Spoken Graduate, Assistant Executive at IPDC",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438546/edxovg5jebggado8tpka_tlsz1t.webp"
  },
  {
    id: 3,
    title: "যুক্তরাজ্যের স্বপ্ন সত্যি হলো!",
    quote: "যুক্তরাজ্যের নামকরা ইউনিভার্সিটিতে পড়াশোনার স্বপ্ন আজ সত্যি হলো। ভিসা প্রসেসিং এবং ব্যাংক স্পন্সর গাইডের নিখুঁত সাপোর্টের জন্য সাব্বির ভাইয়ের টিমকে অনেক কৃতজ্ঞতা।",
    name: "এমডি ইসমাইল (MD Ismail)",
    designation: "MSc student, Coventry University, UK",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438545/jh9bi8sbcixhtkhofim0_eunhlo.webp"
  },
  {
    id: 4,
    title: "ব্রেইন ম্যাপিং পদ্ধতি অনন্য!",
    quote: "অন্যান্য জায়গার মতো এখানে শুধু রুলস শেখানো হয় না, বরং ব্রেইন ম্যাপিং এবং কগনিティブ প্ল্যানিং দিয়ে আইএলটিএস প্রস্তুতিকে অনেক সহজ করে তোলা হয়। সবার জন্য হাইলি রিকমেন্ডেড!",
    name: "মাইশা মাহজাবিন (Maishah Mahzabin)",
    designation: "IELTS Student (Targeting Band 8), Brac University",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438546/e7qsvxqvlvidrd8oniyq_nqj45i.webp"
  },
  {
    id: 5,
    title: "ভিসা প্রসেসিংয়ে অসাধারণ সাপোর্ট!",
    quote: "অস্ট্রেলিয়ার ভিসা পেতে আমাদের ফাইলিং এবং ফিনান্সিয়াল ডকুমেন্ট প্রিপারেশনে তারা অসম্ভব সাপোর্ট দিয়েছে। কোনো এক্সট্রা চার্জ ছাড়াই চমৎকার রিয়ালিস্টিক সলিউশন পেয়েছি।",
    name: "এমডি আকাশ (MD AKASH)",
    designation: "Master of Data Science, University of Wollongong",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438547/unpmxo4ivr9zqo1senoa_ekkl7n.webp"
  },
  {
    id: 6,
    title: "১-টু-১ অসাধারণ মেন্টরিং!",
    quote: "সাব্বির আইএলটিএস একাডেমির স্পেশাল ওয়ান-টু-ওয়ান গাইডেন্স না পেলে রাইটিং এ আমার কাঙ্ক্ষিত স্কোর কখনোই আসতো না। মেন্টরদের আন্তরিকতা সত্যিই প্রশংসনীয়।",
    name: "আঁখি আক্তার (AKHI AKTER)",
    designation: "IELTS Candidate (Score 8.0), Monash University, Australia",
    avatar: "https://res.cloudinary.com/de67njaee/image/upload/v1781438546/owdmkw1ml0wtjndwdik6_td309a.webp"
  }
];

export function TestimonialsSection() {
  const { openEnrollment } = useEnrollment();

  return (
    <section className="py-24 bg-surface-container border-b border-outline-variant/30 relative">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#d02830]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16 z-10">
        {/* Header Style exactly corresponding to Reference Image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Elegant large diagonally pointing top-right arrow accent */}
            <div className="text-[#d02830] shrink-0 mt-2 p-1 bg-[#d02830]/10 rounded-2xl border border-[#d02830]/20 shadow-sm">
              <ArrowUpRight size={56} className="stroke-[1.5] w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#d02830] tracking-tight leading-tight">
                শিক্ষার্থীদের সাফল্যের গল্প:
              </h2>
              <p className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold text-[#8b151b] mt-2">
                আমরা যেভাবে তাদের এগিয়ে যেতে সাহায্য করেছি
              </p>
            </div>
          </div>

          {/* Action Button styled high precision matching the reference mockup */}
          <div className="self-stretch md:self-auto flex justify-end">
            <button
              onClick={() => openEnrollment("Testimonials Counseling")}
              className="bg-[#d02830] hover:bg-[#a01a20] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>View all Success</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid container for 6 static cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="flex flex-col sm:flex-row bg-white rounded-3xl p-6 gap-6 border border-neutral-200/55 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:scale-[1.01] transition-all duration-300 self-stretch group animate-fade-in"
            >
              {/* Left Side: Highly rounded portrait image */}
              <div className="w-full sm:w-[150px] md:w-[170px] shrink-0 h-48 sm:h-full min-h-[170px] relative rounded-2xl overflow-hidden">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Side: Structured Text Elements */}
              <div className="flex flex-col flex-1 justify-between py-1">
                <div>
                  {/* Rating Stars - 5 orange-red stars */}
                  <div className="flex items-center gap-0.5 mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-orange-600 fill-current" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Headline / Title */}
                  <h3 className="font-sans text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3">
                    "{testimonial.title}"
                  </h3>

                  {/* Testimonial Quote */}
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-5">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Footer details inside the card */}
                <div className="pt-3 border-t border-neutral-100">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-0.5 font-medium">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
