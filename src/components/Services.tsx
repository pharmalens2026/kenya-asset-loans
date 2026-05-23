import React, { useState } from 'react';
import { 
  ChevronDown, Search, Filter, 
  MessageSquare, SlidersHorizontal, 
  Check, Info, Calculator as CalcIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from './ui/select';
import { Separator } from './ui/separator';
import { 
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from './ui/accordion';
import { SERVICES, PRODUCTS, FAQS } from '../lib/constants';

export const Services = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="pt-32 space-y-24">
      <section className="container mx-auto px-4 text-center space-y-6">
        <Badge variant="outline" className="text-primary border-primary">Full Financial Suite</Badge>
        <h1 className="text-4xl md:text-6xl font-bold">Comprehensive Asset Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From micro-loans against your smartphone to high-value logbook financing, 
          we offer the most professional and flexible asset-backed loans in Kenya.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 gap-12">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-primary">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Info size={24} />
                </div>
                <span className="font-bold tracking-widest uppercase text-sm">Service Details</span>
              </div>
              <h2 className="text-4xl font-bold">{service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Requirements
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <Check size={18} className="text-primary" /> Why Us?
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button onClick={() => setActivePage('apply')} className="gold-gradient text-black font-bold h-12 px-8 rounded-full">
                Apply for {service.title}
              </Button>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-primary/5">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <LoanCalculator />
        </div>
      </section>
    </div>
  );
};

export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || p.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20 space-y-12">
      <section className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">The Fredy's Marketplace</h1>
          <p className="text-xl text-muted-foreground">Premium pre-owned items at a fraction of their original price.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-2xl border border-primary/10">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search by product name, brand, or category..." 
              className="pl-10 h-12 rounded-xl bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px] h-12 rounded-xl bg-background/50">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="smartphones">Smartphones</SelectItem>
              <SelectItem value="laptops">Laptops</SelectItem>
              <SelectItem value="watches">Watches</SelectItem>
              <SelectItem value="cameras">Cameras</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
              <SelectItem value="tvs">TVs</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-12 w-full md:w-auto rounded-xl gap-2">
            <SlidersHorizontal size={18} /> Filters
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden bg-card/50 border-primary/5 hover:border-primary/40 transition-all flex flex-col h-full">
                <div className="aspect-square relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
                  <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground border-none">
                    {product.condition}
                  </Badge>
                  {product.status === 'Sold' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                      <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Sold Out</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">{product.category}</div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-xs text-muted-foreground">{product.brand}</p>
                    </div>
                    <div className="text-xl font-black text-gold">KES {product.price.toLocaleString()}</div>
                  </div>
                  
                  <div className="mt-auto pt-4 flex gap-2">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white gap-2 font-bold"
                      disabled={product.status === 'Sold'}
                      asChild
                    >
                      <a href={`https://wa.me/254700000000?text=I'm interested in the ${product.name} (KES ${product.price.toLocaleString()})`}>
                        <MessageSquare size={18} /> Inquire
                      </a>
                    </Button>
                    <Button variant="outline" className="px-3" disabled={product.status === 'Sold'}>
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-[2rem] border border-dashed border-primary/20">
            <div className="text-muted-foreground mb-4">No products found matching your search.</div>
            <Button onClick={() => { setSearchTerm(''); setCategory('all'); }} variant="link" className="text-primary font-bold">Clear All Filters</Button>
          </div>
        )}
      </section>
    </div>
  );
};

export const LoanCalculator = () => {
  const [amount, setAmount] = useState(50000);
  const [days, setDays] = useState(30);

  const interestRate = 0.15; // 15% for example
  const interest = amount * interestRate * (days / 30);
  const total = amount + interest;

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-[3rem] p-8 md:p-12 shadow-2xl border border-primary/10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2 text-primary">
            <CalcIcon size={24} />
            <h3 className="text-2xl font-bold">Loan Calculator</h3>
          </div>
          <p className="text-muted-foreground text-sm">Estimate your repayment amount based on loan value and duration. Note: Interest rates vary per asset type.</p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <label>Loan Amount (KES)</label>
                <span className="text-primary font-bold">{amount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="1000000" 
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <label>Repayment Period (Days)</label>
                <span className="text-primary font-bold">{days} Days</span>
              </div>
              <input 
                type="range" 
                min="7" 
                max="90" 
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-muted rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-primary/5 rounded-3xl p-8 space-y-6 border border-primary/10">
          <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-4">
            <span className="text-muted-foreground">Principal Amount</span>
            <span className="font-bold">KES {amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-4">
            <span className="text-muted-foreground">Est. Interest (15%)</span>
            <span className="font-bold text-primary">KES {interest.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-lg font-bold">Total Repayment</span>
            <div className="text-right">
              <div className="text-3xl font-black text-gold">KES {total.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground italic">Due in {days} days</div>
            </div>
          </div>
          <Button className="w-full gold-gradient text-black font-bold h-12 text-lg">
            Apply for this Loan
          </Button>
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => (
  <div className="pt-32 pb-20 container mx-auto px-4">
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Everything you need to know about our pawn and financing process.</p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-card/50">
            <AccordionTrigger className="hover:no-underline hover:text-primary py-6 text-left">
              <span className="font-bold text-lg">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="bg-primary/5 p-12 rounded-[2rem] text-center space-y-6 border border-primary/10">
        <h3 className="text-2xl font-bold">Still have questions?</h3>
        <p className="text-muted-foreground">Our team is available 24/7 on WhatsApp to help you with any inquiries.</p>
        <Button className="gold-gradient text-black font-bold h-12 px-12 rounded-full shadow-lg" asChild>
          <a href="https://wa.me/254700000000">Chat with a Representative</a>
        </Button>
      </div>
    </div>
  </div>
);