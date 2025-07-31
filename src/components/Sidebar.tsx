import Link from 'next/link';

const menuItems = [
  { href: '/', label: 'হোম' },
  { href: '/institute-profile', label: 'প্রতিষ্ঠান পরিচিতি' },
  { href: '/permission-recognition', label: 'অনুমতি ও স্বীকৃতি' },
  { href: '/students', label: 'শিক্ষার্থীর তথ্য' },
  { href: '/branches', label: 'শাখার তথ্য' },
  { href: '/academic-info', label: 'পাঠদান সংক্রান্ত তথ্য' },
  { href: '/mpo', label: 'এমপিও' },
  { href: '/contact', label: 'যোগাযোগ' },
  { href: '/info-center', label: 'তথ্যসেবা কেন্দ্র' },
  { href: '/complaints', label: 'অভিযোগ নিষ্পত্তি' },
  { href: '/staff', label: 'শিক্ষক–কর্মচারীর তথ্য' },
  { href: '/committee', label: 'ব্যবস্থাপনা কমিটি' },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen p-4 border-r">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 rounded"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}