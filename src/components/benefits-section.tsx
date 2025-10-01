import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Clock, TrendingUp, Users, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    iconColor: "bg-blue-500",
    title: "Automatiza tareas repetitivas",
    description: "Gana tiempo eliminando procesos manuales y enfócate en lo que realmente importa para tu negocio.",
  },
  {
    icon: TrendingUp,
    iconColor: "bg-purple-500",
    title: "Potencia la productividad",
    description:
      "Impulsa el rendimiento de tu equipo con herramientas inteligentes que optimizan cada flujo de trabajo.",
  },
  {
    icon: Users,
    iconColor: "bg-blue-600",
    title: "Comparte agentes y prompts",
    description: "Colabora eficientemente compartiendo agentes de IA y prompts personalizados dentro de tu empresa.",
  },
  {
    icon: MessageCircle,
    iconColor: "bg-teal-500",
    title: "Community OLAWEE",
    description:
      "Únete a una comunidad activa de profesionales que comparten conocimientos, mejores prácticas y casos de uso.",
  },
]

export function BenefitsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Beneficios clave
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-600">
            Descubre cómo Olawee transformará la forma en que tu empresa trabaja
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="border border-gray-200 bg-gradient-to-br from-gray-50 to-white transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.iconColor}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
