"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            Política de <span className="text-primary italic font-normal">Privacidade</span>
          </h1>
          
          <div className="prose prose-slate prose-lg text-foreground/70 space-y-8 font-sans leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">1. Coleta de Informações</h2>
              <p>
                Coletamos informações que você nos fornece diretamente ao preencher formulários em nosso site, agendar consultas ou se comunicar conosco por e-mail ou WhatsApp. Isso pode incluir seu nome, endereço de e-mail, número de telefone e qualquer outra informação que você decida compartilhar.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">2. Uso das Informações</h2>
              <p>
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agendar e gerenciar suas consultas nutricionais.</li>
                <li>Responder às suas dúvidas e solicitações de suporte.</li>
                <li>Enviar lembretes e atualizações sobre nossos serviços.</li>
                <li>Personalizar sua experiência e melhorar nosso atendimento.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">3. Proteção de Dados</h2>
              <p>
                Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra perda, uso indevido, acesso não autorizado ou divulgação. O sigilo profissional é a base do nosso atendimento ético.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">4. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para isso, entre em contato através de ola@luminanutricao.com.br.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-foreground">5. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
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
