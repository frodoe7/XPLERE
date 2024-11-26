for (let i = 1; i <= 4; i++) {
  const element = document.getElementById(`opt-${i}`);

  if (element) {
    element.addEventListener("mouseenter", function () {
      const image = document.querySelector(`[alt="tech${i}"]`);
      if (window.innerWidth >= 768) {
        if (image) {
          image.style.opacity = "1";
          image.style.transform = "translateX(0px)";
          element.style.color = "#63E7FF";
          element.style.borderColor = "#63E7FF";

          for (let j = 1; j <= 4; j++) {
            if (j !== i) {
              const otherImage = document.querySelector(`[alt="tech${j}"]`);
              const otherElement = document.getElementById(`opt-${j}`);
              if (otherImage) {
                otherImage.style.opacity = "0";
                otherImage.style.transform = "translateX(-100%)";
              }
              if (otherElement) {
                otherElement.style.color = "#c0cac9";
                otherElement.style.borderColor = "#c0cac9";
              }
            }
          }
        } else {
          console.log("No image found");
        }
      }
    });

    element.addEventListener("mouseleave", function () {
      const image = document.querySelector(`[alt="tech${i}"]`);

      if (window.innerWidth >= 768) {
        if (image) {
          image.style.opacity = "0";
          image.style.transform = "translateX(-100%)";
          element.style.color = "#c0cac9";
          element.style.borderColor = "#c0cac9";
        } else {
          console.log("No image found");
        }
      }
    });

    element.addEventListener("click", function () {
      const image = document.querySelector(`[alt="tech${i}"]`);
      // check if on mobile
      if (window.innerWidth < 768) {
        if (image) {
          image.style.opacity = "1";
          image.style.transform = "translateX(0px)";
          element.style.color = "#63E7FF";
          element.style.borderColor = "#63E7FF";

          for (let j = 1; j <= 4; j++) {
            if (j !== i) {
              const otherImage = document.querySelector(`[alt="tech${j}"]`);
              const otherElement = document.getElementById(`opt-${j}`);
              if (otherImage) {
                otherImage.style.opacity = "0";
                otherImage.style.transform = "translateX(-100%)";
              }
              if (otherElement) {
                otherElement.style.color = "#c0cac9";
                otherElement.style.borderColor = "#c0cac9";
              }
            }
          }
        } else {
          console.log("No image found");
        }
      }
    });
  } else {
    console.log("No element found");
  }
}

document.getElementById("open-nav").addEventListener("click", function () {
  document.getElementById("mobile-nav").style.transform = "translateX(0)";
});

document.getElementById("close-nav").addEventListener("click", function () {
  document.getElementById("mobile-nav").style.transform = "translateX(100%)";
});
