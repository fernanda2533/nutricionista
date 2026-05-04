"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";

export default function PresentationPage() {
  const [step, setStep] = useState(0);
  const controls = useAnimation();

  // Sequence of the "Tour"
  useEffect(() => {
    const sequence = async () => {
      // 1. Hero Entrance
      setStep(0);
      await new Promise(r => setTimeout(r, 4000));

      // 2. Scroll to Philosophy
      setStep(1);
      window.scrollTo({ top: 800, behavior: "smooth" });
      await new Promise(r => setTimeout(r, 3000));

      // 3. Scroll to Testimonials
      setStep(2);
      const testimonials = document.getElementById("testimonials");
      testimonials?.scrollIntoView({ behavior: "smooth" });
      await new Promise(r => setTimeout(r, 5000));

      // 4. Go to Contact
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
      await new Promise(r => setTimeout(r, 1000));
    };

    sequence();
  }, []);

  return (
    <main className="bg-surface min-h-screen relative overflow-hidden">
      {/* Overlay for Presentation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] glass px-8 py-4 rounded-full flex items-center gap-6 shadow-2xl border border-primary/20">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${step === 0 ? "bg-primary animate-pulse" : "bg-slate-200"}`} />
          <div className={`w-3 h-3 rounded-full ${step === 1 ? "bg-primary animate-pulse" : "bg-slate-200"}`} />
          <div className={`w-3 h-3 rounded-full ${step === 2 ? "bg-primary animate-pulse" : "bg-slate-200"}`} />
          <div className={`w-3 h-3 rounded-full ${step === 3 ? "bg-primary animate-pulse" : "bg-slate-200"}`} />
        </div>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          {step === 0 && "Início: Nutrição Além do Prato"}
          {step === 1 && "Filosofia e Abordagem"}
          {step === 2 && "Prova Social (Depoimentos)"}
          {step === 3 && "Conclusão e Contato"}
        </p>
      </div>

      <Navbar />
      
      {/* Home Content for the tour */}
      <Hero />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
           <h2 className="text-4xl font-display font-bold mb-8">Nossa Abordagem</h2>
           <div className="h-[400px] bg-secondary/10 rounded-[3rem] flex items-center justify-center border-2 border-dashed border-slate-200">
              <p className="text-slate-400">Conteúdo de Demonstração...</p>
           </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-surface">
         <div className="container-custom">
            <h2 className="text-6xl font-display font-bold tracking-tighter mb-16">Histórias de Transformação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm">
                     <div className="w-12 h-12 rounded-full bg-slate-200 mb-6" />
                     <p className="text-lg text-foreground/70 italic">"Este site é um exemplo de como a nutrição pode ser apresentada de forma elegante."</p>
                     <p className="mt-6 font-bold">Paciente Exemplo</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {step === 3 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[110] bg-primary flex items-center justify-center text-surface text-center p-8"
        >
          <div className="max-w-[600px]">
            <CheckCircle size={80} weight="duotone" className="mx-auto mb-8" />
            <h2 className="text-6xl font-display font-bold tracking-tighter mb-6">Pronto para Impressionar?</h2>
            <p className="text-xl text-surface/80 mb-12">
              Este tour automático foi criado para facilitar sua gravação. Basta abrir esta página e usar um gravador de tela.
            </p>
            <Link href="/" className="px-8 py-4 bg-white text-primary rounded-full font-bold">
              Voltar ao Site Real
            </Link>
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
