import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import { AuthProvider, useAuth } from "@/lib/auth";
import Layout from "@/components/Layout";
import ChatWidget from "@/components/ChatWidget";
import ScrollToHash from "@/components/ScrollToHash";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Results from "@/pages/Results";
import Audit from "@/pages/Audit";
import Contact from "@/pages/Contact";
import Book from "@/pages/Book";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Portal from "@/pages/Portal";

function Protected({ children }) {
  const { user, loading } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="p-20 text-center font-sub text-[#1C3F39]/60">Loading…</div>;
  if (!user) return <Navigate to="/login" replace state={{ from: loc.pathname }} />;
  return children;
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ScrollToHash />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/results" element={<Results />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/portal" element={<Protected><Portal /></Protected>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
          <ChatWidget />
          <Toaster position="top-right" richColors />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
