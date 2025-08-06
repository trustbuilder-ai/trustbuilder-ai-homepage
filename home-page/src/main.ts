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
          <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="cta-button">Get Started</a>
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
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="cta-button mobile-cta">Get Started</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Advanced AI Security
            <span class="gradient-text">War Gaming</span>
          </h1>
          <p class="hero-subtitle">
            Revolutionizing cybersecurity through intelligent adversarial simulation and automated threat modeling
          </p>
          <div class="hero-buttons">
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="primary-button">Start Free Trial</a>
            <button class="secondary-button">Watch Demo</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card">
            <div class="card-header">
              <div class="status-indicator active"></div>
              <span>AI Security Engine</span>
            </div>
            <div class="metrics">
              <div class="metric">
                <span class="metric-value">99.7%</span>
                <span class="metric-label">Threat Detection</span>
              </div>
              <div class="metric">
                <span class="metric-value">< 1ms</span>
                <span class="metric-label">Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Core Capabilities</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Adversarial AI Simulation</h3>
            <p>Advanced AI agents simulate sophisticated attack scenarios to identify vulnerabilities before they're exploited</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Automated Threat Modeling</h3>
            <p>Intelligent analysis of system architectures to automatically generate comprehensive threat models</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Real-time Defense</h3>
            <p>Continuous monitoring and instant response to emerging threats with AI-powered countermeasures</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Strategic Intelligence</h3>
            <p>Deep insights into attack patterns and security posture with actionable recommendations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem & Solution -->
    <section class="problem-solution">
      <div class="container">
        <div class="split-content">
          <div class="content-block">
            <h2>The Challenge</h2>
            <p>Traditional cybersecurity approaches are reactive, leaving organizations vulnerable to sophisticated attacks. Current tools lack the intelligence to anticipate and simulate advanced persistent threats.</p>
            <ul class="challenge-list">
              <li>Manual threat modeling is time-intensive and error-prone</li>
              <li>Static security assessments miss dynamic attack vectors</li>
              <li>Limited visibility into emerging threat landscapes</li>
            </ul>
          </div>
          <div class="content-block">
            <h2>Our Solution</h2>
            <p>WarGames AI transforms cybersecurity through intelligent adversarial simulation, providing proactive defense mechanisms that evolve with the threat landscape.</p>
            <ul class="solution-list">
              <li>AI-powered attack simulation and defense</li>
              <li>Automated vulnerability discovery and remediation</li>
              <li>Continuous learning from global threat intelligence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="tech-stack">
      <div class="container">
        <h2 class="section-title">Powered by Advanced AI</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <h4>Machine Learning</h4>
            <p>Deep neural networks for pattern recognition and threat prediction</p>
          </div>
          <div class="tech-item">
            <h4>Natural Language Processing</h4>
            <p>Intelligent analysis of security documentation and threat intelligence</p>
          </div>
          <div class="tech-item">
            <h4>Reinforcement Learning</h4>
            <p>Adaptive agents that learn optimal attack and defense strategies</p>
          </div>
          <div class="tech-item">
            <h4>Graph Neural Networks</h4>
            <p>Advanced modeling of complex system relationships and dependencies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Security?</h2>
          <p>Join leading organizations using WarGames AI to stay ahead of cyber threats</p>
          <div class="cta-buttons">
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="primary-button large">Start Free Trial</a>
            <a href="https://trustbuilder-ai.github.io/trustbuilder-ai-platform/" target="_blank" class="secondary-button large">Schedule Demo</a>
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
