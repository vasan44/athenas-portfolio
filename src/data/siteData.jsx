export const NAV_LINKS = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'clients',   label: 'Clients' },
  { id: 'services',  label: 'Services' },
  { id: 'why',       label: 'Why Us' },
  { id: 'products',  label: 'Products' },
  { id: 'workflow',  label: 'How We Work' },
  { id: 'forms',     label: 'Compliance' },
  { id: 'contact',   label: 'Contact' },
];

export const CONTACTS = [
  { role: 'Manager', number: '9080654027' },
  { role: 'Admin', number: '7904991980' },
];

import { Users, ShieldCheck, Award, Briefcase } from 'lucide-react';

export const STATS = [
  { value: 250, suffix: '+', label: 'Clients Served', icon: Users },
  { value: 100, suffix: '%', label: 'Compliance Rate', icon: ShieldCheck },
  { value: 10, suffix: '+', label: 'Years Experience', icon: Award },
  { value: 1000, suffix: '+', label: 'Employees Managed', icon: Briefcase },
];

export const CLIENT_LOGOS = [
  { name: 'Ashok Leyland', logo: '/clients/ashok-leyland.png' },
  { name: 'CapitaLand', logo: '/clients/capitaland.png' },
  { name: 'Frobin', logo: '/clients/frobin.png' },
  { name: 'GHCL', logo: '/clients/ghcl.png' },
  { name: 'HEPL', logo: '/clients/hepl.png' },
  { name: 'Hinduja Renewables', logo: '/clients/hinduja-renewables.png' },
  { name: 'L&S', logo: '/clients/ls.png' },
  { name: 'Prozeal', logo: '/clients/prozeal.png' },
  { name: 'Thiagarajar Mills', logo: '/clients/thiagarajar-mills.png' },
  { name: 'Torrent Power', logo: '/clients/torrent-power.png' },
];

export const INDUSTRY_SOLUTIONS = [
  {
    label: 'Manufacturing',
    title: 'Manufacturing & Production',
    desc: 'Shift-based attendance, contract labour compliance, and multi-plant payroll managed precisely.',
    icon: '🏭',
    image: '/images/about-office.webp',
  },
  {
    label: 'Energy',
    title: 'Power & Renewables',
    desc: 'Site-level workforce tracking, statutory filings, and EPF/ESI compliance for field teams.',
    icon: '⚡',
    image: '/images/about-office.webp',
  },
  {
    label: 'Textiles',
    title: 'Textiles & Apparel',
    desc: 'Labour law compliance, wage register management, and seasonal workforce administration.',
    icon: '🧵',
    image: '/images/about-office.webp',
  },
  {
    label: 'Construction',
    title: 'Construction & Infrastructure',
    desc: 'Contract workforce management, BOCW compliance, and site attendance with GPS tracking.',
    icon: '🏗️',
    image: '/images/about-office.webp',
  },
];

export const SERVICES = [
  {
    num: '01',
    icon: '👥',
    title: 'HR Administration',
    items: [
      'Employee onboarding & lifecycle management',
      'Leave & attendance policy configuration',
      'HR documentation & record maintenance',
      'Exit formalities & full-and-final settlement',
    ],
  },
  {
    num: '02',
    icon: '📍',
    title: 'GPS Attendance Management',
    items: [
      'Location-based attendance tracking',
      'Real-time field employee monitoring',
      'Automated attendance reports',
      'Integration with payroll processing',
    ],
  },
  {
    num: '03',
    icon: '💰',
    title: 'Expense Management',
    items: [
      'Travel & field expense tracking',
      'Reimbursement workflow management',
      'Monthly expense reports',
      'Policy-based approval systems',
    ],
  },
  {
    num: '04',
    icon: '💼',
    title: 'Payroll Processing',
    items: [
      'Monthly salary computation',
      'Statutory deductions (EPF, ESI, PT)',
      'Payslip generation & distribution',
      'Full-and-final settlement processing',
    ],
  },
  {
    num: '05',
    icon: '📋',
    title: 'Documentation & Registers',
    items: [
      'Statutory register maintenance',
      'Form A, B, C, D, E, F compliance',
      'Labour law documentation',
      'Audit-ready record keeping',
    ],
  },
  {
    num: '06',
    icon: '🧾',
    title: 'Invoice Management',
    items: [
      'Vendor invoice processing',
      'GST-compliant billing',
      'Payment tracking & reconciliation',
      'Monthly MIS reports',
    ],
  },
  {
    num: '07',
    icon: '🛡️',
    title: 'EPFO & ESIC Compliance',
    items: [
      'UAN registration & KYC updates',
      'Monthly ECR filing',
      'ESI contribution challan submission',
      'Inspection & audit support',
    ],
  },
];

export const FORMS = [
  { code: 'A', name: 'Muster Roll', desc: 'Daily attendance register maintained for every employee, recording presence, absence, and leave.' },
  { code: 'B', name: 'Wages Register', desc: 'Detailed record of wages paid to each employee, including overtime and deductions.' },
  { code: 'C', name: 'Overtime Register', desc: 'Register tracking overtime hours worked by employees beyond standard working hours.' },
  { code: 'D', name: 'Leave Register', desc: 'Record of leave availed, leave balance, and leave encashment for all employees.' },
  { code: 'E', name: 'Advances Register', desc: 'Register of salary advances and loans given to employees with repayment tracking.' },
  { code: 'F', name: 'Fines Register', desc: 'Statutory register recording any fines imposed on employees with justification.' },
  { code: 'I', name: 'Service Certificate', desc: 'Certificate issued to employees upon separation, confirming tenure and designation.' },
  { code: 'II', name: 'Employment Card', desc: 'Card issued to every employee with employment number, designation, and date of joining.' },
  { code: 'III', name: 'Wage Slip', desc: 'Monthly wage slip provided to every employee showing earnings and deductions.' },
  { code: 'IV', name: 'Register of Adult Workers', desc: 'Statutory register listing all adult workers with their personal and employment details.' },
  { code: 'V', name: 'Register of Young Persons', desc: 'Register maintained for workers below 18 years of age as per Factories Act.' },
  { code: 'VI', name: 'Notice of Period of Work', desc: 'Notice displaying work schedules, shifts, and rest intervals for all workers.' },
];

export const WHY_US = [
  { icon: '🎯', title: 'Compliance-First Approach', desc: 'Every process is built around statutory requirements — zero penalties across all client accounts.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Payroll processing, filings, and reports delivered on time, every month without exception.' },
  { icon: '🔒', title: 'Data Security', desc: 'Employee data handled with strict confidentiality and secure document management practices.' },
  { icon: '📊', title: 'Real-Time Visibility', desc: 'Live dashboards and monthly reports give management complete workforce visibility.' },
  { icon: '🤝', title: 'Dedicated Account Manager', desc: 'A single point of contact who understands your workforce and handles everything end-to-end.' },
  { icon: '🏆', title: '10+ Years Experience', desc: 'Deep expertise across manufacturing, energy, textiles, and construction industries.' },
];

export const PRODUCTS = [
  {
    id: 'ergon',
    tabLabel: 'ERGON APP',
    badge: 'FLAGSHIP PRODUCT',
    name: 'ERGON',
    tagline: 'SMART WORKFORCE & BUSINESS MANAGEMENT SOLUTION',
    desc: 'ERGON is an integrated platform designed to simplify workforce operations, improve productivity, and provide real-time business insights — all from one powerful app.',
    image: '/images/athena-ergon.jpeg',
    stats: [
      { value: '500+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '24/7', label: 'Support' },
    ],
    features: [
      { icon: '📍', label: 'GPS Attendance', desc: 'Real-time location-based tracking for field teams' },
      { icon: '💰', label: 'Payroll Engine', desc: 'Automated salary processing with statutory compliance' },
      { icon: '📊', label: 'Live Dashboard', desc: 'Real-time workforce analytics and insights' },
      { icon: '📋', label: 'Leave Management', desc: 'Policy-based leave tracking and approvals' },
    ],
    highlights: [
      { icon: '🔗', title: 'Seamless Integration', desc: 'Connects attendance, payroll, and compliance in one flow' },
      { icon: '📱', title: 'Mobile First', desc: 'Full functionality on Android and iOS devices' },
    ],
  },
  {
    id: 'aiagent',
    tabLabel: 'AI AGENT',
    badge: 'POWERED BY AI',
    name: 'AI AGENT',
    tagline: 'INTELLIGENT HR AUTOMATION',
    desc: 'Athena\'s AI Agent automates repetitive HR tasks, answers employee queries instantly, and surfaces compliance risks before they become penalties.',
    image: '/images/athena-ai-agent.jpeg',
    stats: [
      { value: '80%', label: 'Time Saved' },
      { value: '<1s', label: 'Response Time' },
      { value: '24/7', label: 'Availability' },
    ],
    features: [
      { icon: '🤖', label: 'Auto Responses', desc: 'Instant answers to employee HR queries' },
      { icon: '⚠️', label: 'Compliance Alerts', desc: 'Proactive risk detection and notifications' },
      { icon: '📄', label: 'Document Generation', desc: 'Auto-generate letters, forms, and reports' },
      { icon: '📈', label: 'Predictive Analytics', desc: 'Workforce trend analysis and forecasting' },
    ],
    pillars: [
      { icon: '🧠', label: 'Smart', desc: 'Learns from your workforce patterns' },
      { icon: '⚡', label: 'Fast', desc: 'Sub-second response to queries' },
      { icon: '🔒', label: 'Secure', desc: 'Enterprise-grade data protection' },
    ],
  },
  {
    id: 'platform',
    tabLabel: 'PLATFORM SUITE',
    badge: 'ENTERPRISE SUITE',
    name: 'PLATFORM SUITE',
    tagline: 'END-TO-END HR OPERATIONS PLATFORM',
    desc: 'The complete Athena Platform Suite brings together every HR, payroll, compliance, and analytics module into a single unified system for enterprise operations.',
    image: '/images/athena-platform.jpeg',
    stats: [
      { value: '12+', label: 'Modules' },
      { value: '100%', label: 'Compliance' },
      { value: 'API', label: 'Ready' },
    ],
    modules: [
      { icon: '👥', label: 'HR Core', desc: 'Employee records, org chart, lifecycle management' },
      { icon: '💰', label: 'Payroll', desc: 'Full payroll processing with statutory compliance' },
      { icon: '📍', label: 'Attendance', desc: 'GPS, biometric, and remote attendance tracking' },
      { icon: '🛡️', label: 'Compliance', desc: 'EPF, ESI, PT, and labour law management' },
      { icon: '📊', label: 'Analytics', desc: 'Workforce intelligence and custom reports' },
      { icon: '🧾', label: 'Finance', desc: 'Invoice, expense, and reimbursement management' },
    ],
  },
];

export const WORKFLOW_STEPS = [
  { num: '01', title: 'Data Collection', desc: 'Attendance, leave, and expense data collected from field teams via GPS-enabled mobile app.' },
  { num: '02', title: 'Processing', desc: 'Payroll computed with all applicable statutory deductions, OT, and variable components.' },
  { num: '03', title: 'Compliance Filing', desc: 'EPF, ESI, PT challans generated and filed on time every month without manual intervention.' },
  { num: '04', title: 'Reporting', desc: 'Monthly MIS, payslips, and statutory registers delivered to management and employees.' },
];

export const SERVICE_COVERAGE = [
  { icon: '📋', title: 'Statutory Registers', desc: 'All 12 statutory registers maintained as per Factories Act and Shops & Establishment Act.' },
  { icon: '🔄', title: 'Monthly Cycle', desc: 'Complete payroll-to-compliance cycle managed within monthly deadlines.' },
  { icon: '📞', title: 'Dedicated Support', desc: 'Single point of contact for all HR, payroll, and compliance queries.' },
  { icon: '🏛️', title: 'Govt. Liaison', desc: 'Representation and support during labour department inspections and audits.' },
];

export const FAQS = [
  {
    question: 'Can you handle both software and compliance work?',
    answer: 'Yes. The service model is designed around one accountable partner for software, automation, payroll, accounting, and statutory compliance.',
  },
  {
    question: 'Do you only work with large companies?',
    answer: 'No. The website is positioned for startups, SMEs, and established companies that need dependable operations support.',
  },
  {
    question: 'Do your platforms integrate with existing systems?',
    answer: 'Yes. Our platforms are built with API-first architecture and support integrations with common business systems including accounting software, HRMS, and third-party tools through REST APIs and webhooks.',
  },
  {
    question: 'What happens after the first consultation?',
    answer: 'The next step is usually discovery, scope definition, solution design, rollout, and ongoing support based on the client need.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    company: 'Operations Head, Torrent Power',
    text: 'Athena has completely transformed our HR operations. Zero compliance issues for 3 consecutive years.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'HR Director, Hinduja Renewables',
    text: 'The ERGON app gives us real-time visibility into our 2000+ field workforce. Exceptional service.',
    rating: 5,
  },
  {
    name: 'Anand Venkatesh',
    company: 'MD, Thiagarajar Mills',
    text: 'Payroll is always on time, statutory filings are accurate, and the team is extremely responsive.',
    rating: 5,
  },
];
