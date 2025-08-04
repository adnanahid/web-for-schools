import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionAndVisionPage() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="shadow-xl border-primary/20">
          <CardHeader className="pb-0">
            <CardTitle className="text-3xl md:text-4xl font-heading text-primary mb-3 text-center">
              লক্ষ্য ও উদ্দেশ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg prose-primary font-body text-foreground mx-auto pb-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-primary mt-2 mb-2 border-l-4 border-primary pl-3 bg-primary/5 rounded">
                আমাদের লক্ষ্য
              </h2>
              <p className="text-base md:text-lg flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 shrink-0"></span>
                <span>
                  আমাদের বিদ্যালয়ের প্রধান লক্ষ্য হলো শিক্ষার্থীদের জ্ঞান,
                  নৈতিকতা ও মানবিক মূল্যবোধে সমৃদ্ধ করে গড়ে তোলা। আধুনিক ও
                  যুগোপযোগী শিক্ষার মাধ্যমে একজন আদর্শ, সৃজনশীল এবং দক্ষ নাগরিক
                  হিসেবে গড়ে তোলাই আমাদের মূল লক্ষ্য।
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-primary mb-3 border-l-4 border-primary pl-3 bg-primary/5 rounded">
                আমাদের উদ্দেশ্য
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 !pl-0">
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  শিক্ষার্থীদের নৈতিক ও মানবিক গুণাবলি বিকাশে সহায়তা করা
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  আধুনিক তথ্যপ্রযুক্তি ও বিজ্ঞানের সাথে শিক্ষার্থীদের পরিচিত করা
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  শিক্ষার্থীদের সৃজনশীলতা ও নেতৃত্বগুণ বিকাশে উৎসাহিত করা
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  শিক্ষার পাশাপাশি সংস্কৃতি ও ক্রীড়া কার্যক্রমে অংশগ্রহণে
                  উদ্বুদ্ধ করা
                </li>
                <li className="bg-primary/10 rounded-lg px-5 py-3 font-medium flex items-center gap-2 md:col-span-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                  সমাজ ও দেশের উন্নয়নে অবদান রাখতে প্রস্তুত করা
                </li>
              </ul>
            </div>
            <p className="mt-8 text-center text-base md:text-lg font-semibold text-primary">
              আমরা বিশ্বাস করি, শিক্ষার মাধ্যমে একজন শিক্ষার্থী শুধু ভালো ফলাফল
              নয়, বরং একজন আদর্শ মানুষ হিসেবেও গড়ে উঠতে পারে। এ লক্ষ্য ও
              উদ্দেশ্য সামনে রেখে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
