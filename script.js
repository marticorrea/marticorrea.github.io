document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  });

  document.querySelectorAll(".inicio, .granseccion").forEach((element) => {
    observer.observe(element);
  });
});

document.querySelectorAll(".img2").forEach((imagen) => {
  imagen.addEventListener("mousemove", (event) => {
    const { offsetX, offsetY, target } = event;
    const { offsetWidth, offsetHeight } = target;
    
    const moveX = (offsetX / offsetWidth - 0.5) * 20; 
    const moveY = (offsetY / offsetHeight - 0.5) * 20; 
    
    target.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
  });

  imagen.addEventListener("mouseleave", () => {
    imagen.style.transform = "scale(1)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.1) { 
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".seccion2, .marco1").forEach((element) => {
    observer.observe(element);
  });
});

window.addEventListener("scroll", () => {
  const seccion1 = document.querySelector(".titulo3");
  const seccion2 = document.querySelector(".seccion3");

  const rect1 = seccion1.getBoundingClientRect();
  const rect2 = seccion2.getBoundingClientRect();

  if (rect1.top <= window.innerHeight && rect1.bottom >= 0) { 
    document.body.style.backgroundColor = "#000"; 
  } else if (rect2.top <= window.innerHeight && rect2.bottom >= 0) { 
    document.body.style.backgroundColor = "#000"; 
  } else {
    document.body.style.backgroundColor = "#fff"; // Color original
  }
});

