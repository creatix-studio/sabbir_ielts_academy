import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, Facebook, ArrowDownRight } from "lucide-react";
import { useEnrollment } from "../../context/EnrollmentContext";

export function Footer() {
  const { openEnrollment } = useEnrollment();
  return (
    <footer className="bg-[#eef5fc] w-full pt-20 pb-12 px-4 sm:px-6 lg:px-8 mt-auto relative overflow-hidden">
      {/* 1. Overlapping CTA Banner */}
      <div className="max-w-5xl mx-auto mb-[-120px] relative z-20">
        <div className="bg-[#580c10] text-white rounded-[2rem] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden font-sans">
          {/* Subtle decorative background gradients */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_120%,_var(--tw-gradient-stops))] from-[#00174e] via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-16 -mb-16"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="text-[11px] font-grotesk font-bold uppercase tracking-[0.25em] text-[#ffe4e6] bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              IELTS & Study Abroad Preparation
            </span>
            <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Start Your Success Journey Today
            </h3>
            <p className="font-sans text-sm md:text-base text-[#ffd1d3] max-w-xl leading-relaxed">
              গায়ের জোরে নয়, সঠিক এবং কার্যকরী Planning করে IELTS-এ আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করুন এবং স্বপ্নের গ্লোবাল ক্যারিয়ার গড়ুন।
            </p>
            <div className="mt-2">
              <button
                onClick={() => openEnrollment()}
                className="bg-white text-[#d02830] px-8 py-3.5 font-grotesk font-bold uppercase tracking-wider hover:bg-[#00174e] hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 rounded-lg text-xs cursor-pointer"
              >
                Admission Open
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Card Body */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] pt-40 pb-10 px-8 md:px-14 shadow-lg border border-blue-50 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gray-100">
          
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/de67njaee/image/upload/v1780469865/Logo_nzkqmx.svg" 
                alt="SabbirIELTS Academy Logo" 
                className="h-10 w-auto object-contain bg-[#00174e]/5 p-1 rounded"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl font-bold text-[#00174e]">SabbirIELTS Academy</span>
            </Link>
            <p className="text-gray-500 font-sans text-sm max-w-sm leading-relaxed">
              বাংলাদেশের শিক্ষার্থীদের জন্য আমরা সহজ ভাষায় মানসম্পন্ন IELTS প্রস্তুতি, স্পোকেন ইংলিশ ও গ্লোবাল এডুকেশন সাপোর্ট প্রদান করি।
            </p>
            
            {/* Social Icons wrapped beautifully in circles as shown in the reference */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100088782781960" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-[#d02830] hover:bg-[#00174e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Find us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:shabbirhossaintushar224@gmail.com" 
                className="w-10 h-10 rounded-full bg-[#d02830] hover:bg-[#00174e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Email Us"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+8801345693052" 
                className="w-10 h-10 rounded-full bg-[#d02830] hover:bg-[#00174e] text-white flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Call Us"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Programs Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-grotesk font-bold uppercase tracking-wider text-[#00174e]/90 text-xs">Programs</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">IELTS Preparation</Link>
              <Link to="/spoken-english" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">Spoken English</Link>
              <Link to="/services" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">Global Education</Link>
              <Link to="/enroll" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">Free Consulting</Link>
            </div>
          </div>

          {/* Quick Contact & Info */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <h4 className="font-grotesk font-bold uppercase tracking-wider text-[#00174e]/90 text-xs">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+8801345693052" 
                className="group flex items-center gap-2.5 text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm"
              >
                <Phone size={16} className="text-[#00174e]/70 group-hover:text-[#d02830] transition-colors shrink-0" />
                <span>+880 1345-693052</span>
              </a>
              <a 
                href="mailto:shabbirhossaintushar224@gmail.com" 
                className="group flex items-center gap-2.5 text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm break-all"
              >
                <Mail size={16} className="text-[#00174e]/70 group-hover:text-[#d02830] transition-colors shrink-0" />
                <span>shabbirhossaintushar224@gmail.com</span>
              </a>
              <div className="flex gap-2.5 text-gray-500 font-sans text-sm items-start leading-relaxed">
                <MapPin size={16} className="text-[#00174e]/70 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>Dhaka, Bangladesh, 4500</span>
                  <span className="text-xs text-gray-400">Dhaka, Dhaka Division, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-grotesk font-bold uppercase tracking-wider text-[#00174e]/90 text-xs">Legal</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">প্রাইভেসি পলিসি</Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">Terms of Service</Link>
              <Link to="/faq" className="text-gray-500 hover:text-[#d02830] transition-colors font-sans text-sm">Help & FAQ</Link>
            </div>
          </div>

        </div>

        {/* 3. Copyright Row */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans">
          <p>© 2026 SabbirIELTS Academy. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Live Intake Support
          </p>
        </div>
      </div>
    </footer>
  );
}

