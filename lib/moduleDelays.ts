// Port of Mill3 Studio's transitions/utils.js — mayali-main-3'ten alındı

const inViewport = (el: Element): boolean => {
  const { top, left, right, height } = el.getBoundingClientRect();
  return (
    top < window.innerHeight &&
    top + height > 0 &&
    left < window.innerWidth &&
    right > 0
  );
};

export const moduleDelays = (
  incrementDelay = 350,
  baseDelay = 550,
  target: Element = document.body
) => {
  let delay = baseDelay;
  [...target.querySelectorAll("[data-module-delay]")].forEach((el) => {
    const visible = inViewport(el);
    el.setAttribute("data-module-delay", String(visible));
    if (!visible) return;
    (el as HTMLElement).style.setProperty("--module-delay", `${delay}ms`);
    delay += el.hasAttribute("data-module-delay-increment")
      ? parseInt((el as HTMLElement).dataset.moduleDelayIncrement ?? "350", 10)
      : incrementDelay;
  });
};
