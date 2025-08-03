export class ThemeSwitcher {
  private currentTheme: "gummyloop" | "cyberphnk" = "gummyloop";
  private gummyloopLink: HTMLLinkElement;
  private cyberphnkLink: HTMLLinkElement;

  constructor() {
    this.initializeThemeLinks();
    this.loadSavedTheme();
  }

  private initializeThemeLinks() {
    // Create link elements for both themes
    this.gummyloopLink = document.createElement("link");
    this.gummyloopLink.rel = "stylesheet";
    this.gummyloopLink.href = "/src/themes/gummyloop.css";
    this.gummyloopLink.id = "gummyloop-theme";

    this.cyberphnkLink = document.createElement("link");
    this.cyberphnkLink.rel = "stylesheet";
    this.cyberphnkLink.href = "/src/themes/cyberphnk.css";
    this.cyberphnkLink.id = "cyberphnk-theme";

    // Add both to head but disable cyberphnk initially
    document.head.appendChild(this.gummyloopLink);
    document.head.appendChild(this.cyberphnkLink);
    this.cyberphnkLink.disabled = true;
  }

  private loadSavedTheme() {
    const savedTheme = localStorage.getItem("theme") as
      | "gummyloop"
      | "cyberphnk";
    if (
      savedTheme &&
      (savedTheme === "gummyloop" || savedTheme === "cyberphnk")
    ) {
      this.setTheme(savedTheme);
    }
  }

  public setTheme(theme: "gummyloop" | "cyberphnk") {
    this.currentTheme = theme;

    if (theme === "gummyloop") {
      this.gummyloopLink.disabled = false;
      this.cyberphnkLink.disabled = true;
    } else {
      this.gummyloopLink.disabled = true;
      this.cyberphnkLink.disabled = false;
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Dispatch custom event for theme change
    window.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { theme } }),
    );
  }

  public getCurrentTheme() {
    return this.currentTheme;
  }

  public toggleTheme() {
    const newTheme =
      this.currentTheme === "gummyloop" ? "cyberphnk" : "gummyloop";
    this.setTheme(newTheme);
  }
}
