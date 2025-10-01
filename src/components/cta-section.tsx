
// // src/components/cta-section.tsx
// import type React from "react"
// import { useState } from "react"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { CheckCircle2, Gift, Mail } from "lucide-react"

// export function CTASection() {
//   const [email, setEmail] = useState("")
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (email) {
//       console.log("[v0] Email submitted:", email)
//       setSubmitted(true)
//       setTimeout(() => {
//         setEmail("")
//         setSubmitted(false)
//       }, 3000)
//     }
//   }

//   return (
//     <section id="cta-section" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//       <div className="div-section-cta mx-auto max-w-4xl">
//         <div className="div-section-cta rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
//           {/* Gift Icon */}
//           <div className="mb-8 flex justify-center">
//             <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
//               <Gift className="h-8 w-8 text-blue-600" />
//             </div>
//           </div>

//           {/* Headline */}
//           <h2 className="mb-4 text-balance text-center text-3xl font-bold text-blue-100 sm:text-4xl">
//             Participa en el sorteo exclusivo
//           </h2>

//           {/* Description */}
//           <p className="mb-8 text-pretty text-center text-base leading-relaxed text-gray-500 sm:text-lg">
//             Regístrate ahora y sé de los primeros en probar Olawee. Los primeros registrados entrarán en un sorteo
//             exclusivo con premios especiales.
//           </p>

//           {/* Form */}
//           {submitted ? (
//             <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-lg bg-white p-4 text-green-700 shadow-sm">
//               <CheckCircle2 className="h-5 w-5" />
//               <span className="font-medium">¡Gracias! Te contactaremos pronto.</span>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="mx-auto max-w-md">
//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <div className="relative flex-1">
//                   <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
//                   <Input
//                     type="email"
//                     placeholder="tu@email.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="pl-10 h-12 bg-white border-gray-300"
//                   />
//                 </div>
//                 <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8">
//                   Registrarme
//                 </Button>
//               </div>
//             </form>
//           )}

//           {/* Footer text */}
//           <p className="mt-6 text-center text-sm text-gray-600">
//             Al registrarte, aceptas recibir actualizaciones sobre el lanzamiento
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }












// src/components/cta-section.tsx
import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { CheckCircle2, Gift, Mail } from "lucide-react"

import videoBackground from "../assets/video_bueno.mp4"

export default function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email) {
      console.log("[v0] Email submitted:", email)
      setSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section id="cta-section" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden">
      {/* VIDEO DE FONDO */}
      <div className="absolute inset-0 video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBackground} type="video/mp4" />
          {/* Fallback para navegadores sin soporte de video */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050a0f] via-[#0a1420] to-[#050a0f]"></div>
        </video>
        
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Overlay de color para mezclar con tu paleta */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="p-8 sm:p-12 lg:p-16 shadow-lg cta-inner">
          {/* Gift Icon */}
          <div className="mb-8 flex justify-center">
            <div className="gift-icon-wrapper inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm">
              <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="mb-4 text-balance text-center text-3xl font-bold text-white sm:text-4xl">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Participa en el sorteo exclusivo
            </span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-pretty text-center text-base leading-relaxed text-gray-200 sm:text-lg">
            Regístrate ahora y sé de los primeros en probar Olawee. Los primeros registrados entrarán en un sorteo
            exclusivo con premios especiales.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="success-message mx-auto flex max-w-md items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 p-4 text-green-400 shadow-lg backdrop-blur-sm">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">¡Gracias! Te contactaremos pronto.</span>
            </div>
          ) : (
            <div className="mx-auto max-w-md">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    className="pl-10 h-12 w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 focus:outline-none transition-all"
                  />
                </div>
                <button 
                  onClick={handleSubmit}
                  className="h-12 px-8 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
               hover:to-blue-600 text-white font-medium shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
                >
                  Registrarme
                </button>
              </div>
            </div>
          )}

          {/* Footer text */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Al registrarte, aceptas recibir actualizaciones sobre el lanzamiento
          </p>
        </div>
      </div>


    </section>
  )
}

export { CTASection }