import React from "react";
import { Calendar, ChevronRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notices = [
  {
    id: 1,
    title: "নতুন শিক্ষাবর্ষ ২০২৫ ভর্তি শুরু",
    excerpt:
      "আগামী ১৫ জানুয়ারি থেকে নতুন শিক্ষাবর্ষের জন্য ভর্তি কার্যক্রম শুরু হবে। সকল শ্রেণীর জন্য আবেদন ফর্ম পাওয়া যাবে।",
    date: "২০২৫-০১-১০",
    type: "গুরুত্বপূর্ণ",
    urgent: true,
  },
  {
    id: 2,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
    excerpt:
      "আগামী মাসে অনুষ্ঠিত হবে আমাদের বার্ষিক ক্রীড়া প্রতিযোগিতা। সকল শিক্ষার্থীদের অংশগ্রহণের জন্য আহ্বান।",
    date: "২০২৫-০১-০৮",
    type: "ইভেন্ট",
    urgent: false,
  },
  {
    id: 3,
    title: "মিড-টার্ম পরীক্ষার সময়সূচী প্রকাশ",
    excerpt:
      "সকল শ্রেণীর মিড-টার্ম পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। বিস্তারিত তথ্যের জন্য নোটিশ বোর্ড দেখুন।",
    date: "২০২৫-০১-০৫",
    type: "পরীক্ষা",
    urgent: false,
  },
  {
    id: 4,
    title: "শীতকালীন ছুটির তালিকা",
    excerpt:
      "শীতকালীন ছুটির সময়সূচী ঘোষণা করা হয়েছে। স্কুল বন্ধ থাকবে ২০ ডিসেম্বর থেকে ৫ জানুয়ারি পর্যন্ত।",
    date: "২০২৪-১২-১৫",
    type: "ছুটি",
    urgent: false,
  },
];

const NoticeBoard = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bell className="h-8 w-8 text-accent" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              নোটিশ বোর্ড
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তথ্যাবলী
          </p>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {notices.map((notice, index) => (
            <Card
              key={notice.id}
              className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
                notice.urgent ? "border-l-4 border-l-accent bg-accent/5" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          notice.type === "গুরুত্বপূর্ণ"
                            ? "bg-accent/10 text-accent"
                            : notice.type === "পরীক্ষা"
                            ? "bg-primary/10 text-primary"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        {notice.type}
                      </span>
                      {notice.urgent && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                          জরুরি
                        </span>
                      )}
                    </div>
                    <CardTitle className="font-heading text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {notice.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body">{notice.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {notice.excerpt}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-body p-0 h-auto text-primary hover:text-primary/80"
                >
                  বিস্তারিত পড়ুন
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="font-body">
            সব নোটিশ দেখুন
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
