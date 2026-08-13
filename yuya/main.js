const reveals = [...document.querySelectorAll(".reveal")];
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
      else if (e.boundingClientRect.top > 0)
        e.target.classList.remove("in-view");
    }),
  { threshold: 0.15, rootMargin: "0px 0px -7% 0px" },
);
reveals.forEach((el) => observer.observe(el));
const parallax = [...document.querySelectorAll("[data-parallax]")],
  wipes = [...document.querySelectorAll(".text-wipe")];
let ticking = false;
function updateMotion() {
  const vh = innerHeight;
  parallax.forEach((el) => {
    const r = el.parentElement.getBoundingClientRect(),
      p = (vh - r.top) / (vh + r.height) - 0.5;
    el.style.transform = `translate3d(0,${p * Number(el.dataset.parallax) * 520}px,0) scale(1.08)`;
  });
  wipes.forEach((el) => {
    const r = el.getBoundingClientRect(),
      p = Math.max(0, Math.min(1, (vh * 0.9 - r.top) / (vh * 0.75)));
    el.style.backgroundPosition = `${100 - p * 100}% 0`;
  });
  ticking = false;
}
addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(updateMotion);
      ticking = true;
    }
  },
  { passive: true },
);
addEventListener("resize", updateMotion);
updateMotion();
const cursor = document.querySelector(".cursor-dot");
addEventListener("pointermove", (e) => {
  cursor.style.transform = `translate(${e.clientX - 12}px,${e.clientY - 12}px)`;
  cursor.classList.toggle("on-dark", e.target.closest("footer") !== null);
});
document.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("pointerenter", () => cursor.classList.add("hover"));
  el.addEventListener("pointerleave", () => cursor.classList.remove("hover"));
});
document.querySelector(".copy-button").addEventListener("click", async (e) => {
  await navigator.clipboard?.writeText(e.currentTarget.dataset.copy);
  const toast = document.querySelector(".copy-toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
});
document
  .querySelector(".menu")
  .addEventListener("click", () =>
    document.querySelector(".nav").classList.toggle("open"),
  );
