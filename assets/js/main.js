function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Modal booking
function openBooking(mentorName) {
  document.getElementById("selectedMentor").textContent = mentorName;
  const modal = new bootstrap.Modal(document.getElementById("bookingModal"));
  modal.show();
}

// Simple filter/search
const searchInput = document.getElementById("mentorSearch");
const filterSelect = document.getElementById("mentorFilter");
const mentorItems = document.querySelectorAll(".mentor-item");

function applyFilters() {
  const q = (searchInput?.value || "").toLowerCase().trim();
  const f = filterSelect?.value || "all";

  mentorItems.forEach((item) => {
    const tags = item.getAttribute("data-tags") || "";
    const text = item.innerText.toLowerCase();

    const matchesSearch = !q || text.includes(q);
    const matchesFilter = (f === "all") || tags.includes(f);

    item.style.display = (matchesSearch && matchesFilter) ? "" : "none";
  });
}

searchInput?.addEventListener("input", applyFilters);
filterSelect?.addEventListener("change", applyFilters);

// Contact form validation (bootstrap style)
const form = document.getElementById("contactForm");
const toast = document.getElementById("formToast");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
    return;
  }
  form.classList.add("was-validated");
  toast.classList.remove("d-none");
  setTimeout(() => toast.classList.add("d-none"), 2500);
  form.reset();
  form.classList.remove("was-validated");
});

document.getElementById("year").textContent = new Date().getFullYear();
