import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen flex items-center justify-center py-16 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
