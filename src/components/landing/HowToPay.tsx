import React from "react";
import { SectionShell } from "./shared";
import { Calendar, CreditCard, Flame, Smartphone } from "lucide-react";

export function HowToPay() {
  return (
    <SectionShell className="scrap-section dot-paper relative overflow-hidden" id="como-pagar">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 relative animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--lavender)] font-display uppercase tracking-wide flex items-center justify-center gap-4">
            <span className="text-[var(--lavender-soft)] text-3xl">✨</span>
            ¿CÓMO PUEDES PAGAR?
            <span className="text-[var(--mint)] text-4xl">✦</span>
          </h2>
        </div>

        {/* Payment Options Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Option 1: Full Payment */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <div className="bg-gradient-to-r from-orange-200 to-orange-300 rounded-full py-2 px-6 flex items-center gap-2 mb-6 text-white font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-5 h-5 text-orange-500" />
              PAGO COMPLETO
            </div>
            <div className="text-5xl md:text-6xl font-display text-[var(--peach)] mb-4">
              $1,500 MXN
            </div>
            <p className="text-gray-700 text-lg">Precio especial de lanzamiento.</p>
          </div>

          {/* Option 2: Weekly Payment */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="bg-gradient-to-r from-teal-100 to-teal-200 rounded-full py-2 px-6 flex items-center gap-2 mb-6 text-teal-800 font-bold uppercase tracking-wider shadow-sm">
              <Calendar className="w-5 h-5 text-teal-600" />
              PAGO SEMANAL
            </div>
            <div className="text-3xl md:text-4xl font-display text-teal-800 mb-2">
              6 PAGOS DE $300 MXN
            </div>
            <p className="text-teal-700 font-medium mb-3">Total: $1,800 MXN</p>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              El primer pago de $300 MXN permite iniciar el esquema de pagos...
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 mb-12">
          {/* Bank Details */}
          <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5 opacity-80" />
              DATOS BANCARIOS
            </h3>
            <div className="space-y-2 text-sm md:text-base font-medium">
              <p>
                <span className="opacity-80">Banco:</span> Mercado Pago W
              </p>
              <p>
                <span className="opacity-80">Titular:</span> Cristel P.
              </p>
              <p>
                <span className="opacity-80">CLABE:</span> 722969011908105758
              </p>
              <p>
                <span className="opacity-80">Concepto:</span> PAA + NOMBRE DEL ALUMNO
              </p>
            </div>
          </div>

          {/* After Payment Steps */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <h3 className="text-2xl md:text-3xl font-display text-[var(--lavender)] mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-[var(--lavender)]" />
              DESPUÉS DE REALIZAR EL PAGO
            </h3>

            <div className="flex flex-col md:flex-row gap-6 md:gap-4 text-sm md:text-base text-gray-800">
              <div className="flex-1 flex gap-3">
                <span className="font-bold text-[var(--lavender)]">1.</span>
                <p>
                  Realiza tu
                  <br />
                  transferencia
                </p>
              </div>
              <div className="flex-[2] flex gap-3 border-l-2 border-[var(--lavender-soft)] pl-4">
                <span className="font-bold text-[var(--lavender)]">2.</span>
                <div>
                  <p className="mb-1">Envía tu comprobante por</p>
                  <p className="font-bold mb-1">WhatsApp AL 479 220 3076</p>
                  <p className="text-xs text-gray-600 bg-white/80 p-2 rounded italic">
                    Escribe: "YA HICE MI PAGO — [TU NOMBRE]"
                  </p>
                </div>
              </div>
              <div className="flex-1 flex gap-3 border-l-2 border-[var(--lavender-soft)] pl-4">
                <span className="font-bold text-[var(--lavender)]">3.</span>
                <p>
                  Espera la
                  <br />
                  confirmación
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Pill */}
        <div className="bg-[var(--mint)] text-white text-center py-4 px-6 rounded-full font-bold tracking-wider text-sm md:text-base shadow-md uppercase transform transition-all hover:scale-105 duration-300 cursor-pointer animate-in fade-in zoom-in-95 duration-700 delay-500">
          CUALQUIER DUDA, COMUNÍCATE DIRECTAMENTE A MI WHATSAPP
        </div>
      </div>
    </SectionShell>
  );
}
