"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Envelope, MapPin, WhatsappLogo, CheckCircle } from "@phosphor-icons/react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground mb-8">
              Vamos <br />
              <span className="text-primary italic font-normal">Conversar?</span>
            </h1>
            <p className="text-xl text-foreground/50 leading-relaxed mb-12">
              Seja para agendar sua primeira consulta ou tirar dúvidas sobre nossa metodologia, estou à disposição.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all">
                  <WhatsappLogo size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-1">WhatsApp</p>
                  <a href="https://wa.me/5511999999999" className="text-xl font-display font-bold hover:text-primary transition-colors">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all">
                  <Envelope size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-1">E-mail</p>
                  <a href="mailto:ola@luminanutricao.com.br" className="text-xl font-display font-bold hover:text-primary transition-colors">
                    ola@luminanutricao.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all">
                  <MapPin size={24} weight="duotone" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-1">Consultório</p>
                  <p className="text-xl font-display font-bold">
                    Rua Harmonia, Vila Madalena <br />
                    São Paulo — SP
                  </p>
                </div>
              </div>
            </div>

            {/* Micro-map placeholder */}
            <div className="mt-12 rounded-[2.5rem] overflow-hidden aspect-video bg-secondary/30 relative border border-slate-100">
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50" alt="Vila Madalena" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 glass rounded-full font-bold text-sm">Ver no Google Maps</div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-slate-100 min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 ml-1">Nome Completo</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Seu nome aqui" 
                          className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary/30 focus:ring-0 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground/60 ml-1">WhatsApp</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="(11) 99999-9999" 
                          className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary/30 focus:ring-0 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60 ml-1">Assunto</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary/30 focus:ring-0 outline-none transition-all appearance-none">
                        <option>Agendar Primeira Consulta</option>
                        <option>Dúvidas sobre Metodologia</option>
                        <option>Palestras e Workshops</option>
                        <option>Outros</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground/60 ml-1">Mensagem</label>
                      <textarea 
                        required
                        rows={5} 
                        placeholder="Conte um pouco sobre seu momento e objetivos..." 
                        className="w-full px-6 py-4 rounded-2xl bg-surface border border-slate-100 focus:border-primary/30 focus:ring-0 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 rounded-2xl bg-primary text-surface font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                    >
                      Enviar Mensagem
                    </button>
                    
                    <p className="text-center text-xs text-foreground/40 font-medium">
                      Prometemos responder em até 24 horas úteis.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
                       <CheckCircle size={64} weight="duotone" />
                    </div>
                    <h2 className="text-4xl font-display font-bold tracking-tighter">Mensagem Enviada!</h2>
                    <p className="text-xl text-foreground/50 max-w-[400px] mx-auto">
                      Obrigada por entrar em contato. Em breve retornaremos sua mensagem para agendarmos nossa conversa.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline pt-4"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
