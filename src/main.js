import './index.css';

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("menuBtn").classList.add("hidden");
  document.getElementById("mobileMenu").classList.remove("hidden");
  document.getElementById("closeMenu").classList.remove("hidden");
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.add("hidden");
document.getElementById("closeMenu").classList.add("hidden");
document.getElementById("menuBtn").classList.remove("hidden");
});
