import { ABOUT_ID } from "./section-id-list";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      switch (entry.target.id) {
        case ABOUT_ID:
          const about_items = document.querySelectorAll(`#${ABOUT_ID} ul > li`);
          if (!about_items.length) throw new Error("No 'about' items found.");

          about_items.forEach((item) => item.classList.remove("paused"));

          break;

        default:
          entry.target.classList.remove("paused");
      }
    });
  },
  { threshold: 0.35 },
);

export default observer;
