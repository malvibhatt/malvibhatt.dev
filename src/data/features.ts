import siteMapOverview from '../assets/features/overview-site-map.png';
import siteMapDetailed from '../assets/features/detailed-site-map.png';

export type Challenge = {
  title: string;
  description: string;
};

export type Feature = {
  id: string;
  title: string;
  project: string;
  company: string;
  tech: string[];
  problem: string;
  challenges: Challenge[];
  solution: string;
  solutionPoints: string[];
  screenshots?: string[];         // optional — add when available
  screenshotDisclaimer?: string;  // shown below screenshots when set
  impactUrl?: string;
  impactLabel?: string;
};

export const features: Feature[] = [
  {
    id: 'site-map',
    title: 'Real-Time Site Map',
    project: 'Fleet Management Platform',
    company: 'Siemens',
    tech: ['Angular', 'MapTiler', 'GeoJSON', 'QGIS', 'TypeScript', 'WebSockets'],
    problem:
      'Fleet operators had no single view of their depot\'s charging status. Critical data — which chargers were in use, faulted, or available; what state of charge each vehicle was at; which vehicle was connected to which charger in which parking spot — was scattered across multiple systems. Operators had to manually cross-reference data from different screens, making it slow and error-prone to respond to charging issues in real time.',
    challenges: [
      {
        title: 'Custom map layers, not just markers',
        description:
          'This wasn\'t a simple "drop a pin on a map" task. Charging stations, vehicles, and parking spots each needed custom GeoJSON polygon and icon layers with precise positioning.',
      },
      {
        title: 'Scaling & rotation on zoom',
        description:
          'Every entity had to scale correctly as users zoomed in/out, and parking spots weren\'t always aligned horizontally — they required arbitrary rotation angles to match the real-world depot layout.',
      },
      {
        title: 'Real-time style updates without re-rendering',
        description:
          'Charger status, vehicle state of charge, and power values update live via WebSockets. The map source had to be patched in place — a full re-render would have caused visible flicker and performance issues.',
      },
      {
        title: 'Library evaluation & GeoJSON authoring',
        description:
          'Multiple mapping SDKs were evaluated. MapTiler was chosen for pricing, Angular compatibility, and GeoJSON support. QGIS (a desktop GIS tool) was used to author the site GeoJSON because MapTiler\'s built-in editor had limitations for complex shapes.',
      },
    ],
    solution:
      'Designed a layered map architecture using the MapTiler SDK, where each visual concern is a separate, independently updateable layer. Live data patches the map source directly without re-rendering — keeping the UI smooth and real-time.',
    solutionPoints: [
      'Polygon layers for parking spots, icon layers for chargers & vehicles, point layers for text labels',
      'A simplified zoom-out layer for site overview at low zoom levels',
      'Real-time charging progress (state of charge, power values) rendered as live overlays',
      'Click any parking spot → a side panel slides in with full charger & vehicle details',
      'Animated zone transitions when zooming between different areas of the site',
    ],
    screenshots: [siteMapOverview, siteMapDetailed],
    screenshotDisclaimer: 'Screenshots are recreated locally with dummy data for reference purposes only and do not represent actual production data.',
    impactUrl: 'http://linkedin.com/feed/update/urn:li:ugcPost:7363844747385364480/',
    impactLabel: 'See customer recognition on LinkedIn',
  },
];
