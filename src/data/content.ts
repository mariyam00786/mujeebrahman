export const content = {
  hero: {
    topTextLeft: "i'm",
    topTextRight: "graphic",
    mainText: "DESIGNER",
    paragraphLeft: "I am a dedicated Graphic Designer specializing in logo design, branding, posters, brochures, and social media creatives. I have a strong passion for visual storytelling.",
    paragraphRight: "With a background in B.Com Computer Applications, I am always learning, experimenting, and pushing my creative boundaries to deliver designs that make an impact.",
    image: "/images/hero-portrait.png" // User needs to provide this cutout
  },
  marquee: {
    items: [
      "Brand Identity",
      "Posters & Print",
      "Social Media",
      "Video"
    ]
  },
  capabilities: [
    {
      title: "Brand Identity",
      desc: "Logos, colour systems, typography & guidelines that make a brand recognisable everywhere."
    },
    {
      title: "Social Media",
      desc: "Content strategy, post design and reels that grow audiences and engagement."
    },
    {
      title: "Posters & Print",
      desc: "Event posters, brochures, flyers and magazine layouts with strong visual hierarchy."
    },
    {
      title: "Video Editing",
      desc: "Event reels, promos & social cuts — shot, edited and colour-graded end to end."
    },
    {
      title: "Marketing Design",
      desc: "Ad creatives and campaign assets built to convert across every platform."
    },
    {
      title: "Package & Stationery",
      desc: "Business cards, packaging and brand collateral that feel premium in hand."
    }
  ],
  about: {
    bio: "Background in B.Com Computer Applications, with hands-on experience leading design & social for real businesses — an accessibility centre, a medical brand, and a travel agency. Blends strategy with craft. Cares about the small details: the kerning, the crop, the second of video that makes someone stop scrolling."
  },
  categories: [
    "Brand Identity",
    "Social Media",
    "Posters & Print",
    "Video Editing",
    "Marketing Design",
    "Package & Stationery"
  ],
  projects: [
    {
      id: "1",
      title: "Ispeak Center Posters",
      year: "2023",
      categories: ["Posters & Print", "Social Media"],
      image: [
        "/images/work/ispeak-poster-1.jpeg",
        "/images/work/ispeak-poster-2.jpeg",
        "/images/work/ispeak-poster-3.jpeg",
        "/images/work/ispeak-poster-4.jpeg",
        "/images/work/ispeak-poster-5.jpeg",
        "/images/work/ispeak-poster-6.jpeg",
        "/images/work/ispeak-poster-7.jpeg",
      ],
      link: "#"
    },
    {
      id: "2",
      title: "Promed Trading Campaign",
      year: "2023",
      categories: ["Marketing Design", "Posters & Print"],
      image: "/images/work/project2.jpg", // TODO: replace with real image
      link: "#"
    },
    {
      id: "3",
      title: "Flywings Travels Promos",
      year: "2022",
      categories: ["Video Editing", "Social Media"],
      image: "/images/work/project3.jpg", // TODO: replace with real image
      link: "#"
    },
    {
      id: "4",
      title: "Medical Product Packaging",
      year: "2023",
      categories: ["Package & Stationery"],
      image: "/images/work/project4.jpg", // TODO: replace with real image
      link: "#"
    }
  ],
  socialArchive: [
    { image: "/images/work/social1 (1).jpeg", caption: "Social Media Design 01" },
    { image: "/images/work/social1 (2).jpeg", caption: "Social Media Design 02" },
    { image: "/images/work/social1 (3).jpeg", caption: "Social Media Design 03" },
    { image: "/images/work/social1 (4).jpeg", caption: "Social Media Design 04" },
    { image: "/images/work/social1 (5).jpeg", caption: "Social Media Design 05" },
    { image: "/images/work/social1 (6).jpeg", caption: "Social Media Design 06" },
    { image: "/images/work/social1 (7).jpeg", caption: "Social Media Design 07" }
  ],
  experience: [
    {
      id: "1",
      role: "Social Media Manager / Designer",
      company: "Ispeak Center for People with Disabilities",
      period: "2023–Present",
      description: "Designed digital posters & promos, filmed and covered live events, edited video, shaped the brand's social presence."
    },
    {
      id: "2",
      role: "Marketing & Design",
      company: "Promed Trading",
      period: "Jan–Aug 2023",
      description: "Ran social media, created promotional ads, managed the medical store, ran paid ad campaigns."
    },
    {
      id: "3",
      role: "Graphic Designer",
      company: "Flywings Travels",
      period: "2022",
      description: "Posters, banners & thumbnails, event shoots, full video editing pipelines from raw footage to final output."
    }
  ],
  contact: {
    headline: "Let's make it real.",
    email: "mujeebmuji.888@gmail.com",
    phoneQatar: "+974 30482688",
    phoneIndia: "+91 81295 51217",
    socials: {} as Record<string, string>
  }
};
