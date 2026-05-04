"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "@phosphor-icons/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-surface">
      {/* Background blobs for depth */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[5%] left-[-5%] w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[80px]" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit"
          >
            <Leaf weight="fill" size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Nutrição e Bem-estar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-foreground"
          >
            Alimente-se com <br />
            <span className="text-primary italic font-normal">Prazer, </span>
            não com <br />
            Culpa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-foreground/60 max-w-[500px] leading-relaxed"
          >
            Redescubra sua relação com a comida através de uma abordagem científica, empática e livre de restrições severas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/servicos"
              className="px-8 py-4 rounded-2xl bg-primary text-surface font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 group"
            >
              Ver Serviços
              <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/como-funciona"
              className="px-8 py-4 rounded-2xl border border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all"
            >
              Nossa Metodologia
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-secondary overflow-hidden">
                   <img src={`https://picsum.photos/seed/nutri-${i}/100/100`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/40 font-medium">
              +200 vidas transformadas através da nutrição humanizada
            </p>
          </motion.div>
        </div>

        {/* Visual Asset / Image */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-[12px] border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000"
              alt="Healthy lifestyle"
              className="w-full h-full object-cover"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl">
              <p className="text-sm font-bold text-foreground">📍 Atendimento Personalizado</p>
              <p className="text-xs text-foreground/60">Presencial e online</p>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-3xl blur-2xl z-0"
          />
        </div>
      </div>
    </section>
  );
}
