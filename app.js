// Define a function to check if an element is in view
function isInView(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Define a function to add the animation class to the element
function animateOnScroll() {
  let container1 = document.querySelector(".container1");
  let container2 = document.querySelector(".container2");
  let container3 = document.querySelector(".container3");
  let container4 = document.querySelector(".container4");

  if (isInView(container1)) {
    container1.classList.add("animate-1");
  }
  if (isInView(container2)) {
    container2.classList.add("animate-2");
  }
  if (isInView(container3)) {
    container3.classList.add("animate-3");
  }
  if (isInView(container4)) {
    container4.classList.add("animate-4");
  }
}

// Attach an event listener to the window object to detect when the user scrolls
window.addEventListener("scroll", function() {
  animateOnScroll();
});


// Define a function to check if an element is in view
// function isInView(element) {
//   var rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// Define a function to add the animation class to the element
// function animateOnScroll(element) {
//   if (isInView(element)) {
//     element.classList.add("animate");
//   } else {
//     element.classList.remove("animate");
//   }
// }

// Attach an event listener to the window object to detect when the user scrolls
// window.addEventListener("scroll", function() {
//   var container1 = document.querySelector(".container1");
//   var container2 = document.querySelector(".container2");
//   var container3 = document.querySelector(".container3");
//   var container4 = document.querySelector(".container4");

//   animateOnScroll(container1);
//   animateOnScroll(container2);
//   animateOnScroll(container3);
//   animateOnScroll(container4);
// });



