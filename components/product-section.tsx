'use client';

import React, { useState } from 'react';
import { MessageCircle, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  image: string;
  description: string;
  specifications: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ventrose",
    category: "Pipe Fittings",
    priceRange: "KES 2,500 - 3,000",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "High-quality ventrose coupling for secure pipe connections. Designed for durability and reliable performance in plumbing systems.",
    specifications: [
      "Material: High-grade PVC",
      "Temperature range: -10°C to 60°C",
      "Pressure rating: 16 bar",
      "Easy installation",
      "Corrosion resistant"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "External Filter",
    category: "Filtration",
    priceRange: "KES 2,000 - 3,000",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
    description: "External filtration system for clean water supply. Effective removal of impurities and contaminants for better water quality.",
    specifications: [
      "Filter type: Multi-stage",
      "Flow rate: 10-15 L/min",
      "Filtration: 0.1 microns",
      "Housing: Durable plastic",
      "Easy maintenance"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "63mm EF Coupler",
    category: "Pipe Fittings",
    priceRange: "KES 800 - 1,000",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    description: "Precision-engineered 63mm electrofusion coupler for permanent pipe joints. Ensures leak-proof connections in water supply systems.",
    specifications: [
      "Size: 63mm diameter",
      "Type: Electrofusion",
      "Material: PE100",
      "Fusion time: 90 seconds",
      "Operating pressure: 16 bar"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "50mm/63mm EF Reducer",
    category: "Pipe Fittings",
    priceRange: "KES 3,000 - 3,500",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    description: "Electrofusion reducer for connecting different pipe sizes. Professional-grade fitting for seamless pipe transitions.",
    specifications: [
      "Sizes: 50mm to 63mm",
      "Type: Electrofusion reducer",
      "Material: PE100",
      "Fusion time: 120 seconds",
      "Pressure rating: 16 bar"
    ],
    inStock: true
  },
  {
    id: 5,
    name: "110mm EF Termination Coupling",
    category: "Pipe Fittings",
    priceRange: "KES 4,000 - 5,500",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
    description: "Large diameter electrofusion termination coupling for pipeline endings. Heavy-duty construction for industrial applications.",
    specifications: [
      "Size: 110mm diameter",
      "Type: Termination coupling",
      "Material: PE100",
      "Fusion time: 180 seconds",
      "Max pressure: 16 bar"
    ],
    inStock: true
  }
];

export default function MasgasProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const orderViaWhatsApp = (product: Product) => {
    const message = `Hi, I'm interested in ordering the ${product.name} (${product.priceRange}) from Masgas Enterprise. Please provide more details.`;
    const whatsappUrl = `https://wa.me/254746056315?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Product Detail */}
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => setSelectedProduct(null)}
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 text-sm font-medium">{selectedProduct.category}</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">{selectedProduct.name}</h1>
                </div>

                <div>
                  <span className="text-3xl font-bold text-blue-600">{selectedProduct.priceRange}</span>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      In Stock
                    </span>
                  </div>
                </div>

                <p className="text-gray-700">{selectedProduct.description}</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                  <ul className="space-y-2">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600">• {spec}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => orderViaWhatsApp(selectedProduct)}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>
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
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality pipe fittings and filtration solutions for your plumbing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-blue-600 text-sm font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <div className="mb-4">
                  <span className="text-xl font-bold text-blue-600">{product.priceRange}</span>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => orderViaWhatsApp(product)}
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}