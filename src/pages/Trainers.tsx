import { motion } from "motion/react";
import { Award, BookOpen, Star, GraduationCap } from "lucide-react";

const TRAINERS = [
  {
    id: "t1",
    name: "Sabbir Hossain",
    role: "IELTS Instructor | Language Trainer",
    image: "https://res.cloudinary.com/de67njaee/image/upload/v1781372226/m7enbobnnt5gm65fxdyj_alpj9t.webp",
    bio: "M.A. in English Literature – Kings International Institute, Dubai. B.A. (Honours) in English Literature – Rangamati Government College. IELTS (British Council) – Overall Band Score: 8.5.",
    expertise: ["IELTS", "Language Training", "Speaking Skills"],
    stats: { students: "1,500+", rating: "4.9/5", experience: "8.5 Years" }
  },
  {
    id: "t2",
    name: "Mohammad Shariful Islam Manik",
    role: "Lecturer in English, Asian College, Feni",
    image: "https://res.cloudinary.com/de67njaee/image/upload/v1781346982/kb9x6wuihb5ruwznn2tk_tu4xsa.webp",
    bio: "M.A. in English. B.A. (Hons), B.Ed. (NU), LL.B. (NU). Dedicated educator focused on pronunciation, fluency, and business communication. Creates an immersive, fear-free environment for speaking practice.",
    expertise: ["Pronunciation", "Business English", "Public Speaking"],
    stats: { students: "3,200+", rating: "4.8/5", experience: "8 Years" }
  },
  {
    id: "t3",
    name: "Suraia Rezwan",
    role: "Education Consultant",
    image: "https://res.cloudinary.com/de67njaee/image/upload/v1781346982/nahgvchchjlqzuaavfa4_hwn3sk.webp",
    bio: "Dual-expert assisting students with language requirements and university applications. Specializes in UK and Canada university admissions.",
    expertise: ["General Training", "University Admissions", "Visa Interview"],
    stats: { students: "2,500+", rating: "4.9/5", experience: "10 Years" }
  },
  {
    id: "t4",
    name: "IRFAN WAZID",
    role: "Advanced Grammar & Writing Specialist",
    image: "https://res.cloudinary.com/de67njaee/image/upload/v1781372224/fcr6urrjnmbhn1xfewzp_vszu0m.webp",
    bio: "Linguistics graduate known for breaking down complex grammar rules into simple, actionable steps. Leads advanced writing workshops.",
    expertise: ["Advanced Grammar", "Essay Structure", "Vocabulary Expansion"],
    stats: { students: "4,100+", rating: "4.8/5", experience: "12 Years" }
  }
];

export function Trainers() {
  return (
    <main className="pt-[140px] md:pt-[180px] pb-24 bg-gray-50 flex-grow">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-[#00174e] uppercase tracking-tight mb-6">
              Our Expert <span className="text-[#d02830]">Trainers</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Learn from industry-leading professionals, former examiners, and certified educators dedicated to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
          {TRAINERS.map((trainer, index) => (
            <motion.div 
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row group"
            >
              <div className="md:w-2/5 lg:w-1/3 relative h-[300px] md:h-auto overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                  <div>
                    <h3 className="text-2xl font-bold font-grotesk text-white mb-1">{trainer.name}</h3>
                    <p className="text-white/80 text-sm font-medium">{trainer.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-10 md:w-3/5 lg:w-2/3 flex flex-col justify-center">
                <div className="hidden md:block mb-4">
                  <h3 className="text-3xl font-bold font-grotesk text-[#00174e]">{trainer.name}</h3>
                  <p className="text-[#d02830] font-medium mt-1">{trainer.role}</p>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {trainer.bio}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Star size={14} className="text-[#d02830]" /> Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.expertise.map(skill => (
                      <span key={skill} className="bg-blue-50 text-[#00174e] px-3 py-1.5 rounded text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1"><GraduationCap size={12}/> Alumni</div>
                    <div className="font-bold text-[#00174e] text-lg">{trainer.stats.students}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1"><Star size={12}/> Rating</div>
                    <div className="font-bold text-[#00174e] text-lg">{trainer.stats.rating}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1"><Award size={12}/> Experience</div>
                    <div className="font-bold text-[#00174e] text-lg">{trainer.stats.experience}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
