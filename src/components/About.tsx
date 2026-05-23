import React from 'react';
import { 
  History, Target, Users, ShieldCheck, 
  Award, HeartHandshake, Star
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const About = () => {
  return (
    <div className="pt-32 space-y-24 pb-20">
      <section className="container mx-auto px-4 text-center space-y-6">
        <Badge variant="outline" className="text-primary border-primary">Our Story</Badge>
        <h1 className="text-4xl md:text-6xl font-bold">More Than Just a Pawn Shop</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Founded in Nairobi, The Fredy's was established with a clear mission: 
          to provide Kenyans with a dignified, fast, and secure alternative to traditional lending.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Bridging the Gap in Financial Liquidity</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In many financial emergencies, traditional banks move too slowly, and digital lenders might have high interest rates or invasive debt collection methods. 
            The Fredy's offers a better way—asset-backed financing that is private, instant, and professional.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Mission</h4>
                <p className="text-muted-foreground">To provide instant, asset-backed liquidity to Kenyans with the highest levels of integrity and professionalism.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Our Vision</h4>
                <p className="text-muted-foreground">To be the most trusted name in personal and business asset financing across East Africa.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-8">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60" alt="Office" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60" alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=800&auto=format&fit=crop&q=60" alt="Consultation" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60" alt="Professional" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground">The pillars that define every transaction at The Fredy's.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-primary" />, title: "Integrity", desc: "We provide honest valuations and transparent interest rates with no hidden fees." },
              { icon: <ShieldCheck className="text-primary" />, title: "Security", desc: "Your valuables are stored in bank-grade vaults and are fully insured while in our care." },
              { icon: <Users className="text-primary" />, title: "Professionalism", desc: "We treat every client with respect and ensure absolute confidentiality." }
            ].map((v, i) => (
              <Card key={i} className="bg-card p-12 text-center space-y-6 border-none shadow-xl rounded-[2rem]">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-48 h-48 rounded-full border-4 border-primary p-2 shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-muted">
               <img src="https://i.pravatar.cc/300?u=ceo" alt="CEO" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 italic text-xl md:text-2xl text-foreground font-medium text-center md:text-left">
            "At The Fredy's, we believe that your hard-earned assets should work for you in times of need. We are here to unlock that value quickly and respectfully."
            <div className="pt-4 not-italic">
              <div className="text-gold font-bold text-lg">Fredrick Onyango</div>
              <div className="text-sm text-muted-foreground font-normal">Founder & CEO, THE FREDY'S</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};