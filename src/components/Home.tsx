import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, HeartHandshake, 
  CheckCircle2, Star, Quote 
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { IMAGES, SERVICES, PRODUCTS, CONTACT_INFO } from '../lib/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const Home = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Premium Pawn Service" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            {/* Removed the phone number badge from here */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Get Instant Cash Against Your <span className="text-gold italic">Valuables.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discreet, professional, and secure asset financing for Kenyans. 
              No credit checks, no long queues—just instant value for your items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => setActivePage('apply')} size="lg" className="gold-gradient text-black font-bold text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Apply for Loan
              </Button>
              <Button onClick={() => setActivePage('marketplace')} size="lg" variant="outline" className="border-primary text-primary font-bold text-lg h-14 px-8 rounded-full hover:bg-primary hover:text-black">
                View Products
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">15 Min</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Payout</span>
              </div>
              <div className="w-px h-10 bg-primary/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">10k+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Customers</span>
              </div>
              <div className="w-px h-10 bg-primary/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">100%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Secure</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Quick Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Quick Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We offer a wide variety of ways to get the liquidity you need when you need it most.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="group overflow-hidden bg-card/50 border-primary/10 hover:border-primary/40 transition-all hover:translate-y-[-5px]">
                <div className="h-48 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                  <Button variant="link" onClick={() => setActivePage('services')} className="p-0 text-primary font-bold group">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Why Kenyans Choose <span className="text-gold">The Fredy's</span></h2>
              <p className="text-lg text-muted-foreground">We aren't just a pawn shop; we are your financial partners in times of need. We prioritize your privacy and asset safety above all else.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Zap className="text-primary" />, title: "Instant Cash", desc: "Get paid in cash or M-Pesa in under 15 minutes." },
                  { icon: <ShieldCheck className="text-primary" />, title: "Secure Vaults", desc: "Your items are stored in high-security, insured facilities." },
                  { icon: <HeartHandshake className="text-primary" />, title: "Fair Valuation", desc: "Our expert appraisers give you the best market value." },
                  { icon: <CheckCircle2 className="text-primary" />, title: "Flexible Terms", desc: "Custom repayment plans that suit your income cycle." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => setActivePage('about')} variant="secondary" className="px-8">About Our Story</Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMAGES.testimonials} alt="Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl text-black shadow-xl hidden md:block">
                <div className="text-4xl font-bold">10+</div>
                <div className="font-medium opacity-80">Years of Trusted Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Simple 4-Step Process</h2>
          <p className="text-muted-foreground">It's faster than any bank. Here's how you get your cash today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Visit or Apply", desc: "Bring your item to our branch or start your application online." },
            { step: "02", title: "Free Valuation", desc: "Our specialists will appraise your item on the spot for free." },
            { step: "03", title: "Instant Offer", desc: "We make you a competitive cash offer based on market value." },
            { step: "04", title: "Walk Out with Cash", desc: "Sign the agreement and receive your cash via M-Pesa or Bank." }
          ].map((item, i) => (
            <div key={i} className="relative group text-center space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto text-2xl font-black text-primary group-hover:bg-primary group-hover:text-black transition-all">
                {item.step}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              {i < 3 && (
                <ArrowRight className="hidden lg:block absolute top-8 -right-4 text-primary/30" size={24} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Marketplace */}
      <section className="container mx-auto px-4 bg-muted/30 py-20 rounded-[3rem]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Deals of the Week</h2>
            <p className="text-muted-foreground">Premium pre-owned items at unbeatable prices. Certified quality.</p>
          </div>
          <Button onClick={() => setActivePage('marketplace')} variant="outline" className="border-primary text-primary">Browse Marketplace</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-background border-none shadow-xl hover:shadow-primary/5 transition-all">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <Badge className="absolute top-4 left-4 bg-primary text-black font-bold">KES {product.price.toLocaleString()}</Badge>
                {product.status === 'Sold' && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest">Sold</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                  <span>Condition: {product.condition}</span>
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent">Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 text-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Quote size={120} />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-2xl md:text-3xl font-medium italic">
              "The Fredy's saved me when I needed emergency medical funds. I pawned my MacBook and got the cash via M-Pesa within 10 minutes. I repaid after 3 weeks and got my device back in perfect condition. Truly professional!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-black/20 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=kenyan1" alt="Customer" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-lg">Maina K.</div>
                <div className="text-sm opacity-80">Business Owner, Westlands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-navy rounded-[3rem] p-12 md:p-24 text-center space-y-8 border border-primary/20">
          <h2 className="text-4xl md:text-6xl font-bold">Ready to get your <span className="text-gold">instant cash?</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't let financial emergencies slow you down. Contact us now or visit any of our branches for a free valuation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setActivePage('apply')} size="lg" className="gold-gradient text-black font-bold h-14 px-12 rounded-full text-lg">Apply Online</Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white h-14 px-12 rounded-full text-lg hover:bg-white/10" asChild>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`}>WhatsApp Support</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};