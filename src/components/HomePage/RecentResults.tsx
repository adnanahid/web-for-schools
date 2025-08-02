import React from "react";
import { Trophy, TrendingUp, Star, Award, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const examResults = [
  {
    year: "২০২৪",
    exam: "এসএসসি পরীক্ষা",
    passRate: "৯৮.৫%",
    gpaFive: "৮৫%",
    participants: 120,
    highlights: [
      "গণিতে ১০০% পাশ",
      "বিজ্ঞানে ৯৫% A+ গ্রেড",
      "শীর্ষ ১০ জনের মধ্যে ৫ জন",
    ],
  },
  {
    year: "২০২৪",
    exam: "জেএসসি পরীক্ষা",
    passRate: "১০০%",
    gpaFive: "৯২%",
    participants: 150,
    highlights: [
      "বাংলায় ১০০% A+ গ্রেড",
      "ইংরেজিতে ৯৮% পাশ",
      "জেলায় ২য় স্থান অর্জন",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "জাতীয় পর্যায়ে পুরস্কার",
    description: "বিজ্ঞান অলিম্পিয়াডে ১ম স্থান",
    date: "ডিসেম্বর ২০২৪",
    category: "একাডেমিক",
  },
  {
    icon: Star,
    title: "সেরা শিক্ষা প্রতিষ্ঠান",
    description: "জেলা পর্যায়ে সেরা মাধ্যমিক বিদ্যালয়",
    date: "নভেম্বর ২০২৪",
    category: "প্রাতিষ্ঠানিক",
  },
  {
    icon: Award,
    title: "ক্রীড়া চ্যাম্পিয়নশিপ",
    description: "আন্তঃস্কুল ফুটবল টুর্নামেন্টে চ্যাম্পিয়ন",
    date: "অক্টোবর ২০২৪",
    category: "ক্রীড়া",
  },
  {
    icon: Users,
    title: "সাংস্কৃতিক প্রতিযোগিতা",
    description: "আঞ্চলিক সাংস্কৃতিক প্রতিযোগিতায় ১ম স্থান",
    date: "সেপ্টেম্বর ২০২৪",
    category: "সংস্কৃতি",
  },
];

const toppers = [
  {
    name: "সাকিব আহমেদ",
    gpa: "৫.০০",
    subjects: "বিজ্ঞান",
    exam: "এসএসসি ২০২৪",
  },
  { name: "ফারিয়া খান", gpa: "৫.০০", subjects: "মানবিক", exam: "এসএসসি ২০২৪" },
  {
    name: "রাহুল দাস",
    gpa: "৫.০০",
    subjects: "ব্যবসায় শিক্ষা",
    exam: "এসএসসি ২০২৪",
  },
  {
    name: "তানিয়া রহমান",
    gpa: "৫.০০",
    subjects: "বিজ্ঞান",
    exam: "জেএসসি ২০২৪",
  },
];

const RecentResults = () => {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-success" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              সাম্প্রতিক ফলাফল ও অর্জন
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            আমাদের শিক্ষার্থীদের একাডেমিক ও অন্যান্য ক্ষেত্রের উল্লেখযোগ্য
            সাফল্য
          </p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Exam Results Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {examResults.map((result, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-primary/5 to-success/5 border-primary/20 hover:shadow-medium transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {result.exam}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-body text-sm text-muted-foreground">
                        {result.year}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success font-heading">
                      {result.passRate}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      পাশের হার
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-lg font-bold text-accent font-heading">
                      {result.gpaFive}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      জিপিএ ৫
                    </div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary font-heading">
                      {result.participants}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      অংশগ্রহণকারী
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                    বিশেষ অর্জন:
                  </h4>
                  <ul className="space-y-1">
                    {result.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                      >
                        <Star className="h-3 w-3 text-accent flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            সাম্প্রতিক পুরস্কার ও সম্মাননা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-background border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="p-3 bg-gradient-hero rounded-full w-fit mx-auto mb-3">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                      achievement.category === "একাডেমিক"
                        ? "bg-primary/10 text-primary"
                        : achievement.category === "ক্রীড়া"
                        ? "bg-success/10 text-success"
                        : achievement.category === "সংস্কৃতি"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    {achievement.category}
                  </span>
                  <CardTitle className="font-heading text-sm font-semibold text-foreground leading-tight">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-body">{achievement.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            🏆 মেধাবী শিক্ষার্থীদের তালিকা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 text-center shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                  {topper.name.split(" ")[0].charAt(0)}
                </div>
                <h4 className="font-heading text-sm font-semibold text-foreground mb-1">
                  {topper.name}
                </h4>
                <div className="text-lg font-bold text-success mb-1 font-heading">
                  জিপিএ {topper.gpa}
                </div>
                <div className="text-xs text-muted-foreground font-body">
                  {topper.subjects} • {topper.exam}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-card/50 rounded-xl">
            <p className="font-body text-muted-foreground leading-relaxed">
              আমাদের শিক্ষার্থীরা শুধু একাডেমিক ক্ষেত্রেই নয়, ক্রীড়া,
              সাংস্কৃতিক ও অন্যান্য সৃজনশীল কার্যক্রমেও নিয়মিত উৎকর্ষতার পরিচয়
              দিয়ে আসছে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentResults;
