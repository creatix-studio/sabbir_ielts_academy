import { createContext, useContext, useState, ReactNode } from "react";

interface EnrollmentContextType {
  isOpen: boolean;
  selectedCourse: string;
  openEnrollment: (course?: string) => void;
  closeEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openEnrollment = (course = "") => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <EnrollmentContext.Provider
      value={{
        isOpen,
        selectedCourse,
        openEnrollment,
        closeEnrollment: closeModal,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within an EnrollmentProvider");
  }
  return context;
}
