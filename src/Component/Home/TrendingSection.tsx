import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const trending = [
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    name: 'Electric & Plumbing',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    name: 'Painting & Renovation',
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    name: 'Pet Care',
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    name: 'Security Services',
  },
];

export default function TrendingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Trending</h2>
          <Link href="/service" className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm px-3 py-2 rounded transition">
            View All <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trending.map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-3"
            >
              <div className="w-full aspect-[4/3] relative mb-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="mt-2 text-center font-bold text-lg text-gray-900">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 