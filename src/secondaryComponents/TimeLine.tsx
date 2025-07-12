"use client";
import type { TimelineEntry } from "@/data/certificates";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans px-4 lg:px-10 h-auto lg:h-auto caret-transparent"
      ref={containerRef}
      id="Certificates"
    >
      <div className="max-w-7xl mx-auto py-12 lg:py-20 px-2 lg:px-8">
        <h2 className="text-2xl mb-4 text-blue-100 max-w-4xl lg:text-4xl">
          My Certificates & Achievements
        </h2>
        <p className="text-blue-300 text-sm max-w-sm lg:text-base">
          A timeline of my professional certifications and key learning
          milestones throughout my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 lg:pb-20">
        {data.map((item, index) => (
          <a
            href={item.imageAlt}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            key={index}
          >
            <div
              key={index}
              className="flex justify-start pt-8 lg:pt-40 lg:gap-10"
            >
              <div className="sticky flex flex-col items-center top-20 lg:top-40 self-start max-w-xs lg:max-w-sm lg:flex-row z-40 lg:w-full">
                <div className="h-8 absolute left-2 w-8 rounded-full bg-blue-800 flex items-center justify-center lg:h-10 lg:left-3 lg:w-10">
                  <div className="h-3 w-3 rounded-full bg-blue-400 border border-blue-300 p-1 lg:h-4 lg:w-4 lg:p-2" />
                </div>
                <h3 className="hidden text-xl font-bold text-blue-200 lg:block lg:pl-20 lg:text-5xl">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-16 pr-2 w-full lg:pl-4 lg:pr-4">
                <h3 className="block text-xl mb-3 text-left font-bold text-blue-200 lg:hidden">
                  {item.title}
                </h3>

                <div className="mb-4 lg:mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2 lg:text-xl">
                    {item.certificateTitle}
                  </h4>
                  <p className="text-blue-100 text-sm mb-4 lg:text-base lg:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="w-full max-w-md mx-auto lg:max-w-lg">
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-52 rounded-lg object-cover shadow-[0_0_24px_rgba(59,_130,_246,_0.15),_0_1px_1px_rgba(59,_130,_246,_0.1),_0_0_0_1px_rgba(59,_130,_246,_0.2),_0_0_4px_rgba(59,_130,_246,_0.2),_0_16px_68px_rgba(29,_78,_216,_0.1),_0_1px_0_rgba(147,_197,_253,_0.2)_inset] border border-blue-500/50 lg:h-78"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-blue-500 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] lg:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
