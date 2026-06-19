import { Building2, Clock, FileText, Users } from 'lucide-react';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'forms', label: 'Compliance' },
  { id: 'why', label: 'Why Us' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' },
];

export const STATS = [
  { icon: Users, value: '500+', label: 'Employees Managed' },
  { icon: Building2, value: '50+', label: 'Client Companies' },
  { icon: FileText, value: '12', label: 'Statutory Registers' },
  { icon: Clock, value: '100%', label: 'Compliance Rate' },
];

export const SERVICES = [
  {
    num: '01',
    title: 'HR Administration Services',
    icon: '🗂️',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    items: [
      'Employee records maintenance',
      'Leave and attendance management',
      'Employee data administration',
      'HR reporting and MIS preparation',
      'Employee lifecycle management',
    ],
  },
  {
    num: '02',
    title: 'GPS-Based Attendance Management',
    icon: '📍',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    items: [
      'GPS-enabled employee attendance tracking',
      'Daily attendance monitoring',
      'Location-based attendance verification',
      'Attendance report generation',
      'Monthly attendance reconciliation',
    ],
  },
  {
    num: '03',
    title: 'Employee Advance & Expense Management',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    items: [
      'Recording employee salary advances',
      'Advance settlement tracking',
      'Employee expense claim verification',
      'Reimbursement processing',
      'Monthly expense reporting',
      'Expense record maintenance',
    ],
  },
  {
    num: '04',
    title: 'Payroll Processing Services',
    icon: '💳',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    items: [
      'Monthly payroll processing',
      'Salary computation and verification',
      'Overtime calculation',
      'Payslip generation',
      'Payroll reports and salary registers',
      'Full and final settlement processing',
    ],
  },
  {
    num: '05',
    title: 'Mail & Documentation Management',
    icon: '📧',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80',
    items: [
      'Official email handling and correspondence',
      'Employee communication management',
      'Vendor and client communication support',
      'Document preparation and maintenance',
      'Record management and filing',
    ],
  },
  {
    num: '06',
    title: 'Quotation & Invoice Management',
    icon: '📄',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80',
    items: [
      'Preparation of quotations and proposals',
      'Raising invoices against approved Purchase Orders (PO)',
      'PO tracking and monitoring',
      'Invoice submission and follow-up',
      'Payment tracking and reporting',
      'Documentation and billing support',
    ],
  },
  {
    num: '07',
    title: 'EPFO & ESIC Statutory Compliance',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    groups: [
      {
        label: 'EPFO Compliance',
        items: [
          'Employee registration and UAN management',
          'Monthly ECR filing',
          'PF contribution processing',
          'PF transfer and withdrawal assistance',
          'EPFO portal support and compliance management',
        ],
      },
      {
        label: 'ESIC Compliance',
        items: [
          'Employee registration',
          'Monthly contribution filing',
          'ESIC benefit assistance',
          'Compliance reporting',
          'ESIC portal management',
        ],
      },
    ],
  },
];

export const FORMS = [
  { code: 'A', name: 'Register of Fines', desc: 'Tracks all fines imposed on employees with dates, amounts, and reasons as required by the Payment of Wages Act.' },
  { code: 'B', name: 'Register of Wage Deductions', desc: 'Records all authorized deductions from employee wages including loans, advances, and recoveries.' },
  { code: 'C', name: 'Register of Advances', desc: 'Maintains a complete log of salary advances given to employees and their subsequent repayment schedules.' },
  { code: 'D', name: 'Register of Overtime', desc: 'Documents all overtime hours worked by employees along with overtime wages paid as per statutory norms.' },
  { code: 'E', name: 'Wage Register', desc: 'Comprehensive register of wages paid to all employees maintained in the prescribed format for audit and inspection.' },
  { code: 'F', name: 'Wage Slip', desc: 'Individual wage slips issued to every employee detailing earnings, deductions, and net pay each month.' },
  { code: 'I', name: 'Attendance / Muster Roll', desc: 'Daily attendance record of all employees, maintained as required under the Factories Act and allied labour laws.' },
  { code: 'II', name: 'Employment Card', desc: 'Individual cards issued to each employee containing their personal details, designation, and employment history.' },
  { code: 'III', name: 'Service Certificate', desc: "Issued upon separation, this certificate confirms the employee's tenure and nature of work at the establishment." },
  { code: 'IV', name: 'Leave Register', desc: 'Tracks all leave applications, sanctions, and balances for every employee throughout the calendar year.' },
  { code: 'V', name: 'Leave Book', desc: 'Employee-facing record of leave entitlement and leave taken, updated regularly and maintained for inspection.' },
  { code: 'VI', name: 'Register of Employees', desc: 'Master register containing particulars of all employees employed in the establishment as mandated by law.' },
];

export const WHY_US = [
  { icon: '⚡', title: 'Accurate & Timely', desc: 'Zero-error payroll processing delivered on schedule, every month without fail.' },
  { icon: '🛡️', title: 'Statutory Compliance', desc: 'Full EPFO, ESIC, and labour law compliance — no penalties, no surprises.' },
  { icon: '📊', title: 'Workforce Intelligence', desc: 'Real-time attendance data and workforce analytics at your fingertips.' },
  { icon: '📋', title: 'Professional Documentation', desc: 'Every register, form, and certificate maintained to statutory standards.' },
  { icon: '🔄', title: 'End-to-End HR', desc: 'From onboarding to full-and-final settlement — one partner for the entire lifecycle.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'A named contact who knows your business, always available when you need us.' },
  { icon: '🎯', title: 'Compliance-First', desc: 'Every process built around statutory obligations, not patched onto them.' },
];

export const CONTACTS = [
  { role: 'Manager', number: '9080654027' },
  { role: 'Admin', number: '7904691980' },
];

export const TESTIMONIALS = [
  { name: 'Rajesh Kumar', company: 'TechWave Solutions', text: 'Athena handles our payroll for 200+ employees with zero errors. Their compliance support has saved us from multiple audit issues.', rating: 5 },
  { name: 'Priya Sharma', company: 'Meridian Manufacturing', text: 'GPS attendance tracking and monthly MIS reports have given us complete visibility into our workforce like never before.', rating: 5 },
  { name: 'Arun Nair', company: 'Coastal Exports Ltd', text: "Their EPFO/ESIC filing is always on time. We haven't had a single compliance notice since we partnered with Athena.", rating: 5 },
];

export const PRODUCTS = [
  {
    id: 'ergon',
    tabLabel: 'ERGON App',
    badge: 'Flagship Product',
    name: 'ERGON',
    tagline: 'Smart Workforce & Business Management Solution',
    desc: 'ERGON is an integrated platform designed to simplify workforce operations, improve productivity, and provide real-time business insights — all from one powerful app.',
    features: [
      { icon: '📅', label: 'Attendance', desc: 'GPS-based check-in and check-out with daily reports' },
      { icon: '🌿', label: 'Leave & Shift', desc: 'Leave applications, approvals, and shift scheduling' },
      { icon: '✅', label: 'Tasks', desc: 'Assign, track, and complete tasks in real time' },
      { icon: '📊', label: 'Reports', desc: 'Instant business and workforce analytics' },
      { icon: '👥', label: 'Team', desc: 'Manage your full team structure and roles' },
      { icon: '💰', label: 'Accounts', desc: 'Expense tracking and financial summaries' },
    ],
    highlights: [
      { icon: '🎯', title: 'All-in-One Workforce Solution', desc: 'Everything you need, all in one place.' },
      { icon: '📈', title: 'Boost Productivity & Performance', desc: 'Streamline operations. Achieve more.' },
    ],
    stats: [
      { value: '6+', label: 'Modules' },
      { value: 'Real-Time', label: 'GPS Tracking' },
      { value: '100%', label: 'Mobile' },
    ],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
  },
  {
    id: 'aiagent',
    tabLabel: 'AI Agent',
    badge: 'AI-Powered',
    name: 'AI Agent Assistant',
    tagline: 'Smarter Assistance. Stronger Teams.',
    desc: 'Your AI Agent works alongside your team to simplify tasks, provide instant answers, automate workflows, and boost productivity every day.',
    features: [
      { icon: '🤖', label: 'Smart Assistance', desc: 'Understands context and delivers accurate responses instantly' },
      { icon: '⚡', label: 'Instant Answers', desc: 'Get real-time answers to business and HR queries' },
      { icon: '⚙️', label: 'Task Automation', desc: 'Automate repetitive tasks and save hours every week' },
      { icon: '🔄', label: 'Workflow Optimization', desc: 'Redesign and streamline your existing processes' },
      { icon: '📈', label: 'Better Productivity', desc: 'Empower every team member to do more with less effort' },
    ],
    pillars: [
      { icon: '🧠', label: 'Intelligent', desc: 'Understands context and delivers accurate responses.' },
      { icon: '🕐', label: 'Always On', desc: '24/7 support to keep your work moving forward.' },
      { icon: '🛡️', label: 'Secure', desc: 'Enterprise-grade security to protect your data.' },
      { icon: '↔️', label: 'Scalable', desc: 'Adapts to your business needs as you grow.' },
      { icon: '🤝', label: 'Collaborative', desc: 'Works seamlessly with your team and tools.' },
    ],
    stats: [
      { value: '24/7', label: 'Always On' },
      { value: '5+', label: 'AI Features' },
      { value: 'Enterprise', label: 'Security' },
    ],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80',
  },
  {
    id: 'platform',
    tabLabel: 'Platform Suite',
    badge: 'Enterprise Suite',
    name: 'One Platform. All Solutions.',
    tagline: 'Powering Every Function. Driving Every Success.',
    desc: 'A unified enterprise platform connecting every department in your organisation — from HR and finance to CRM and manufacturing — under one intelligent roof.',
    modules: [
      { icon: '📊', label: 'Analytics', desc: 'Real-time dashboards and business intelligence' },
      { icon: '🤝', label: 'CRM', desc: 'Customer relationship and pipeline management' },
      { icon: '💰', label: 'Finance', desc: 'Accounting, invoicing, and financial reporting' },
      { icon: '👥', label: 'HR', desc: 'Full HR lifecycle — hire to retire' },
      { icon: '📦', label: 'Inventory', desc: 'Stock management and warehouse control' },
      { icon: '🛒', label: 'Procurement', desc: 'Purchase orders, vendors, and approvals' },
      { icon: '✅', label: 'Quality', desc: 'QC checklists and compliance tracking' },
      { icon: '📋', label: 'Orders', desc: 'Sales and order fulfilment management' },
      { icon: '🏭', label: 'Manufacturing', desc: 'Production planning and shop-floor control' },
      { icon: '🔧', label: 'Maintenance', desc: 'Asset tracking and preventive maintenance' },
    ],
    stats: [
      { value: '10+', label: 'Modules' },
      { value: '1', label: 'Unified Platform' },
      { value: '∞', label: 'Scalable' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
  },
];

export const HERO_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&q=75', label: 'HR Admin' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=75', label: 'Payroll' },
  { src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&q=75', label: 'Compliance' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=75', label: 'Attendance' },
];
