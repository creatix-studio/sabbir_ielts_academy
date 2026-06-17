import { PlayCircle, Video, Award, Smartphone, Calendar, Monitor, CreditCard } from "lucide-react";
import { motion } from "motion/react";
import { useEnrollment } from "../context/EnrollmentContext";
import bangladeshiStudentsImg from "../assets/images/bangladeshi_students_collaborating_1781373710360.jpg";
import bangladeshiStudentAvatar from "../assets/images/bangladeshi_student_avatar_1781373822412.jpg";

export function SpokenEnglish() {
  const { openEnrollment } = useEnrollment();
  return (
    <main className="flex-grow pt-[72px] bg-surface">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="bg-brand-red text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Subtle pattern background for parallax-ish effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-12 lg:mb-32">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[64px] font-bold mb-6">Spoken English Course</h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Confidence building curriculum to help you speak fluent English in professional and personal settings. Designed specifically for Bengali speakers.
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
            src={bangladeshiStudentsImg} 
            alt="Bangladeshi students collaborating with each other in a smiling positive and confident environment" 
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
              <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">Master Spoken English with Confidence</h2>
              <div className="font-sans text-lg text-on-surface-variant space-y-4 mb-8 leading-relaxed">
                <p>
                  ইংরেজি ভাষা শিখার জন্য লাগে দুইটা জিনিস:<br />
                  একটি হলো বাক্য আর একটি হলো কথা বলার সেন্স।
                </p>
                <p>
                  এখন কথা হলো বাক্য কিভাবে বানাবো?<br />
                  উত্তর হলো বাক্য কি দিয়ে শুরু করতে হবে এবং কি দিয়ে শেষ করতে হবে; সে ফর্মুলা জানতে হবে।
                </p>
                <p>
                  আর একটি সমস্যা হলো কোন সময় কোন Verb বসাবো।<br />
                  কারণ Verb এর তো অনেক রুপ হয় (Go, goes, gone, going)<br />
                  উত্তর হলো সঠিক Verb বসানোর জন্য আপনাকে বুঝতে হবে আপনি তখন কোন সিচুয়েশনে এ আছেন।
                </p>
                <p className="font-medium text-brand-navy">
                  এতো কিছু বলার পরেও যদি না বুঝতে পারেন; একটি ফ্রি ক্লাসের জন্য আজই রেজিট্রেশন করুন এবং নিজের জীবন থেকে আর দুইটি মিনিট ব্যয় করে এখনি কল করুন।
                </p>
              </div>
              <button 
                onClick={() => openEnrollment("Free Spoken English Class")}
                className="bg-brand-navy text-white px-8 py-3.5 font-grotesk font-bold uppercase tracking-wider hover:bg-brand-red hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded cursor-pointer border border-brand-navy hover:border-brand-red"
              >
                ফ্রি ক্লাস বুক করুন
              </button>
            </motion.section>

            {/* Features Grid */}
            <section>
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-8">Course Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Video className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">24 Live Classes</h4>
                  <p className="font-sans text-on-surface-variant">Interactive sessions via Zoom with expert instructors.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <PlayCircle className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">150 Interactive Videos</h4>
                  <p className="font-sans text-on-surface-variant">Comprehensive video library for self-paced learning.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Award className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">Course Certificate</h4>
                  <p className="font-sans text-on-surface-variant">Receive a verified certificate upon successful completion.</p>
                </div>
                <div className="p-6 border border-outline-variant bg-white rounded-lg hover:border-brand-navy hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <Smartphone className="text-brand-navy w-10 h-10 mb-4 group-hover:text-brand-red transition-colors" />
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">1 Year App Access</h4>
                  <p className="font-sans text-on-surface-variant">Practice anytime, anywhere with our dedicated mobile app.</p>
                </div>
              </div>
            </section>

            {/* Testimonial / Success */}
            <section className="bg-blue-50 p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 border border-blue-100 hover:shadow-md transition-shadow">
              <img 
                src={bangladeshiStudentAvatar} 
                alt="Student Testimonial" 
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm"
              />
              <div>
                <h4 className="font-serif text-xl font-bold text-brand-navy mb-2">Hear from our students</h4>
                <p className="font-sans text-on-surface-variant mb-4">See how our course builds confidence and fluency.</p>
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
                    <span className="font-sans text-on-surface-variant">Sun, Tue, Thu</span>
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
                    <span className="font-serif text-2xl font-bold text-brand-navy">3,500 BDT</span>
                  </div>
                </li>
              </ul>
              <button 
                onClick={() => openEnrollment("Spoken English Course")}
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

      {/* Outdoor Classes Gallery */}
      <section className="bg-white py-24 border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy mb-6">OUTDOOR CLASSES GALLERY</h2>
            <div className="w-24 h-1.5 bg-brand-red mx-auto relative rounded-full"></div>
            <p className="font-sans text-lg text-on-surface-variant mt-6 max-w-2xl mx-auto">
              Experience learning beyond the four walls. Our outdoor sessions boost contextual confidence.
            </p>
          </div>
          
          <div className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-xl group border-4 border-white relative w-full"
            >
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500 z-10"></div>
              <img 
                src="https://res.cloudinary.com/de67njaee/image/upload/v1781677778/outdoor_class_02_ba6uxh.webp" 
                alt="Outdoor spoken english class 1" 
                className="w-full h-auto max-h-[800px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden rounded-2xl shadow-xl group border-4 border-white relative w-full"
            >
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500 z-10"></div>
              <img 
                src="https://res.cloudinary.com/de67njaee/image/upload/v1781677778/outdoor_class_01_whnpm6.webp" 
                alt="Outdoor spoken english class 2" 
                className="w-full h-auto max-h-[800px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="overflow-hidden rounded-2xl shadow-xl group border-4 border-white relative w-full"
            >
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500 z-10"></div>
              <img 
                src="https://res.cloudinary.com/de67njaee/image/upload/v1781677780/outdoor_class_03_lffeta.webp" 
                alt="Outdoor spoken english class 3" 
                className="w-full h-auto max-h-[800px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
