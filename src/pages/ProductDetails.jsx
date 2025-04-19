import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../components/data';

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  // Get related products based on IDs
  const relatedProducts = product.relatedProducts 
    ? product.relatedProducts.map(id => products.find(p => p.id === id)).filter(Boolean)
    : products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-main to-main-hover text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-medium mb-3">{product.title}</h1>
          <p className="text-sm md:text-xl max-w-3xl">{product.description}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-5 xl:py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Main Product Image */}
            <div className="md:w-1/2 p-3 md:p-8">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto rounded-lg shadow-md"
              />
              
              
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
                <p className="text-gray-600">{product?.details.overview}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            
              
              <Link 
                to="/contact-us"
                className="block w-full text-center bg-main hover:bg-main-hover text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Request More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{relatedProduct.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{relatedProduct.description}</p>
                <Link 
                  to={`/product/${relatedProduct.slug}`}
                  className="text-main hover:text-main-hover font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;