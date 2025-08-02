import React from "react";
import {
  BookOpen,
  Users,
  ArrowRight,
  GraduationCap,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: "জাতীয় শিক্ষাক্রম অনুসরণ",
    description:
      "বাংলাদেশ সরকার কর্তৃক অনুমোদিত সর্বশেষ শিক্ষাক্রম অনুযায়ী পাঠদান",
    details: [
      "এনসিটিবি অনুমোদিত পাঠ্যবই",
      "আধুনিক পাঠদান পদ্ধতি",
      "নিয়মিত মূল্যায়ন",
    ],
  },
  {
    icon: Lightbulb,
    title: "সৃজনশীল শিক্ষা পদ্ধতি",
    description: "শিক্ষার্থীদের সৃজনশীলতা ও চিন্তাশক্তি বিকাশে বিশেষ গুরুত্ব",
    details: [
      "প্রজেক্ট বেইজড লার্নিং",
      "গ্রুপ ওয়ার্ক ও উপস্থাপনা",
      "সমস্যা সমাধান কৌশল",
    ],
  },
  {
    icon: Target,
    title: "ব্যক্তিত্ব বিকাশ",
    description: "শুধু শিক্ষা নয়, চরিত্র গঠন ও নৈতিক মূল্যবোধ বিকাশে জোর",
    details: ["নৈতিক শিক্ষা", "নেতৃত্ব বিকাশ", "সামাজিক দায়বদ্ধতা"],
  },
  {
    icon: Users,
    title: "আধুনিক প্রযুক্তি",
    description: "ডিজিটাল ক্লাসরুম ও অনলাইন লার্নিং প্ল্যাটফর্মের ব্যবহার",
    details: ["স্মার্ট বোর্ড", "অনলাইন রিসোর্স", "ই-লার্নিং সুবিধা"],
  },
];

const subjects = [
  {
    category: "মূল বিষয়সমূহ",
    items: [
      "বাংলা",
      "ইংরেজি",
      "গণিত",
      "বিজ্ঞান",
      "সামাজিক বিজ্ঞান",
      "ধর্মীয় শিক্ষা",
    ],
  },
  {
    category: "অতিরিক্ত কার্যক্রম",
    items: [
      "চিত্রকলা",
      "সংগীত",
      "খেলাধুলা",
      "বিতর্ক",
      "সাংস্কৃতিক অনুষ্ঠান",
      "বিজ্ঞান মেলা",
    ],
  },
  {
    category: "দক্ষতা উন্নয়ন",
    items: [
      "কম্পিউটার সাক্ষরতা",
      "ভাষা দক্ষতা",
      "উপস্থাপনা",
      "গবেষণা পদ্ধতি",
      "টিম ওয়ার্ক",
      "সমস্যা সমাধান",
    ],
  },
];

const achievements = [
  { metric: "৯৮%", label: "পাশের হার" },
  { metric: "৮৫%", label: "জিপিএ ৫ অর্জন" },
  { metric: "১২+", label: "বছর অভিজ্ঞতা" },
  { metric: "৫০+", label: "দক্ষ শিক্ষক" },
];

const CurriculumInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              শিক্ষাক্রম ও কার্যক্রম
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto">
            আধুনিক শিক্ষা পদ্ধতি ও জাতীয় শিক্ষাক্রমের সমন্বয়ে সুষম শিক্ষা
            ব্যবস্থা
          </p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
                {achievement.metric}
              </div>
              <div className="text-muted-foreground font-body text-sm">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {curriculumFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-heading text-lg text-foreground mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:shadow-soft transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="font-heading text-lg text-foreground text-center">
                  {subject.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {subject.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-primary/5 rounded-lg p-3 text-center font-body text-sm text-foreground hover:bg-primary/10 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            আপনার সন্তানের ভবিষ্যৎ গড়ুন আমাদের সাথে
          </h3>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto opacity-90">
            আধুনিক শিক্ষা ব্যবস্থা ও অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে আপনার
            সন্তানের সর্বোচ্চ বিকাশ নিশ্চিত করুন
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg" className="font-body">
              বিস্তারিত পাঠ্যক্রম দেখুন
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-body bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              ভর্তির তথ্য জানুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumInfo;
