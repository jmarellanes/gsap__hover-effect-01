import gsap from "gsap";

gsap.set(".project-preview", { width: 0 });

const progressBar = document.querySelector(".progressbar");
const projectPreview = document.querySelector(".project-preview");
const navItems = document.querySelectorAll(".navigation-item");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.killTweensOf(projectPreview);

    gsap.to(projectPreview, {
      width: "600px",
      duration: 0.5,
      ease: "expo.inOut",
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.killTweensOf(projectPreview);

    gsap.to(projectPreview, {
      width: 0,
      duration: 0.5,
      ease: "expo.inOut",
    });
  });
});

document.querySelectorAll(".navigation-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const match = link.className.match(/navigation-link-(\d+)/);

    if (match) {
      const imgNumber = match[1];
      const imgUrl = new URL(`../assets/img-${imgNumber}.webp`, import.meta.url).href;

      projectPreview.style.backgroundImage = `url(${imgUrl})`;
    }
  });
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scroll / (documentHeight - windowHeight)) * 100;

  if (progressBar) {
    progressBar.style.height = `${scrollPercent}%`;
  }
});
