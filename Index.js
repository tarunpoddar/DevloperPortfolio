const mySpan = "#myspan";
const props = {
  strings: ["Software Engineer", "Web Developer", "Video Editor"],
  typeSpeed: 50,
};

// Run the typed animation on page load.
var typed = new Typed(mySpan, props);

// Check if an element is in the view.
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  var res =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  return res;
}

var isVisible = false;
const box = document.querySelector("#myspan");

// Subscribe to page scroll window event.
addEventListener("scroll", (event) => {
  this.toggleBtnHide();

  if (!isInViewport(box) && !isVisible) {
    isVisible = true;

    // the div is now visible to user
    if (this.typed != null) {
      this.typed.destroy();
    }
    this.typed = new Typed(mySpan, props);
  } else {
    isVisible = false;
  }
});

const btn = document.querySelector("#scroll-top");

function toggleBtnHide() {
  if (!isInViewport(box)) {
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }
}

// Downlaod the resume.
function downloadResume() {
  window.open("files\\Resume.pdf");
}

// Scroll with ease.
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "smooth-scroll-link"
  const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");

  // Add a click event listener to each smooth-scroll link
  smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target element to scroll to (based on the link's href)
      const targetElement = document.querySelector(link.getAttribute("href"));

      // Use the scrollIntoView method with behavior set to 'smooth'
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
