/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { Home } from "./pages/Home";
import { StudyAbroad } from "./pages/StudyAbroad";
import { SpokenEnglish } from "./pages/SpokenEnglish";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import { EnrollmentModal } from "./components/layout/EnrollmentModal";

export default function App() {
  return (
    <EnrollmentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<StudyAbroad />} />
            <Route path="/spoken-english" element={<SpokenEnglish />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <EnrollmentModal />
        </div>
      </BrowserRouter>
    </EnrollmentProvider>
  );
}

