"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChatTeardropText, ClipboardText, CookingPot, Graph } from "@phosphor-icons/react";

const steps = [
  {
    icon: ChatTeardropText,
    title: "1. Acolhimento",
    description: "Nossa primeira conversa é para entender sua história, seus medos e seus objetivos. Sem julgamentos.",
  },
  {
    icon: ClipboardText,
    title: "2. Diagnóstico & Plano",
    description: "Análise de exames e criação de uma estratégia nutricional flexível que se adapta à sua vida na Vila Madalena.",
  },
  {
    icon: CookingPot,
    title: "3. Prática Diária",
    description: "Dicas de compras, organização e preparo de alimentos. Transformamos a teoria em rotina leve.",
  },
  {
    icon: Graph,
    title: "4. Evolução Constante",
    description: "Acompanhamento de resultados que vão além do peso: energia, humor e liberdade mental.",
  },
];

export default function HowItWorks() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-[800px] mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground mb-6">
            A Jornada <span className="text-primary italic font-normal">Sem Culpa</span>
          </h1>
          <p className="text-xl text-foreground/50 leading-relaxed">
            Um processo estruturado para transformar sua saúde de forma definitiva, respeitando seu tempo e sua individualidade.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          
          <div className="flex flex-col gap-24 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-right md:pr-12">
                   <div className={`md:flex flex-col ${idx % 2 !== 0 ? "md:items-start md:text-left md:pl-12 md:pr-0" : "md:items-end"}`}>
                      <h3 className="text-3xl font-display font-bold mb-4 text-foreground">{step.title}</h3>
                      <p className="text-foreground/50 leading-relaxed max-w-[400px]">{step.description}</p>
                   </div>
                </div>
                
                <div className="w-20 h-20 rounded-full bg-white border-4 border-surface shadow-xl flex items-center justify-center z-10 text-primary relative">
                   <step.icon size={32} weight="duotone" />
                   {/* Circle Pulsing */}
                   <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-50" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom Visual */}
      <section className="section-padding overflow-hidden">
         <div className="container-custom">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="rounded-[3.5rem] bg-secondary/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12"
            >
               <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Methodology" />
               </div>
               <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-display font-bold mb-6 italic">&quot;A ciência diz o que comer, a nutrição humanizada ensina como viver.&quot;</h2>
                  <p className="text-foreground/60 leading-relaxed">
                     Trabalho com as técnicas mais modernas de Nutrição Comportamental para que você não precise de uma nova &quot;dieta&quot; nunca mais.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>
      <Footer />
    </main>
  );
}
