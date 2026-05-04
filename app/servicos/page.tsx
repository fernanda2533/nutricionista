"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Coffee, House } from "@phosphor-icons/react";

const services = [
  {
    icon: Users,
    title: "Consulta Individual",
    description: "Atendimento personalizado focado em suas metas, rotina e história com a comida.",
    duration: "60-90 min",
    price: "Sob consulta",
  },
  {
    icon: House,
    title: "Home Care & Online",
    description: "Levamos a consultoria até o conforto da sua casa ou via atendimento online, avaliando sua rotina real.",
    duration: "2 horas",
    price: "Personalizado",
  },
  {
    icon: Coffee,
    title: "Workshop de Cozinha Prática",
    description: "Aprenda a cozinhar pratos nutritivos e deliciosos sem complicação ou culpa.",
    duration: "3 horas",
    price: "Mensal",
  },
  {
    icon: Calendar,
    title: "Acompanhamento Premium",
    description: "Suporte diário via WhatsApp para ajustes em tempo real e motivação contínua.",
    duration: "3 meses",
    price: "Plano Trimestral",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[700px] mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-foreground mb-6">
            Nossos <span className="text-primary italic font-normal">Serviços</span>
          </h1>
          <p className="text-xl text-foreground/50 leading-relaxed">
            Soluções completas para quem busca uma vida mais leve, saudável e com total liberdade alimentar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-surface transition-colors">
                  <service.icon size={28} weight="duotone" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/50 leading-relaxed mb-8">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="text-sm font-medium text-foreground/40">
                  <span className="block text-xs uppercase tracking-widest text-primary/60 mb-1">Duração</span>
                  {service.duration}
                </div>
                <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-surface transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding container-custom">
        <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-center text-surface relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Pronta para começar?</h2>
            <p className="text-xl opacity-70 mb-12 max-w-[600px] mx-auto">
              Dê o primeiro passo rumo a uma relação mais saudável com seu corpo e sua alimentação.
            </p>
            <button className="px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
              Agende sua Conversa Inicial
            </button>
          </div>
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
