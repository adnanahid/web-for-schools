import React from "react";
// import { Quote } from 'lucide-react';
import headmasterImage from "@/assets/headMaster.webp";
import Image from "next/image";

const HeadmasterWelcome = () => {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative inline-block">
                <Image
                  src={headmasterImage}
                  alt="প্রধান শিক্ষক মোহাম্মদ রহিম উদ্দিন"
                  width={800}
                  height={800}
                  className="rounded-2xl object-cover aspect-square"
                  loading="lazy"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              {/* Section Header */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  প্রধান শিক্ষকের বাণী
                </h2>
                <div className="h-1 w-20 bg-gradient-accent rounded-full"></div>
              </div>

              {/* Welcome Message */}
              <div>
                <blockquote className="font-body text-lg leading-relaxed text-muted-foreground pl-8 italic">
                  শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র যার মাধ্যমে আপনি বিশ্বকে
                  পরিবর্তন করতে পারেন। আমাদের প্রতিষ্ঠানে আমরা শুধু জ্ঞান অর্জনই
                  নয়, চরিত্র গঠন ও মানবিক গুণাবলী বিকাশের মাধ্যমে প্রতিটি
                  শিক্ষার্থীকে একজন আদর্শ নাগরিক হিসেবে গড়ে তুলতে
                  প্রতিশ্রুতিবদ্ধ।
                </blockquote>
              </div>

              {/* Principal Info */}
              <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    অধ্যাপক মোহাম্মদ রহিম উদ্দিন
                  </h3>
                  <p className="font-body text-primary font-medium">
                    প্রধান শিক্ষক ও সভাপতি
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="font-body text-muted-foreground">
                    <span className="font-medium text-foreground">
                      শিক্ষাগত যোগ্যতা:
                    </span>
                    M.A. (শিক্ষা), B.Ed., Ph.D. (শিক্ষা গবেষণা)
                  </div>
                  <div className="font-body text-muted-foreground">
                    <span className="font-medium text-foreground">
                      অভিজ্ঞতা:
                    </span>
                    ২৫+ বছর শিক্ষকতা ও প্রশাসনিক অভিজ্ঞতা
                  </div>
                  <div className="font-body text-muted-foreground">
                    <span className="font-medium text-foreground">
                      বিশেষত্ব:
                    </span>
                    আধুনিক শিক্ষা পদ্ধতি ও শিক্ষার্থী উন্নয়ন
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                  আমাদের দৃষ্টিভঙ্গি
                </h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  একটি আধুনিক, অন্তর্ভুক্তিমূলক ও মানসম্পন্ন শিক্ষা ব্যবস্থার
                  মাধ্যমে প্রতিটি শিক্ষার্থীর সম্ভাবনা বিকশিত করে তাদের একুশ
                  শতকের যোগ্য নাগরিক হিসেবে গড়ে তোলা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadmasterWelcome;
