import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, User, Bot, HelpCircle, ChevronDown, ChevronUp, Bird } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  faqs?: FAQ[];
}

const IELTS_FAQS: FAQ[] = [
  { id: "i1", question: "আমি কোন IELTS দিবো?", answer: "বিদেশে উচ্চশিক্ষার (Bachelor, Master, PhD) জন্য Academic IELTS দিতে হবে। ইমিগ্রেশন বা চাকরির জন্য General Training (GT) IELTS দিতে হবে।" },
  { id: "i2", question: "টার্গেট স্কোরের জন্য কি কোনো সহায়তা আছে?", answer: "আমাদের একাডেমিতে প্রতিটি শিক্ষার্থীর উইকনেস পয়েন্ট টার্গেট করে কাস্টমাইজড স্টাডি প্ল্যান দেয়া হয়। আপনার কাঙ্ক্ষিত স্কোর না আসা পর্যন্ত আমাদের মেন্টররা গাইড করে থাকেন।" },
  { id: "i3", question: "মক টেস্ট কি অন্তর্ভুক্ত রয়েছে?", answer: "হ্যাঁ, আমাদের কোর্সে রিয়েল এক্সাম এনভায়রনমেন্টের মতো মক টেস্ট অন্তর্ভুক্ত রয়েছে।" }
];

const SPOKEN_FAQS: FAQ[] = [
  { id: "s1", question: "এটি কি বিগিনারদের জন্য?", answer: "আমাদের স্পোকেন ইংলিশ কোর্সটি একদম বেসিক থেকে শুরু হয়, যা মাতৃভাষার মতো করে প্র্যাকটিস করিয়ে ভয় দূর করে।" },
  { id: "s2", question: "আপনাদের কি স্পিকিং ক্লাব আছে?", answer: "আমাদের স্পোকেন কোর্স এর সাথে রয়েছে ২৪/৭ অনলাইন ও সেমি-লাইভ স্পিকিং সেন্টারের সুবিধা।" },
  { id: "s3", question: "ক্লাসগুলোতে কোন বিষয়ে ফোকাস করা হয়?", answer: "সঠিক উচ্চারণ, ফ্লুয়েন্সি এবং ডেইলি কনভারসেশনাল ইংরেজি নিয়ে ক্লাস করানো হয়।" }
];

const STUDY_ABROAD_FAQS: FAQ[] = [
  { id: "sa1", question: "আপনারা কোন দেশগুলো প্রসেস করেন?", answer: "যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা এবং অস্ট্রেলিয়ার জন্য সঠিক গাইডলাইন দিয়ে থাকি।" },
  { id: "sa2", question: "কাউন্সেলিং কি ফ্রি?", answer: "হ্যাঁ, আমাদের ট্রেইন্ড গ্লোবাল এডুকেশন এক্সপার্টেরা সম্পূর্ণ বিনামূল্যে আপনার প্রোফাইল ও বাজেট অনুযায়ী স্কলারশিপ ও ইউনিভার্সিটি নির্ধারণে সাহায্য করেন।" },
  { id: "sa3", question: "আপনারা কি ভিসা গাইডলাইনে সহায়তা করেন?", answer: "সঠিক একাডেমিক ডকুমেন্টস তৈরি থেকে শুরু করে কমপ্লিট ভিসা ফাইল তৈরিতে আমরা সম্পূর্ণ সহায়তা দিয়ে থাকি।" }
];

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["ielts", "academic", "general", "gt", "ielts module"],
    text: "IELTS সম্পর্কে আপনি নিচের সাধারণ প্রশ্নগুলোর (FAQ) উত্তর দেখতে পারেন:",
    faqs: IELTS_FAQS
  },
  {
    keywords: ["spoken", "english", "fluency", "speaking"],
    text: "Spoken English কোর্স সম্পর্কে আমাদের FAQ গুলো দেখতে পারেন:",
    faqs: SPOKEN_FAQS
  },
  {
    keywords: ["abroad", "study", "visa", "university", "foreign", "scholarship"],
    text: "উচ্চশিক্ষার (Study Abroad) বিষয়ে নিচের প্রশ্নগুলোর উত্তর আপনার কাজে লাগতে পারে:",
    faqs: STUDY_ABROAD_FAQS
  },
  {
    keywords: ["address", "location", "where", "office", "branch"],
    text: "আমাদের অফিসটি মিরপুর, ঢাকা-তে অবস্থিত। আপনি অনলাইনেও আমাদের সব কোর্সে অংশ নিতে পারবেন।"
  },
  {
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "assalamualaikum", "salam"],
    text: "হ্যালো! Sabbir IELTS Academy-তে আপনাকে স্বাগতম। আমি আপনাকে কীভাবে সাহায্য করতে পারি? (IELTS, Spoken, Study Abroad সম্পর্কে জানতে পারেন)"
  }
];

function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-3 flex flex-col gap-2">
      {faqs.map(faq => (
        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
          <button 
            className="w-full text-left px-3 py-2 text-xs font-semibold text-[#00174e] flex justify-between items-center hover:bg-gray-100 transition-colors"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <span>{faq.question}</span>
            {openId === faq.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-3 text-[11px] text-gray-700 bg-white border-t border-gray-100">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "হ্যালো! Sabbir IELTS Academy-তে আপনাকে স্বাগতম। আপনি IELTS, Spoken English বা Study Abroad সম্পর্কে কোন প্রশ্নটি করতে চান?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const findBestAnswer = (query: string): { text: string; faqs?: FAQ[] } => {
    const lowerQuery = query.toLowerCase();
    
    for (const item of FAQ_KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => lowerQuery.includes(kw))) {
        return { text: item.text, faqs: item.faqs };
      }
    }
    
    return { text: "দুঃখিত, আমি ঠিক বুঝতে পারিনি। আপনি কি দয়া করে নির্দিষ্ট কোনো কোর্সের (IELTS, Spoken, Study Abroad) কথা বলবেন? অথবা বিস্তারিত জানতে আমাদের হেল্পলাইন +8801345693052 নাম্বারে কল করুন।" };
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const { text, faqs } = findBestAnswer(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text,
        faqs,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#00174e] text-white rounded-full shadow-2xl hover:bg-[#d02830] transition-all duration-300 ease-in-out hover:-translate-y-1 group ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat Guide"
      >
        <Bird size={28} className="drop-shadow-sm group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] w-[350px] max-w-[calc(100vw-32px)] h-[500px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#00174e] text-white p-4 flex justify-between items-center shrink-0 shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bird size={22} className="text-blue-100" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#00174e] rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base leading-tight">Virtual Assistant</h3>
                  <p className="text-[10px] text-blue-200 font-sans tracking-wide uppercase">Sabbir IELTS Support</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4" style={{ overscrollBehavior: 'contain' }}>
              <div className="text-center text-xs text-gray-400 font-sans my-2">
                Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-2 max-w-full`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[#00174e] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                      <Bird size={14} className="text-white" />
                    </div>
                  )}
                  
                  <div className={`px-4 py-2.5 rounded-2xl min-w-[60%] max-w-[85%] shadow-sm ${
                    msg.sender === "user" 
                      ? "bg-[#d02830] text-white rounded-br-sm" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                  }`}>
                    <p className="text-sm font-sans whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    
                    {msg.faqs && <FAQAccordion faqs={msg.faqs} />}
                    
                    <span className={`text-[9px] mt-2 block text-right ${msg.sender === "user" ? "text-red-200" : "text-gray-400"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00174e] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                    <Bird size={14} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-end gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="আপনার প্রশ্ন লিখুন..."
                  className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#00174e] transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-11 h-11 shrink-0 bg-[#00174e] text-white rounded-full flex items-center justify-center hover:bg-[#d02830] transition-colors disabled:opacity-50 disabled:hover:bg-[#00174e]"
                >
                  <Send size={18} className="mr-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
