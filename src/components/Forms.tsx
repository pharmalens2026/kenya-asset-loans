import React, { useState } from 'react';
import { 
  Upload, Send, Phone, MapPin, Mail, 
  Clock, CheckCircle2, User,
  DollarSign
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from './ui/select';
import { CONTACT_INFO } from '../lib/constants';

export const LoanApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    assetType: '',
    assetValue: '',
    loanAmount: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application Submitted Successfully!", {
        description: "One of our agents will contact you within 15 minutes.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        assetType: '',
        assetValue: '',
        loanAmount: '',
        description: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Online Loan Request</h1>
          <p className="text-xl text-muted-foreground">Fill in the details below for a quick preliminary valuation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-[2rem] border border-primary/10 shadow-2xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      id="name" 
                      required 
                      placeholder="e.g. John Doe" 
                      className="pl-10 h-12"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (M-Pesa)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      id="phone" 
                      required 
                      placeholder="07xx xxx xxx" 
                      className="pl-10 h-12"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="assetType">Type of Asset</Label>
                  <Select 
                    value={formData.assetType} 
                    onValueChange={v => setFormData({...formData, assetType: v})}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select asset type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gold">Gold & Jewelry</SelectItem>
                      <SelectItem value="electronics">Electronics (Phone/Laptop)</SelectItem>
                      <SelectItem value="car">Motor Vehicle (Logbook)</SelectItem>
                      <SelectItem value="watch">Luxury Watch</SelectItem>
                      <SelectItem value="other">Other Asset</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assetValue">Estimated Market Value (KES)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      id="assetValue" 
                      type="number" 
                      required 
                      placeholder="e.g. 50,000" 
                      className="pl-10 h-12"
                      value={formData.assetValue}
                      onChange={e => setFormData({...formData, assetValue: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount Needed (KES)</Label>
                <Input 
                  id="loanAmount" 
                  type="number" 
                  required 
                  placeholder="e.g. 30,000" 
                  className="h-12"
                  value={formData.loanAmount}
                  onChange={e => setFormData({...formData, loanAmount: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Asset Description & Condition</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us more about the item (Brand, model, age, condition...)" 
                  className="min-h-[120px]"
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="p-6 border-2 border-dashed border-primary/20 rounded-2xl text-center space-y-4">
                <Upload className="mx-auto text-primary" size={32} />
                <div>
                  <div className="font-bold">Upload Photos of Asset</div>
                  <p className="text-xs text-muted-foreground">Upload clear photos showing the condition of the item.</p>
                </div>
                <Button type="button" variant="outline" size="sm">Select Files</Button>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full gold-gradient text-black font-bold h-14 text-lg rounded-full">
                {isSubmitting ? "Processing Request..." : "Submit Application"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-primary/10 p-8 rounded-[2rem] border border-primary/20 space-y-6">
              <h3 className="text-xl font-bold">Why Apply Online?</h3>
              <ul className="space-y-4">
                {[
                  "Faster processing at the branch",
                  "Preliminary valuation in minutes",
                  "24/7 application submission",
                  "Secure and confidential"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-[2rem] border border-primary/10 space-y-4">
              <h3 className="font-bold">Need Help?</h3>
              <p className="text-sm text-muted-foreground">Call our hotline if you prefer to speak with a loan officer directly.</p>
              <div className="flex items-center gap-3 text-primary font-bold">
                <Phone size={20} />
                <span>+254 {CONTACT_INFO.phone.slice(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUs = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Our Team</h1>
            <p className="text-xl text-muted-foreground">Visit our office or reach out via phone/email.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card/50 border-primary/10 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.location}</p>
                </Card>
                <Card className="bg-card/50 border-primary/10 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold">Hotline</h3>
                  <p className="text-sm text-muted-foreground">+254 {CONTACT_INFO.phone.slice(1)}</p>
                </Card>
                <Card className="bg-card/50 border-primary/10 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.email}</p>
                </Card>
                <Card className="bg-card/50 border-primary/10 p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Fri: {CONTACT_INFO.hours.mon_fri}<br/>Saturday: {CONTACT_INFO.hours.sat}</p>
                </Card>
              </div>

              <div className="aspect-video w-full rounded-[2rem] overflow-hidden grayscale contrast-125 opacity-70 border border-primary/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364487891515!2d36.7997341078125!3d-1.2616422999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <Card className="bg-card p-8 md:p-12 rounded-[2rem] border border-primary/10 shadow-2xl h-fit">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input placeholder="Your Name" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Your Email" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input placeholder="General Inquiry" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea placeholder="How can we help you today?" className="min-h-[150px]" />
                </div>
                <Button className="w-full gold-gradient text-black font-bold h-12 text-lg">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};