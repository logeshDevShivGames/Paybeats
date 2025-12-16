import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // ⏱ 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#0E1117] dark:to-[#121826]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Ambient glow */}
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-blue-500/30 dark:bg-cyan-400/20 blur-[120px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glass card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex items-center justify-center rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-white/10 p-10">
            {/* Logo breathing */}
            <motion.img
              src={"/logo.svg"}
              className="h-24 w-24"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Soft ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-blue-400/30 dark:border-cyan-300/20"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          </motion.div>

          {/* Demo Text at Bottom */}
          <motion.div
            className="absolute bottom-10 px-6 py-2 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-800 dark:text-gray-200 font-semibold text-lg shadow-lg hover:shadow-xl cursor-pointer select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.4)",
            }}>
            Demo
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
