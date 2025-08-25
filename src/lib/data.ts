import { Filter, Cog } from 'lucide-react';
import EngineIcon from '@/components/icons/engine-icon';
import TireIcon from '@/components/icons/tire-icon';
import BrakeIcon from '@/components/icons/brake-icon';
import TransmissionIcon from '@/components/icons/transmission-icon';
import BatteryIcon from '@/components/icons/battery-icon';
import TurboIcon from '@/components/icons/turbo-icon';
import LogoIpsum1Icon from '@/components/icons/logoipsum-1-icon';
import LogoIpsum2Icon from '@/components/icons/logoipsum-2-icon';
import LogoIpsum3Icon from '@/components/icons/logoipsum-3-icon';
import LogoIpsum4Icon from '@/components/icons/logoipsum-4-icon';
import LogoIpsum5Icon from '@/components/icons/logoipsum-5-icon';
import LogoIpsum6Icon from '@/components/icons/logoipsum-6-icon';

export const services = [
  { id: 1, name: 'Engine Diagnostics', description: 'Advanced diagnostics to identify and resolve engine issues, ensuring optimal performance.', icon: EngineIcon },
  { id: 2, name: 'Brake Services', description: 'Complete brake system inspection, repair, and replacement for maximum safety.', icon: BrakeIcon },
  { id: 3, name: 'Tire & Wheel Services', description: 'Tire rotation, balancing, alignment, and installation of high-performance tires.', icon: TireIcon },
  { id: 4, name: 'Transmission Repair', description: 'Expert servicing of automatic and manual transmissions to keep your gears shifting smoothly.', icon: TransmissionIcon },
  { id: 5, name: 'Oil & Filter Change', description: 'Quick and efficient oil change services using premium synthetic oils and filters.', icon: Filter },
  { id: 6, name: 'Battery Replacement', description: 'Testing and replacement of car batteries to ensure reliable starting power.', icon: BatteryIcon },
  { id: 7, name: 'Performance Tuning', description: 'ECU remapping and performance upgrades to unlock your vehicle\'s full potential.', icon: TurboIcon },
  { id: 8, name: 'Suspension Services', description: 'Suspension checks and upgrades for improved handling and ride comfort.', icon: Cog },
];

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  make: string;
  model: string;
  status: string;
  discount: number;
  image: string;
  aiHint: string;
  description: string;
  specs: { name: string; value: string }[];
  relatedProducts: number[];
};

export const products: Product[] = [
  { id: 1, name: 'Performance Air Filter', price: 7999, category: 'Engine', make: 'BMW', model: 'M3', status: 'new', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'air filter', description: "Enhance your engine's breathing with this high-flow performance air filter. Designed for maximum airflow and superior filtration, it's a simple upgrade for noticeable gains in horsepower and throttle response.", specs: [{name: 'Material', value: 'Cotton Gauze'}, {name: 'Washable', value: 'Yes'}], relatedProducts: [5, 9] },
  { id: 2, name: 'Ceramic Brake Pads', price: 12999, category: 'Brakes', make: 'Audi', model: 'S4', status: 'popular', discount: 15, image: 'https://placehold.co/600x400.png', aiHint: 'brake pads', description: "Upgrade your stopping power with these low-dust ceramic brake pads. They offer excellent bite, reduced brake fade, and quiet operation, making them perfect for spirited street driving.", specs: [{name: 'Compound', value: 'Ceramic'}, {name: 'Hardware', value: 'Included'}], relatedProducts: [6] },
  { id: 3, name: 'All-Season Performance Tires', price: 24999, category: 'Tires', make: 'All', model: 'All', status: 'popular', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'car tire', description: "The perfect balance of all-weather grip and high-performance handling. These tires provide confident traction in wet and dry conditions without sacrificing cornering stability.", specs: [{name: 'Type', value: 'All-Season'}, {name: 'Treadwear', value: '500'}], relatedProducts: [7] },
  { id: 4, name: 'Full Synthetic Motor Oil', price: 4550, category: 'Engine', make: 'All', model: 'All', status: 'none', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'motor oil', description: "Protect your engine with our most advanced full synthetic motor oil. Formulated for high-performance engines, it provides exceptional wear protection, and stability under extreme temperatures.", specs: [{name: 'Viscosity', value: '5W-30'}, {name: 'Size', value: '5 Litre'}], relatedProducts: [1, 5] },
  { id: 5, name: 'Iridium Spark Plugs (Set of 4)', price: 2500, category: 'Engine', make: 'Ford', model: 'Mustang', status: 'new', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'spark plug', description: "Ignite your engine's potential. These iridium spark plugs offer a longer lifespan, improved fuel efficiency, and a more consistent spark for smoother idling and better acceleration.", specs: [{name: 'Material', value: 'Iridium'}, {name: 'Quantity', value: '4'}], relatedProducts: [1, 4] },
  { id: 6, name: 'Drilled & Slotted Rotors', price: 39999, category: 'Brakes', make: 'Chevrolet', model: 'Corvette', status: 'none', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'brake disc', description: "Cooler brakes mean better performance. These drilled and slotted rotors dissipate heat more effectively, reducing brake fade during aggressive driving and providing a firm pedal feel.", specs: [{name: 'Type', value: 'Drilled & Slotted'}, {name: 'Position', value: 'Front Pair'}], relatedProducts: [2] },
  { id: 7, name: 'Performance Coilover Kit', price: 125000, category: 'Suspension', make: 'Honda', model: 'Civic Type R', status: 'popular', discount: 10, image: 'https://placehold.co/600x400.png', aiHint: 'car suspension', description: "Take control of your car's handling. This fully adjustable coilover kit allows you to dial in the perfect ride height and damping for the street or the track.", specs: [{name: 'Adjustability', value: '32-way Damping'}, {name: 'Spring Rate', value: '8k/6k'}], relatedProducts: [3, 10] },
  { id: 8, name: 'LED Headlight Conversion Kit', price: 14999, category: 'Lighting', make: 'All', model: 'All', status: 'none', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'car headlight', description: "See and be seen. This plug-and-play LED headlight kit provides a brilliant, white light that dramatically improves nighttime visibility and gives your car a modern look.", specs: [{name: 'Color Temp', value: '6000K'}, {name: 'Lumens', value: '12,000'}], relatedProducts: [11] },
  { id: 9, name: 'Turbocharger Upgrade Kit', price: 250000, category: 'Engine', make: 'Subaru', model: 'WRX STI', status: 'outOfStock', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'turbocharger', description: "Ready for serious power? This complete turbocharger upgrade kit includes everything you need to significantly boost your engine's horsepower and torque. Professional installation recommended.", specs: [{name: 'Compressor', value: 'Garrett GT3076R'}, {name: 'Includes', value: 'All gaskets & lines'}], relatedProducts: [1, 12] },
  { id: 10, name: 'Racing Seat', price: 59900, category: 'Interior', make: 'All', model: 'All', status: 'none', discount: 20, image: 'https://placehold.co/600x400.png', aiHint: 'racing seat', description: "Stay planted in the corners. This lightweight racing seat offers exceptional support and safety for track days, while still being comfortable enough for daily driving.", specs: [{name: 'Material', value: 'Fiberglass'}, {name: 'Harness', value: '5-point compatible'}], relatedProducts: [7] },
  { id: 11, name: 'Carbon Fiber Hood', price: 89999, category: 'Body', make: 'Nissan', model: 'GT-R', status: 'new', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'car hood', description: "Reduce weight and add aggressive styling with this high-quality carbon fiber hood. Features a UV-resistant clear coat for a long-lasting, glossy finish.", specs: [{name: 'Material', value: 'Carbon Fiber'}, {name: 'Weave', value: '2x2 Twill'}], relatedProducts: [8, 12] },
  { id: 12, name: 'Cat-Back Exhaust System', price: 150000, category: 'Exhaust', make: 'Porsche', model: '911', status: 'popular', discount: 0, image: 'https://placehold.co/600x400.png', aiHint: 'exhaust pipe', description: "Unleash your engine's true sound. This stainless steel cat-back exhaust system provides a deep, aggressive tone, improved exhaust flow, and a noticeable horsepower gain.", specs: [{name: 'Material', value: 'T304 Stainless Steel'}, {name: 'Tip Diameter', value: '4 inches'}], relatedProducts: [9] },
];

export const featuredProducts = products.filter(p => p.status === 'popular' || p.status === 'new').slice(0, 4);

export const teamMembers = [
    { id: 1, name: 'John "Sparky" Doe', role: 'Founder & Master Technician', image: 'https://placehold.co/400x500.png', aiHint: 'male portrait' },
    { id: 2, name: 'Jane "Gearhead" Smith', role: 'Performance Tuning Specialist', image: 'https://placehold.co/400x500.png', aiHint: 'female portrait' },
    { id: 3, name: 'Mike "Rims" Johnson', role: 'Wheel & Tire Expert', image: 'https://placehold.co/400x500.png', aiHint: 'male mechanic' },
    { id: 4, name: 'Sarah "Circuit" Williams', role: 'Customer Service Manager', image: 'https://placehold.co/400x500.png', aiHint: 'female professional' },
]

export const pricingTiers = [
    { name: 'Enthusiast', price: 'Standard', features: ['OEM & Quality Aftermarket Parts', 'Standard Warranty', 'Access to Community Forum'], cta: 'Shop Now' },
    { name: 'Pro-Tuner', price: 'Premium', features: ['Performance & Racing-Grade Parts', 'Extended Warranty', 'Priority Support', 'Exclusive Deals'], cta: 'Go Pro' },
    { name: 'Race Team', price: 'Custom', features: ['Bulk & Wholesale Pricing', 'Dedicated Account Manager', 'Custom Part Sourcing', 'Sponsorship Opportunities'], cta: 'Contact Sales' }
]

export const carMakes = ['All', 'BMW', 'Audi', 'Ford', 'Chevrolet', 'Honda', 'Subaru', 'Nissan', 'Porsche'];
export const carModels = {
    All: ['All'],
    BMW: ['All', 'M3', 'M4', 'X5'],
    Audi: ['All', 'S4', 'RS6', 'Q7'],
    Ford: ['All', 'Mustang', 'Focus RS', 'F-150'],
    Chevrolet: ['All', 'Corvette', 'Camaro', 'Silverado'],
    Honda: ['All', 'Civic Type R', 'S2000', 'NSX'],
    Subaru: ['All', 'WRX STI', 'BRZ', 'Outback'],
    Nissan: ['All', 'GT-R', '370Z', 'Titan'],
    Porsche: ['All', '911', 'Cayman', 'Macan']
};
export const productCategories = ['All', 'Engine', 'Brakes', 'Tires', 'Suspension', 'Lighting', 'Interior', 'Body', 'Exhaust'];

export const testimonials = [
  { id: 1, name: 'Alex Mwangi', vehicle: 'Subaru WRX STI', quote: "The performance tune I got from AutoSpark completely transformed my car. The team is incredibly knowledgeable and passionate. Highly recommended!", rating: 5, image: 'https://placehold.co/100x100.png', aiHint: 'happy man' },
  { id: 2, name: 'Brenda Chepkoech', vehicle: 'BMW M3', quote: "Found the exact brake pads I was looking for, and at a great price. The website is easy to use and shipping was fast. Will be back for more parts!", rating: 5, image: 'https://placehold.co/100x100.png', aiHint: 'smiling woman' },
  { id: 3, name: 'David Ochieng', vehicle: 'Ford Mustang', quote: "The customer service is top-notch. They helped me pick the right exhaust system and the installation was flawless. My Mustang sounds amazing now!", rating: 5, image: 'https://placehold.co/100x100.png', aiHint: 'man with car' },
  { id: 4, name: 'Fatuma Ali', vehicle: 'Audi S4', quote: "I love the new coilovers. The ride is firm but comfortable, and the car handles like it's on rails. Thanks to the AutoSpark team for the great advice.", rating: 4, image: 'https://placehold.co/100x100.png', aiHint: 'woman driver' },
  { id: 5, name: 'Peter Kamau', vehicle: 'Nissan GT-R', quote: "Finally got my hands on a carbon fiber hood. The quality is excellent and it looks stunning on the car. A bit pricey, but worth it for the look and weight savings.", rating: 4, image: 'https://placehold.co/100x100.png', aiHint: 'man leaning car' },
];

export const logos = [
  { src: LogoIpsum1Icon, alt: 'LogoIpsum 1' },
  { src: LogoIpsum2Icon, alt: 'LogoIpsum 2' },
  { src: LogoIpsum3Icon, alt: 'LogoIpsum 3' },
  { src: LogoIpsum4Icon, alt: 'LogoIpsum 4' },
  { src: LogoIpsum5Icon, alt: 'LogoIpsum 5' },
  { src: LogoIpsum6Icon, alt: 'LogoIpsum 6' },
];