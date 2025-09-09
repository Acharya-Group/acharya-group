import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from "react-icons/fi";



// nav dropdowns
export const navdropdowns = [
  {
    title: "About Us",
    links: [
      { name: "About Us", href: "/about", type: "link" },
      { name: "Director's Message", href: "/directors-message", type: "link" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Shopneo", href: "/shopneo", type: "link" },
      { name: "e-Mitra", href: "/emitra", type: "link" },
      { name: "Kiosk Banking/BankBc", href: "/kiosk-banking", type: "link" },
      { name: "Insurance", href: "/insurance", type: "link" },
      { name: "RKCL", href: "/rkcl", type: "link" },
      { name: "School Easy", href: "/school-easy", type: "link" },
      { name: "Paytm Registration", href: "/paytm-registration", type: "link" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { name: "Cogent Driver", href: "/files/cogent.zip", type: "download" },
      { name: "Mantra Iris Driver", href: "/files/MMantra_Iris.zip", type: "download" },
      { name: "Mantra MFS100 Driver", href: "/files/Mantra_MFS100.zip", type: "download" },
      { name: "Mantra MFS110 Driver", href: "/files/Mantra_MFS110.zip", type: "download" },
      { name: "Morpho Driver", href: "/files/morpho.zip", type: "download" },
      { name: "Starteck Driver", href: "/files/starteck.zip", type: "download" },
      { name: "Kiosks Identity Card", href: "/downloads/Kiosk-id-card", type: "link" },
      { name: "E-Mitra Services Forms", href: "/downloads/e-mitra-services", type: "link" },
      { name: "Application Form For New e-Mitra Kiosk", href: "/files/Application Form For New e-Mitra Kiosk.pdf", type: "download" },
      { name: "RMGB Installation Process", href: "/files/rmgb_installation.docs", type: "download" },
      { name: "Windows RD Service V2.0.1", href: "/files/Windows_RDService_V2.0.1.42_HTTPs_127.0.0.1.zip", type: "download" },
      { name: "BOB Morpho MSO 1300 Esetup", href: "/files/BOB_MorphoMSO1300Esetup 2.2.1.8_06July2017.zip", type: "download" },
    ],
  },
];

//   our collaborations logos
export const ourCollaborations = [
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
  "/images/demo-slide.webp",
];
// projects
export const projects = [
  {
    id: 1,
    title: "Shopneo",
    desc: "A modern e-commerce platform designed to provide seamless shopping experiences for customers with intuitive design and robust functionality.",
    img: "/images/shopneo.png",
    link: "/projects/shopneo",
  },
  {
    id: 2,
    title: "e-Mitra",
    desc: "An advanced digital service portal enabling easy access to government services and information for citizens.",
    img: "/images/e-Mitra.jpg",
    link: "/projects/e-mitra",
  },
  {
    id: 3,
    title: "Kiosk Banking/BankBc",
    desc: "A futuristic banking solution with kiosk services for convenient access to financial services in remote areas.",
    img: "/images/kisok-bank.jpg",
    link: "/projects/kiosk-banking",
  },
  {
    id: 4,
    title: "Insurance",
    desc: "Comprehensive insurance management platform simplifying claims, policies, and customer service.",
    img: "/images/Insurance.jpg",
    link: "/projects/insurance",
  },
  {
    id: 5,
    title: "RKCL",
    desc: "Smart learning and training solutions with interactive features for students and professionals.",
    img: "/images/RKCL.jpg",
    link: "/projects/rkcl",
  },
  {
    id: 6,
    title: "School Easy",
    desc: "School management system that streamlines administration, student tracking, and communication.",
    img: "/images/school-Easy.jpg",
    link: "/projects/school-easy",
  },
  {
    id: 7,
    title: "Paytm Registration",
    desc: "A platform enabling quick and secure registration and onboarding for digital payment services.",
    img: "/images/Paytm-Registration.jpg",
    link: "/projects/paytm-registration",
  },
];


export const faqs = [
  {
    question: "What services does Acharya Group Private Limited provide?",
    answer:
      "We provide a wide range of services including Shopneo e-commerce, e-Mitra services, kiosk banking/Bank BC, insurance solutions, RKCL training, School Easy software, Paytm registration, and technical support for biometric devices and banking kiosks.",
  },
  {
    question: "How can I register for Shopneo through Acharya Group?",
    answer:
      "You can register for Shopneo easily by visiting our official website at https://shopneo.org and completing the online process. Alternatively, you can also visit our office or contact our support team, and we will guide you step-by-step with the documentation and onboarding process. Once registered, you can not only sell your products as a seller but also buy products from other businesses. Shopneo is powered by the ONDC government portal, making digital commerce more accessible and trustworthy.",
  },
  {
    question: "What is e-Mitra and how can I get started?",
    answer:
      "e-Mitra is a government initiative that allows citizens to access various services digitally. Through Acharya Group, you can apply for a new e-Mitra kiosk, get identity cards, access forms, and complete the installation process with proper guidance.",
  },
  {
    question: "Do you provide support for Kiosk Banking and Bank BC?",
    answer:
      "Yes, we help with the setup and management of kiosk banking and Bank BC services, including installation, RD service setup, and biometric device drivers.",
  },
  {
    question: "Can you help with biometric device installation and drivers?",
    answer:
      "Yes, we provide drivers and setup assistance for devices like Cogent, Mantra (MFS100, MFS110, Iris), Morpho, and Startek, along with complete installation support.",
  },
  {
    question: "Do you offer training under RKCL?",
    answer:
      "Yes, we are associated with RKCL to provide certified training programs that help students and professionals enhance their digital skills.",
  },
  {
    question: "What is School Easy and how does it help schools?",
    answer:
      "School Easy is our school management solution that helps schools manage student data, fees, communication, and administration digitally, making operations more efficient.",
  },
  {
    question: "How do I apply for insurance services?",
    answer:
      "Acharya Group provides insurance support for individuals and businesses. You can reach out to our team to explore suitable insurance plans and get registered.",
  },
  {
    question: "How long does it take to activate services like e-Mitra or Shopneo?",
    answer:
      "Activation timelines vary depending on the service. Typically, Shopneo registration takes 2-3 working days, while e-Mitra setup may take longer depending on documentation and verification.",
  },
  {
    question: "Where can I get help if I face issues with installation or registration?",
    answer:
      "You can contact our dedicated support team. We provide complete technical assistance for driver installation, RD service setup, and registration issues.",
  },
];


// footer data

// footer array
export const socialLinks = [
  { href: "https://www.facebook.com/myachariya", icon: FiFacebook },
  { href: "https://x.com/achariyagroup", icon: FiTwitter },
  { href: "https://www.linkedin.com/in/achariyagroup", icon: FiLinkedin },
  { href: "https://www.youtube.com/channel/UCS-2gyn-Fon-QUyO61HPtCA", icon: FiYoutube },
  { href: "https://www.instagram.com/achariyagroup", icon: FiInstagram },
];


// export const pages = ["About Us", "Careers", "Contact Us", "Media", "FAQ", "Privacy Policy"];
export const pages = [{ title: "Home", url: "/" }, { url: "/about", title: "About Us" }, { url: "/directors-message", title: "Directors message" }, { url: "/contact", title: "Contact Us" }, { url: "/news-media", title: "News & Media" }, { url: "/rkcl-network", title: "RKCL Network" }, { url: "/faq", title: "FAQ" }, { url: "/privacy-policy", title: "Privacy Policy" }, { title: "Complaint & Feedback", url: "complaint-feedback" },{ title: "Order e-mitra Stationery", url: "order-e-mittra-stationery" }];
export const projectsLink = [
  { title: "Shopneo", url: "/shopneo" },
  { title: "e-Mitra", url: "/emitra" },
  { title: "Kiosk Banking", url: "/kiosk-banking" },
  { title: "Insurance", url: "/insurance" },
  { title: "RKCL", url: "/rkcl" },
  { title: "School Easy", url: "/school-easy" },
  { title: "Payment Registration", url: "/payment-registration" },

];

// Footer support links
export const support = [
  { title: "Contact Us", type: "heading" },

  // Separate phone numbers
  { title: "+91 890-190-3333", url: "tel:+918901903333", type: "tel" },
  { title: "+91 903-404-0243", url: "tel:+919034040243", type: "tel" },
  { title: "+91 958-788-7702", url: "tel:+919587887702", type: "tel" },

  // Separate emails
  { title: "info@achariyagroup.com", url: "mailto:info@achariyagroup.com", type: "email" },
  { title: "manager@achariyagroup.com", url: "mailto:manager@achariyagroup.com", type: "email" },

  { title: "Privacy Policy", url: "/privacy-policy", type: "internal" },
  { title: "Terms & Conditions", url: "/terms-conditions", type: "internal" },
];



