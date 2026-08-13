const serviceStyles = document.createElement("link");
serviceStyles.rel = "stylesheet";
serviceStyles.href = "./src/services.css";
document.head.appendChild(serviceStyles);
const services = [
  {
    n: "01",
    title: "Branding & Identity",
    image: "service-branding.jpg",
    copy: "Crafting unique brand identities with custom logos, color schemes, and style guides that resonate with your audience.",
    tags: [
      "Logo Design",
      "Brand Voice",
      "Visual System",
      "Naming Strategy",
      "Brand Manual",
      "Messaging Framework",
    ],
  },
  {
    n: "02",
    title: "Web Design & Development",
    image: "service-web.jpg",
    copy: "Building modern, responsive, and user-friendly websites that elevate your online presence.",
    tags: [
      "UI Design",
      "Webflow Build",
      "Framer Build",
      "CMS Setup",
      "SEO Basics",
      "Mobile Ready",
    ],
  },
  {
    n: "03",
    title: "Digital Marketing",
    image: "service-marketing.jpg",
    copy: "Enhancing your reach with tailored strategies, social media management, and engaging ad campaigns.",
    tags: [
      "Paid Ads",
      "Content Plan",
      "Social Strategy",
      "SEO Boost",
      "Analytics Setup",
      "Email Funnels",
    ],
  },
  {
    n: "04",
    title: "Motion Graphics & Video",
    image: "service-motion.jpg",
    copy: "Bringing your ideas to life with dynamic animations, explainer videos, and stunning motion graphics.",
    tags: [
      "Logo Animation",
      "Brand Video",
      "Explainer Clip",
      "Social Reel",
      "Typography Motion",
      "Storyboarding",
    ],
  },
  {
    n: "05",
    title: "UX/UI Design",
    image: "service-ui.jpg",
    copy: "Designing intuitive interfaces and exceptional user experiences for apps, software, and platforms.",
    tags: [
      "UX Audit",
      "UI Design",
      "Wireframes",
      "Prototyping",
      "Design System",
      "Mobile UX",
    ],
  },
  {
    n: "06",
    title: "E-Commerce Solutions",
    image: "service-commerce.jpg",
    copy: "Developing seamless online stores that prioritize usability and drive conversions.",
    tags: [
      "Shopify Build",
      "Product Setup",
      "UX Design",
      "Payment Flow",
      "Inventory Tools",
      "Checkout UX",
    ],
  },
];
document.querySelector(".service-list").innerHTML = services
  .map(
    (s, i) =>
      `<article class="service-item ${i === 0 ? "open" : ""}"><div class="service-summary"><span class="service-number"><i>*</i>${s.n}</span><h3>${s.title}</h3><p>${s.copy}</p><button aria-label="${i === 0 ? "Collapse" : "Expand"} ${s.title}"><span></span><span></span></button></div><div class="service-detail"><div class="service-visual"><figure><img src="./public/assets/${s.image}" alt="${s.title}"></figure><p>${s.copy}</p><a href="#">More details <b>↗</b></a></div><div class="includes"><p>Includes</p><div>${s.tags.map((t) => `<span>${t}</span>`).join("")}</div></div></div></article>`,
  )
  .join("");
const works = [
  ["work-1.jpg", "/2023", "Bold Branding", "Technology, United Kingdom"],
  ["work-2.jpg", "/2021", "Dynamic Campaign", "Fashion & Lifestyle, Canada"],
  ["work-3.jpg", "/2023", "Interactive App", "Health & Fitness, Australia"],
  ["work-4.jpg", "/2022", "E-Commerce Solution", "Sustainability, Germany"],
];
document.querySelector(".work-grid").innerHTML = works
  .map(
    (w) =>
      `<a class="project reveal parallax" href="#"><img src="./public/assets/reference/${w[0]}" alt="${w[2]}"><div class="project-caption"><span>${w[1]}<br><b>${w[2]}</b></span><span>${w[3]}</span></div></a>`,
  )
  .join("");
const posts = [
  [
    "blog-1.jpg",
    "Jun 24, 2024",
    "Designing for User Experience: Key Considerations",
  ],
  [
    "blog-2.jpg",
    "Jun 23, 2024",
    "The Future of Product Design: Trends to Watch in 2024",
  ],
  [
    "blog-3.jpg",
    "Jun 21, 2024",
    "Responsive Web Design: Best Practices and Tips",
  ],
];
document.querySelector(".blog-grid").innerHTML = posts
  .map(
    (p) =>
      `<a class="post reveal" href="#"><figure><img src="./public/assets/reference/${p[0]}" alt="${p[2]}"></figure><time>${p[1]}</time><h3>${p[2]}</h3><p>Explore ideas, systems, and practical insights for meaningful digital work.</p></a>`,
  )
  .join("");
document.querySelectorAll("[data-split]").forEach((el) => {
  el.innerHTML = el.textContent
    .trim()
    .split(" ")
    .map(
      (w, i) =>
        `<span class="word"><span style="animation-delay:${0.06 * i}s">${w}</span></span>`,
    )
    .join(" ");
});
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        if (e.target.matches("[data-count]")) animateCount(e.target);
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.14, rootMargin: "0px 0px -7%" },
);
document
  .querySelectorAll(".reveal,[data-count]")
  .forEach((el) => observer.observe(el));
function animateCount(el) {
  const target = +el.dataset.count,
    suffix = target === 95 ? "%" : "+";
  let start;
  function tick(t) {
    start ??= t;
    const p = Math.min(1, (t - start) / 1100);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll(".service-item").forEach((item) =>
  item.querySelector(".service-summary").addEventListener("click", () => {
    const willOpen = !item.classList.contains("open");
    document.querySelectorAll(".service-item").forEach((x) => {
      x.classList.remove("open");
      x.querySelector("button").setAttribute(
        "aria-label",
        `Expand ${x.querySelector("h3").textContent}`,
      );
    });
    if (willOpen) {
      item.classList.add("open");
      item
        .querySelector("button")
        .setAttribute(
          "aria-label",
          `Collapse ${item.querySelector("h3").textContent}`,
        );
    }
  }),
);
let ticking = false,
  lastY = 0;
addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = scrollY;
        document.querySelectorAll(".parallax").forEach((el, i) => {
          const r = el.getBoundingClientRect();
          if (r.bottom > 0 && r.top < innerHeight) {
            const d =
              (innerHeight / 2 - (r.top + r.height / 2)) *
              (((i % 3) + 1) * 0.018);
            const img = el.querySelector("img");
            if (img)
              img.style.transform = `translate3d(0,${d}px,0) scale(1.08)`;
          }
        });
        document.querySelector(".nav").style.transform =
          y > lastY && y > 120 ? "translateY(-100%)" : "translateY(0)";
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true },
);
