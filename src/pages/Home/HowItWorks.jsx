import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, UserPlus, ClipboardList, Star } from "lucide-react";
import AnimatedWrapper from './Reusable animations/AnimatedWrapper';

const steps = [
  {
    title: "Sign Up Easily",
    desc: "Start your journey by creating a free account as a student or instructor.",
    icon: <UserPlus className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Add or Browse Courses",
    desc: "Instructors can upload, and students can explore and enroll in courses.",
    icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Manage & Track Progress",
    desc: "Users can edit, manage, and monitor their course activity anytime.",
    icon: <ClipboardList className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Share Feedback",
    desc: "Learners leave reviews and ratings after course completion.",
    icon: <Star className="w-10 h-10 text-indigo-600" />,
  },
];
const HowItWorks = () => {


    return (
         <section className="py-20 bg-gray-50  ">
      <div className="max-w-5xl  mx-auto text-center">

        <motion.p
          className="text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          LearnMate makes it simple for both instructors and learners to connect and grow.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
           <AnimatedWrapper key={index} index={index}>
    <div className="flex justify-center mb-4">{step.icon}</div>
    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
    <p className="text-gray-600 text-sm">{step.desc}</p>
  </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;