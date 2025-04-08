import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/data';

const Product = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-main to-main-hover text-white py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">Energy Solutions for a Sustainable Future</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Innovative products and services designed to optimize energy management and distribution
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link 
                  to={`/product/${product.slug}`} // Use dynamic route based on slug
                  className="inline-block w-full text-center bg-main hover:bg-main-hover text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Integrated Energy Solutions</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Energy Management</h3>
                <p className="text-gray-600 mb-6">
                  Our integrated solutions combine multiple products to deliver end-to-end energy management capabilities. 
                  From generation to consumption, we provide the tools and expertise to optimize your energy infrastructure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Increased Efficiency</h4>
                      <p className="text-gray-600">Reduce energy waste and optimize consumption patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Enhanced Reliability</h4>
                      <p className="text-gray-600">Ensure consistent power delivery with our robust solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Energy solutions" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 bg-main text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your energy infrastructure?</h2>
          <p className="text-xl mb-8">Our experts are standing by to help you find the right solutions for your needs.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/contact-us" className="bg-white text-main hover:bg-gray-100 font-semibold py-2 px-8 rounded-full xl:text-lg transition duration-300">
              Contact Us
            </Link>
            <Link to="/contact-us" className="bg-transparent border-2 border-white hover:bg-white hover:text-main font-semibold py-2 px-8 rounded-full xl:text-lg transition duration-300">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;