import { Lock, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A legacy of authentic Lucknowi flavors passed down through generations
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Established in the heart of Chowk, Lucknow, <span className="font-bold">Prem Misthan Bhandar</span> has
                been serving authentic Lucknowi sweets and chaats for generations. Our journey begins with a simple
                vision: to preserve and share the rich culinary heritage of Awadh with every customer who walks through
                our doors.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What sets us apart is our unwavering commitment to authenticity. Every sweet is handcrafted using
                traditional recipes passed down through our family. We use only the finest ingredients - pure ghee,
                fresh milk from local dairies, and premium quality dry fruits - ensuring that every bite transports you
                to the royal kitchens of the Nawabs.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our chaats are a celebration of Lucknow's vibrant street food culture. From the tangy Papdi Chaat to
                the creamy Dahi Bhalla, each dish is a perfect balance of flavors that have made Lucknowi cuisine
                famous worldwide. We take pride in maintaining the same taste and quality that our customers have come
                to love and trust over the years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, <span className="font-bold">Prem Misthan Bhandar</span> stands as a testament to the timeless
                appeal of authentic, home-style cooking. We continue to serve thousands of happy customers, creating
                sweet memories one delicious bite at a time.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl overflow-hidden h-96">
                <img
                  src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-6 w-40">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-900 text-white rounded-full p-4">
                  <Lock size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of ingredients or the authenticity of our recipes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-900 text-white rounded-full p-4">
                  <Clock size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fresh Daily</h3>
              <p className="text-gray-600">
                All our products are made fresh every day to ensure maximum taste and quality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-900 text-white rounded-full p-4">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Roots</h3>
              <p className="text-gray-600">
                Proudly serving the Lucknow community with authentic local flavors and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Visit Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Come experience the authentic taste of Lucknow at our location in Chowk
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    Chowk, Lucknow, Uttar Pradesh<br />
                    Lucknow, Uttar Pradesh 226003
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">info@premmisthanbandar.com</p>
                </div>
              </div>
              <button className="mt-6 w-full bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Get Directions
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Opening Hours</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Days</h4>
                  <p className="text-gray-600">Open All Days</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Timing</h4>
                  <p className="text-2xl font-bold text-gray-900">3:00 PM - 11:00 PM</p>
                  <p className="text-gray-600 text-sm mt-2">Afternoon to Late Evening</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mt-6 bg-yellow-50 p-4 rounded-lg">
                    <span className="font-bold">Note:</span> We recommend visiting during evening hours (5 PM - 9 PM) for the freshest preparations and the best selection of items. During festivals and special occasions, we may have extended hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
