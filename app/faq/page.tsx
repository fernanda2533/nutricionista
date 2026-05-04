"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Question } from "@phosphor-icons/react";

const faqs = [
  {
    question: "O que é alimentação sem culpa?",
    answer: "É uma abordagem que remove o peso emocional de 'certo ou errado' dos alimentos. Focamos em comer com consciência, prazer e equilíbrio, entendendo que nenhum alimento sozinho é capaz de arruinar sua saúde.",
  },
  {
    question: "Como funciona o atendimento na Vila Madalena?",
    answer: "Meu consultório fica em uma rua tranquila da Vila Madalena, projetado para ser um espaço de calma. O atendimento dura cerca de 1h30 e inclui avaliação física, conversa profunda e entrega de um plano inicial.",
  },
  {
    question: "Vocês atendem online?",
    answer: "Sim! Oferecemos teleconsultas completas para pacientes em todo o Brasil e no exterior, utilizando plataformas seguras que garantem a mesma proximidade do presencial.",
  },
  {
    question: "Preciso comprar suplementos caros?",
    answer: "Não. A base do meu trabalho é a 'comida de verdade'. Suplementos são utilizados apenas quando há uma deficiência comprovada por exames ou uma necessidade específica da sua rotina.",
  },
  {
    question: "Vou receber um cardápio fixo?",
    answer: "Você receberá um guia alimentar flexível. Mais do que dizer 'coma isso às 8h', eu te ensino a fazer escolhas inteligentes em qualquer situação — seja em casa, no trabalho ou em um jantar na Vila.",
  },
];

export default function FAQPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8">
               <Question size={32} weight="duotone" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter text-foreground mb-8">
               Dúvidas <br />
               <span className="text-primary italic font-normal">Frequentes</span>
            </h1>
            <p className="text-xl text-foreground/50 leading-relaxed mb-12">
               Compilamos as perguntas mais comuns para te ajudar a entender como a nutrição humanizada pode mudar sua vida.
            </p>
            
            <div className="p-8 rounded-[2.5rem] bg-secondary/20 border border-secondary">
               <p className="font-display font-bold text-lg mb-4">Ainda com dúvidas?</p>
               <p className="text-sm text-foreground/60 mb-6">Mande uma mensagem direta e nossa equipe responderá em até 24h.</p>
               <button className="text-primary font-bold flex items-center gap-2 hover:underline">
                  Conversar no WhatsApp
               </button>
            </div>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  activeIdx === idx 
                  ? "bg-white border-primary/20 shadow-xl shadow-primary/5" 
                  : "bg-white/50 border-slate-100 hover:border-slate-200"
                }`}
              >
                <button
                  className="w-full p-8 flex items-center justify-between text-left"
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                >
                  <span className={`text-xl font-display font-bold transition-colors ${
                    activeIdx === idx ? "text-primary" : "text-foreground"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeIdx === idx ? "bg-primary text-surface rotate-90" : "bg-slate-100 text-foreground/40"
                  }`}>
                    {activeIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8 text-foreground/50 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
