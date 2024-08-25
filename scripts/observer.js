export function initObserver(elements, addedClass, threshold) {
  const observer = new IntersectionObserver(cb, { threshold });
  function cb(entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle(addedClass, entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  }
  if (elements.length) elements.forEach((el) => observer.observe(el));
  else observer.observe(elements);
}

// Apply Active Style to Navigation Links Based on Section Visibility
export function sectionObserver(elements) {
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  function cb(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove the active class from the previously active navigation link
        document.querySelector('.nav__link--active').classList.remove('nav__link--active')
        document.querySelector(`#${entry.target.id}-navLink`).classList.add('nav__link--active')
      }
    });
  }
  // if multiple elements are passed; observe each one individually
  if (elements.length) elements.forEach((el) => observer.observe(el));
  // If a single element is passed, observe it directly
  else observer.observe(elements);
}

export function footerNavObserver(elements, className){
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  function cb(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(className)
        }, 200*index);
      }
    });
  }
  elements.forEach((el) => observer.observe(el));
}
