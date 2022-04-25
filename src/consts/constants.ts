import {
  bookcheckImg,
  checkImg,
  client1Img,
  client2Img,
  client3Img,
  dietImg,
  exerciseImg,
  planImg,
  shoeImg,
  smartwatchImg,
  whistleImg,
} from "images";

interface IPlans {
  name: string;
  period: number;
  price: number;
  discountPrice?: number;
  oldPrice?: number;
  saveAmount?: number;
}

interface IClients {
  name: string;
  age: number;
  city: string;
  rating: number;
  image?: string;
  text: string;
}

interface IProgram {
  id: number;
  image: string;
  header: string;
  text: string;
}

interface IBenefits {
  image: string;
  text: string;
}

interface IQuestions {
  question: string;
  answer: string;
}

export const PLANS: IPlans[] = [
  {
    name: "planSix",
    period: 6,
    price: 9.99,
    discountPrice: 59.94,
    oldPrice: 119.94,
    saveAmount: 50,
  },
  {
    name: "planThree",
    period: 3,
    price: 14.99,
    discountPrice: 44.97,
    oldPrice: 59.97,
  },
  {
    name: "planOne",
    period: 1,
    price: 19.99,
    discountPrice: undefined,
    oldPrice: undefined,
  },
];

export const CLIENTS: IClients[] = [
  {
    name: "Emily",
    age: 28,
    city: "Delaware, NJ",
    rating: 3,
    image: client1Img,
    text: "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
  },
  {
    name: "Kyle",
    age: 40,
    city: "Los Angeles",
    rating: 5,
    image: client2Img,
    text: "I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
  },
  {
    name: "Jesica",
    age: 51,
    city: "San Francisco, CA",
    rating: 2,
    image: client3Img,
    text: "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
  },
];

export const PROGRAM: IProgram[] = [
  {
    id: 1,
    image: planImg,
    header: "A personalized yoga program",
    text: "Completely safe and focused on your key goals",
  },
  {
    id: 2,
    image: exerciseImg,
    header: "Easy & enjoyable yoga workouts for your level",
    text: "Program adjusts to your level and pace",
  },
  {
    id: 3,
    image: shoeImg,
    header: "No special preparation needed",
    text: "Perfect for begginners! Requires no special preparation or equipment",
  },
  {
    id: 4,
    image: dietImg,
    header: "Daily motivation & accountability",
    text: "Track your progress, develop a healthy routine, reach goals faster",
  },
  {
    id: 5,
    image: whistleImg,
    header: "Browse from various yoga challenges",
    text: "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
  },
  {
    id: 6,
    image: smartwatchImg,
    header: "Easy access on any device",
    text: "Do your yoga anywhere across all types of devices",
  },
  {
    id: 7,
    image: bookcheckImg,
    header: "A complete guide to get started",
    text: "Best tips, guidelines, advice, and recommendations for successful practice",
  },
];

export const BENEFITS: IBenefits[] = [
  {
    image: checkImg,
    text: "Each program adapts to your age or fitness level",
  },
  {
    image: checkImg,
    text: "Mindful way to exercise and get real results",
  },
  {
    image: checkImg,
    text: "Effective and long-term lasting results",
  },
  {
    image: checkImg,
    text: "Suited activities that benefit both the mind and body",
  },
  {
    image: checkImg,
    text: "Low-intensity but highly-effective workouts",
  },
  {
    image: checkImg,
    text: "Extra attention to muscle, joint and back health",
  },
];

export const QUESTIONS: IQuestions[] = [
  {
    question: "What happens after I order?",
    answer:
      "After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.",
  },
  {
    question: "Where I can access my plan?",
    answer:
      "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "How can I cancel my subscription? You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app",
  },
  {
    question: "Why this program is paid?",
    answer:
      "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!",
  },
];
