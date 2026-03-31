import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome to Prem Misthan Bhandar
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover the authentic taste of traditional Lucknowi sweets and chaats. Every dish is crafted with love using time-honored recipes and the finest ingredients.
              </p>
              <Link
                to="/menu"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Explore Menu
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center">
                <ChefHat size={100} className="text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            With over 50 years of experience, we bring authentic Lucknowi flavors to your table
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl">🥣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">
                Recipes passed down through generations, maintaining the authentic taste of Lucknow.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pure Ingredients</h3>
              <p className="text-gray-600">
                Only the finest ingredients sourced locally to ensure quality and freshness.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Every sweet is prepared with care and passion, making every bite special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">50+ Years of Excellence</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of Lucknow with our extensive collection of traditional sweets and chaats. Visit our shop in Chowk, Lucknow today!
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-bold">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}
