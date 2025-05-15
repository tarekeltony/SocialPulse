import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlightText?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  className = "",
  highlightText,
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-16 ${centered ? "text-center" : "text-left"} ${className}`}
    >
      {/* Optional highlight text (Path for Growth style) */}
      {highlightText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-3"
        >
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {highlightText}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Gradient line separator */}
      <div className={`flex ${centered ? "justify-center" : "justify-start"} mt-8`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: centered ? "120px" : "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-1 rounded-full gradient-bg-primary"
        />
      </div>
    </div>
  );
};

export default SectionHeader;
