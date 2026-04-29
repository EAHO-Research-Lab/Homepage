// ─── SHARED DATA ─────────────────────────────────────────────────────────────
window.COLORS = {
  coral:  { base: "var(--coral)",  light: "var(--coral-l)"  },
  amber:  { base: "var(--amber)",  light: "var(--amber-l)"  },
  teal:   { base: "var(--teal)",   light: "var(--teal-l)"   },
  purple: { base: "var(--purple)", light: "var(--purple-l)" },
  blue:   { base: "var(--blue)",   light: "var(--blue-l)"   },
  green:  { base: "var(--green)",  light: "var(--green-l)"  },
};

window.NAV_LINKS = [
  { label: "Home",         href: "index.html",       id: "home" },
  { label: "News",         href: "news.html",         id: "news" },
  { label: "People",       href: "people.html",       id: "people" },
  { label: "Publications", href: "publications.html", id: "publications" },
  { label: "Join Us",      href: "joinus.html",       id: "joinus" },
];

window.PEOPLE = [
  {
    name: "Dr. Yi Sheng",
    title: "Principal Investigator · Professor, CSE, USF",
    role: "Faculty",
    photo: "photos/yi_sheng.jpg",
    color: "green",
    bio: "Dr. Yi Sheng leads the YES Lab, focusing on efficient and scalable AI systems. Her work bridges the gap between cutting-edge AI research and practical domain applications, with an emphasis on model compression, continual learning, and hardware-aware neural architecture design.",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
    website: "#",
  },
  {
    name: "Shengji Jin",
    title: "PhD Student",
    role: "PhD Student",
    period: "Fall 2026 - Present",
    photo: "photos/shengji_jin.jpg",
    color: "coral",
    bio: "Bio coming soon.",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
    website: "#",
  },
  {
    name: "Satvik Praveen",
    title: "PhD Student",
    role: "PhD Student",
    period: "Spring 2026 - Present",
    photo: "photos/satvik_praveen.png",
    photoPosition: "center top",
    color: "teal",
    bio: "Bio coming soon.",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
    website: "#",
  },
  {
    name: "Steven Zhang",
    title: "PhD Student",
    role: "PhD Student",
    period: "Fall 2026 - Present",
    photo: "photos/steven_zhang.jpg",
    color: "blue",
    bio: "Bio coming soon.",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
    website: "#",
  },
  {
    name: "Ahmed Lamidi",
    title: "PhD Student",
    role: "PhD Student",
    period: "Fall 2026 - Present",
    photo: "photos/Ahmed_Lamidi_headshot.jpeg",
    photoPosition: "35% 30%",
    initials: "AL",
    color: "purple",
    bio: "Bio coming soon.",
    scholar: "https://scholar.google.com/",
    github: "https://github.com/",
    website: "#",
  },
];

window.NEWS = [
  { date: "Nov 2025", venue: "TECS",        venueColor: "blue",   title: "Paper accepted by Transactions on Embedded Computing Systems — congrats to Junhuan!", link: "#", authors: "" },
  { date: "Nov 2025", venue: "IBM ACS",     venueColor: "amber",  title: "Poster accepted by IBM AI Compute Symposium 2025 — congrats to Junchen!", link: "#", authors: "" },
  { date: "Oct 2025", venue: "Service",     venueColor: "teal",   title: "Dr. Yi Sheng serving as Session Chair at ICCAD 2025", link: "#", authors: "" },
  { date: "Oct 2025", venue: "Service",     venueColor: "teal",   title: "Dr. Yi Sheng selected as PC Member for IEEE Cloud Summit 2026", link: "#", authors: "" },
  { date: "Aug 2025", venue: "Lab News",    venueColor: "green",  title: "Junchen joined the YES Lab to start their PhD journey — welcome!", link: "#", authors: "" },
  { date: "Aug 2025", venue: "Lab News",    venueColor: "green",  title: "Dr. Yi Sheng joined USF to start her PI journey", link: "#", authors: "" },
  { date: "Apr 2025", venue: "Service",     venueColor: "teal",   title: "Dr. Yi Sheng selected as TPC Member for ISLVLSI 2025 and GLSVLSI 2025", link: "#", authors: "" },
  { date: "Mar 2025", venue: "Announcement",venueColor: "green",  title: "Dr. Yi Sheng will join the University of South Florida (USF) in Fall 2025 as Assistant Professor", link: "#", authors: "" },
  { date: "Dec 2024", venue: "AAAI 2025",   venueColor: "coral",  title: "One paper accepted at AAAI 2025", link: "#", authors: "Yi Sheng, et al." },
  { date: "Sep 2024", venue: "Tutorial",    venueColor: "amber",  title: "Tutorial on Novel Toolkits toward AI for Science on Resource-Constrained Computing Systems at ESWEEK 2024", link: "#", authors: "" },
  { date: "Jul 2024", venue: "MICCAI 2024", venueColor: "coral",  title: "Two papers accepted at MICCAI 2024", link: "#", authors: "Yi Sheng, et al." },
  { date: "Jun 2024", venue: "Tutorial",    venueColor: "amber",  title: "Tutorial on Deep Learning Techniques for Wave-Based Imaging at SIAM 2024", link: "#", authors: "" },
  { date: "Feb 2024", venue: "DAC 2024",    venueColor: "amber",  title: "One paper accepted at DAC 2024", link: "#", authors: "Yi Sheng, et al." },
];

window.PUBLICATIONS = [
  { year: "2024", venue: "MICCAI",   venueColor: "coral",  title: "Data-Algorithm-Architecture Co-Optimization for Fair Neural Networks on Skin Lesion Dataset", link: "https://arxiv.org/pdf/2407.13896", authors: "Yi Sheng, Junhuan Yang, Jinyang Li, James Alaina, Xiaowei Xu, Yiyu Shi, Jingtong Hu, Weiwen Jiang, Lei Yang" },
  { year: "2024", venue: "MICCAI",   venueColor: "coral",  title: "APS-USCT: Ultrasound Computed Tomography on Sparse Data via AI-Physic Synergy", link: "https://arxiv.org/pdf/2407.14564", authors: "Yi Sheng, Hanchen Wang, Yipei Liu, Junhuan Yang, Weiwen Jiang, Youzuo Lin, Lei Yang" },
  { year: "2024", venue: "GLSVLSI",  venueColor: "teal",   title: "Toward Fair Ultrasound Computing Tomography: Challenges, Solutions and Outlook", link: "https://dl.acm.org/doi/pdf/10.1145/3649476.3660387", authors: "Yi Sheng, Junhuan Yang, Youzuo Lin, Weiwen Jiang, Lei Yang" },
  { year: "2023", venue: "ICCAD",    venueColor: "blue",   title: "Fast and Fair Medical AI on the Edge Through Neural Architecture Search for Hybrid Vision Models", link: "https://ieeexplore.ieee.org/document/10323652", authors: "Changdi Yang, Yi Sheng, Peiyan Dong, Zhenglun Kong, Yanyu Li, Pinrui Yu, Lei Yang, Xue Lin, Yanzhi Wang" },
  { year: "2023", venue: "DAC",      venueColor: "amber",  title: "Muffin: A Framework Toward Multi-Dimension AI Fairness by Uniting Off-the-Shelf Models", link: "https://ieeexplore.ieee.org/document/10247765", authors: "Yi Sheng, Junhuan Yang, Lei Yang, Yiyu Shi, Jingtong Hu, Yanzhi Wang" },
  { year: "2023", venue: "DAC",      venueColor: "amber",  title: "Late Breaking Results: Fast Fair Medical Applications? Hybrid Vision Models Achieve the Fairness on the Edge", link: "https://ieeexplore.ieee.org/document/10247761", authors: "Changdi Yang, Yi Sheng, Peiyan Dong, Zhenglun Kong, Yanyu Li, Pinrui Yu, Lei Yang, Xue Lin" },
  { year: "2023", venue: "ASP-DAC",  venueColor: "purple", title: "Toward Fair and Efficient Hyperdimensional Computing", link: "https://dl.acm.org/doi/abs/10.1145/3566097.3568357", authors: "Yi Sheng, Junhuan Yang, Weiwen Jiang, Lei Yang" },
  { year: "2022", venue: "DAC",      venueColor: "amber",  title: "The Larger The Fairer? Small Neural Networks Can Achieve Fairness for Edge Devices", link: "https://dl.acm.org/doi/pdf/10.1145/3489517.3530427", authors: "Yi Sheng, Junhuan Yang, Yawen Wu, Kevin Mao, Yiyu Shi, Jingtong Hu, Weiwen Jiang, Lei Yang" },
];

window.PILLARS = [
  { color: "coral",  icon: "⚡", title: "Efficient AI",        desc: "Designing lightweight, resource-aware neural architectures that achieve state-of-the-art performance with minimal compute and memory overhead." },
  { color: "teal",   icon: "📐", title: "Scalable Systems",    desc: "Building systems that scale gracefully from edge devices to large clusters, enabling real-world deployment of AI in resource-constrained environments." },
  { color: "purple", icon: "🤝", title: "Domain Applications", desc: "Bridging the gap between AI research and high-impact domains including healthcare, robotics, and scientific discovery." },
  { color: "blue",   icon: "🔍", title: "Model Compression",   desc: "Pruning, quantization, and knowledge distillation techniques that shrink large models without sacrificing accuracy." },
  { color: "amber",  icon: "🧠", title: "Continual Learning",  desc: "Enabling AI systems to learn incrementally over time without catastrophic forgetting, mimicking human-like adaptability." },
  { color: "green",  icon: "🌐", title: "Federated Learning",  desc: "Privacy-preserving distributed learning across heterogeneous devices, advancing collaborative AI without centralizing sensitive data." },
];
