import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "8801345693052"; // Removed '+' for valid WhatsApp link
  const message = encodeURIComponent("Hello Sabbir IELTS Academy, I'm interested in your courses.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 ease-in-out hover:-translate-y-1 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="drop-shadow-sm" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:pl-2 font-medium">
        Chat with us
      </span>
    </a>
  );
}
