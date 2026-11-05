class CustomThemePlugin {
  constructor(app) {
    this.app = app;
    this.styleElement = null;
  }

  onload() {
    const css = `
      /* Cardmirror classes & pane styling */
      .pmd-pane {
        padding: 1rem !important;
      }

      .pmd-pane-chip {
        border-radius: 1rem 1rem 0 0 !important;
        padding: 0.75rem !important;
      }

      /* Ribbon button adjustments */
      #ribbon button {
        border-radius: 1rem !important;
      }
    `;

    // Remove existing style tag to prevent hot-reload duplicates
    const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    this.styleElement = document.createElement('style');
    this.styleElement.id = 'cardmirror-custom-theme-styles';
    this.styleElement.textContent = css;
    document.head.appendChild(this.styleElement);
  }

  onunload() {
    if (this.styleElement) {
      this.styleElement.remove();
    }
  }
}

// Browser-safe export handling (prevents "module is not defined" error)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CustomThemePlugin;
} else {
  window.CustomThemePlugin = CustomThemePlugin;
}
