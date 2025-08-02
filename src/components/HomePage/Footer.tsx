import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "আমাদের সম্পর্কে", href: "#" },
    { label: "ভর্তির তথ্য", href: "#" },
    { label: "শিক্ষাক্রম", href: "#" },
    { label: "পরীক্ষার ফলাফল", href: "#" },
    { label: "যোগাযোগ", href: "#" },
  ];

  const importantLinks = [
    { label: "নোটিশ বোর্ড", href: "#" },
    { label: "একাডেমিক ক্যালেন্ডার", href: "#" },
    { label: "ফি কাঠামো", href: "#" },
    { label: "শিক্ষক তালিকা", href: "#" },
    { label: "স্কলারশিপ", href: "#" },
  ];

  const services = [
    { label: "অনলাইন ক্লাস", href: "#" },
    { label: "ডিজিটাল লাইব্রেরি", href: "#" },
    { label: "ল্যাব সুবিধা", href: "#" },
    { label: "খেলাধুলা", href: "#" },
    { label: "সাংস্কৃতিক কার্যক্রম", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-3">
              সর্বশেষ আপডেট পেতে সাবস্ক্রাইব করুন
            </h3>
            <p className="font-body text-primary-foreground/80 mb-6">
              নোটিশ, ইভেন্ট ও গুরুত্বপূর্ণ তথ্যাবলী ইমেইলে পান
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent font-body"
              />
              <Button variant="default" className="font-body">
                সাবস্ক্রাইব
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                স্কুল
              </div>
              <div className="ml-3">
                <h3 className="font-heading text-lg font-bold">
                  আমাদের আদর্শ বিদ্যালয়
                </h3>
                <p className="text-sm text-primary-foreground/70 font-body">
                  শিক্ষা, মূল্যবোধ ও উৎকর্ষতা
                </p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
              ১৯৯৫ সাল থেকে আমরা মানসম্পন্ন শিক্ষা প্রদানের মাধ্যমে হাজারো
              শিক্ষার্থীর স্বপ্ন পূরণে সহায়তা করে আসছি।
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-body text-sm">০১৭১১-১২৩৪৫৬</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-body text-sm">info@school.edu.bd</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm">
                  ১২৩ শিক্ষা সড়ক, ধানমন্ডি
                  <br />
                  ঢাকা - ১২০৫, বাংলাদেশ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-body text-sm">
                  সোম - শুক্র: ৮:০০ - ৪:০০
                  <br />
                  শনি: ৮:০০ - ১২:০০
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              আমাদের সেবা
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="font-body text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-heading text-sm font-semibold mb-3">
                সোশ্যাল মিডিয়া
              </h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-primary-foreground/70 text-center md:text-left">
              © ২০২৫ আমাদের আদর্শ বিদ্যালয়। সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="#"
                className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
              >
                গোপনীয়তা নীতি
              </a>
              <a
                href="#"
                className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
              >
                ব্যবহারের শর্তাবলী
              </a>
              <a
                href="#"
                className="font-body text-primary-foreground/70 hover:text-accent transition-colors"
              >
                সাইটম্যাপ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
