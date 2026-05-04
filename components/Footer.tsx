"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-bold text-2xl tracking-tighter">
          Lumina <span className="text-primary font-normal">Nutrição</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-foreground/50">
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
          <Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
          <Link href="/como-funciona" className="hover:text-primary transition-colors">Metodologia</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link href="/contato" className="hover:text-primary transition-colors font-bold text-primary">Agendar</Link>
        </div>
        <div className="flex gap-8 text-sm font-medium text-foreground/50">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          <Link href="/termos" className="hover:text-primary transition-colors">Termos</Link>
        </div>
        <div className="text-sm text-foreground/30 font-medium">
          © 2024 Lumina Nutrição. Vila Madalena, SP.
        </div>
      </div>
    </footer>
  );
}
