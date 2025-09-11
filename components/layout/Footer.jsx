// import Link from "next/link";
// import React from "react";

// // Feature icons
// const TaskIcon = () => (
//   <svg
//     className="w-8 h-8"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//     />
//   </svg>
// );

// export const Footer = () => {
//   return (
//     <>
//       {/* Footer */}
//       <footer className="border-t border-white/10 my-20">
//         <div className="container mx-auto px-6 py-16">
//           <div className="grid md:grid-cols-5 gap-8 mb-8">
//             <div className="md:col-span-2">
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow">
//                   <TaskIcon />
//                 </div>
//                 <span className="text-xl font-bold text-gradient">
//                   TaskFlow Pro
//                 </span>
//               </div>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 The most powerful task management platform for modern teams.
//                 Transform your productivity with AI-powered automation.
//               </p>

//               {/* Social Media */}
//               <div className="flex space-x-4">
//                 {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
//                   <a
//                     key={social}
//                     href="#"
//                     className="w-20 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
//                   >
//                     <span className="text-sm">{social}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Product</h4>
//               <div className="space-y-3">
//                 <Link
//                   href="/features"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Features
//                 </Link>
//                 <Link
//                   href="/pricing"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Pricing
//                 </Link>
//                 <Link
//                   href="/integrations"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Integrations
//                 </Link>
//                 <Link
//                   href="/changelog"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Changelog
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <div className="space-y-3">
//                 <Link
//                   href="/about"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/careers"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Careers
//                 </Link>
//                 <Link
//                   href="/blog"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Blog
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Support</h4>
//               <div className="space-y-3">
//                 <Link
//                   href="/help"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Help Center
//                 </Link>
//                 <Link
//                   href="/docs"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Documentation
//                 </Link>
//                 <Link
//                   href="/status"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Status
//                 </Link>
//                 <Link
//                   href="/security"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Security
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                 © 2024 TaskFlow Pro. All rights reserved.
//               </p>
//               <div className="flex items-center space-x-6">
//                 <Link
//                   href="/privacy"
//                   className="text-gray-400 hover:text-white text-sm transition-colors"
//                 >
//                   Privacy Policy
//                 </Link>
//                 <Link
//                   href="/terms"
//                   className="text-gray-400 hover:text-white text-sm transition-colors"
//                 >
//                   Terms of Service
//                 </Link>
//                 <Link
//                   href="/cookies"
//                   className="text-gray-400 hover:text-white text-sm transition-colors"
//                 >
//                   Cookie Policy
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  SquareTerminal,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.footer
      className="border-t border-white/10 my-20"
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={mainControls}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-5xl font-bold text-gradient">TaskFlow Pro</h1>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The most powerful task management platform for modern teams.
              Transform your productivity with AI-powered automation.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="w-10 h-10 m-2 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-3">
              <Link
                href="/features"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/integrations"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Integrations
              </Link>
              <Link
                href="/changelog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Changelog
              </Link>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <Link
                href="/help"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </Link>
              <Link
                href="/docs"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/status"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Status
              </Link>
              <Link
                href="/security"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Security
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TaskFlow Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
