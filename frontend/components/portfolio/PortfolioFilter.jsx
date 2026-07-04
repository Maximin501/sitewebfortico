// components/portfolio/PortfolioFilter.jsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PortfolioFilter({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'Tous';

  const handleFilter = (category) => {
    const params = new URLSearchParams();
    if (category !== 'Tous') {
      params.set('category', category);
    }
    router.push(`/portfolio?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {['Tous', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            currentCategory === cat
              ? 'bg-arduino-green text-white'
              : 'bg-arduino-light text-gray-700 hover:bg-arduino-green/20'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}