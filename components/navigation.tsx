"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { 
    name: "Submersible Pumping", 
    hasDropdown: true,
    categories: [
      "Residential Pumps",
      "Commercial Pumps", 
      "Agricultural Pumps",
      "Industrial Pumps",
      "Pump Accessories"
    ]
  },
  { 
    name: "EV Systems", 
    hasDropdown: true,
    categories: [
      "EV Charging Stations",
      "Charging Infrastructure",
      "Fleet Management",
      "Payment Systems",
      "Installation Services"
    ]
  },
  { 
    name: "Car Wash Monitoring", 
    hasDropdown: true,
    categories: [
      "Monitoring Systems",
      "Control Panels",
      "Sensors & Detectors",
      "Data Analytics"
    ]
  },
  { 
    name: "Integrated Electrical Controls", 
    hasDropdown: true,
    categories: [
      "Control Panels",
      "Variable Frequency Drives",
      "Motor Starters",
      "Protection Devices"
    ]
  },
  { 
    name: "Fuel Management Systems", 
    hasDropdown: true,
    categories: [
      "Fuel Monitoring",
      "Tank Gauging",
      "Leak Detection",
      "Fuel Dispensers"
    ]
  },
  { 
    name: "Piping & Containment", 
    hasDropdown: true,
    categories: [
      "Underground Piping",
      "Secondary Containment",
      "Fittings & Connections",
      "Installation Hardware"
    ]
  },
  { 
    name: "Wire Management", 
    hasDropdown: true,
    categories: [
      "Cable Management",
      "Wire Protection",
      "Conduit Systems",
      "Junction Boxes"
    ]
  },
  { 
    name: "Service Station Hardware", 
    hasDropdown: true,
    categories: [
      "Dispensers",
      "Nozzles & Hoses",
      "Safety Equipment",
      "Maintenance Tools"
    ]
  },
  { 
    name: "Dispensing", 
    hasDropdown: true,
    categories: [
      "Fuel Dispensers",
      "DEF Equipment",
      "AdBlue Systems",
      "Dispenser Parts"
    ]
  },
  { 
    name: "Transport", 
    hasDropdown: true,
    categories: [
      "Tank Truck Equipment",
      "Loading Arms",
      "Transfer Systems",
      "Safety Equipment"
    ]
  },
  { 
    name: "System Solutions", 
    hasDropdown: true,
    categories: [
      "Complete Systems",
      "Custom Solutions",
      "Integration Services",
      "Technical Support"
    ]
  },
  { 
    name: "Corrosion Control", 
    hasDropdown: true,
    categories: [
      "Corrosion Control™ System",
      "Corrosion Control Components",
      "Monitoring Equipment",
      "Protection Systems"
    ]
  },
  { name: "Special Offers", hasDropdown: false },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenDropdown(null) // Close any open dropdowns when toggling mobile menu
  }

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <nav className="bg-orange-900 text-white">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center py-3">
          <div className="flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors py-2 text-sm xl:text-base whitespace-nowrap">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 bg-white text-gray-900 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.categories?.map((category, catIndex) => (
                      <a key={catIndex} href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-lg font-medium">Products</span>
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-orange-800 rounded-md transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-orange-800 rounded-md mb-2">
            <div className="py-2">
              {navigationItems.map((item, index) => (
                <div key={index} className="border-b border-orange-700 last:border-b-0">
                  <button
                    onClick={() => item.hasDropdown ? toggleDropdown(index) : null}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-orange-700 transition-colors text-left"
                  >
                    <span className="text-sm sm:text-base">{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {item.hasDropdown && openDropdown === index && (
                    <div className="bg-orange-700 px-4 pb-2">
                      {item.categories?.map((category, catIndex) => (
                        <a key={catIndex} href="#" className="block py-2 px-4 hover:bg-orange-600 rounded text-sm">
                          {category}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tablet Horizontal Scroll Navigation */}
        <div className="hidden md:block lg:hidden py-3">
          <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group flex-shrink-0">
                <button className="flex items-center space-x-1 hover:text-blue-200 transition-colors py-2 text-sm whitespace-nowrap">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 bg-white text-gray-900 shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.categories?.map((category, catIndex) => (
                      <a key={catIndex} href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}