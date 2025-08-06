import { ThemeSwitcher } from "./theme-switcher";
import { createThemePicker } from "./theme-picker";

// Initialize theme switcher
const themeSwitcher = new ThemeSwitcher();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="landing-page">
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="nav-brand">
          <div class="logo">
            <div class="logo-icon"></div>
            <span>WarGames AI</span>
          </div>
        </div>
        <div class="nav-links">
          <a href="https://forms.gle/64Xgu9qhAPtf6NLdA" target="_blank" class="survey-button evaluator-survey">Evaluator Survey</a>
          <a href="https://forms.gle/zYLnKi3TdyNBSw5U8" target="_blank" class="survey-button provider-survey">Provider Survey</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div id="theme-picker-container"></div>
          <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="cta-button">Join Platform</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu">
          <div class="mobile-menu-content">
            <a href="https://forms.gle/64Xgu9qhAPtf6NLdA" target="_blank" class="survey-button evaluator-survey mobile-survey">Evaluator Survey</a>
            <a href="https://forms.gle/zYLnKi3TdyNBSw5U8" target="_blank" class="survey-button provider-survey mobile-survey">Provider Survey</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div id="mobile-theme-picker-container"></div>
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="cta-button mobile-cta">Join Platform</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Turning Adversity into
            <span class="gradient-text">Assurance</span>
          </h1>
          <p class="hero-subtitle">
            The crowdsourced security platform that validates AI safety through competitive wargames, connecting evaluators and providers to build more secure AI systems
          </p>
          <div class="hero-buttons">
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="primary-button">Join the Platform</a>
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="secondary-button">View Challenges</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card">
            <div class="card-header">
              <div class="status-indicator active"></div>
              <span>TrustBuilder AI Platform</span>
            </div>
            <div class="metrics">
              <div class="metric">
                <span class="metric-value">5+</span>
                <span class="metric-label">LLM Providers</span>
              </div>
              <div class="metric">
                <span class="metric-value">Live</span>
                <span class="metric-label">Tournaments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Value for Everyone</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>For Security Researchers</h3>
            <p>Join competitive tournaments, earn recognition, and advance AI safety while getting rewarded for finding vulnerabilities</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Gamified Challenges</h3>
            <p>Time-gated tournaments with leaderboards that make AI security testing engaging and rewarding</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>For AI Providers</h3>
            <p>Validate your models' safety through crowdsourced testing from a global community of security experts</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Multi-LLM Support</h3>
            <p>Test across 5+ major LLM providers including OpenAI, Anthropic, GitHub, and Hugging Face models</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem & Solution -->
    <section class="problem-solution">
      <div class="container">
        <div class="split-content">
          <div class="content-block">
            <h2>Pain Points We Solve</h2>
            <p><strong>For Evaluators:</strong> Limited opportunities to showcase security skills, isolated testing environments, and lack of recognition for finding AI vulnerabilities.</p>
            <ul class="challenge-list">
              <li>Few platforms reward AI security research</li>
              <li>Limited access to diverse AI models for testing</li>
              <li>No competitive environment for skill development</li>
            </ul>
            <p><strong>For AI Providers:</strong> Difficulty validating model safety, expensive internal security teams, and limited external testing perspectives.</p>
            <ul class="challenge-list">
              <li>High costs of comprehensive security testing</li>
              <li>Internal blind spots in vulnerability assessment</li>
              <li>Lack of diverse attack methodologies</li>
            </ul>
          </div>
          <div class="content-block">
            <h2>Our Solution</h2>
            <p>TrustBuilder AI creates a win-win ecosystem where security researchers compete to find vulnerabilities while AI providers get comprehensive, cost-effective safety validation.</p>
            <ul class="solution-list">
              <li>Crowdsourced security testing with global experts</li>
              <li>Gamified tournaments that motivate thorough testing</li>
              <li>Multi-provider platform supporting 5+ major LLM providers</li>
              <li>Cost-effective alternative to large internal security teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="tech-stack">
      <div class="container">
        <h2 class="section-title">Built on Modern Technology</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <h4>Multi-LLM Integration</h4>
            <p>Support for OpenAI, Anthropic, GitHub, and Hugging Face models through unified API</p>
          </div>
          <div class="tech-item">
            <h4>Tournament System</h4>
            <p>Time-gated competitions with user enrollment, progress tracking, and leaderboards</p>
          </div>
          <div class="tech-item">
            <h4>FastAPI Backend</h4>
            <p>High-performance Python backend with automatic documentation and JWT authentication</p>
          </div>
          <div class="tech-item">
            <h4>Modern Frontend</h4>
            <p>TypeScript and Vite-powered interface with seamless user experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Join the AI Security Revolution?</h2>
          <p>Whether you're a security researcher looking to showcase skills or an AI provider seeking validation, start your journey today</p>
          <div class="cta-buttons">
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="primary-button large">Join the Platform</a>
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="secondary-button large">View Live Tournaments</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-icon"></div>
              <span>WarGames AI</span>
            </div>
            <p>Advanced AI Security Solutions</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Documentation</a>
            </div>
            <div class="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div class="link-group">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 WarGames AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`;

// Add theme picker to navigation
const themePickerContainer = document.getElementById("theme-picker-container");
if (themePickerContainer) {
  const themePicker = createThemePicker(themeSwitcher);
  themePickerContainer.appendChild(themePicker);
}

// Add theme picker to mobile navigation
const mobileThemePickerContainer = document.getElementById("mobile-theme-picker-container");
if (mobileThemePickerContainer) {
  const mobileThemePicker = createThemePicker(themeSwitcher);
  mobileThemePickerContainer.appendChild(mobileThemePicker);
}

// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement;
const mobileMenu = document.querySelector('.mobile-menu') as HTMLDivElement;
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

let isMenuOpen = false;

function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenuToggle.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  } else {
    mobileMenuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

function closeMobileMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    mobileMenuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Toggle menu when hamburger button is clicked
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close menu when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Small delay to allow navigation before closing menu
    setTimeout(closeMobileMenu, 150);
  });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (isMenuOpen && 
      !mobileMenu.contains(target) && 
      !mobileMenuToggle.contains(target)) {
    closeMobileMenu();
  }
});

// Close menu on escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen) {
    closeMobileMenu();
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  // Close mobile menu if window is resized to desktop size
  if (window.innerWidth > 768 && isMenuOpen) {
    closeMobileMenu();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = e.target as HTMLAnchorElement;
    const href = targetElement.getAttribute('href');
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
