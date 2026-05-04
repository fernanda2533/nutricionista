"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Sparkle, Target, Users } from "@phosphor-icons/react";

const features = [
  {
    icon: Heart,
    title: "Sem Restrições",
    description: "Comer o que você ama é parte do processo. Foco no equilíbrio.",
  },
  {
    icon: Sparkle,
    title: "Vila Madalena",
    description: "Um ambiente acolhedor e artístico no coração de São Paulo.",
  },
  {
    icon: Target,
    title: "Abordagem Científica",
    description: "Baseado em evidências, não em modismos ou dietas passageiras.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Você é mais do que um número na balança. Olhar integral.",
  },
];

export default function Home() {
  return (
    <main className="relative bg-surface">
      <Navbar />
      <Hero />

      {/* Philosophy Section */}
      <section className="section-padding container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-surface transition-colors">
                <feature.icon size={24} weight="duotone" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/50 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section - Asymmetric Bento */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">
              Uma nova forma de <br />
              <span className="text-primary italic font-normal">nutrir</span> sua vida.
            </h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Moro na Vila Madalena há 10 anos e entendo a rotina pulsante de São Paulo. Meu consultório foi desenhado para ser um refúgio, onde a alimentação é vista como aliada, não como inimiga.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                   <Sparkle size={14} className="text-primary" weight="fill" />
                </div>
                <span className="text-sm font-medium">Especialista em Comportamento Alimentar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                   <Sparkle size={14} className="text-primary" weight="fill" />
                </div>
                <span className="text-sm font-medium">Foco em Saúde Intestinal e Bem-estar</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="rounded-[2.5rem] overflow-hidden aspect-square md:aspect-auto h-full shadow-2xl">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Wellness" />
             </div>
             <div className="bg-primary p-10 rounded-[2.5rem] text-surface flex flex-col justify-end">
                <p className="text-3xl font-display font-bold leading-tight mb-4">&quot;A nutrição deve ser leve como a brisa da Vila Madalena.&quot;</p>
                <p className="text-sm opacity-60 font-medium">— Sua Nutri</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Intelligent List Pattern */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Histórias de <br />
                <span className="text-primary italic font-normal">Transformação</span>
              </h2>
              <p className="text-xl text-foreground/50">
                O que meus pacientes dizem sobre redescobrir o prazer de comer sem culpa.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-secondary/30 text-primary font-bold text-sm">
                +500 Consultas
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Beatriz L.",
                role: "Paciente há 6 meses",
                text: "Finalmente entendi que não preciso de restrições para ter saúde. Minha relação com o espelho mudou completamente.",
                image: "https://picsum.photos/seed/p1/100/100"
              },
              {
                name: "Ricardo M.",
                role: "Paciente há 1 ano",
                text: "O acompanhamento na Vila Madalena é um refúgio. A abordagem humanizada faz toda a diferença no processo.",
                image: "https://picsum.photos/seed/p2/100/100"
              },
              {
                name: "Mariana S.",
                role: "Paciente há 3 meses",
                text: "A nutrição comportamental salvou minha saúde mental. Hoje como de tudo com consciência e prazer.",
                image: "https://picsum.photos/seed/p3/100/100"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[3rem] bg-surface border border-slate-100 relative group"
              >
                <div className="absolute top-8 right-10 text-primary/20 text-6xl font-display">“</div>
                <p className="text-lg leading-relaxed text-foreground/70 mb-8 relative z-10">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={t.image} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-foreground/40 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}


