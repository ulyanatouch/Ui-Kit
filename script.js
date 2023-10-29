const body = document.body;
const mode = document.querySelector(".mode");
const form = document.querySelector(".form");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.add(savedTheme);
}

mode.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  form.classList.toggle("dark-mode");

  if (form.classList.contains("dark-mode")) {
    mode.textContent = "Light Mode";
    localStorage.setItem("theme", "light-mode");
  } else {
    mode.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark-mode");
  }
});

document.querySelectorAll("input").forEach((input) => {
  const savedValue = localStorage.getItem(input.id);
  input.addEventListener("input", () => {
    localStorage.setItem(input.id, input.value);
  });
});
