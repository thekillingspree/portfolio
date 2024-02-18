import { MotionProps, Transition } from "framer-motion";

type CustomTransition = Pick<MotionProps, "initial" | "animate" | "exit">;

interface GetTransitionArgs {
  duration?: number;
  delay?: number;
  distance?: number;
}
export const getTransition = ({
  duration = 0.4,
  delay = 0,
  distance = 50,
}: GetTransitionArgs = {}): CustomTransition => {
  const transition = {
    duration,
    delay,
  };

  return {
    initial: {
      opacity: 0,
      y: distance,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition,
    },
    exit: {
      opacity: 0,
      y: distance,
      transition,
    },
  };
};

export const fadeInOnVisible = (delay = 0) => ({
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { type: "tween", delay },
});
