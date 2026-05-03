import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import Eligibility from "@/pages/Eligibility";
import Guide from "@/pages/Guide";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Assistant from "@/pages/Assistant";
import Learn from "@/pages/Learn";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </AuthProvider>
  );
}
