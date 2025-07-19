'use client';

import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: string[];
  rating: number;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fuel Dispenser Pump",
    category: "Dispensing Equipment",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    description: "High-performance fuel dispenser with digital display and automatic shut-off. Suitable for petrol stations and commercial use.",
    specifications: [
      "Flow rate: 40-50 L/min",
      "Accuracy: ±0.3%",
      "Power: 220V AC",
      "Display: LED digital",
      "Hose length: 4.5m"
    ],
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Underground Storage Tank",
    category: "Storage Systems",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
    description: "Double-walled fiberglass underground storage tank with leak detection system for safe fuel storage.",
    specifications: [
      "Capacity: 50,000L",
      "Material: Fiberglass",
      "Wall: Double-walled",
      "Leak detection: Included",
      "Warranty: 10 years"
    ],
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    name: "Explosion-Proof Motor",
    category: "Electrical Equipment",
    price: 850000,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    description: "ATEX certified explosion-proof electric motor designed for hazardous petroleum environments.",
    specifications: [
      "Power: 7.5 HP",
      "Voltage: 415V",
      "Speed: 1450 RPM",
      "Protection: IP65",
      "Certification: ATEX"
    ],
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: "Fuel Level Gauge",
    category: "Monitoring Equipment",
    price: 320000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Digital fuel level monitoring system with remote display and alarm capabilities.",
    specifications: [
      "Range: 0-5m",
      "Accuracy: ±2mm",
      "Display: LCD",
      "Output: 4-20mA",
      "Temperature: -40°C to 85°C"
    ],
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: "Pressure Relief Valve",
    category: "Safety Equipment",
    price: 180000,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    description: "Safety pressure relief valve for petroleum systems with high-precision spring mechanism.",
    specifications: [
      "Size: 2 inch",
      "Pressure: 150 PSI",
      "Material: Stainless Steel",
      "Connection: NPT",
      "Temperature: -29°C to 232°C"
    ],
    rating: 4.5,
    inStock: false
  },
  {
    id: 6,
    name: "Control Panel System",
    category: "Electrical Equipment",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "Automated control panel for petroleum equipment with PLC integration and HMI interface.",
    specifications: [
      "Input: 415V 3-phase",
      "Control: PLC based",
      "Interface: 10\" HMI",
      "Protection: IP54",
      "Monitoring: Real-time"
    ],
    rating: 4.8,
    inStock: true
  }
];

export default function MasgasProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  const formatPrice = (price: number) => {
    return `KES ${price.toLocaleString()}`;
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const orderViaWhatsApp = (product: Product) => {
    const message = `Hi, I'm interested in ordering the ${product.name} (${formatPrice(product.price)}) from Masgas Enterprise. Please provide more details.`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        
        {/* Product Detail */}
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8">
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-blue-600 text-sm font-medium">{selectedProduct.category}</span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{selectedProduct.name}</h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">{renderStars(selectedProduct.rating)}</div>
                    <span className="text-gray-600 text-sm sm:text-base">({selectedProduct.rating})</span>
                  </div>
                </div>

                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">{formatPrice(selectedProduct.price)}</span>
                  <div className="mt-2">
                    {selectedProduct.inStock ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base">{selectedProduct.description}</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <ul className="space-y-2">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600 text-sm sm:text-base">• {spec}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => orderViaWhatsApp(selectedProduct)}
                    className="flex-1 bg-green-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Order via WhatsApp</span>
                  </button>
                  <button 
                    onClick={() => addToCart(selectedProduct)}
                    disabled={!selectedProduct.inStock}
                    className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Products Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Professional petroleum equipment and electrical solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    Out of Stock
                  </div>
                )}
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-blue-600 text-sm font-medium">{product.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600 text-sm">({product.rating})</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-gray-100 text-gray-800 px-3 sm:px-4 py-2 rounded hover:bg-gray-200 transition-colors text-center text-sm sm:text-base"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-2 sm:block sm:space-x-0 sm:space-y-2 lg:flex lg:space-y-0 lg:space-x-2">
                    <button 
                      onClick={() => orderViaWhatsApp(product)}
                      className="flex-1 sm:w-full lg:flex-none bg-green-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="ml-2 sm:hidden lg:inline">WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className="flex-1 sm:w-full lg:flex-none bg-blue-600 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="ml-2 sm:hidden lg:inline">Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}