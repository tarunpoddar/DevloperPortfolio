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
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var isVisible = false;

// Subscribe to page scroll window event.
addEventListener("scroll", (event) => {
  const box = document.querySelector("#myspan");
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

// Downlaod the resume.
function downloadResume() {
  window.open("files\\Resume.pdf");
}
