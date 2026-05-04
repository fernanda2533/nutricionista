"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import MagneticButton from "./MagneticButton";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Como Funciona", href: "/como-funciona" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "container-custom flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
          isScrolled ? "glass shadow-sm" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-surface font-display font-bold text-sm">L</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Lumina <span className="text-primary font-normal">Nutrição</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <MagneticButton>
            <Link
              href="/contato"
              className="px-5 py-2 rounded-full bg-primary text-surface text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Agendar Consulta
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden z-40 border border-white/20 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-display font-medium text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-4 px-6 py-4 rounded-2xl bg-primary text-surface text-center font-display font-bold text-lg shadow-xl shadow-primary/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Agora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
