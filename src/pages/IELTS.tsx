import { PlayCircle, Video, Award, Smartphone, Calendar, Monitor, CreditCard, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useEnrollment } from "../context/EnrollmentContext";
import studentLaptopImage from "../assets/images/student_laptop_1781340369273.jpg";

export function IELTS() {
  const { openEnrollment } = useEnrollment();
  return (
    <main className="flex-grow pt-[72px] bg-surface">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="bg-[#00174e] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Subtle pattern background for parallax-ish effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-12 lg:mb-32">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[64px] font-bold mb-6">IELTS Preparation Course</h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive preparation for both Academic and General Training modules. Achieve your dream band score with expert guidance.
          </p>
        </div>
      </motion.header>

      {/* Main Content Area with Overlapping Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20 lg:-mt-40 z-20 pb-24">
        {/* Large Overlapping Image */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-5xl mx-auto mb-16 md:mb-24 shadow-2xl rounded-lg overflow-hidden border-4 border-white/20 hover:border-white/40 hover:scale-[1.01] transition-all duration-500 bg-white"
        >
          <img 
            src={studentLaptopImage} 
            alt="Bengali student preparing for IELTS via online class" 
            referrerPolicy="no-referrer"
            className="w-full h-[300px] md:h-[500px] object-cover" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <motion.section 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="border-l-4 border-brand-red pl-6"
            >
              <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">Master IELTS with Proven Strategies</h2>
              <p className="font-sans text-lg text-on-surface-variant mb-6">
                আমাদের IELTS কোর্সটি এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি প্রতিটি মডিউলে (Reading, Writing, Listening, Speaking) আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করতে পারেন।
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-50 text-brand-red px-4 py-2 font-grotesk font-bold text-sm uppercase tracking-wider rounded-full">Academic</span>
                <span className="bg-red-50 text-brand-red px-4 py-2 font-grotesk font-bold text-sm uppercase tracking-wider rounded-full">General Training</span>
                <span className="bg-red-50 text-brand-red px-4 py-2 font-grotesk font-bold text-sm uppercase tracking-wider rounded-full">Mock Tests</span>
              </div>
            </motion.section>

            {/* Features Grid */}
            <section>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-8">Course Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Video className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">32 Live Classes</h4>
                  <p className="font-sans text-on-surface-variant">Intensive, interactive sessions via Zoom covering all four modules.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <PlayCircle className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">Recorded Materials</h4>
                  <p className="font-sans text-on-surface-variant">Access to all class recordings for revision and self-paced study.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <BookOpen className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">10 Full Mock Tests</h4>
                  <p className="font-sans text-on-surface-variant">Real exam simulation with personalized feedback and scores.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Smartphone className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">1 Year Portal Access</h4>
                  <p className="font-sans text-on-surface-variant">Practice reading passages and listening tests online anytime.</p>
                </div>
              </div>
            </section>

            {/* Testimonial / Success */}
            <section className="bg-blue-50 p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 border border-blue-100 hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Student Testimonial" 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
              />
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">Hear from an IELTS Achiever</h4>
                <p className="font-sans text-on-surface-variant mb-4">Discover how our structured methodology leads to an 8.0 Band score.</p>
                <button className="text-brand-red font-grotesk font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <PlayCircle size={20} /> Watch Video
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="sticky top-24 bg-white p-8 rounded-lg shadow-xl border border-outline-variant"
            >
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6 border-b border-outline-variant pb-4">Course Details</h3>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <Calendar className="text-outline w-6 h-6 mt-1" />
                  <div>
                    <span className="block font-grotesk font-bold text-brand-navy">Schedule</span>
                    <span className="font-sans text-on-surface-variant">Mon, Wed, Fri</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Monitor className="text-outline w-6 h-6 mt-1" />
                  <div>
                    <span className="block font-grotesk font-bold text-brand-navy">Platform</span>
                    <span className="font-sans text-on-surface-variant">Live via Zoom</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CreditCard className="text-outline w-6 h-6 mt-1" />
                  <div>
                    <span className="block font-grotesk font-bold text-brand-navy">Course Fee</span>
                    <span className="font-serif text-2xl font-bold text-brand-navy">5,500 BDT</span>
                  </div>
                </li>
              </ul>
              <button 
                onClick={() => openEnrollment("IELTS Preparation Course")}
                className="w-full bg-brand-red text-white py-4 font-grotesk font-semibold text-lg uppercase tracking-wider hover:bg-red-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-sm mb-4 cursor-pointer"
              >
                এখনই ভর্তি হন
              </button>
              <p className="text-center font-sans text-sm text-on-surface-variant">
                Limited seats available. Secure your spot today.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
