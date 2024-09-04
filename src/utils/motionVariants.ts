export const fadeIn = (initScaleValue?: number, endScaleValue?: number) => ({
  hidden: { opacity: 0, scale: initScaleValue },
  visible: { opacity: 1, scale: endScaleValue, transition: { duration: 0.6 } },
});

export const slideIn = (
  direction: "left" | "right",
  delayDuration?: number,
  transitionDuration?: number,
  xValue: number = 100,
) => ({
  hidden: { x: direction === "left" ? -xValue : xValue, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: transitionDuration, delay: delayDuration },
  },
});
