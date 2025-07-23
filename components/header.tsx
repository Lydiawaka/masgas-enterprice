"use client"

import { Search, User, MessageCircle, Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Mock product data - replace with your actual product data
  const mockProducts = [
    'Electric Cables 2.5mm',
    'Wire Strippers',
    'Circuit Breakers',
    'Electrical Conduits',
    'Junction Boxes',
    'Cable Glands',
    'Petroleum Transfer Pumps',
    'Fuel Dispensers',
    'Tank Gauging Systems',
    'Electrical Panels',
    'Motor Control Centers',
    'Transformers',
    'Underground Cables',
    'Overhead Lines',
    'Safety Equipment',
    'Control Cables',
    'Power Cables',
    'Armoured Cables',
    'Flexible Cables',
    'Submersible Pumps'
  ]

  const handleWhatsAppClick = () => {
    const whatsappNumber = "+254746056315" 
    const message = "Hello! I'm interested in your wire and cable products."
    const url = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+254746056315"
  }

  const handleSearch = () => {
    if (!searchTerm.trim()) return
    
    setIsSearching(true)
    setShowResults(true)
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        const filteredResults: string[] = mockProducts.filter((product: string) =>
          product.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(filteredResults)
      } catch (error) {
        console.error('Search error:', error)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    // Clear results when input is empty
    if (!value.trim()) {
      setSearchResults([])
      setShowResults(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleProductSelect = (product: string) => {
    // Handle product selection - you can navigate to product page or add to cart
    setSearchTerm(product)
    setShowResults(false)
    // Example: navigate to product page or trigger product action
    console.log('Selected product:', product)
    // You can add navigation logic here:
    // router.push(`/products/${encodeURIComponent(product)}`)
  }

  const clearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
    setShowResults(false)
  }

  // Close search results when clicking outside
  const handleSearchBlur = () => {
    // Delay to allow for click events on results
    setTimeout(() => setShowResults(false), 200)
  }

  const handleSearchFocus = () => {
    if (searchTerm.trim()) {
      setShowResults(true)
    }
  }

  return (
    <header className="bg-black text-white py-4 relative">
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
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full px-4 py-2 rounded-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-white pr-12"
              />
              <Button
                size="icon"
                onClick={handleSearch}
                disabled={!searchTerm.trim() || isSearching}
                className="absolute right-1 top-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <div className="animate-spin h-4 w-4 border-2 border-gray-600 border-t-transparent rounded-full"></div>
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Desktop Search Results */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-50 max-h-80 overflow-hidden">
                {searchResults.length > 0 ? (
                  <>
                    <div className="flex justify-between items-center p-3 border-b bg-gray-50">
                      <h3 className="font-semibold text-gray-800">
                        Search Results ({searchResults.length})
                      </h3>
                      <button
                        onClick={clearSearch}
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                      >
                        Clear
                      </button>
                    </div>
                    <ul className="max-h-64 overflow-y-auto">
                      {searchResults.map((product, index) => (
                        <li
                          key={index}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors"
                          onClick={() => handleProductSelect(product)}
                        >
                          <div className="flex items-center">
                            <Search className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-800 text-sm">{product}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : searchTerm && !isSearching ? (
                  <div className="p-4 text-center text-gray-600">
                    <div className="flex items-center justify-center mb-2">
                      <Search className="h-5 w-5 text-gray-400 mr-2" />
                      <span>No products found</span>
                    </div>
                    <p className="text-sm">No results for "<strong>{searchTerm}</strong>"</p>
                  </div>
                ) : null}
              </div>
            )}
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
        <div className="lg:hidden mt-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="w-full px-4 py-2 rounded-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-white pr-12"
            />
            <Button
              size="icon"
              onClick={handleSearch}
              disabled={!searchTerm.trim() || isSearching}
              className="absolute right-1 top-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <div className="animate-spin h-4 w-4 border-2 border-gray-600 border-t-transparent rounded-full"></div>
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Mobile Search Results */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-50 max-h-80 overflow-hidden">
              {searchResults.length > 0 ? (
                <>
                  <div className="flex justify-between items-center p-3 border-b bg-gray-50">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      Results ({searchResults.length})
                    </h3>
                    <button
                      onClick={clearSearch}
                      className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                    >
                      Clear
                    </button>
                  </div>
                  <ul className="max-h-64 overflow-y-auto">
                    {searchResults.map((product, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors"
                        onClick={() => handleProductSelect(product)}
                      >
                        <div className="flex items-center">
                          <Search className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-800 text-sm">{product}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : searchTerm && !isSearching ? (
                <div className="p-4 text-center text-gray-600">
                  <div className="flex items-center justify-center mb-2">
                    <Search className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">No products found</span>
                  </div>
                  <p className="text-xs">No results for "<strong>{searchTerm}</strong>"</p>
                </div>
              ) : null}
            </div>
          )}
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