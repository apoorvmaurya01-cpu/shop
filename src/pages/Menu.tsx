import { useState } from 'react';
import { Search } from 'lucide-react';
import MenuCard from '../components/MenuCard';

type FilterType = 'all' | 'sweets' | 'chaats' | 'beverages';

const menuItems = [
  { name: 'Gulab Jamun', category: 'Traditional Sweets', description: 'Soft and juicy balls soaked in sugar syrup', price: '₹80 per kg', badge: 'Popular' },
  { name: 'Jalebi', category: 'Traditional Sweets', description: 'Crispy spiral sweets soaked in sugar syrup', price: '₹100 per kg', badge: 'Popular' },
  { name: 'Rabri', category: 'Traditional Sweets', description: 'Rich and creamy milk dessert', price: '₹400 per', badge: null },
  { name: 'Imarti', category: 'Traditional Sweets', description: 'Traditional cashew sweet with intricate design and soft flavor', price: '₹220 per kg', badge: 'Special' },
  { name: 'Balushahi', category: 'Traditional Sweets', description: 'Flaky and crispy, soaked in sugar syrup', price: '₹280 per kg', badge: null },
  { name: 'Peda', category: 'Traditional Sweets', description: 'Soft milk fudge flavored with cardamom and pistachio', price: '₹320 per kg', badge: null },
  { name: 'Kheer', category: 'Traditional Sweets', description: 'Traditional halwa with dry fruits and spices', price: '₹80 per bowl', badge: null },
  { name: 'Malai Kulfi', category: 'Traditional Sweets', description: 'Traditional frozen milk dessert with rich flavor', price: '₹40 per piece', badge: null },
  { name: 'Aloo Tikki Chaat', category: 'Traditional Chaats', description: 'Crispy potato patties served with chutneys, yogurt and sev', price: '₹70 per plate', badgeColor: 'red', badge: 'Seasonal' },
  { name: 'Papdi Chaat', category: 'Traditional Chaats', description: 'Crispy wafers topped with potatoes, yogurt and tangy sauce', price: '₹50 per plate', badgeColor: 'red', badge: null },
  { name: 'Dahi Bhalla', category: 'Traditional Chaats', description: 'Soft fried dumplings soaked in creamy yogurt with sweet and spicy touch', price: '₹70 per plate', badgeColor: 'red', badge: null },
  { name: 'Samosa Chaat', category: 'Traditional Chaats', description: 'Crushed samosa topped with chutneys, yogurt and chickpeas', price: '₹60 per plate', badgeColor: 'red', badge: null },
  { name: 'Basket Chaat', category: 'Traditional Chaats', description: 'Crispy basket filled with ragda and peas served with tamarind and mint chutneys', price: '₹80 per plate', badgeColor: 'red', badge: null },
  { name: 'Gol Gappa', category: 'Traditional Chaats', description: 'Hollow fried balls served with spicy and sweet water', price: '₹40 per plate', badgeColor: 'yellow', badge: 'Hot', },
  { name: 'Raj Kachori', category: 'Traditional Chaats', description: 'Crispy puri stuffed with sprouts and served with chutneys', price: '₹70 per plate', badgeColor: 'red', badge: null },
  { name: 'Lassi', category: 'Traditional Beverages', description: 'Traditional yogurt-based drink, refreshing chilled sweet drink', price: '₹50 per glass', badge: null },
  { name: 'Thandai', category: 'Traditional Beverages', description: 'Traditional milk-based drink with nuts and spices', price: '₹80 per glass', badge: null },
  { name: 'Masala Chai', category: 'Traditional Beverages', description: 'Aromatic tea brewed with traditional spices', price: '₹20 per cup', badge: null },
  { name: 'Fresh Fruit Juice', category: 'Traditional Beverages', description: 'Traditional juice made from fresh seasonal fruits', price: '₹50 per glass', badge: null },
];

export default function Menu() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterItems = () => {
    let filtered = menuItems;

    if (filter !== 'all') {
      filtered = filtered.filter((item) => {
        if (filter === 'sweets') return item.category === 'Traditional Sweets';
        if (filter === 'chaats') return item.category === 'Traditional Chaats';
        if (filter === 'beverages') return item.category === 'Traditional Beverages';
        return true;
      });
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredItems = filterItems();

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Our Menu</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Explore our wide selection of traditional Lucknowi sweets, chaats and beverages
          </p>

          <div className="flex justify-center mb-8 px-4">
  {/* Added md:justify-center to center the content on larger screens */}
  <div className="w-full overflow-x-auto no-scrollbar pb-2 flex md:justify-center">
    {/* Keep min-w-max so it doesn't squish, but it will now be centered by the parent flex */}
    <div className="inline-flex bg-white rounded-full p-1 whitespace-nowrap min-w-max border border-gray-100 shadow-sm">
      <button
        onClick={() => setFilter('all')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          filter === 'all'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        All Items
      </button>
      <button
        onClick={() => setFilter('sweets')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          filter === 'sweets'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Traditional Sweets
      </button>
      <button
        onClick={() => setFilter('chaats')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          filter === 'chaats'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Traditional Chaats
      </button>
      <button
        onClick={() => setFilter('beverages')}
        className={`px-6 py-2 rounded-full font-medium transition-all ${
          filter === 'beverages'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Traditional Beverages
      </button>
    </div>
  </div>
</div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                badge={item.badge}
                badgeColor={item.badgeColor as 'orange' | 'red' | 'yellow'}
              />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Made Fresh Daily</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            All our sweets and chaats are prepared fresh daily using traditional recipes and the finest ingredients. We use pure ghee, fresh milk from local dairies, and premium quality dry fruits to ensure the best taste and quality.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-bold">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
}
