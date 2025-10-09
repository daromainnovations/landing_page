// // src/components/hero-section.tsx
// import { Button } from "./ui/button"
// import { ArrowRight, Sparkles } from "lucide-react"

// import logo from "@/assets/olawee_icon.png";

// export function HeroSection() {
//   const scrollToCTA = () => {
//     document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//       <div className="mx-auto max-w-5xl">
//         <div className="text-center">
//           {/* Logo */}
//           <div className="mb-6 flex justify-center">
//            <img src={logo} alt="olawee" />
//           </div>

//           {/* Headline */}
//           <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-blue-300 sm:text-5xl lg:text-6xl">
//             La IA que revoluciona la productividad empresarial
//           </h1>

//           {/* Subtitle */}
//           <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-gray-500">
//             No te quedes fuera: el <strong>15 de octubre</strong> revelamos la app que cambiará tu empresa. Regístrate y
//             participa en el sorteo exclusivo
//           </p>

//           {/* CTA Button */}
//           <div className="flex flex-col items-center justify-center gap-4">
//           <Button
//             size="lg"
//             onClick={scrollToCTA}
//             className="
//               group relative inline-flex items-center gap-2
//               rounded-xl px-8 py-6 text-base font-semibold text-white
//               bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
//               shadow-[0_1px_0_rgba(255,255,255,.15)_inset,0_12px_30px_-10px_rgba(99,102,241,.55)]
//               outline-none transition-all duration-300
//               hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500
//               focus-visible:ring-2 focus-visible:ring-[var(--ring,theme(colors.blue.400))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background,#0b0b0b)]
//               before:absolute before:inset-0 before:rounded-xl
//               before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,.25),transparent_45%)]
//               before:opacity-0 hover:before:opacity-100 before:transition-opacity
//               after:pointer-events-none after:absolute after:left-[-30%] after:top-0 after:h-full after:w-[30%] after:rounded-xl
//               after:bg-white/20 after:skew-x-12 after:opacity-0 group-hover:after:opacity-100 group-hover:after:translate-x-[220%]
//               after:transition-all after:duration-700
//             "
//           >
//             <Sparkles className="mr-2 h-5 w-5 opacity-90" />
//             Apúntate al pre-lanzamiento
//             <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Button>

//             <p className="text-sm text-gray-500">Sé de los primeros en probarlo</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// src/components/hero-section.tsx
import { Button } from "./ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

import logo from "@/assets/olawee_icon.png"
import heroBg from "@/assets/Img-oceano.jpg" // <-- añade tu imagen aquí (jpg/png/webp)

export function HeroSection() {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay (oscurece/funde el fondo para mejor legibilidad) */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* Extra: brillo/gradiente sutil arriba-izq */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,rgba(99,102,241,0.35),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img src={logo} alt="olawee" className="logo-olawee" />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-blue-100 drop-shadow sm:text-5xl lg:text-6xl">
            La IA que revoluciona la productividad empresarial
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-gray-100/90">
            No te quedes fuera: el <strong>15 de octubre</strong> revelamos la app que cambiará tu empresa. Regístrate y
            participa en el sorteo exclusivo
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              size={"lg"}
              onClick={scrollToCTA}
              className=" btn-cta
                group relative inline-flex items-center gap-2
                rounded-xl px-8 py-6 text-base font-semibold text-white
                bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
                shadow-[0_1px_0_rgba(255,255,255,.15)_inset,0_12px_30px_-10px_rgba(99,102,241,.55)]
                outline-none transition-all duration-300
                hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500
                focus-visible:ring-2 focus-visible:ring-[var(--ring,theme(colors.blue.400))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background,#0b0b0b)]
                before:absolute before:inset-0 before:rounded-xl
                before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,.25),transparent_45%)]
                before:opacity-0 hover:before:opacity-100 before:transition-opacity
                after:pointer-events-none after:absolute after:left-[-30%] after:top-0 after:h-full after:w-[30%] after:rounded-xl
                after:bg-white/20 after:skew-x-12 after:opacity-0 group-hover:after:opacity-100 group-hover:after:translate-x-[220%]
                after:transition-all after:duration-700
              "
            >
              <Sparkles className="mr-2 h-5 w-5 opacity-90" />
              Apúntate al pre-lanzamiento
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-sm text-gray-200">Sé de los primeros en probarlo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

