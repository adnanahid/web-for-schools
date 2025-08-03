import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionAndVisionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-heading text-primary mb-2">
            লক্ষ্য ও উদ্দেশ্য
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg font-body text-foreground">
          <h2 className="text-xl md:text-2xl font-bold text-primary mt-4 mb-2">
            আমাদের লক্ষ্য
          </h2>
          <p>
            আমাদের বিদ্যালয়ের প্রধান লক্ষ্য হলো শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও
            মানবিক মূল্যবোধে সমৃদ্ধ করে গড়ে তোলা। আধুনিক ও যুগোপযোগী শিক্ষার
            মাধ্যমে একজন আদর্শ, সৃজনশীল এবং দক্ষ নাগরিক হিসেবে গড়ে তোলাই আমাদের
            মূল লক্ষ্য।
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-primary mt-8 mb-2">
            আমাদের উদ্দেশ্য
          </h2>
          <ul className="list-disc pl-6">
            <li>শিক্ষার্থীদের নৈতিক ও মানবিক গুণাবলি বিকাশে সহায়তা করা</li>
            <li>
              আধুনিক তথ্যপ্রযুক্তি ও বিজ্ঞানের সাথে শিক্ষার্থীদের পরিচিত করা
            </li>
            <li>শিক্ষার্থীদের সৃজনশীলতা ও নেতৃত্বগুণ বিকাশে উৎসাহিত করা</li>
            <li>
              শিক্ষার পাশাপাশি সংস্কৃতি ও ক্রীড়া কার্যক্রমে অংশগ্রহণে উদ্বুদ্ধ
              করা
            </li>
            <li>সমাজ ও দেশের উন্নয়নে অবদান রাখতে প্রস্তুত করা</li>
          </ul>
          <p className="mt-6">
            আমরা বিশ্বাস করি, শিক্ষার মাধ্যমে একজন শিক্ষার্থী শুধু ভালো ফলাফল
            নয়, বরং একজন আদর্শ মানুষ হিসেবেও গড়ে উঠতে পারে। এ লক্ষ্য ও
            উদ্দেশ্য সামনে রেখে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
