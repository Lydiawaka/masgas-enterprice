'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  image_url: string;
  description: string;
}

export default function MasgasProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  // WhatsApp order
  const orderViaWhatsApp = (product: Product) => {
    const message = `Hi, I'm interested in ordering the ${product.name} (KES ${product.price}) from Masgas Enterprise. Please provide more details.`;
    const whatsappUrl = `https://wa.me/254792780247?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  // ✅ Product Detail Page
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
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
                  src={selectedProduct.image_url || '/placeholder.png'}
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 text-sm font-medium">
                    {selectedProduct.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">
                    {selectedProduct.name}
                  </h1>
                </div>

                <div>
                  <span className="text-3xl font-bold text-blue-600">
                    KES {selectedProduct.price}
                  </span>
                  <div className="mt-2">
                    {selectedProduct.stock > 0 ? (
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

                <p className="text-gray-700">{selectedProduct.description}</p>

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

  // ✅ Product List Page
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality pipe fittings and filtration solutions for your plumbing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image_url || '/placeholder.png'}
                alt={product.name}
                className="max-h-full object-contain h-48 w-3xl"
              />

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-blue-600 text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="mb-4">
                  <span className="text-xl font-bold text-blue-600">
                    KES {product.price}
                  </span>
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

          {products.length === 0 && (
            <p className="text-center text-gray-500 col-span-3">
              No products available. Please check back later.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
