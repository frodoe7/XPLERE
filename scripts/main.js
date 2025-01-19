const currentPath = window.location.pathname;

function highlightCurrentPage() {
  const navLinks = document.querySelectorAll("nav a");
  console.log(navLinks);

  navLinks.forEach((link) => {
    console.log(link);
    // Check if the link's href matches the current path
    if (
      link.getAttribute("href") === currentPath ||
      // Also match when we're on index page
      (currentPath === "/" && link.getAttribute("href") === "/") ||
      // Match specific pages
      (currentPath === "/index.html" && link.getAttribute("href") === "/")
    ) {
      // For desktop nav
      const parentLi = link.closest("li");
      if (parentLi) {
        // Add an active class
        parentLi.classList.add("text-primary");

        // Find and show the underline div if it exists
        const underline = parentLi.querySelector("div");
        if (underline) {
          underline.classList.remove("w-0");
          underline.classList.add("w-full");
        }
      }
    }
  });
}

async function loadHTML(url, elementId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error("Error loading " + url + ": " + error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("../src/nav.html", "nav-placeholder").then(() => {
    highlightCurrentPage();
  });
  loadHTML("../src/footer.html", "footer-placeholder");
});
