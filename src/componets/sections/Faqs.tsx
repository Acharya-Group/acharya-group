"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SubHeading from "../ui/SubHeading";
import { faqs } from "@/lib/utils";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <section>
          <div className="container mx-auto px-4 py-12 relative">
              <SubHeading content="Faqs" align="center" />
            {/* FAQ List */}
            <div className="max-w-4xl mx-auto px-4 flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duraction="3000"
                  key={index}
                  className="bg-primary px-4 py-3 rounded-lg cursor-pointer"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer"
                  >
                    <h5 className="text-white font-semibold">{faq.question}</h5>
                    <ChevronDown
                      className={`text-white transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Smooth with Framer Motion */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-2"
                      >
                        <p className="text-sm text-white font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
      </section>
  );
}