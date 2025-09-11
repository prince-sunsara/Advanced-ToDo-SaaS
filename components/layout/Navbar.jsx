// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// const MenuIcon = () => (
//   <svg
//     className="w-6 h-6"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M4 6h16M4 12h16M4 18h16"
//     />
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     className="w-6 h-6"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M6 18L18 6M6 6l12 12"
//     />
//   </svg>
// );

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Navigation */}
//       <nav className="glass-nav top-4 left-4 right-4 z-50 fixed h-20 flex items-center bg-animated-mesh">
//         <div className="w-full flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-3">
//             {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow">
//               <TaskIcon />
//             </div> */}
//             <span className="text-xl font-bold text-gradient">
//               TaskFlow Pro
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <Link href="/features" className="nav-link">
//               Features
//             </Link>
//             <Link href="/pricing" className="nav-link">
//               Pricing
//             </Link>
//             <Link href="/about" className="nav-link">
//               About
//             </Link>
//             <Link href="/contact" className="nav-link">
//               Contact
//             </Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             <Link href="/login" className="hidden sm:block nav-link">
//               Sign In
//             </Link>
//             <Link href="/signup" className="btn-primary">
//               <span>Get Started Free</span>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="btn-Menu flex lg:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden mt-4 pt-4 border-t border-white/10"
//           >
//             <div className="flex flex-col space-y-2">
//               <Link href="#features" className="nav-link">
//                 Features
//               </Link>
//               <Link href="/pricing" className="nav-link">
//                 Pricing
//               </Link>
//               <Link href="/about" className="nav-link">
//                 About
//               </Link>
//               <Link href="/contact" className="nav-link">
//                 Contact
//               </Link>
//               <Link href="/login" className="nav-link">
//                 Sign In
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "../animations/sectionAnimation";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Feature icons
const TaskIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Framer Motion Variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 0.2,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const mobileMenuVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="glass-nav top-4 left-4 right-4 z-50 fixed h-20 flex items-center bg-animated-mesh"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gradient">
              TaskFlow Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-8"
            variants={navVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href="/features" className="nav-link">
                Features
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.div variants={itemVariants} className="hidden sm:block">
              <Link href="/login" className="nav-link">
                Sign In
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/signup" className="btn-primary">
                <span>Get Started Free</span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="btn-Menu flex lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-24 left-4 right-4 z-40 glass-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="flex flex-col space-y-2 py-4"
              variants={mobileMenuVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="#features" className="nav-link">
                  Features
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/pricing" className="nav-link">
                  Pricing
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/login" className="nav-link">
                  Sign In
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
