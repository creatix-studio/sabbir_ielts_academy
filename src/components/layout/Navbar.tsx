import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  HelpCircle, 
  Search, 
  BookOpen, 
  Headphones, 
  PenTool, 
  MessageSquare, 
  Sparkles, 
  GraduationCap 
} from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { useEnrollment } from "../../context/EnrollmentContext";

const resourceSubmenuItems = [
  {
    name: "Reading",
    desc: "Academic & General reading practice",
    path: "/resources/reading",
    icon: BookOpen,
  },
  {
    name: "Listening",
    desc: "Audio practice tests & tips",
    path: "/resources/listening",
    icon: Headphones,
  },
  {
    name: "Writing",
    desc: "Task 1 & Task 2 writing guides",
    path: "/resources/writing",
    icon: PenTool,
  },
  {
    name: "Speaking",
    desc: "Cue cards & speaking strategies",
    path: "/resources/speaking",
    icon: MessageSquare,
  },
  {
    name: "Others",
    desc: "Grammar, vocabulary & more",
    path: "/resources/others",
    icon: Sparkles,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const { openEnrollment, openContact } = useEnrollment();

  const links = [
    { name: "Home", path: "/" },
    { name: "IELTS", path: "/ielts" },
    { name: "Spoken English", path: "/spoken-english" },
    { name: "Study Abroad", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Trainers", path: "/trainers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* 1. Top Utility Bar (Academic Style) */}
      <div className="bg-[#580c10] text-[#ffd1d3] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-grotesk tracking-widest uppercase font-bold text-[10px] md:text-xs">
          <div className="flex items-center gap-4 text-white/80">
            <span>SabbirIELTS Academy</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/support" className="hover:text-white transition-colors flex items-center gap-1">
              <HelpCircle size={12} /> SUPPORT
            </Link>
            <span className="text-white/20">|</span>
            <Link to="#" onClick={(e) => { e.preventDefault(); openContact(); }} className="hover:text-white transition-colors">
              CONTACT
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 bg-[#a01a20] text-white px-3 py-1 rounded text-[10px] hover:bg-white hover:text-[#d02830] cursor-pointer transition-all duration-300">
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

      {/* 2. Main Navigation Bar (Academic Red Style) */}
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
              <div 
                key={link.name} 
                className={cn(
                  "relative flex items-center gap-1",
                  link.name === "Resources" ? "group/resources" : "group/item"
                )}
              >
                {link.name === "Resources" ? (
                  <>
                    <button
                      className={cn(
                        "uppercase font-grotesk text-xs tracking-wider transition-colors duration-200 py-1.5 px-1 font-bold flex items-center gap-1 cursor-pointer",
                        location.pathname.startsWith("/resources") 
                          ? "text-white border-b-2 border-white/80" 
                          : "text-blue-200 hover:text-white"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={12} className="text-blue-200 opacity-75 group-hover/resources:text-white transition-colors mt-0.5" />
                    </button>

                    {/* Spectacular Mega Dropdown Menu - EXACTLY like the mockup */}
                    <div className="absolute top-full left-1/2 -translate-x-[45%] mt-1.5 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden hidden group-hover/resources:grid grid-cols-[1.4fr_1fr] w-[580px] transition-all duration-300 z-50">
                      
                      {/* Left Column (Submenu options list) */}
                      <div className="p-5 flex flex-col gap-1.5 bg-white">
                        {resourceSubmenuItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-red-50/60 group/sub transition-all"
                          >
                            <div className="p-2 bg-[#d02830]/5 text-[#d02830] rounded-xl group-hover/sub:bg-[#d02830] group-hover/sub:text-white transition-colors duration-200 shrink-0">
                              <item.icon size={15} />
                            </div>
                            <div className="text-left">
                              <h5 className="font-sans font-extrabold text-[13px] text-slate-800 tracking-tight leading-tight group-hover/sub:text-[#d02830] transition-colors">
                                {item.name}
                              </h5>
                              <p className="font-sans text-[11px] text-slate-400 font-bold leading-none mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column (CTA promo card) */}
                      <div className="p-6 bg-slate-50 border-l border-slate-100 flex flex-col justify-center items-start text-left relative overflow-hidden group/cta">
                        {/* Ambient glow decoration */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#d02830]/5 rounded-full blur-xl pointer-events-none"></div>
                        
                        <GraduationCap className="text-[#d02830] w-10 h-10 mb-4 animate-bounce" />
                        
                        <h4 className="font-sans font-black text-slate-800 text-sm tracking-tight leading-snug mb-1">
                          Start Practicing Today
                        </h4>
                        
                        <p className="font-sans text-[11px] text-slate-400 font-bold leading-normal mb-4">
                          Access hundreds of free IELTS practice materials curated by our expert instructors.
                        </p>

                        <Link
                          to="/resources/listening"
                          className="font-sans text-xs font-black uppercase tracking-wider text-[#d02830] flex items-center gap-1.5 hover:underline decoration-[1.5px]"
                        >
                          <span>Browse Resources</span>
                          <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                        </Link>
                      </div>

                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to={link.path}
                      className={cn(
                        "uppercase font-grotesk text-xs tracking-wider transition-colors duration-200 py-1.5 px-1 font-bold",
                        location.pathname === link.path 
                          ? "text-white border-b-2 border-white/80" 
                          : "text-blue-200 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                    {/* Visual dropdown/chevron indicator to mimic academic structures with sub-programs */}
                    {["Study Abroad", "Spoken English", "IELTS"].includes(link.name) && (
                      <ChevronDown size={12} className="text-blue-200 opacity-75 group-hover/item:text-white transition-colors mt-0.5" />
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/admin"
              className="text-white hover:text-blue-200 font-grotesk font-bold uppercase tracking-wider text-xs flex items-center gap-1 transition-colors border border-white/20 px-3 py-2 rounded"
            >
              Admin
            </Link>
            <button
              onClick={() => openEnrollment()}
              className="bg-white text-[#00174e] px-6 py-2.5 font-grotesk font-bold uppercase tracking-wider hover:bg-[#011038] hover:text-white hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 rounded text-xs cursor-pointer inline-block"
            >
              এখনই ভর্তি হন
            </button>
          </div>

          <button 
            className="lg:hidden text-white p-2 hover:bg-[#011038] rounded-md transition-colors ml-auto mr-2 md:m-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#00174e] border-t border-[#011038] pb-6 px-4 shadow-2xl absolute w-full left-0 top-[72px] md:top-[112px]">
          <nav className="flex flex-col gap-2 pt-4">
            {links.map((link) => {
              if (link.name === "Resources") {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                      className="uppercase font-grotesk text-xs tracking-wider font-bold py-3 px-3 rounded-md hover:bg-[#011038] transition-all flex justify-between items-center text-blue-200 cursor-pointer"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={cn("transition-transform duration-300", isMobileResourcesOpen ? "rotate-180 text-white" : "")} />
                    </button>
                    {isMobileResourcesOpen && (
                      <div className="pl-4 pr-2 py-1 flex flex-col gap-1 bg-[#011038]/50 rounded-lg mt-1 mb-2">
                        {resourceSubmenuItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                              "font-grotesk text-[11px] uppercase tracking-wider font-bold py-2.5 px-3 rounded-md transition-all flex items-center gap-3",
                              location.pathname === item.path ? "text-white bg-[#00174e]" : "text-blue-200/80 hover:text-white"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            <item.icon size={13} className="text-[#d02830]" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "uppercase font-grotesk text-xs tracking-wider font-bold py-3 px-3 rounded-md hover:bg-[#011038] transition-all flex justify-between items-center",
                    location.pathname === link.path ? "text-white bg-[#011038]" : "text-blue-200"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  {["Study Abroad", "Spoken English", "IELTS"].includes(link.name) && (
                    <ChevronDown size={12} />
                  )}
                </Link>
              );
            })}
            
            <Link
              to="/admin"
              className="uppercase font-grotesk text-xs tracking-wider font-bold py-3 px-3 rounded-md hover:bg-[#011038] transition-all flex justify-between items-center text-blue-200 mt-2 border-t border-white/5"
              onClick={() => setIsOpen(false)}
            >
              <span>Admin Panel</span>
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                openEnrollment();
              }}
              className="mt-4 bg-white text-[#00174e] px-6 py-3.5 font-grotesk font-bold uppercase tracking-wider text-center rounded shadow-lg mx-2 hover:bg-blue-50 transition-all cursor-pointer"
            >
              এখনই ভর্তি হন
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
