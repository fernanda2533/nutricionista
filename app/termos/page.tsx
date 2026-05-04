"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container-custom max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-12">
            Termos de <span className="text-primary italic font-normal">Uso</span>
          </h1>
          
          <div className="prose prose-slate prose-lg text-foreground/70 space-y-8 font-sans leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da Lumina Nutrição, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">2. Uso do Conteúdo</h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é de propriedade da Lumina Nutrição e está protegido por leis de direitos autorais. O uso não autorizado de qualquer conteúdo pode violar leis de propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">3. Isenção de Responsabilidade</h2>
              <p>
                As informações contidas neste site são apenas para fins informativos e educacionais e não constituem aconselhamento médico ou nutricional individualizado. O uso do site não estabelece uma relação nutricionista-paciente sem uma consulta formal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">4. Agendamentos e Cancelamentos</h2>
              <p>
                Os agendamentos realizados através do site estão sujeitos à disponibilidade e confirmação. Políticas específicas de cancelamento e reagendamento serão comunicadas no momento da confirmação da consulta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">5. Links para Terceiros</h2>
              <p>
                Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência e não implicam endosso ou responsabilidade pelo conteúdo desses sites.
              </p>
            </section>
            
            <p className="text-sm text-foreground/40 pt-12">
              Última atualização: 04 de Maio de 2024.
            </p>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
