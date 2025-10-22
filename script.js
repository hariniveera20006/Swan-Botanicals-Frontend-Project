// Simple alert for Add to Cart button
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
});
