
import logo from "@/assets/olawee_icon.png";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="olawee" className="logo-footer"/>
          </div>

          {/* Launch Date */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600">
              Lanzamiento: <span className="font-semibold">15 de octubre de 2025</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Olawee. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
