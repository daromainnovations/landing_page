import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Clock, TrendingUp, Users, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Users,
    iconColor: "bg-blue-500",
    title: "Comparte asistentes, prompts a empresas y colectivos",
    description: "Colabora eficientemente compartiendo recursos personalizados y creando red entre organizaciones.",
  },
  {
    icon: TrendingUp,
    iconColor: "bg-purple-500",
    title: "Selecciona tus IAs",
    description:
      "Elige entre distintos modelos y proveedores para cada necesidad concreta de tu entidad.",
  },
  {
    icon: Clock,
    iconColor: "bg-blue-600",
    title: "Automatiza tareas y aumenta productividad",
    description: "Libera horas de trabajo eliminando procesos repetitivos y enfócate en lo estratégico.",
  },
  {
    icon: MessageCircle,
    iconColor: "bg-teal-500",
    title: "Community OLAWEE",
    description:
      "Un espacio vivo donde profesionales y entidades comparten experiencias, casos de uso y buenas prácticas.",
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
