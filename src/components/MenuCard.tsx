import { Heart } from 'lucide-react';

interface MenuCardProps {
  name: string;
  category: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: 'orange' | 'red' | 'yellow';
}

export default function MenuCard({
  name,
  category,
  description,
  price,
  badge,
  badgeColor = 'orange',
}: MenuCardProps) {
  const badgeColors = {
    orange: 'bg-orange-400',
    red: 'bg-red-400',
    yellow: 'bg-yellow-300',
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 bg-gradient-to-br from-yellow-300 to-orange-300">
        {badge && (
          <div className={`absolute top-3 right-3 ${badgeColors[badgeColor]} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
          <Heart size={18} className="text-teal-500 flex-shrink-0" />
        </div>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{description}</p>
        <p className="font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
}
