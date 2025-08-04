"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "প্রধান পাতা", href: "/", hasDropdown: false },
    {
      label: "আমাদের সম্পর্কে",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "ইতিহাস ও ঐতিহ্য", href: "/about-us/our-history" },
        { label: "লক্ষ্য ও উদ্দেশ্য", href: "/about-us/mission-and-vision" },
        { label: "পরিচালনা কমিটি", href: "/about-us/management-committee" },
        { label: "শিক্ষক মণ্ডলী", href: "/about-us/teachers" },
      ],
    },
    {
      label: "একাডেমিক",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "শিক্ষাক্রম", href: "#" },
        { label: "ক্লাস রুটিন", href: "#" },
        { label: "পরীক্ষার সময়সূচী", href: "#" },
        { label: "সিলেবাস", href: "#" },
      ],
    },
    {
      label: "ভর্তি",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "ভর্তির নিয়মাবলী", href: "#" },
        { label: "আবেদন ফর্ম", href: "#" },
        { label: "ফি কাঠামো", href: "#" },
        { label: "প্রয়োজনীয় কাগজপত্র", href: "#" },
      ],
    },
    { label: "ফলাফল", href: "#", hasDropdown: false },
    { label: "গ্যালারি", href: "#", hasDropdown: false },
    { label: "যোগাযোগ", href: "#", hasDropdown: false },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span className="font-body">০১৭১১-১২৩৪৫৬</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span className="font-body">info@school.edu.bd</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span className="font-body">ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-primary">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  স্কুল
                </div>
              </div>
              <div className="ml-3">
                <h1 className="font-heading text-lg font-bold text-foreground">
                  আমাদের আদর্শ বিদ্যালয়
                </h1>
                <p className="text-xs text-muted-foreground font-body">
                  শিক্ষা, মূল্যবোধ ও উৎকর্ষতা
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors font-body"
                      onClick={() => toggleDropdown(item.label)}
                      type="button"
                    >
                      {item.label}
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors font-body"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full left-0 w-56 bg-background border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-body"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="default" size="sm" className="font-body">
                অনলাইন ভর্তি
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border">
              <div className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <button
                        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 transition-colors font-body"
                        onClick={() => toggleDropdown(item.label)}
                        type="button"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center w-full px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/5 transition-colors font-body"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mobile Dropdown */}
                    {item.hasDropdown &&
                      item.dropdownItems &&
                      activeDropdown === item.label && (
                        <div className="bg-muted/30 border-l-2 border-primary/20 ml-4">
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full font-body"
                  >
                    অনলাইন ভর্তি
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
