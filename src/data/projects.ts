import grubbrr from '../assets/project screenshots/grubbrr.png';
import clickEat1 from '../assets/project screenshots/click-eat1.png';
import clickEat2 from '../assets/project screenshots/click-eat2.png';
import clickEat3 from '../assets/project screenshots/click-eat3.png';
import clickEat4 from '../assets/project screenshots/click-eat4.png';
import clickEat5 from '../assets/project screenshots/click-eat5.png';
import clickEat6 from '../assets/project screenshots/click-eat6.png';
import ems from '../assets/project screenshots/EMS.jpg';
import wellness from '../assets/project screenshots/wellness.png';
import motive81 from '../assets/project screenshots/motive81.png';
import motive82 from '../assets/project screenshots/motive82.png';
import motive83 from '../assets/project screenshots/motive83.png';
import motive84 from '../assets/project screenshots/motive84.png';
import motive85 from '../assets/project screenshots/motive85.png';
import itsmycab from '../assets/project screenshots/itsmycab1.jpg';

export type Sector = 'All' | 'Food & Hospitality' | 'Industrial IoT' | 'HealthTech' | 'Mobility';

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sector: Exclude<Sector, 'All'>;
  tech: string[];
  screenshots: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'grubber',
    name: 'Grubber',
    tagline: 'Kiosk Software System for Restaurants',
    description:
      'A self-service kiosk application for food ordering in restaurants. Eliminates long lines, frees up staff time, and delivers a fully custom-designed ordering experience on GRUBBRR kiosk hardware.',
    sector: 'Food & Hospitality',
    tech: ['Angular', 'TypeScript', 'WebSQL', 'SCSS'],
    screenshots: [grubbrr],
    liveUrl: "https://grubbrr.com/products/self-ordering-kiosk-machine/"
  },
  {
    id: 'click-eat',
    name: 'Click-Eat',
    tagline: 'Online Food Ordering & Table Booking',
    description:
      'A multi-role restaurant platform for owners, customers, sales teams, and business managers. Customers can search restaurants by cuisine, order for delivery or pick-up, and book a table via an interactive seating chart designed by the restaurant itself.',
    sector: 'Food & Hospitality',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Express', 'GoJS'],
    screenshots: [clickEat1, clickEat2, clickEat3, clickEat4, clickEat5, clickEat6],
    liveUrl: 'https://www.click-eat.co.uk/',
  },
  {
    id: 'ems',
    name: 'EMS',
    tagline: 'Environmental Monitoring System',
    description:
      'An IoT application for real-time monitoring of environmental parameters — temperature, humidity, grain, and pressure — collected live from distributed sensors. Users can view live trend charts and download historical reports in multiple formats.',
    sector: 'Industrial IoT',
    tech: ['Angular', 'TypeScript', 'CanvasJS', 'WebSockets'],
    screenshots: [ems],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    tagline: 'Fitness Tracking Application',
    description:
      'A cross-platform health tracking app for web and mobile. Users can set fitness goals, manage events, and sync data from third-party platforms like Google Fit and Fitbit — giving them a unified view of their health activity.',
    sector: 'HealthTech',
    tech: ['Ionic', 'TypeScript', 'Fitbit API'],
    screenshots: [wellness],
  },
  {
    id: 'motive8',
    name: 'Motive8',
    tagline: 'Gym Induction Management System',
    description:
      'A booking and management platform for gym inductions across multiple locations. Three role types — Admin, Trainer, and Customer. Customers can book sessions and make payments; cancellations trigger automatic refunds via Stripe.',
    sector: 'HealthTech',
    tech: ['Angular', 'TypeScript', 'Stripe'],
    screenshots: [motive81, motive82, motive83, motive84, motive85],
    liveUrl: 'https://bookings.m8group.co.uk/',
  },
  {
    id: 'itsmycab',
    name: 'ItsMyСab',
    tagline: 'Operator Panel for Car Rental Services',
    description:
      'A comprehensive operator dashboard for car rental management. Covers inventory (cabs, drivers, garages), bookings, dynamic rate management, and a visual booking calendar. Integrates Google Maps for city-wise area visualization and custom map overlays.',
    sector: 'Mobility',
    tech: ['AngularJS', 'PHP Laravel', 'Google Maps API'],
    screenshots: [itsmycab],
  },
];

export const sectors: Sector[] = ['All', 'Food & Hospitality', 'Industrial IoT', 'HealthTech', 'Mobility'];

export const sectorMeta: Record<Exclude<Sector, 'All'>, { color: string; bg: string; border: string; dot: string }> = {
  'Food & Hospitality':    { color: 'text-orange-300', bg: 'bg-orange-950/50',  border: 'border-orange-500/20', dot: 'bg-orange-400' },
  'Industrial IoT':  { color: 'text-green-300',  bg: 'bg-green-950/50',   border: 'border-green-500/20',  dot: 'bg-green-400'  },
  'HealthTech':   { color: 'text-purple-300', bg: 'bg-purple-950/50',  border: 'border-purple-500/20', dot: 'bg-purple-400' },
  'Mobility':     { color: 'text-blue-300',   bg: 'bg-blue-950/50',    border: 'border-blue-500/20',   dot: 'bg-blue-400'   },
};
