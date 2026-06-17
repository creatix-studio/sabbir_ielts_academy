import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  Clock, 
  BookOpen, 
  Headphones, 
  PenTool, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from "lucide-react";

// Categorized static resources content matching mockups
interface VideoResource {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
}

interface ResourceSection {
  id: string;
  title: string;
  bengaliTitle: string;
  videos: VideoResource[];
}

interface CategoryData {
  title: string;
  accentTitle: string;
  subtitle: string;
  icon: any;
  tabs: string[];
  sections: ResourceSection[];
}

const RESOURCES_DATA: Record<string, CategoryData> = {
  reading: {
    title: "IELTS",
    accentTitle: "Reading",
    subtitle: "রপ্ত করুন রিডিং প্যাসেজ বাছ-বিচার এবং দ্রুত উত্তর দেওয়ার সকল ট্রিকস ও স্ট্র্যাটেজি",
    icon: BookOpen,
    tabs: ["ALL CATEGORIES", "HEADING MATCHING", "TRUE/FALSE/NOT GIVEN", "GAP FILLING"],
    sections: [
      {
        id: "heading-matching",
        title: "Heading Matching",
        bengaliTitle: "হেডিং ম্যাচিং সিক্রেট ফর্মুলা",
        videos: [
          { id: "r1", title: "Reading Heading Matching Secret Formulas", youtubeId: "Zt9O-vP7Iio", duration: "18:30" },
          { id: "r2", title: "Matching Headings - Live Practice with Sabbir", youtubeId: "Z0E-9M2mNQA", duration: "14:55" }
        ]
      },
      {
        id: "true-false-not-given",
        title: "True / False / Not Given",
        bengaliTitle: "ট্রু, ফলস ও নট গিভেন কৌশল",
        videos: [
          { id: "r3", title: "Ultimate T/F/NG Rules & Pitfalls to Avoid", youtubeId: "_F0vI7Uj4I4", duration: "20:15" },
          { id: "r4", title: "T/F/NG Live Solving on Real Cambridge Passage", youtubeId: "B8W5S7fFf6Q", duration: "16:45" }
        ]
      },
      {
        id: "gap-filling",
        title: "Gap Filling",
        bengaliTitle: "শূন্যস্থান পূরণ স্ট্র্যাটেজি ও গ্রামার হ্যাকস",
        videos: [
          { id: "r5", title: "Reading Fill in the Gaps Grammar & Keyword Tricks", youtubeId: "v6Oq7N5b7QA", duration: "12:00" }
        ]
      }
    ]
  },
  listening: {
    title: "IELTS",
    accentTitle: "Listening",
    subtitle: "প্রতিটি Section ও Question Type-এর জন্য আলাদা ভিডিও ক্লাস — বাংলায়",
    icon: Headphones,
    tabs: ["LISTENING SECTION 1", "LISTENING MAP", "LISTENING MCQ", "LISTENING SECTION 4", "LISTENING TOP TRICKS"],
    sections: [
      {
        id: "listening-section-1",
        title: "Listening Section 1",
        bengaliTitle: "লিসেনিং সেকশন ১",
        videos: [
          { id: "l1", title: "Listening Section 1 - Part 1", youtubeId: "b3c0D_5Aitg", duration: "12:15" },
          { id: "l2", title: "Listening Section 1 - Part 2", youtubeId: "vFhKxN_d0mY", duration: "14:40" }
        ]
      },
      {
        id: "listening-map",
        title: "Listening Map",
        bengaliTitle: "লিসেনিং ম্যাপ",
        videos: [
          { id: "l3", title: "Listening Map Strategy", youtubeId: "vInTbykS4kM", duration: "18:22" }
        ]
      },
      {
        id: "listening-mcq",
        title: "Listening MCQ",
        bengaliTitle: "লিসেনিং এমসিকিউ",
        videos: [
          { id: "l4", title: "Listening Multiple Choice Questions Masterclass", youtubeId: "eH6X4a45Q-M", duration: "22:10" },
          { id: "l5", title: "MCQ Guessing Hacks & Eliminating Wrong Answers", youtubeId: "7T0k80aU9vY", duration: "15:05" }
        ]
      },
      {
        id: "listening-section-4",
        title: "Listening Section 4",
        bengaliTitle: "লিসেনিং সেকশন ৪",
        videos: [
          { id: "l6", title: "Listening Section 4 Fast Lecture Strategy", youtubeId: "IatfXfH6p8I", duration: "19:35" }
        ]
      },
      {
        id: "listening-top-tricks",
        title: "Listening Top Tricks",
        bengaliTitle: "লিসেনিং টপ ট্রিকস",
        videos: [
          { id: "l7", title: "Listening Band 9 Secret Methods & Practice Guide", youtubeId: "A_M28YreE2s", duration: "25:30" }
        ]
      }
    ]
  },
  writing: {
    title: "IELTS",
    accentTitle: "Writing",
    subtitle: "টাস্ক ১ ও টাস্ক ২-এর নির্ভুল ফর্ম্যাট, স্ট্রাকচার ও ভোকাবুলারি ক্লাস",
    icon: PenTool,
    tabs: ["ALL CATEGORIES", "TASK 1 ACADEMIC", "TASK 1 GENERAL", "TASK 2 STRUCTURE"],
    sections: [
      {
        id: "task-1-academic",
        title: "Task 1 Academic",
        bengaliTitle: "রাইটিং টাস্ক ১ একাডেমিক",
        videos: [
          { id: "w1", title: "Academic Task 1 Column/Bar Chart Master Plan", youtubeId: "Zet7O7DGrS0", duration: "16:10" },
          { id: "w2", title: "Line Graphs & Pie Charts Breakdown", youtubeId: "K4wO7qM0WbE", duration: "15:20" }
        ]
      },
      {
        id: "task-1-general",
        title: "Task 1 General",
        bengaliTitle: "রাইটিং টাস্ক ১ জেনারেল ট্রেনিং - চিঠি লিখন",
        videos: [
          { id: "w3", title: "GT Letter Writing: Formal vs Informal Formats", youtubeId: "v5N7QA9oB6Q", duration: "14:30" }
        ]
      },
      {
        id: "task-2-structure",
        title: "Task 2 Structure",
        bengaliTitle: "রাইটিং টাস্ক ২ রচনা লিখন",
        videos: [
          { id: "w4", title: "How to Plan & Structure Band 7+ Essays", youtubeId: "y6N8QA9oB8K", duration: "24:10" },
          { id: "w5", title: "Agree/Disagree Essay Templetes with Sabbir", youtubeId: "b7QA9oB9WeY", duration: "21:15" }
        ]
      }
    ]
  },
  speaking: {
    title: "IELTS",
    accentTitle: "Speaking",
    subtitle: "কিউ কার্ড আইডিয়াজ ও স্পিকিং পার্ট ১, ২ ও ৩-এর ইন্টারঅ্যাক্টিভ লেকচার",
    icon: MessageSquare,
    tabs: ["ALL CATEGORIES", "SPEAKING PART 1", "CUE CARDS", "SPEAKING PART 3"],
    sections: [
      {
        id: "speaking-part-1",
        title: "Speaking Part 1",
        bengaliTitle: "স্পিকিং পার্ট ১ বেসিকস",
        videos: [
          { id: "s1", title: "Speaking Part 1: First Impression Band 8+ Tips", youtubeId: "sR7-MIn7n_U", duration: "11:45" }
        ]
      },
      {
        id: "cue-cards",
        title: "Cue Cards",
        bengaliTitle: "কিউ কার্ড প্রস্তুতি ও আইডিয়া জেনারেশন",
        videos: [
          { id: "s2", title: "How to talk for 2 minutes on Any Cue Card", youtubeId: "_b6QA9oN8kU", duration: "18:40" },
          { id: "s3", title: "Selected Top Cue Cards Solved with Vocabulary", youtubeId: "y8NmA9oW7fY", duration: "14:22" }
        ]
      },
      {
        id: "speaking-part-3",
        title: "Speaking Part 3",
        bengaliTitle: "স্পিকিং পার্ট ৩ বিস্তারিত উত্তর",
        videos: [
          { id: "s4", title: "Abstract Questions & Discussion Structure", youtubeId: "v7Km9oB7Q3w", duration: "15:10" }
        ]
      }
    ]
  },
  others: {
    title: "IELTS",
    accentTitle: "Others",
    subtitle: "ইংরেজি ব্যাকরণ ভিত্তি মজবুত করা এবং আইইএলটিএস ভোকাবুলারি ব্যাংক",
    icon: Sparkles,
    tabs: ["ALL CATEGORIES", "GRAMMAR FOUNDATION", "VOCABULARY BANK", "IELTS ROADMAP"],
    sections: [
      {
        id: "grammar-foundation",
        title: "Grammar Foundation",
        bengaliTitle: "ব্যাকরণ ভিত্তি",
        videos: [
          { id: "o1", title: "Essential Tenses & Sentence Variety for IELTS", youtubeId: "w8Qa9oM9KeY", duration: "22:45" }
        ]
      },
      {
        id: "vocabulary-bank",
        title: "Vocabulary Bank",
        bengaliTitle: "ভোকাবুলারি ব্যাংক",
        videos: [
          { id: "o2", title: "Top 100 Academic Words for IELTS Band 8+", youtubeId: "z9Na8pP7LoQ", duration: "20:50" }
        ]
      },
      {
        id: "ielts-roadmap",
        title: "IELTS Roadmap",
        bengaliTitle: "আইইএলটিএস রোডম্যাপ",
        videos: [
          { id: "o3", title: "Complete Guide to 1st Month Preparation Advice", youtubeId: "a7Qa0oK9WeY", duration: "16:30" }
        ]
      }
    ]
  }
};

export function Resources() {
  const { category = "listening" } = useParams<{ category: string }>();
  const navigate = useNavigate();

  // Selected Category data
  const categoryKey = category.toLowerCase() in RESOURCES_DATA ? category.toLowerCase() : "listening";
  const currentCategory = RESOURCES_DATA[categoryKey];

  // Component States
  const [activeTab, setActiveTab] = useState<string>("ALL CATEGORIES");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Set default state whenever category changes
  useEffect(() => {
    setActiveTab("ALL CATEGORIES");
    setPlayingVideoId(null);
    
    // Automatically expand the first section of the new category
    if (currentCategory.sections.length > 0) {
      setExpandedSections({
        [currentCategory.sections[0].id]: true
      });
    }
  }, [categoryKey]);

  // Handle Tab navigation
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    
    // If selecting a specific section tab, auto expand it
    if (tabName !== "ALL CATEGORIES") {
      const matchSection = currentCategory.sections.find(
        sec => sec.title.toUpperCase() === tabName || tabName.includes(sec.title.toUpperCase())
      );
      if (matchSection) {
        setExpandedSections(prev => ({
          ...prev,
          [matchSection.id]: true
        }));
        
        // Push scroll behavior to matching element
        const element = document.getElementById(`section-${matchSection.id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  // Toggle accordions
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Get filtered sections based on chosen tab
  const filteredSections = currentCategory.sections.filter(section => {
    if (activeTab === "ALL CATEGORIES") return true;
    
    // Custom loose mapping for the listening section 1 etc.
    const sectionNameUpper = section.title.toLowerCase();
    const activeTabUpper = activeTab.toLowerCase();
    return sectionNameUpper.includes(activeTabUpper) || activeTabUpper.includes(sectionNameUpper);
  });

  return (
    <main className="flex-grow pt-[112px] bg-slate-50 min-h-screen">
      
      {/* 1. Header Section with Dark Grid Background */}
      <section className="relative overflow-hidden bg-[#0d121f] text-white py-16 border-b border-gray-900">
        
        {/* Underlaying grid pattern background matching screenshot */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #2c3a5e 1px, transparent 1px), linear-gradient(to bottom, #2c3a5e 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }}
        ></div>

        {/* Ambient colored neon lights behind */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#d02830]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            {currentCategory.icon && <currentCategory.icon className="w-4 h-4 text-[#d02830]" />}
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#ffd1d3]">
              Free Academy Resource
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-4">
            <span className="text-white">{currentCategory.title}</span>{" "}
            <span className="text-[#d02830]">{currentCategory.accentTitle}</span>
          </h1>
          
          <p className="font-sans text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {currentCategory.subtitle}
          </p>

        </div>
      </section>

      {/* 2. Horizontal Resource Type Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-[112px] z-30 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2.5 whitespace-nowrap scrollbar-none">
          
          {/* Quick link button indicators */}
          {currentCategory.tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-sans text-xs font-black uppercase tracking-widest rounded-lg border.5 transition-all cursor-pointer ${
                  isActive 
                    ? "bg-[#121f35] border-[#121f35] text-white shadow-sm" 
                    : "bg-slate-100/60 border-slate-200 text-slate-600 hover:bg-slate-200/60 hover:text-[#121f35]"
                }`}
              >
                {tab}
              </button>
            );
          })}

          {/* Dynamic Switch Category Dropdown for ease of navigation */}
          <div className="ml-auto hidden xl:flex items-center gap-1.5 pl-6 border-l border-slate-200">
            <span className="text-xs font-sans font-bold text-slate-400">SWITCH MODULE:</span>
            {Object.keys(RESOURCES_DATA).map((key) => (
              <button
                key={key}
                onClick={() => navigate(`/resources/${key}`)}
                className={`px-3 py-1 rounded text-[10px] font-sans font-black uppercase tracking-wider cursor-pointer ${
                  categoryKey === key 
                    ? "bg-[#d02830]/10 text-[#d02830]" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Main Body: Collapsible Accordion Sections */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Empty placeholder state if none found */}
        {filteredSections.length === 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center shadow-sm">
            <p className="font-sans text-slate-500 text-base mb-4">No content matched your filter.</p>
            <button 
              onClick={() => setActiveTab("ALL CATEGORIES")}
              className="text-[#d02830] font-sans font-bold text-xs uppercase tracking-widest hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        <div className="space-y-6">
          {filteredSections.map((section, sectorIndex) => {
            const isExpanded = !!expandedSections[section.id];
            const activeCount = section.videos.length;
            
            return (
              <div 
                id={`section-${section.id}`}
                key={section.id} 
                className="bg-white border border-slate-200 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 rounded-xl"
              >
                
                {/* Accordion Trigger Row */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  
                  {/* Left Column contents */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    
                    {/* Index Sequence number */}
                    <div className="w-10 h-10 border border-[#d02830]/25 rounded-lg flex items-center justify-center font-sans font-black text-sm text-[#d02830] bg-[#d02830]/5 shrink-0">
                      0{sectorIndex + 1}
                    </div>

                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-black text-[#121f35] leading-tight flex items-center gap-2">
                        {section.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-400 mt-1 font-medium BengaliSubtitle font-bangla">
                        {section.bengaliTitle}
                      </p>
                    </div>

                  </div>

                  {/* Right Column details */}
                  <div className="flex items-center gap-6 text-slate-400">
                    <span className="font-sans text-[11px] font-black uppercase tracking-wider hidden sm:block bg-slate-100 text-slate-500 py-1 px-3.5 rounded-full">
                      {activeCount} {activeCount === 1 ? "Video" : "Videos"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={18} className="text-[#d02830] stroke-[2.5]" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400 stroke-[2.5]" />
                    )}
                  </div>

                </button>

                {/* Collapsible Expansion Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 bg-slate-50/40 p-6 sm:p-8">
                        
                        {/* Video Cards Grid inside expanded block */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                          {section.videos.map((vid) => {
                            const isPlaying = playingVideoId === vid.id;
                            
                            return (
                              <div 
                                key={vid.id}
                                className="group bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-[0_8px_16px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300"
                              >
                                
                                {/* Video Player Frame (Standard YouTube thumbnail or interactive iframe) */}
                                <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-slate-100">
                                  {isPlaying ? (
                                    <iframe
                                      src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1&rel=0`}
                                      title={vid.title}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                      className="w-full h-full"
                                    ></iframe>
                                  ) : (
                                    <div className="relative w-full h-full cursor-pointer" onClick={() => setPlayingVideoId(vid.id)}>
                                      {/* Retrieve actual high-quality YouTube thumbnail */}
                                      <img 
                                        src={`https://img.youtube.com/vi/${vid.youtubeId}/0.jpg`} 
                                        alt={vid.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                      />
                                      
                                      {/* Dark overlay blend */}
                                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        
                                        {/* Large red play circle icon with ping effect */}
                                        <div className="relative z-10 p-4 rounded-full bg-[#d02830] text-white shadow-xl transition-transform duration-300 scale-95 group-hover:scale-105 group-hover:bg-red-600">
                                          <PlayCircle size={32} className="stroke-[1.5]" />
                                        </div>

                                      </div>

                                      {/* Duration Stamp overlay */}
                                      <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-xs text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                        <Clock size={10} /> {vid.duration}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {/* Video Metadata block */}
                                <div className="p-5 text-left">
                                  <h4 className="font-sans font-extrabold text-[#121f35] text-sm leading-snug tracking-tight group-hover:text-[#d02830] transition-colors duration-200">
                                    {vid.title}
                                  </h4>
                                </div>

                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </section>

      {/* 4. Academy Consultation Call to Action banner */}
      <section className="bg-[#121f35] border-t border-slate-800 text-white py-16 py-20 relative overflow-hidden">
        
        {/* Subtle geometric pattern backdrop */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            backgroundImage: "linear-gradient(45deg,#ffffff 25%,transparent 25%,transparent 50%,#ffffff 50%,#ffffff 75%,transparent 75%,transparent)",
            backgroundSize: "28px_28px"
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white mb-4">
            আরো প্রফেশনাল গাইডলাইন প্রয়োজন?
          </h2>
          <p className="font-sans text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal mb-8 uppercase tracking-widest text-[11px] text-white/70">
            Sabbir IELTS Academy-এর সাথে আজই যোগাযোগ করে আপনার সঠিক প্রস্তুতি শুরু করুন
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <a 
              href="tel:+8801700000000"
              className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-sans text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer"
            >
              Direct Helpline 📞
            </a>

            <button 
              onClick={() => {
                // Focus mock click action triggers context modal
                const btn = document.querySelector<HTMLButtonElement>("button[class*='v_bh']");
                if (btn) btn.click();
              }}
              className="px-8 py-3.5 rounded-xl bg-[#d02830] text-white font-sans text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#d02830] transition-all flex items-center gap-2 group cursor-pointer border border-[#d02830] hover:border-white"
            >
              <span>Get Free Counseling</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>
      </section>

    </main>
  );
}
