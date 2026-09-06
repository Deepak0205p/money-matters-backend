import { NextResponse } from 'next/server';

const REELS_DATA = [
  {
    id: "sip-ka-jadoo",
    title: "SIP Ka Jadoo! 🪄",
    videoId: "t9uC2BvYcDs",
    description: "Dekho compounding kaise ₹1,000 ko ₹10 Lakhs bana sakti hai!",
    views: "1.2M",
    likes: 124000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Amit", text: "Bhai sach mein! SIP shuru krna best decision tha. 🔥" },
      { id: 2, user: "Priya", text: "Mere ₹500/month compounding se ₹3 Lakhs ban gaye!" }
    ]
  },
  {
    id: "hackathon-reel-1",
    title: "Capital Mastery Reel 1",
    videoUrl: "/videos/reel1.mp4",
    description: "Learn how to master your money with Capital Mastery!",
    views: "2.5M",
    likes: 345000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Ravi", text: "This app is changing my life! 🚀" }
    ]
  },
  {
    id: "hackathon-reel-2",
    title: "Capital Mastery Reel 2",
    videoUrl: "/videos/reel2.mp4",
    description: "Smart investing starts with the right habits.",
    views: "1.8M",
    likes: 210000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Sonia", text: "Very informative video!" }
    ]
  },
  {
    id: "inflation-silent-thief",
    title: "Inflation: The Silent Thief 🥷",
    videoId: "HDUqfVqL00M",
    description: "Locker mein rakha cash har saal apni value kho raha hai! Invest karo.",
    views: "840K",
    likes: 76000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Rohan", text: "Inflation real chor hai, hum save krte reh gaye." }
    ]
  },
  {
    id: "emergency-fund-rule",
    title: "Emergency Fund: 3-6-9 Rule 🛡️",
    videoId: "n7d0lC8P38c",
    description: "Apni job stability ke hisab se emergency fund maintain karo.",
    views: "950K",
    likes: 92000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Sneha", text: "CS student ke liye 3 mahina check check!" }
    ]
  },
  {
    id: "credit-card-debt-trap",
    title: "Credit Card Debt Trap 💳",
    videoId: "zN9W1_P_X20",
    description: "Minimum Due pay krna trap hai! Hamesha FULL pay karo.",
    views: "1.1M",
    likes: 115000,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Karan", text: "Maine 3 saal debt trap mein guzaare, minimum due = disaster." }
    ]
  },
  {
    id: "active-vs-passive",
    title: "Active vs Passive Income 💸",
    videoId: "wJ0Q_Q5q7t8",
    description: "Time bech kar kamana vs paise se paisa banana.",
    views: "640K",
    likes: 45200,
    hasLiked: false,
    hasBookmarked: false,
    comments: [
      { id: 1, user: "Divya", text: "SIP is passive income magic! ✨" }
    ]
  }
];

export async function GET() {
  return NextResponse.json(REELS_DATA);
}
