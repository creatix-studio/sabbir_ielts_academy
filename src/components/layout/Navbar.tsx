import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Calendar, PhoneCall, HelpCircle, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { useEnrollment } from "../../context/EnrollmentContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openEnrollment } = useEnrollment();

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "IELTS", path: "/ielts" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 1. Top Utility Bar (Academic Style) */}
      <div className="bg-[#000f34] text-[#d0e1fd] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-grotesk tracking-widest uppercase font-bold text-[10px] md:text-xs">
          <div className="flex items-center gap-4 text-white/80">
            <span>SabbirIELTS Academy</span>
            <span className="text-white/20">•</span>
            <span>নম্বর ১ IELTS প্রস্তুতি প্রতিষ্ঠান</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/calendar" className="hover:text-white transition-colors flex items-center gap-1">
              <Calendar size={12} /> CALENDAR
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/support" className="hover:text-white transition-colors flex items-center gap-1">
              <HelpCircle size={12} /> SUPPORT
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1">
              <PhoneCall size={12} /> CONTACT
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 bg-[#0a225c] text-white px-3 py-1 rounded text-[10px] hover:bg-white hover:text-[#00174e] cursor-pointer transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              CURRENT BATCHES
            </div>
            <span className="text-white/25">|</span>
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <Search size={12} /> SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Academic Navy/Blue Style) */}
      <div className="bg-[#00174e] text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src="https://res.cloudinary.com/de67njaee/image/upload/v1780469865/Logo_nzkqmx.svg" 
              alt="SabbirIELTS Academy Logo" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <div key={link.name} className="relative group/item flex items-center gap-1">
                <Link
                  to={link.path}
                  className={cn(
                    "uppercase font-grotesk text-xs tracking-wider transition-colors duration-200 py-1.5 px-1 font-bold",
                    location.pathname === link.path 
                      ? "text-white border-b-2 border-white/80" 
                      : "text-[#d0e1fd] hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
                {/* Visual dropdown/chevron indicator to mimic academic structures with sub-programs */}
                {["Services", "IELTS", "Resources"].includes(link.name) && (
                  <ChevronDown size={12} className="text-[#d0e1fd] opacity-75 group-hover/item:text-white transition-colors mt-0.5" />
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <button
              onClick={() => openEnrollment()}
              className="bg-white text-[#00174e] px-6 py-2.5 font-grotesk font-bold uppercase tracking-wider hover:bg-[#000f34] hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 rounded text-xs cursor-pointer inline-block"
            >
              এখনই ভর্তি হন
            </button>
          </div>

          <button 
            className="lg:hidden text-white p-2 hover:bg-[#000f34] rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#00174e] border-t border-[#000f34] pb-6 px-4 shadow-2xl absolute w-full left-0 top-[72px] md:top-[112px]">
          <nav className="flex flex-col gap-2 pt-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "uppercase font-grotesk text-xs tracking-wider font-bold py-3 px-3 rounded-md hover:bg-[#000f34] transition-all flex justify-between items-center",
                  location.pathname === link.path ? "text-white bg-[#000f34]" : "text-[#d0e1fd]"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                {["Services", "IELTS", "Resources"].includes(link.name) && (
                  <ChevronDown size={12} />
                )}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openEnrollment();
              }}
              className="mt-4 bg-white text-[#00174e] px-6 py-3.5 font-grotesk font-bold uppercase tracking-wider text-center rounded shadow-lg mx-2 hover:bg-[#e0ecff] transition-all cursor-pointer"
            >
              এখনই ভর্তি হন
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
