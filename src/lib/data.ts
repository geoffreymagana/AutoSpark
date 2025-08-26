import { Filter, Cog, PaintBucket } from 'lucide-react';
import EngineIcon from '@/components/icons/engine-icon';
import TireIcon from '@/components/icons/tire-icon';
import BrakeIcon from '@/components/icons/brake-icon';
import TransmissionIcon from '@/components/icons/transmission-icon';
import BatteryIcon from '@/components/icons/battery-icon';
import TurboIcon from '@/components/icons/turbo-cdn-icon';
import LogoIpsum1Icon from '@/components/icons/logoipsum-1-icon';
import LogoIpsum2Icon from '@/components/icons/logoipsum-2-icon';
import LogoIpsum3Icon from '@/components/icons/logoipsum-3-icon';
import LogoIpsum4Icon from '@/components/icons/logoipsum-4-icon';
import LogoIpsum5Icon from '@/components/icons/logoipsum-5-icon';
import LogoIpsum6Icon from '@/components/icons/logoipsum-6-icon';

export const services = [
  { id: 1, name: 'Engine Overhaul', description: 'Complete motorcycle engine diagnostics, repair, and rebuilding services for optimal performance.', icon: EngineIcon },
  { id: 2, name: 'Brake Systems', description: 'Expert servicing of motorcycle brake systems, from pads to master cylinders and ABS maintenance.', icon: BrakeIcon },
  { id: 3, name: 'Chain & Sprocket', description: 'Professional chain maintenance, adjustment, and replacement services for smooth power delivery.', icon: TireIcon },
  { id: 4, name: 'Transmission Service', description: 'Comprehensive motorcycle transmission repair and maintenance for seamless gear shifts.', icon: TransmissionIcon },
  { id: 5, name: 'Regular Maintenance', description: 'Scheduled maintenance including oil changes, filter replacements, and general inspections.', icon: Filter },
  { id: 6, name: 'Electrical Systems', description: 'Diagnosis and repair of motorcycle electrical systems, including battery and charging issues.', icon: BatteryIcon },
  { id: 7, name: 'Performance Tuning', description: 'Professional ECU mapping and performance modifications for maximum power output.', icon: TurboIcon },
  { id: 8, name: 'Suspension Setup', description: 'Custom suspension tuning and upgrades for better handling and ride comfort.', icon: Cog },
  { id: 9, name: 'Dyno Tuning', description: 'Precision power measurement and tuning using our state-of-the-art motorcycle dynamometer.', icon: TurboIcon },
  { id: 10, name: 'Track Preparation', description: 'Complete race prep service including safety checks, setup adjustments, and tech inspection.', icon: Cog },
  { id: 11, name: 'Custom Paint & Graphics', description: 'Professional paint jobs and custom graphics application to make your bike unique.', icon: PaintBucket },
  { id: 12, name: 'Wheel Building', description: 'Custom wheel building and truing services for both street and race applications.', icon: TireIcon },
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
  { id: 1, name: 'K&N High-Flow Air Filter', price: 4999, category: 'Engine', make: 'Honda', model: 'CBR1000RR', status: 'new', discount: 0, image: '/images/products/K&N High-Flow Air Filter.webp', aiHint: 'motorcycle air filter', description: "Maximize your bike's breathing with this high-performance air filter. Engineered for superior airflow and filtration, providing instant throttle response and increased horsepower.", specs: [{name: 'Material', value: 'Cotton Gauze'}, {name: 'Washable', value: 'Yes'}], relatedProducts: [5, 9] },
  { id: 2, name: 'Brembo Racing Brake Pads', price: 8999, category: 'Brakes', make: 'Yamaha', model: 'R1', status: 'popular', discount: 15, image: '/images/products/Brembo Racing Brake Pads.webp', aiHint: 'motorcycle brake pads', description: "Premium brake pads designed for high-performance motorcycles. Features excellent initial bite, consistent feel, and superior fade resistance for both street and track use.", specs: [{name: 'Compound', value: 'Racing'}, {name: 'Position', value: 'Front'}], relatedProducts: [6] },
  { id: 3, name: 'Michelin Road 6 Tires', price: 24999, category: 'Tires', make: 'All', model: 'All', status: 'popular', discount: 0, image: '/images/products/Michelin Road 6 Tires.webp', aiHint: 'motorcycle tire', description: "The ultimate sport-touring tire with exceptional wet grip and longevity. Features Michelin's latest 2CT+ dual-compound technology for the perfect balance of grip and durability.", specs: [{name: 'Type', value: 'Sport Touring'}, {name: 'Size Front', value: '120/70 ZR17'}, {name: 'Size Rear', value: '180/55 ZR17'}], relatedProducts: [7] },
  { id: 4, name: 'Motul 7100 4T Oil', price: 4550, category: 'Engine', make: 'All', model: 'All', status: 'none', discount: 0, image: '/images/products/Motul 7100 4T Oil.webp', aiHint: 'motorcycle oil', description: "100% synthetic motorcycle-specific oil designed for high-performance 4-stroke engines. Provides superior protection for your gearbox and wet clutch.", specs: [{name: 'Viscosity', value: '10W-40'}, {name: 'Size', value: '4 Litre'}, {name: 'JASO', value: 'MA2'}], relatedProducts: [1, 5] },
  { id: 5, name: 'NGK Laser Iridium Plugs', price: 2500, category: 'Engine', make: 'All', model: 'All', status: 'new', discount: 0, image: '/images/products/NGK Laser Iridium Plugs.webp', aiHint: 'spark plug', description: "Premium iridium spark plugs engineered for high-performance motorcycles. Offers better throttle response, improved fuel efficiency, and reliable starts in all conditions.", specs: [{name: 'Material', value: 'Iridium'}, {name: 'Gap', value: '0.8mm'}, {name: 'Thread', value: '10mm'}], relatedProducts: [1, 4] },
  { id: 6, name: 'EBC Wave Rotors', price: 39999, category: 'Brakes', make: 'Honda', model: 'CBR1000RR', status: 'none', discount: 0, image: '/images/products/EBC Wave Rotors.webp', aiHint: 'motorcycle rotor', description: "High-performance wave design brake rotors that provide superior stopping power and heat dissipation. The unique wave pattern helps clear water and debris while reducing unsprung weight.", specs: [{name: 'Design', value: 'Wave'}, {name: 'Position', value: 'Front Set'}, {name: 'Material', value: 'Stainless Steel'}], relatedProducts: [2] },
  { id: 7, name: 'Öhlins Racing Shocks', price: 125000, category: 'Suspension', make: 'Yamaha', model: 'R1', status: 'popular', discount: 10, image: '/images/products/Öhlins Racing Shocks.webp', aiHint: 'motorcycle suspension', description: "Professional-grade rear shock absorbers from the leaders in motorcycle suspension. Fully adjustable compression and rebound damping for the perfect setup on road or track.", specs: [{name: 'Adjustability', value: 'Compression & Rebound'}, {name: 'Length', value: 'Standard'}, {name: 'Spring Rate', value: 'Progressive'}], relatedProducts: [3, 10] },
  { id: 8, name: 'LED DRL Headlight', price: 14999, category: 'Lighting', make: 'All', model: 'All', status: 'none', discount: 0, image: '/images/products/LED DRL Headlight.webp', aiHint: 'motorcycle headlight', description: "Modern LED headlight with integrated daytime running lights. Plug-and-play installation provides superior visibility and a distinctive look that helps you stand out.", specs: [{name: 'Color Temp', value: '6000K'}, {name: 'Lumens', value: '4,000'}, {name: 'DOT Approved', value: 'Yes'}], relatedProducts: [11] },
  { id: 9, name: 'Power Commander V', price: 45000, category: 'Engine', make: 'Kawasaki', model: 'Ninja ZX-10R', status: 'outOfStock', discount: 0, image: '/images/products/Power Commander V.webp', aiHint: 'motorcycle ecu', description: "Advanced fuel management system for precise control over your bike's fuel injection. Includes pre-loaded maps and allows custom tuning for maximum performance.", specs: [{name: 'Compatibility', value: '2020-2023'}, {name: 'Features', value: 'Autotune Ready'}, {name: 'Software', value: 'Included'}], relatedProducts: [1, 12] },
  { id: 10, name: 'Carbon Fiber Fairings', price: 89999, category: 'Body', make: 'BMW', model: 'S1000RR', status: 'new', discount: 0, image: '/images/products/Carbon Fiber Fairings.webp', aiHint: 'motorcycle fairing', description: "Full set of high-quality carbon fiber fairings. Precision-engineered for perfect fitment, featuring UV-resistant clear coat and race-inspired design.", specs: [{name: 'Material', value: 'Carbon Fiber'}, {name: 'Weave', value: '2x2 Twill'}, {name: 'Pieces', value: 'Complete Set'}], relatedProducts: [8, 12] },
  { id: 11, name: 'Akrapovič Full System', price: 150000, category: 'Exhaust', make: 'Ducati', model: 'Panigale V4', status: 'popular', discount: 0, image: '/images/products/Akrapovič Full System.webp', aiHint: 'motorcycle exhaust', description: "Complete titanium exhaust system from headers to tip. Delivers significant weight reduction and power gains with that signature Akrapovič sound.", specs: [{name: 'Material', value: 'Titanium'}, {name: 'Weight Saving', value: '5.2 kg'}, {name: 'Power Gain', value: '+7.2 HP'}], relatedProducts: [9] },
  { id: 12, name: 'AGV Pista GP RR', price: 175000, category: 'Protection', make: 'All', model: 'All', status: 'popular', discount: 0, image: '/images/products/AGV Pista GP RR.webp', aiHint: 'motorcycle helmet', description: "Top-of-the-line racing helmet with premium features including hydration system and MotoGP-derived aerodynamics.", specs: [{name: 'Shell', value: 'Carbon Fiber'}, {name: 'Weight', value: '1,450g'}, {name: 'Certification', value: 'ECE 22.06'}], relatedProducts: [13, 14] },
  { id: 13, name: 'Alpinestars Tech-Air Race Vest', price: 89999, category: 'Protection', make: 'All', model: 'All', status: 'new', discount: 0, image: '/images/products/Alpinestars Tech-Air Race Vest.webp', aiHint: 'motorcycle airbag vest', description: "Advanced airbag protection system designed specifically for track use. Provides comprehensive upper body protection with sophisticated crash detection.", specs: [{name: 'Protection', value: 'Shoulders, Chest, Back'}, {name: 'Battery Life', value: '25 Hours'}, {name: 'Deployment Time', value: '20-40ms'}], relatedProducts: [14, 15] },
  { id: 14, name: 'Kevlar Riding Jeans', price: 15999, category: 'Protection', make: 'All', model: 'All', status: 'none', discount: 10, image: '/images/products/Kevlar Riding Jeans.webp', aiHint: 'motorcycle jeans', description: "Stylish riding jeans with full Kevlar lining and removable CE armor. Look great on and off the bike while maintaining serious protection.", specs: [{name: 'Material', value: 'Denim & Kevlar'}, {name: 'Armor', value: 'CE Level 2'}, {name: 'Style', value: 'Straight Cut'}], relatedProducts: [13, 15] },
  { id: 15, name: 'Quickshifter Pro', price: 29999, category: 'Controls', make: 'BMW', model: 'S1000RR', status: 'new', discount: 0, image: '/images/products/Quickshifter Pro.webp', aiHint: 'quickshifter', description: "Professional-grade quickshifter allowing seamless up and down shifts without clutch input. Perfect for track days and street performance.", specs: [{name: 'Type', value: 'Bi-Directional'}, {name: 'Compatibility', value: '2020+'}, {name: 'Mode', value: 'Race/Street'}], relatedProducts: [9, 17] },
  { id: 16, name: 'Rearsets Kit', price: 45000, category: 'Controls', make: 'Yamaha', model: 'R1', status: 'none', discount: 0, image: '/images/products/Rearsets Kit.webp', aiHint: 'motorcycle rearsets', description: "Fully adjustable racing rearsets crafted from lightweight aluminum. Multiple mounting positions for the perfect riding position.", specs: [{name: 'Material', value: '7075 Aluminum'}, {name: 'Adjustability', value: '8-Position'}, {name: 'Weight', value: '680g/side'}], relatedProducts: [16, 18] },
  { id: 17, name: 'Racing Levers Set', price: 12999, category: 'Controls', make: 'All', model: 'All', status: 'popular', discount: 15, image: '/images/products/Racing Levers Set.webp', aiHint: 'motorcycle levers', description: "CNC-machined adjustable brake and clutch levers with multiple length settings. Features break-away design for crash protection.", specs: [{name: 'Material', value: '6061 Aluminum'}, {name: 'Adjustability', value: '6-Position'}, {name: 'Finish', value: 'Anodized'}], relatedProducts: [16, 17] },
  { id: 18, name: 'Tank Grips', price: 4999, category: 'Protection', make: 'All', model: 'All', status: 'none', discount: 0, image: '/images/products/Tank Grips.webp', aiHint: 'motorcycle tank grips', description: "High-quality tank grip pads providing maximum control and tank protection. Made from durable material that won't damage your paint.", specs: [{name: 'Material', value: 'Synthetic Rubber'}, {name: 'Pattern', value: 'Snake Skin'}, {name: 'Color', value: 'Black'}], relatedProducts: [13, 20] },
  { id: 19, name: 'Radiator Guard', price: 8999, category: 'Protection', make: 'Kawasaki', model: 'Ninja ZX-10R', status: 'new', discount: 0, image: '/images/products/Radiator Guard.webp', aiHint: 'radiator guard', description: "Precision-cut radiator protection guard. Prevents damage from debris while maintaining optimal airflow for cooling.", specs: [{name: 'Material', value: 'Stainless Steel'}, {name: 'Design', value: 'Hexagonal Mesh'}, {name: 'Installation', value: 'Bolt-On'}], relatedProducts: [19, 13] }
];

export const featuredProducts = products.filter(p => p.status === 'popular' || p.status === 'new').slice(0, 4);

export const teamMembers = [
    { id: 1, name: 'John "Turbo" Doe', role: 'Founder & Master Bike Builder', image: '/images/team/John Doe.png', aiHint: 'male portrait' },
    { id: 2, name: 'Jane "Fast Lane" Smith', role: 'Race Engine Specialist', image: '/images/team/Jane Smith.png', aiHint: 'female portrait' },
    { id: 3, name: 'Mike "Apex" Johnson', role: 'Suspension & Handling Expert', image: '/images/team/Mike Rims.png', aiHint: 'male mechanic' },
    { id: 4, name: 'Sarah "Sprocket" Williams', role: 'Customer Experience Manager', image: '/images/team/Sarah Sprocket Williams.png', aiHint: 'female professional' },
]

export const pricingTiers = [
    { name: 'Street Rider', price: 'Standard', features: ['OEM & Quality Aftermarket Parts', 'Standard Warranty', 'Access to Riders Community'], cta: 'Shop Now' },
    { name: 'Track Day Pro', price: 'Premium', features: ['Race-Spec Components', 'Extended Warranty', 'Priority Technical Support', 'Track Day Discounts'], cta: 'Go Pro' },
    { name: 'Racing Team', price: 'Custom', features: ['Professional Racing Parts', 'Dedicated Technical Support', 'Custom Race Kit Building', 'Team Sponsorship Options'], cta: 'Contact Sales' }
]

export const bikeMakes = ['All', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'BMW', 'Ducati', 'KTM', 'Triumph'];
export const bikeModels = {
    All: ['All'],
    Honda: ['All', 'CBR1000RR', 'CBR600RR', 'CB650R', 'Africa Twin'],
    Yamaha: ['All', 'R1', 'R6', 'MT-09', 'MT-07'],
    Kawasaki: ['All', 'Ninja ZX-10R', 'Ninja ZX-6R', 'Z900', 'Versys'],
    Suzuki: ['All', 'GSX-R1000', 'GSX-R750', 'V-Strom', 'Hayabusa'],
    BMW: ['All', 'S1000RR', 'R1250GS', 'F900R', 'M1000RR'],
    Ducati: ['All', 'Panigale V4', 'Monster', 'Multistrada', 'Streetfighter'],
    KTM: ['All', '1290 Super Duke', 'RC 390', '790 Duke', 'Adventure'],
    Triumph: ['All', 'Street Triple', 'Speed Triple', 'Tiger', 'Bonneville']
};
export const productCategories = ['All', 'Engine', 'Brakes', 'Tires', 'Suspension', 'Lighting', 'Chain & Sprocket', 'Bodywork', 'Exhaust', 'Protection', 'Controls', 'Accessories', 'Electronics'];

export const testimonials = [
  { id: 1, name: 'Alex Mwangi', vehicle: 'BMW S1000RR', quote: "The Power Commander tune transformed my bike's performance. The team really knows their stuff when it comes to sport bikes. Highly recommended!", rating: 5, image: '/images/team/bmw-logo-2020-gray-download.png', aiHint: 'happy man' },
  { id: 2, name: 'Brenda Chepkoech', vehicle: 'Yamaha R1', quote: "Found the perfect Öhlins suspension setup for my R1. The website made it easy to find exactly what I needed, and shipping was super fast!", rating: 5, image: '/images/team/toyota-logo-2020-europe-download.png', aiHint: 'smiling woman' },
  { id: 3, name: 'David Ochieng', vehicle: 'Ducati Panigale V4', quote: "The Akrapovič exhaust system is amazing! The team helped me choose the perfect setup and the sound is incredible. My Panigale has never felt better!", rating: 5, image: '/images/team/porsche.png', aiHint: 'man with bike' },
  { id: 4, name: 'Fatuma Ali', vehicle: 'Kawasaki Ninja ZX-6R', quote: "The new brake setup has given me so much more confidence in the corners. The team's advice was spot-on for what I needed.", rating: 4, image: '/images/team/nissan-logo-2020-black.png', aiHint: 'woman rider' },
  { id: 5, name: 'Peter Kamau', vehicle: 'KTM 1290 Super Duke', quote: "The carbon fiber fairings are top quality and the fitment is perfect. Definitely worth the investment for both looks and performance.", rating: 4, image: '/images/team/subaru-logo-2019-download.png', aiHint: 'man with motorcycle' },
];

export const logos = [
  { src: LogoIpsum1Icon, alt: 'LogoIpsum 1' },
  { src: LogoIpsum2Icon, alt: 'LogoIpsum 2' },
  { src: LogoIpsum3Icon, alt: 'LogoIpsum 3' },
  { src: LogoIpsum4Icon, alt: 'LogoIpsum 4' },
  { src: LogoIpsum5Icon, alt: 'LogoIpsum 5' },
  { src: LogoIpsum6Icon, alt: 'LogoIpsum 6' },
];
