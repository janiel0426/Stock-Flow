import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle2, Shield, Zap, PlusCircle, Package, Bell, ChevronLeft, ChevronRight, Check, Star, Quote, Users, TrendingUp, Globe } from "lucide-react";

const tutorialSteps = [
  {
    title: "1. Dashboard Overview",
    description: "Get a bird's-eye view of your entire stock in real-time.",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    icon: BarChart3
  },
  {
    title: "2. Add New Items Easily",
    description: "Create products, set SKUs, and manage categories.",
    color: "bg-green-500/10 border-green-500/20 text-green-500",
    icon: PlusCircle
  },
  {
    title: "3. Track Stock Levels",
    description: "Always know what's in stock and what's running low.",
    color: "bg-purple-500/10 border-purple-500/20 text-purple-500",
    icon: Package
  },
  {
    title: "4. Get Smart Alerts",
    description: "Receive notifications when inventory hits reorder points.",
    color: "bg-orange-500/10 border-orange-500/20 text-orange-500",
    icon: Bell
  }
];

const showcaseImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
  "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=2070"
];

export function Landing() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % tutorialSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <Zap className="mr-2 h-4 w-4" /> The Future of Inventory Management
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Control your stock with <span className="text-primary">precision.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              A powerful, beautiful, and accessible inventory management SaaS built for modern businesses. Track stock, manage orders, and grow faster.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base">
                  View Demo
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Launch your inventory system today — free forever.</p>
          </motion.div>

          {/* Tutorial Flip Cards */}
          <div id="how-it-works" className="mt-16 md:mt-24 perspective-[1200px]">
            <h2 className="text-2xl font-bold font-heading mb-8 opacity-80">How it works</h2>
            <div className="relative h-[250px] w-full max-w-xl mx-auto">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentStep}
                  initial={{ rotateX: -90, opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0, scale: 1 }}
                  exit={{ rotateX: 90, opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className="absolute inset-0 origin-center bg-background/80 backdrop-blur-md rounded-2xl border-2 shadow-2xl flex items-center p-8 gap-8"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className={`p-6 rounded-2xl border ${tutorialSteps[currentStep].color}`}>
                    {(() => {
                      const Icon = tutorialSteps[currentStep].icon;
                      return <Icon className="w-12 h-12" />;
                    })()}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tutorialSteps[currentStep].title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{tutorialSteps[currentStep].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {tutorialSteps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentStep === idx ? "w-8 bg-primary" : "w-2 bg-primary/20"
                  }`} 
                />
              ))}
            </div>
          </div>


          <motion.div
            id="preview"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 md:mt-24 mx-auto max-w-5xl rounded-xl border bg-background/50 shadow-2xl backdrop-blur-sm overflow-hidden relative group"
          >
            <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center relative overflow-hidden">
              {/* Fake dashboard preview */}
              <motion.div 
                className="absolute inset-y-0 flex w-full h-full"
                animate={{ x: `-${currentImageIndex * 100}%` }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                style={{ left: 0 }}
              >
                {showcaseImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`StockFlow Tour ${i + 1}`}
                    className="w-full h-full flex-shrink-0 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full shadow-md bg-background/80 hover:bg-background/90 backdrop-blur-sm text-foreground"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full shadow-md bg-background/80 hover:bg-background/90 backdrop-blur-sm text-foreground"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
               {showcaseImages.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentImageIndex(idx)}
                   className={`h-2 rounded-full transition-all duration-300 ${
                     currentImageIndex === idx ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                   }`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Everything you need to scale</h2>
            <p className="mt-4 text-lg text-muted-foreground">Stop using spreadsheets. Start using a system designed specifically for modern retail and wholesale.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Get instant insights into your stock levels, sales trends, and inventory valuation."
              },
              {
                icon: Zap,
                title: "Smart Alerts",
                description: "Never run out of stock. Set custom low-stock thresholds and receive automated alerts."
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security protects your data. Regular backups ensure you never lose information."
              },
              {
                icon: Users,
                title: "Multi-User Collaboration",
                description: "Invite your entire team with role-based access control. See who changed what and when."
              },
              {
                icon: TrendingUp,
                title: "Automated Forecasting",
                description: "AI-driven stock forecasting helps you predict demand and avoid overstocking."
              },
              {
                icon: Globe,
                title: "Multi-Location Support",
                description: "Manage inventory across multiple warehouses or retail stores from a single unified dashboard."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Trusted by thousands</h2>
            <p className="mt-4 text-lg text-muted-foreground">Don't just take our word for it. Here's what our users have to say about StockFlow.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "StockFlow completely transformed how we manage our warehouse. The smart alerts alone have saved us thousands in lost sales from stockouts.",
                author: "Sarah Jenkins",
                role: "Operations Manager, TechGear",
                rating: 5
              },
              {
                quote: "Finally, an inventory system that doesn't require a computer science degree to use. My entire team adopted it within days.",
                author: "Marcus Chen",
                role: "Founder, Bloom Wholesale",
                rating: 5
              },
              {
                quote: "The multi-location support is a gamechanger. I can track stock moving between our 5 retail stores in real-time. Simply amazing.",
                author: "Elena Rodriguez",
                role: "Retail Director, StyleCo",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/30 rounded-2xl p-8 border relative"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-muted-foreground/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-6">Ready to take control of your inventory?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of businesses managing their stock efficiently with StockFlow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
