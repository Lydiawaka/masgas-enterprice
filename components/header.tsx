"use client"

import { Search, User, MessageCircle, Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappNumber = "+254746056315" 
    const message = "Hello! I'm interested in your wire and cable products."
    const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+254746056315"
  }

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        {/* Main Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">
              MAGAS ENTERPRISES
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 hidden sm:block">
              Petroleum Equipments & Electricals
            </p>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-8 w-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-red-700 relative"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center">
                W
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-red-700" 
              onClick={handleCallClick}
            >
              <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-red-700">
              <User className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-red-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-8 w-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-red-700 relative flex items-center space-x-2"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  W
                </span>
                <span className="ml-6">WhatsApp</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-red-700 flex items-center space-x-2" 
                onClick={handleCallClick}
              >
                <Phone className="h-5 w-5" />
                <span>Call</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-red-700 flex items-center space-x-2"
              >
                <User className="h-5 w-5" />
                <span>Account</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}