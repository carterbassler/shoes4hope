import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function StatsComponent() {
  const [counterOn, setCounterOn] = useState(false);

  // Define animation variants
  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold">Our Stats</h1>
      <motion.div
        className="flex flex-row space-x-8"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
        onViewportEnter={() => setCounterOn(true)}
      >
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-7xl font-bold">
            {counterOn && (
              <CountUp start={0} end={100} duration={3} delay={0} />
            )}
          </h1>
          <h1>All-Time Matches</h1>
        </div>
        <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-7xl font-bold">
            {counterOn && (
              <CountUp start={0} end={1000} duration={3} delay={0} />
            )}
          </h1>
          <h1>All-Time Student Athletes</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-7xl font-bold">
            {counterOn && <CountUp start={0} end={25} duration={3} delay={0} />}
          </h1>
          <h1>All-Time Campuses</h1>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-7xl font-bold">
            {counterOn && <CountUp start={0} end={10} duration={3} delay={0} />}
          </h1>
          <h1>All-Time States</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default StatsComponent;
