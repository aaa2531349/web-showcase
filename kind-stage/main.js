const reveals = [...document.querySelectorAll(".reveal")];
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
      else if (e.boundingClientRect.top > 0) e.target.classList.remove("in");
    }),
  { threshold: 0.15 },
);
reveals.forEach((el) => io.observe(el));
const menu = document.querySelector(".menu"),
  panel = document.querySelector(".menu-panel");
menu.onclick = () => panel.classList.add("open");
document.querySelector(".menu-close").onclick = () =>
  panel.classList.remove("open");
panel
  .querySelectorAll("a")
  .forEach((a) => (a.onclick = () => panel.classList.remove("open")));
addEventListener(
  "scroll",
  () => {
    const art = document.querySelector(".feature-art");
    const r = art.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight)
      art.style.setProperty(
        "--parallax",
        `${(r.top - innerHeight / 2) * -0.08}px`,
      );
  },
  { passive: true },
);
const track = document.querySelector(".review-track");
document.querySelectorAll(".arrows button").forEach(
  (b, i) =>
    (b.onclick = () => {
      track.animate(
        [
          { transform: getComputedStyle(track).transform },
          { transform: `translateX(${i ? "-=394px" : "+=394px"})` },
        ],
        { duration: 550, easing: "cubic-bezier(.16,1,.3,1)" },
      );
    }),
);
