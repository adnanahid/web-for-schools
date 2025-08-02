import React from "react";
import { Users, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const committeeMembers = [
  {
    id: 1,
    name: "জনাব আবদুল করিম সিদ্দিকী",
    position: "সভাপতি, পরিচালনা কমিটি",
    department: "শিক্ষা প্রশাসন",
    experience: "২০+ বছর",
    specialization: "শিক্ষা নীতি ও উন্নয়ন",
    email: "chairman@school.edu.bd",
    phone: "০১৭১১-১২৩৪৫৬",
  },
  {
    id: 2,
    name: "প্রফেসর ডাক্তার ফাতেমা খাতুন",
    position: "একাডেমিক পরিচালক",
    department: "শিক্ষাক্রম উন্নয়ন",
    experience: "১৮+ বছর",
    specialization: "কারিকুলাম ডিজাইন ও মূল্যায়ন",
    email: "academic@school.edu.bd",
    phone: "০১৭১১-২৩৪৫৬৭",
  },
  {
    id: 3,
    name: "জনাব মোহাম্মদ তানভীর আহমেদ",
    position: "আর্থিক পরিচালক",
    department: "অর্থ ও হিসাব",
    experience: "১৫+ বছর",
    specialization: "শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা",
    email: "finance@school.edu.bd",
    phone: "০১৭১১-৩৪৫৬৭৮",
  },
  {
    id: 4,
    name: "জনাবা রোকেয়া বেগম",
    position: "ছাত্রী কল্যাণ পরিচালক",
    department: "ছাত্র সেবা",
    experience: "১২+ বছর",
    specialization: "ছাত্র-ছাত্রী পরামর্শ ও উন্নয়ন",
    email: "welfare@school.edu.bd",
    phone: "০১৭১১-৪৫৬৭৮৯",
  },
  {
    id: 5,
    name: "প্রফেসর আনিসুর রহমান",
    position: "গবেষণা ও উন্নয়ন পরিচালক",
    department: "শিক্ষা গবেষণা",
    experience: "২২+ বছর",
    specialization: "শিক্ষা প্রযুক্তি ও উদ্ভাবন",
    email: "research@school.edu.bd",
    phone: "০১৭১১-৫৬৭৮৯০",
  },
  {
    id: 6,
    name: "জনাব সাইফুল ইসলাম চৌধুরী",
    position: "প্রশাসনিক পরিচালক",
    department: "সাধারণ প্রশাসন",
    experience: "১৬+ বছর",
    specialization: "প্রতিষ্ঠান পরিচালনা ও সমন্বয়",
    email: "admin@school.edu.bd",
    phone: "০১৭১১-৬৭৮৯০১",
  },
];

const CommitteeMembers = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              পরিচালনা কমিটি
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            অভিজ্ঞ ও দক্ষ শিক্ষাবিদদের নেতৃত্বে আমাদের প্রতিষ্ঠান পরিচালিত হয়
          </p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader className="text-center pb-4">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-soft">
                  {member.name.split(" ")[0].charAt(0)}
                  {member.name.split(" ")[1]?.charAt(0)}
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-primary font-medium text-sm mb-1">
                    {member.position}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {member.department}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Experience & Specialization */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-sm text-muted-foreground">
                      অভিজ্ঞতা:
                    </span>
                    <span className="font-body text-sm font-medium text-foreground">
                      {member.experience}
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-sm text-muted-foreground">
                      বিশেষত্ব:
                    </span>
                    <p className="font-body text-sm text-foreground mt-1 leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-3 border-t border-border/50 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${member.email}`}
                      className="font-body text-muted-foreground hover:text-primary transition-colors truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${member.phone}`}
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
              কমিটির দায়িত্ব ও কার্যাবলী
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              আমাদের পরিচালনা কমিটি প্রতিষ্ঠানের সামগ্রিক নীতি নির্ধারণ, শিক্ষার
              মান উন্নয়ন, শিক্ষার্থীদের কল্যাণ ও সার্বিক উন্নয়নে কাজ করে
              থাকেন। প্রতিটি সদস্য তাদের নিজ নিজ ক্ষেত্রে বিশেষজ্ঞতা ও অভিজ্ঞতা
              নিয়ে প্রতিষ্ঠানের উন্নতিতে অবদান রাখেন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembers;
