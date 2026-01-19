// Scroll-triggered fade-in
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Logo tooltips
const tooltip = document.getElementById("tooltip");
document.querySelectorAll(".team-logo").forEach((logo) => {
  logo.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.innerHTML = `<strong>${logo.dataset.team}</strong><br>${logo.dataset.vision}<br><em>${logo.dataset.slogan}</em>`;
    tooltip.style.opacity = 1;
  });
  logo.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
  logo.addEventListener("click", () => {
    const targetId = logo.dataset.team.toLowerCase().replace(/ /g, "");
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  });
});

// Color palette copy to clipboard
document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", () => {
    const hex = color.textContent.split("\n")[1];
    navigator.clipboard.writeText(hex);
    alert(`Copied color ${hex}`);
  });
});
