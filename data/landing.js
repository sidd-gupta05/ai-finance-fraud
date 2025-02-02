import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Fraud Analytics",
    description:
      "Analyze financial transactions for potential fraud with AI-powered detection models.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Receipt Verification",
    description:
      "Automatically verify receipts and detect anomalies using advanced AI algorithms.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Risk Assessment",
    description: "Assess the risk of transactions in real-time with intelligent fraud detection systems.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Transaction Monitoring",
    description: "Monitor and analyze credit card and account transactions to identify fraudulent activity.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Fraud Detection",
    description: "Detect cross-border fraud patterns with support for multiple currencies and regions.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Instant Alerts",
    description: "Receive immediate alerts on suspicious financial activities with automated AI insights.",
  },
];


// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up & Secure Your Account",
    description:
      "Create an account in minutes with robust security features to keep your data safe.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Connect & Monitor Transactions",
    description:
      "Link your accounts to track transactions in real-time with AI-powered fraud detection.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Detect & Block Fraud Instantly",
    description:
      "Get instant alerts and automatic fraud prevention to keep your finances secure.",
  },
];


// Testimonials Data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "With the AI-powered fraud detection, FINANACE AI has significantly reduced the risk of fraudulent transactions in my business. It's like having an extra layer of security.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "I feel more confident about my finances with FINANACE AI. The real-time fraud monitoring helps me catch suspicious activities immediately, saving me from potential losses.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "As a financial advisor, I recommend FINANACE AI to my clients for fraud detection. The automated alerts and AI insights keep their transactions secure and provide peace of mind.",
  },
];
