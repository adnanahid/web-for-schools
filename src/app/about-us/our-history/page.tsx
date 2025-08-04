import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Optional: You can add an image of the school for more visual appeal
// import Image from "next/image";

export default function OurHistoryPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="shadow-xl border-primary/20">
          {/* Optional School Image at the top */}
          {/* <div className="w-full h-56 relative rounded-t-lg overflow-hidden">
            <Image
              src="/images/school-history.jpg"
              alt="School campus"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div> */}
          <CardHeader className="pb-0">
            <CardTitle className="text-3xl md:text-4xl font-heading text-primary mb-3 text-center">
              আমাদের বিদ্যালয়ের ইতিহাস
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-primary font-body text-foreground mx-auto pb-8">
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-lg">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>
                  আমাদের আদর্শ বিদ্যালয় প্রতিষ্ঠিত হয়েছিল ১৯৮৫ সালে, একটি ছোট্ট শ্রেণিকক্ষ ও সীমিত সংখ্যক শিক্ষার্থী নিয়ে। বিদ্যালয়টির প্রতিষ্ঠাতা, জনাব মো. আব্দুল কাদের, শিক্ষার আলো ছড়িয়ে দেওয়ার অঙ্গীকার নিয়ে এই শিক্ষা প্রতিষ্ঠানের যাত্রা শুরু করেন। ধাপে ধাপে বিদ্যালয়টি সম্প্রসারিত হয় এবং আজ এটি এলাকার অন্যতম স্বনামধন্য শিক্ষা প্রতিষ্ঠান হিসেবে পরিচিত।
                </span>
              </p>
              <p className="text-base md:text-lg">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>
                  প্রতিষ্ঠার শুরু থেকেই বিদ্যালয়টি শিক্ষার পাশাপাশি মূল্যবোধ, নৈতিকতা ও সামাজিক সচেতনতার ওপর গুরুত্ব দিয়ে আসছে। শিক্ষার্থীদের একাডেমিক উৎকর্ষ সাধনে নিয়মিত ক্লাস, সহপাঠ কার্যক্রম ও বিভিন্ন প্রতিযোগিতার আয়োজন করা হয়। বিদ্যালয়টি আধুনিক শিক্ষার পাশাপাশি আমাদের ঐতিহ্য ও সংস্কৃতিকে গুরুত্ব দিয়ে থাকে।
                </span>
              </p>
              <p className="text-base md:text-lg">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span>
                  বর্তমানে বিদ্যালয়টিতে ১,০০০+ শিক্ষার্থী, ৩০+ শিক্ষক এবং আধুনিক সুযোগ-সুবিধাসম্পন্ন শ্রেণিকক্ষ, বিজ্ঞানাগার ও গ্রন্থাগার রয়েছে। বিদ্যালয়টি তার গৌরবময় ইতিহাস, সফলতা এবং ভবিষ্যৎ অর্জনের পথে এগিয়ে চলেছে।
                </span>
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-primary mb-4 border-l-4 border-primary pl-3">
                আমাদের অর্জনসমূহ
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 !pl-0">
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  বিভিন্ন বোর্ড পরীক্ষায় ধারাবাহিক ভালো ফলাফল
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  সাংস্কৃতিক ও ক্রীড়া প্রতিযোগিতায় অসাধারণ সাফল্য
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  বিজ্ঞান ও প্রযুক্তি মেলায় পুরস্কারপ্রাপ্তি
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  সমাজসেবামূলক কার্যক্রমে শিক্ষার্থীদের সক্রিয় অংশগ্রহণ
                </li>
              </ul>
            </div>
            <p className="mt-8 text-center text-base md:text-lg font-semibold text-primary">
              আমরা আমাদের বিদ্যালয়ের ইতিহাস নিয়ে গর্বিত এবং আগামীতেও শিক্ষার আলো ছড়িয়ে দিতে দৃঢ় প্রতিজ্ঞ।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}