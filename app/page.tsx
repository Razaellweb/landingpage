"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Jenna Park",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "HealthMate AI keeps me motivated and helps me spot trends in my wellness before they become issues. The insights feel truly personal!"
  },
  {
    name: "Ethan Kim",
    role: "Young Professional",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The early alerts and lifestyle tips have helped me make smarter health decisions. It feels like having a health coach in my pocket."
  },
  {
    name: "Priya Singh",
    role: "Family History Risk",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "As someone with family health risks, I love how HealthMate AI gives me peace of mind and actionable recommendations."
  }
];

const faqs = [
  {
    q: "How does HealthMate AI personalize recommendations?",
    a: "Our AI analyzes your health data, lifestyle, and goals to deliver tailored insights and suggestions—always keeping your privacy secure."
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use advanced encryption and never share your data without your consent. You control your information at all times."
  },
  {
    q: "Who can benefit from HealthMate AI?",
    a: "Anyone! Whether you're a fitness enthusiast, have family health risks, or just want to be proactive, HealthMate AI adapts to your needs."
  },
  {
    q: "Is there a free trial?",
    a: "Yes, get started free with no credit card required. Experience all core features risk-free."
  }
];

export default function Home() {
  return (
    <main className="hm-font-sans bg-hm-bg-light dark:bg-hm-bg-dark text-gray-900 dark:text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-30 bg-hm-bg-light dark:bg-hm-bg-dark/80 backdrop-blur-md hm-shadow transition-colors">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" aria-label="HealthMate AI Home" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-full bg-hm-gradient-green" aria-hidden="true"></span>
            <span className="font-bold text-xl tracking-tight text-hm-primary">HealthMate <span className="text-hm-accent">AI</span></span>
          </Link>
          <div className="flex gap-2">
            <Link href="/signin" className="text-hm-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-hm-primary rounded-md px-3 py-1.5 transition">Sign In</Link>
            <Button asChild size="lg" className="bg-hm-primary text-white px-6 py-2 text-base font-semibold rounded-full shadow-md hover:bg-hm-secondary focus:ring-2 focus:ring-hm-accent transition hm-transition">
              <Link href="/signup" aria-label="Sign up for HealthMate AI">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between container py-16 md:py-24 gap-12 lg:gap-20 fade-in">
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-hm-primary">
            Your AI-Powered <span className="text-hm-accent">Health Companion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-8">
            HealthMate AI empowers you to proactively manage your health with personalized AI insights, lifestyle recommendations, and early detection tools.
          </p>
          <Button asChild size="lg" className="bg-hm-accent text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-hm-primary focus:ring-2 focus:ring-hm-primary transition hm-transition">
            <Link href="/signup" aria-label="Get Started Free">Get Started Free</Link>
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl bg-hm-gradient-green shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Human-centric illustration: stylized avatar cluster */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                <AvatarImage src="https://randomuser.me/api/portraits/men/31.jpg" alt="User avatar" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="flex gap-4">
                <Avatar className="w-14 h-14 border-2 border-white shadow-md">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/65.jpg" alt="User avatar" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <Avatar className="w-14 h-14 border-2 border-white shadow-md">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/45.jpg" alt="User avatar" />
                  <AvatarFallback>LS</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-8 md:py-12 flex flex-col items-center">
        <p className="uppercase text-xs tracking-widest text-hm-accent font-semibold mb-4">Trusted by proactive individuals at</p>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Company 1" className="w-10 h-10 rounded-full object-cover" />
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Company 2" className="w-10 h-10 rounded-full object-cover" />
          <img src="https://randomuser.me/api/portraits/men/53.jpg" alt="Company 3" className="w-10 h-10 rounded-full object-cover" />
          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Company 4" className="w-10 h-10 rounded-full object-cover" />
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="container py-16 md:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-hm-surface dark:bg-hm-surface-dark rounded-2xl p-8 flex flex-col items-center text-center hm-shadow transition hover:scale-105 hm-transition">
          <span className="inline-block mb-4 text-hm-primary">
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#3b82f6" opacity="0.12"/><path d="M18 10v16M10 18h16" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Personalized AI Insights</h3>
          <p className="text-gray-600 dark:text-gray-300">Get health and wellness insights tailored to your unique profile and goals.</p>
        </div>
        <div className="bg-hm-surface dark:bg-hm-surface-dark rounded-2xl p-8 flex flex-col items-center text-center hm-shadow transition hover:scale-105 hm-transition">
          <span className="inline-block mb-4 text-hm-accent">
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#34d399" opacity="0.12"/><path d="M12 18h12M18 12v12" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Lifestyle Recommendations</h3>
          <p className="text-gray-600 dark:text-gray-300">Receive actionable tips and routines to improve your daily habits and wellbeing.</p>
        </div>
        <div className="bg-hm-surface dark:bg-hm-surface-dark rounded-2xl p-8 flex flex-col items-center text-center hm-shadow transition hover:scale-105 hm-transition">
          <span className="inline-block mb-4 text-hm-primary">
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#3b82f6" opacity="0.12"/><path d="M18 12v12M12 18h12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Early Health Alerts</h3>
          <p className="text-gray-600 dark:text-gray-300">Get notified about potential health risks before they become problems.</p>
        </div>
        <div className="bg-hm-surface dark:bg-hm-surface-dark rounded-2xl p-8 flex flex-col items-center text-center hm-shadow transition hover:scale-105 hm-transition">
          <span className="inline-block mb-4 text-hm-accent">
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#34d399" opacity="0.12"/><path d="M18 10v16M10 18h16" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h3 className="font-semibold text-xl mb-2">Progress Tracking</h3>
          <p className="text-gray-600 dark:text-gray-300">Monitor your health journey with intuitive assessments and visualizations.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-16 md:py-24 grid md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-block bg-hm-gradient w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#3b82f6" opacity="0.10"/><path d="M16 10v12M10 16h12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h4 className="font-semibold text-lg">1. Sign Up & Set Goals</h4>
          <p className="text-gray-600 dark:text-gray-300">Create your profile and set your health priorities in minutes.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-block bg-hm-gradient-green w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#34d399" opacity="0.10"/><path d="M16 10v12M10 16h12" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h4 className="font-semibold text-lg">2. Connect & Track</h4>
          <p className="text-gray-600 dark:text-gray-300">Sync your devices and start tracking your wellness automatically.</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-block bg-hm-gradient w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#3b82f6" opacity="0.10"/><path d="M16 10v12M10 16h12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </span>
          <h4 className="font-semibold text-lg">3. Get AI Insights</h4>
          <p className="text-gray-600 dark:text-gray-300">Receive personalized insights and recommendations to stay ahead.</p>
        </div>
      </section>

      {/* Testimonials & Reviews */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-hm-primary">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-hm-surface dark:bg-hm-surface-dark rounded-2xl p-8 flex flex-col items-center text-center hm-shadow transition hover:scale-105 hm-transition">
              <Avatar className="w-16 h-16 mb-4 border-2 border-hm-primary">
                <AvatarImage src={t.image} alt={`Avatar of ${t.name}`} />
                <AvatarFallback>{t.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <p className="text-gray-700 dark:text-gray-200 italic mb-4">“{t.quote}”</p>
              <span className="font-semibold text-hm-primary">{t.name}</span>
              <span className="text-xs text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="container py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-hm-primary mb-4">Take HealthMate AI Anywhere</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">Download our app for iOS and Android to track your health on the go, get instant alerts, and access your insights anytime.</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" aria-label="Download on App Store" className="inline-block hm-shadow rounded-xl overflow-hidden">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="w-32 h-10 object-contain bg-white dark:bg-hm-surface-dark p-1" />
            </a>
            <a href="#" aria-label="Get it on Google Play" className="inline-block hm-shadow rounded-xl overflow-hidden">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32 h-10 object-contain bg-white dark:bg-hm-surface-dark p-1" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 rounded-3xl bg-hm-gradient shadow-2xl flex items-center justify-center">
            <svg width="120" height="120" fill="none" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="60" fill="#3b82f6" opacity="0.08"/>
              <path d="M60 35v50M35 60h50" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-hm-primary">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem value={faq.q} key={i} className="mb-4 bg-hm-surface dark:bg-hm-surface-dark rounded-xl hm-shadow">
              <AccordionTrigger className="text-lg font-semibold text-hm-primary px-6 py-4 focus:outline-none focus:ring-2 focus:ring-hm-primary hm-transition">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-200 px-6 pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conversion CTA */}
      <section className="container py-16 md:py-24 flex flex-col items-center text-center bg-hm-gradient-green rounded-3xl hm-shadow-strong mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Ready to take charge of your health?</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">Start your journey with HealthMate AI and unlock a new level of proactive wellness.</p>
        <Button asChild size="lg" className="bg-white text-hm-primary px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:bg-hm-accent hover:text-white focus:ring-2 focus:ring-hm-primary transition hm-transition">
          <Link href="/signup" aria-label="Get Started Free">Get Started Free</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-hm-surface dark:bg-hm-surface-dark py-8 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-7 h-7 rounded-full bg-hm-gradient-green" aria-hidden="true"></span>
            <span className="font-bold text-lg text-hm-primary">HealthMate <span className="text-hm-accent">AI</span></span>
          </div>
          <div className="flex gap-4 text-gray-500 text-sm">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a href="mailto:support@healthmateai.com" className="hover:underline">Contact</a>
          </div>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} HealthMate AI. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
