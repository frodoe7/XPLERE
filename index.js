for (let i = 1; i <= 4; i++) {
  const element = document.getElementById(`opt-${i}`);

  if (element) {
    element.addEventListener("mouseenter", function () {
      const image = document.querySelector(`[alt="tech${i}"]`);
      console.log("hovered");
      if (window.innerWidth >= 768) {
        if (image) {
          image.style.clipPath = "inset(0 0 0 0)";
          image.style.opacity = "1";
          // element.style.color = "#63E7FF";
          // element.style.borderColor = "#63E7FF";

          // for (let j = 1; j <= 4; j++) {
          //   if (j !== i) {
          //     const otherImage = document.querySelector(`[alt="tech${j}"]`);
          //     const otherElement = document.getElementById(`opt-${j}`);
          //     if (otherImage) {
          //       // otherImage.style.opacity = "0";
          //       // otherImage.style.transform = "translateX(-100%)";
          //     }
          //     if (otherElement) {
          //       otherElement.style.color = "#c0cac9";
          //       otherElement.style.borderColor = "#c0cac9";
          //     }
          //   }
          // }
        } else {
          console.log("No image found");
        }
      }
    });

    element.addEventListener("mouseleave", function () {
      const image = document.querySelector(`[alt="tech${i}"]`);
      console.log("unhovered");
      if (window.innerWidth >= 768) {
        if (image) {
          // image.style.opacity = "0";
          image.style.clipPath = "inset(0 100% 0 0)";
          image.style.opacity = "0";
          // element.style.color = "#c0cac9";
          // element.style.borderColor = "#c0cac9";
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
          image.style.clipPath = "inset(0 0 0 0)";
          element.style.color = "#63E7FF";
          element.style.borderColor = "#63E7FF";

          for (let j = 1; j <= 4; j++) {
            if (j !== i) {
              const otherImage = document.querySelector(`[alt="tech${j}"]`);
              const otherElement = document.getElementById(`opt-${j}`);
              if (otherImage) {
                otherImage.style.opacity = "0";
                otherImage.style.clipPath = "inset(0 100% 0 0)";
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

let xploreAnimationTriggered = false;

window.addEventListener("scroll", function () {
  if (!xploreAnimationTriggered) {
    const xploreHead = document.querySelector("#xplore > h2 > div");
    const xploreImage = document.querySelector("#xplore img");
    // console.log(xploreImage);
    const xploreText = document.querySelector("#xplore p");

    if (this.window.scrollY > this.window.innerHeight / 2) {
      xploreAnimationTriggered = true;
      xploreHead.style.transform = "translateY(0)";
      // xploreImage.style.animation = "1s ease-in-out forwards reveal";
      xploreImage.style.clipPath = "inset(0 0 0 0)";
      xploreText.style.transform = "translateY(0)";
    } else {
      xploreHead.style.transform = "translateY(-100%)";
      // xploreImage.style.animation = "none";
      xploreImage.style.clipPath = "inset(100% 0 0 0)";
      xploreText.style.transform = "translateY(100%)";
    }
    // xploreAnimationTriggered = true;
  }
});

window.addEventListener("load", function () {
  xploreAnimationTriggered = false;
});

