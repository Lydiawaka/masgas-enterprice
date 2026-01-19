"use client"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    const whatsappNumber = "+254792780247" 
    const message = "Hello! I'm interested in your wire and cable products."
    const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+254792780247"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:info@magas.co.ke"
  }

  return (
    <footer className="bg-slate-900 flex items-center justify-center text-white mt-8 sm:mt-12 lg:mt-16">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-red-500">MASGAS</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Your trusted partner for premium wires and cables. Quality products, reliable service, and competitive
              prices for all your electrical needs.
            </p>
            <div className="flex space-x-3 sm:space-x-4 ">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 transition-colors rounded-full p-2 sm:p-2.5"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button 
                onClick={handleCallClick}
                className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full p-2 sm:p-2.5"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button 
                onClick={handleEmailClick}
                className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full p-2 sm:p-2.5"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Categories</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Power Cables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Control Cables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Data Cables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  House Wiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Industrial Cables
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Technical Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Custom Cable Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Fast Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Installation Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base w-full flex flex-col items-center lg:items-start">
              <button 
                onClick={handleCallClick}
                className="flex items-center justify-center lg:justify-start hover:text-white transition-colors w-full lg:w-auto text-left"
              >
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+254 792 780247</span>
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center lg:justify-start hover:text-white transition-colors w-full lg:w-auto text-left"
              >
                <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>WhatsApp Orders</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center justify-center lg:justify-start hover:text-white transition-colors w-full lg:w-auto text-left"
              >
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@magas.co.ke</span>
              </button>
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            © {currentYear} Magas. All rights reserved. | Premium electrical cables and wires for all applications.
          </p>
        </div>
      </div>
    </footer>
  )
}