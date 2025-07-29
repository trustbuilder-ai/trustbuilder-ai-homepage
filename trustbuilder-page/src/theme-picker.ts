import { ThemeSwitcher } from "./theme-switcher";

export function createThemePicker(themeSwitcher: ThemeSwitcher): HTMLElement {
  const picker = document.createElement("div");
  picker.className = "theme-picker";

  const button = document.createElement("button");
  button.className = "theme-toggle-button";
  button.setAttribute("aria-label", "Switch theme");

  const updateButton = () => {
    const currentTheme = themeSwitcher.getCurrentTheme();
    button.innerHTML = `
      <div class="theme-toggle-content">
        <div class="theme-icon ${currentTheme === "gummyloop" ? "active" : ""}">🍬</div>
        <div class="theme-icon ${currentTheme === "cyberphnk" ? "active" : ""}">💻</div>
      </div>
    `;
  };

  button.addEventListener("click", () => {
    themeSwitcher.toggleTheme();
    updateButton();

    // Add a subtle animation feedback
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  });

  // Listen for theme changes from other sources
  window.addEventListener("themeChanged", updateButton);

  updateButton();
  picker.appendChild(button);

  return picker;
}
