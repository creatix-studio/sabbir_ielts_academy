import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useAnimationFrame, useMotionValue } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useEnrollment } from "../context/EnrollmentContext";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "SabbirIELTS একাডেমির আইএলটিএস প্ল্যানিং এবং গাইডলাইন ফলো করে প্রথমবারেই আমার ৭.৫ স্কোর এসেছে! বিশেষ করে স্পিকিং সেশন এবং রাইটিং ইভালুয়েশন অতুলনীয় ছিল। ধন্যবাদ সবাইকে!",
    name: "তানভীর রহমান (Tanvir Rahman)",
    designation: "IELTS Candidate (Score 7.5), University of Windsor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "কখনো ইংরেজি বলতে গিয়ে যে ভয়টা পেতাম, তা স্পোকেন ইংলিশ কোর্সের লাইভ কনভারসেশন ক্লাবের মাধ্যমে পুরোপুরি কেটে গেছে। এখন যেকোনো উপস্থাপনা বা ইন্টারভিউতে অনায়াসে ইংরেজিতে কথা বলি!",
    name: "মেহজাবিন চৌধুরী (Mehzabin Chowdhury)",
    designation: "Spoken Graduate, Assistant Executive at IPDC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "যুক্তরাজ্যের নামকরা ইউনিভার্সিটিতে পড়াশোনার স্বপ্ন আজ সত্যি হলো। ভিসা প্রসেসিং এবং ব্যাংক স্পন্সর গাইডের নিখুঁত সাপোর্টের জন্য সাব্বির ভাইয়ের টিমকে অনেক কৃতজ্ঞতা।",
    name: "রাফসান জামান (Rafsan Zaman)",
    designation: "MSc student, Coventry University, UK",
    avatar: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "অন্যান্য জায়গার মতো এখানে শুধু রুলস শেখানো হয় না, বরং ব্রেইন ম্যাপিং এবং কগনিটিভ প্ল্যানিং দিয়ে আইএলটিএস প্রস্তুতিকে অনেক সহজ করে তোলা হয়। সবার জন্য হাইলি রিকমেন্ডেড!",
    name: "সাদিয়া আক্তার (Sadia Akhter)",
    designation: "IELTS Student (Targeting Band 8), Brac University",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    quote: "অস্ট্রেলিয়ার ভিসা পেতে আমাদের ফাইলিং এবং ফিনান্সিয়াল ডকুমেন্ট প্রিপারেশনে তারা অসম্ভব সাপোর্ট দিয়েছে। কোনো এক্সট্রা চার্জ ছাড়াই চমৎকার রিয়ালিস্টিক সলিউশন পেয়েছি।",
    name: "জাহিদুল ইসলাম (Zahidul Islam)",
    designation: "Master of Data Science, University of Wollongong",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export function TestimonialsSection() {
  const { openEnrollment } = useEnrollment();
  const [isPaused, setIsPaused] = useState(false);
  
  // Custom slider logic using infinite smooth marquee but with manual overrides & viewport constraint
  const xValue = useMotionValue(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Speed controls: left-to-right (positive increments)
  const speed = 0.8; 

  useAnimationFrame(() => {
    if (isPaused) return;
    if (!marqueeRef.current) return;
    
    // Smooth infinite scroll
    let currentX = xValue.get();
    
    // Width of half the duplicated list
    const singleWidth = marqueeRef.current.scrollWidth / 2;
    
    // Moving from Left to Right
    currentX += speed;
    if (currentX >= 0) {
      currentX = -singleWidth;
    }
    
    xValue.set(currentX);
  });

  // Manual scroll functionality to move slider explicitly if desired
  const handleScroll = (direction: "left" | "right") => {
    let currentX = xValue.get();
    const step = 320; // width of card + gap
    if (direction === "left") {
      xValue.set(currentX - step);
    } else {
      xValue.set(currentX + step);
    }
  };

  // Duplicate list to achieve infinite marquee illusion
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-surface-bright overflow-hidden relative border-b border-outline-variant/30">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#d02830]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16 z-10">
        
        {/* Header Style exactly corresponding to Reference Image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          
          <div className="flex items-start gap-4 sm:gap-6">
            {/* Elegant large diagonally pointing top-right arrow accent */}
            <div className="text-[#d02830] shrink-0 mt-2 p-1 bg-[#d02830]/5 rounded-xl border border-[#d02830]/10 shadow-sm animate-pulse">
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
          <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
            <div className="flex gap-2">
              <button 
                onClick={() => handleScroll("left")}
                className="p-3 rounded-full border border-gray-200 hover:border-brand-red/30 hover:bg-neutral-50 text-gray-600 transition-colors cursor-pointer"
                aria-label="Scroll left"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={() => handleScroll("right")}
                className="p-3 rounded-full border border-gray-200 hover:border-brand-red/30 hover:bg-neutral-50 text-gray-600 transition-colors cursor-pointer"
                aria-label="Scroll right"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <button
              onClick={() => openEnrollment("Testimonials Counseling")}
              className="bg-[#d02830] hover:bg-[#a01a20] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>View all Success</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>

      {/* Testimonials Auto-sliding Marquee container */}
      <div 
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div 
          ref={marqueeRef}
          style={{ x: xValue }}
          className="flex gap-6 w-max px-6"
        >
          {doubledTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[340px] sm:w-[420px] bg-[#d02830] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] shrink-0"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Red/Rose Quote icon exact placement like the mockup */}
              <div className="text-[#f5b7ba] font-serif text-[72px] sm:text-[88px] leading-none select-none h-10 mt-[-10px] pb-6">
                ”
              </div>

              {/* Body Text */}
              <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-normal mb-8 text-left">
                {testimonial.quote}
              </p>

              {/* Bottom Profile Row */}
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#f5b7ba]/40"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-xs text-[#f5b7ba] mt-0.5 opacity-90 line-clamp-1">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
