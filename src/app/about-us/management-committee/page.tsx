import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CommitteeMember {
  name: string;
  role: string;
  image?: string; // Optional: for future photo support
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "জনাব মো. আব্দুল কাদের",
    role: "সভাপতি",
    image: "/images/committee/abdul-kader.jpg",
  },
  {
    name: "জনাবা রওশন আরা",
    role: "সহ-সভাপতি",
    image: "/images/committee/raushon-ara.jpg",
  },
  {
    name: "জনাব মো. কামরুল হাসান",
    role: "সাধারণ সম্পাদক",
    image: "/images/committee/kamrul-hasan.jpg",
  },
  {
    name: "জনাবা রেহানা পারভীন",
    role: "অর্থ সম্পাদক",
    image: "/images/committee/rehana-parvin.jpg",
  },
  {
    name: "জনাব মো. জাহাঙ্গীর আলম",
    role: "সদস্য",
    image: "/images/committee/jahangir-alam.jpg",
  },
  {
    name: "জনাবা শিরীন আক্তার",
    role: "সদস্য",
    image: "/images/committee/shirin-akter.jpg",
  },
];

export default function ManagementCommitteePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-heading text-primary font-bold mb-6 text-center">
          পরিচালনা কমিটি
        </h1>
        <p className="font-body text-base text-foreground mb-8 text-center max-w-2xl mx-auto">
          আমাদের বিদ্যালয়ের পরিচালনা কমিটি বিদ্যালয়ের সার্বিক কার্যক্রম,
          নীতিমালা নির্ধারণ এবং উন্নয়নের দায়িত্ব পালন করে। কমিটির সদস্যরা
          প্রত্যেকে নিজ নিজ ক্ষেত্রে অভিজ্ঞ ও সমাজে সুপ্রতিষ্ঠিত। তাঁদের
          ঐকান্তিক প্রচেষ্টায় বিদ্যালয়টি সাফল্যের সাথে এগিয়ে চলেছে।
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-primary mt-8 mb-6 text-center">
          পরিচালনা কমিটির সদস্যবৃন্দ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <Card
              key={member.name}
              className="shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="flex items-center justify-center pb-0">
                <div className="w-24 h-24 rounded-full bg-muted overflow-hidden flex items-center justify-center border-2 border-primary mb-2">
                  {member.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl text-primary font-bold">
                      {member.name[0]}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h2 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h2>
                <div className="text-primary font-medium">{member.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center font-body text-foreground">
          পরিচালনা কমিটির সদস্যদের নিরলস প্রচেষ্টায় আমাদের বিদ্যালয় সদা
          উন্নয়নের পথে এগিয়ে চলেছে।
        </p>
      </div>
    </div>
  );
}
