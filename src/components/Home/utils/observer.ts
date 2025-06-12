// This file provides a simple abstraction over the
// IntersectionObserver. This allows for the animation
// logic in a component can be inside that component,
// as opposed to having all the animation logic here.

const observerMap = new Map<
  Element,
  (entry: IntersectionObserverEntry) => void
>();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const callback = observerMap.get(entry.target);
      if (callback === undefined) return;

      callback(entry);
    });
  },
  { threshold: 0.35 },
);

const observe = (element: Element, callback: () => void) => {
  observerMap.set(element, callback);
  observer.observe(element);
};

export default observe;
