export const IMAGES = {
  hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/hero-banner-b3659394-1778417695495.webp",
  jewelry: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/gold-jewelry-service-271f0cf9-1778417693300.webp",
  electronics: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/electronics-service-0fe5a826-1778417695662.webp",
  logbook: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/logbook-loans-service-8cfc1738-1778417693737.webp",
  watch: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/luxury-watch-product-867c2ba6-1778417695406.webp",
  marketplace: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/tech-products-marketplace-db9d6f4e-1778417693633.webp",
  testimonials: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1244e91e-32ec-45d0-a63f-6e146cfb5a7b/testimonials-image-df122a30-1778417693944.webp"
};

export const CONTACT_INFO = {
  phone: "0721439627",
  whatsapp: "254721439627",
  location: "AMBANK HOUSE, 17TH Floor, University Way",
  email: "hello@thefredys.co.ke",
  hours: {
    mon_fri: "8:00 AM - 6:00 PM",
    sat: "9:00 AM - 4:00 PM"
  }
};

export const SERVICES = [
  {
    id: 'pawn',
    title: 'Pawn Services',
    description: 'Instant cash loans against gold, jewelry, and luxury items.',
    icon: 'Gem',
    image: IMAGES.jewelry,
    requirements: ['Original ID', 'Asset Ownership Proof', 'Valuable Item'],
    benefits: ['No Credit Checks', 'Instant Valuation', 'Secure Storage']
  },
  {
    id: 'logbook',
    title: 'Logbook Loans',
    description: 'Quick financing using your vehicle logbook as security.',
    icon: 'Car',
    image: IMAGES.logbook,
    requirements: ['Original Logbook', 'KRA PIN', 'ID Copy', '6 Months Bank Statements'],
    benefits: ['Drive your car', 'Fast Processing', 'Up to 60% valuation']
  },
  {
    id: 'electronics',
    title: 'Electronics Pawn',
    description: 'Loans against high-end smartphones, laptops, and cameras.',
    icon: 'Smartphone',
    image: IMAGES.electronics,
    requirements: ['Device Receipts', 'Original Charger/Box', 'Original ID'],
    benefits: ['Low Interest', 'Same-day Cash', 'Safe Custody']
  },
  {
    id: 'asset',
    title: 'Asset Financing',
    description: 'Specialized loans for high-value business or personal assets.',
    icon: 'Briefcase',
    image: IMAGES.hero,
    requirements: ['Asset Details', 'Business Documentation', 'ID/KRA PIN'],
    benefits: ['Tailored Repayments', 'Professional Valuation', 'High Loan Limits']
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    price: 145000,
    condition: 'Like New',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&auto=format&fit=crop&q=60',
    status: 'Available'
  },
  {
    id: 2,
    name: 'MacBook Pro M3 14"',
    category: 'Laptops',
    price: 210000,
    condition: 'Excellent',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60',
    status: 'Available'
  },
  {
    id: 3,
    name: 'Rolex Datejust 41',
    category: 'Watches',
    price: 950000,
    condition: 'Certified Pre-owned',
    brand: 'Rolex',
    image: IMAGES.watch,
    status: 'Available'
  },
  {
    id: 4,
    name: 'Sony A7 IV Camera',
    category: 'Cameras',
    price: 285000,
    condition: 'Mint',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60',
    status: 'Available'
  },
  {
    id: 5,
    name: 'PlayStation 5 Console',
    category: 'Gaming',
    price: 65000,
    condition: 'Good',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?w=800&auto=format&fit=crop&q=60',
    status: 'Sold'
  },
  {
    id: 6,
    name: 'Samsung 65" QLED TV',
    category: 'TVs',
    price: 110000,
    condition: 'Brand New (Sealed)',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=60',
    status: 'Available'
  }
];

export const FAQS = [
  {
    question: "How does pawning work?",
    answer: "Pawning is a simple process where you provide a valuable item as collateral for a short-term loan. We value the item, give you cash instantly, and store your item safely until you repay the loan plus interest."
  },
  {
    question: "What items do you accept?",
    answer: "We accept a wide range of valuables including gold, jewelry, high-end electronics (smartphones, laptops, cameras), luxury watches, and motor vehicles (logbook loans)."
  },
  {
    question: "How long does approval take?",
    answer: "For most items like electronics and jewelry, valuation and cash payout happen within 15-30 minutes. Logbook loans usually take 2-4 hours for verification."
  },
  {
    question: "Are my transactions confidential?",
    answer: "Absolutely. We pride ourselves on discreet and professional services. Your financial details and the fact that you pawned an item are never shared with third parties."
  },
  {
    question: "What happens if I fail to repay?",
    answer: "If you cannot repay your loan, you may choose to extend the loan by paying the interest, or we may sell the item to recover the loan amount. Failing to repay a pawn loan does not affect your credit score."
  }
];