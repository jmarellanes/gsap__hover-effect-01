import gsap from "gsap";

gsap.set(".project-preview", { width: 0 });

const progressBar = document.querySelector(".progressbar");
const projectPreview = document.querySelector(".project-preview");
const navItems = document.querySelectorAll(".navigation-item");
const previewImg = document.querySelector("#preview-img");
const totalImages = 8;

for (let i = 1; i <= totalImages; i++) {
  const imgUrl = new URL(`../assets/img-${i}.webp`, import.meta.url).href;
  const img = new Image();
  img.src = imgUrl;
}

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

document.querySelectorAll(".navigation-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const link = item.querySelector("a");
    const match = link.className.match(/navigation-link-(\d+)/);

    if (match) {
      const imgNumber = match[1];
      const imgUrl = new URL(`../assets/img-${imgNumber}.webp`, import.meta.url).href;

      previewImg.src = imgUrl;
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
