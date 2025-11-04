'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ProfileCard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="card w-80 bg-neutral text-neutral-content shadow-2xl"
          >
            <div className="card-body items-center text-center p-6">
              {/* Avatar */}
              <div className="avatar mb-4">
                <div className="w-32 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/perfil.png"
                    alt="Winnícius Moura"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Nome */}
              <h2 className="card-title text-2xl font-bold mb-1">
                Winnícius Moura
              </h2>

              {/* Badge */}
              <div className="badge badge-accent gap-2 mb-6">
                Fight on 🔥
              </div>

              <div className="divider my-2"></div>

              {/* Informações de Contato */}
              <div className="w-full space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="w-5 h-5 text-warning mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-content/60 uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-sm font-medium">
                      Campina Grande, PB, BR
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-left">
                  <Mail className="w-5 h-5 text-info mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-content/60 uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href="mailto:winnicius.moura@gmail.com"
                      className="text-sm font-medium hover:text-info transition-colors break-all"
                    >
                      winnicius.moura@gmail.com
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-3 text-left">
                  <Github className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-content/60 uppercase tracking-wide">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/winnicius-moura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-success transition-colors"
                    >
                      @winnicius-moura
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-3 text-left">
                  <Linkedin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-content/60 uppercase tracking-wide">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/winnicius-moura"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      in/winnicius-moura
                    </a>
                  </div>
                </div>
              </div>

              <div className="divider my-2"></div>

              {/* Footer */}
              <div className="text-center mt-2">
                <p className="text-xs text-neutral-content/60">
                  © 2025{' '}
                  <span className="text-primary font-semibold">wnn-softwares</span>
                </p>
                <div className="flex gap-3 justify-center mt-2">
                  <a
                    href="#"
                    className="text-xs text-warning hover:underline transition-all"
                  >
                    RSS
                  </a>
                  <a
                    href="#"
                    className="text-xs text-warning hover:underline transition-all"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="text-xs text-warning hover:underline transition-all"
                  >
                    Docs
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleCard}
        className="btn btn-circle btn-primary ml-2 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Fechar perfil' : 'Abrir perfil'}
      >
        {isOpen ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
