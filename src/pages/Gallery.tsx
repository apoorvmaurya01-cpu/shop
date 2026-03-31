import { useState } from 'react';

type CategoryFilter = 'all' | 'sweets' | 'chaats' | 'ambiance';

const galleryItems = [
  {
    id: 1,
    category: 'sweets',
    title: 'Traditional Sweets Display',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    category: 'chaats',
    title: 'Assorted Chaats',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    category: 'sweets',
    title: 'Colorful Sweets',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    category: 'chaats',
    title: 'Chaat Specialties',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    category: 'ambiance',
    title: 'Shop Ambiance',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    category: 'sweets',
    title: 'Fresh Sweets',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    category: 'chaats',
    title: 'Served Chaats',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    category: 'ambiance',
    title: 'Store Interior',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    category: 'sweets',
    title: 'Sweet Arrangements',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A visual journey through our delicious offerings and vibrant atmosphere
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('sweets')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'sweets'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-900'
              }`}
            >
              Sweets
            </button>
            <button
              onClick={() => setFilter('chaats')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'chaats'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-900'
              }`}
            >
              Chaats
            </button>
            <button
              onClick={() => setFilter('ambiance')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'ambiance'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-900'
              }`}
            >
              Ambiance
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience It Yourself</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our shop in Chowk, Lucknow to taste these delicious treats. Open daily from 3:00 PM to 11:00 PM.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold">
            Get Directions
          </button>
        </div>
      </section>
    </div>
  );
}
