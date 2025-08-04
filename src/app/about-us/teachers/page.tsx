import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Teacher {
  name: string;
  designation: string;
  subject: string;
  image?: string; // Optional: for future photo support
}

const teachers: Teacher[] = [
  {
    name: "জনাব মো. শরীফুল ইসলাম",
    designation: "প্রধান শিক্ষক",
    subject: "বাংলা ভাষা ও সাহিত্য",
    image: "/images/teachers/shariful-islam.jpg",
  },
  {
    name: "জনাবা রওশন আরা",
    designation: "সহকারী শিক্ষক",
    subject: "ইংরেজি ভাষা ও সাহিত্য",
    image: "/images/teachers/raushon-ara.jpg",
  },
  {
    name: "জনাব মো. কামরুল হাসান",
    designation: "সহকারী শিক্ষক",
    subject: "গণিত",
    image: "/images/teachers/kamrul-hasan.jpg",
  },
  {
    name: "জনাবা রেহানা পারভীন",
    designation: "সহকারী শিক্ষক",
    subject: "বিজ্ঞান",
    image: "/images/teachers/rehana-parvin.jpg",
  },
  {
    name: "জনাব মো. জাহাঙ্গীর আলম",
    designation: "সহকারী শিক্ষক",
    subject: "সমাজবিজ্ঞান",
    image: "/images/teachers/jahangir-alam.jpg",
  },
  {
    name: "জনাবা শিরীন আক্তার",
    designation: "সহকারী শিক্ষক",
    subject: "ধর্ম ও নৈতিক শিক্ষা",
    image: "/images/teachers/shirin-akter.jpg",
  },
  // আরও শিক্ষক এখানে যুক্ত করুন
];

export default function TeachersPage() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-heading text-primary font-bold mb-6 text-center">
          শিক্ষক মণ্ডলী
        </h1>
        <p className="font-body text-base text-foreground mb-8 text-center max-w-2xl mx-auto">
          আমাদের বিদ্যালয়ের শিক্ষক মণ্ডলী তাঁদের নিষ্ঠা, দক্ষতা ও মানবিক
          গুণাবলির জন্য সুপরিচিত। তারা ছাত্রছাত্রীদের একাডেমিক উৎকর্ষ, নৈতিকতা ও
          সৃজনশীলতা বিকাশে গুরুত্বপূর্ণ ভূমিকা রাখেন। প্রত্যেক শিক্ষক নিজ নিজ
          বিষয়ে অভিজ্ঞ এবং শিক্ষার্থীদের ভবিষ্যৎ গড়ে তুলতে সদা সচেষ্ট।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <Card
              key={teacher.name}
              className="shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="flex items-center justify-center pb-0">
                <div className="w-24 h-24 rounded-full bg-muted overflow-hidden flex items-center justify-center border-2 border-primary mb-2">
                  {teacher.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl text-primary font-bold">
                      {teacher.name[0]}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h2 className="text-lg font-bold text-foreground mb-1">
                  {teacher.name}
                </h2>
                <div className="text-primary font-medium">
                  {teacher.designation}
                </div>
                <div className="text-muted-foreground text-sm mb-2">
                  {teacher.subject}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-foreground">
          আমাদের শিক্ষকবৃন্দের ঐকান্তিক প্রচেষ্টা ও আন্তরিকতায় বিদ্যালয়ের
          ছাত্রছাত্রীরা সর্বদা সাফল্যের পথে এগিয়ে চলেছে।
        </p>
      </div>
    </div>
  );
}
