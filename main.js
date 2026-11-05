class CustomThemePlugin {
  constructor(app) {
    this.app = app;
    this.styleElement = null;
    console.log('[CardMirror Custom Theme] Plugin constructor initialized.');
  }

  onload() {
    console.log('[CardMirror Custom Theme] Running onload()...');

    const css = `
      /* Cardmirror main pane styling */
      html body .pmd-pane {
        padding: 1rem !important;
      }

      /* Chip header styling */
      html body .pmd-pane-chip {
        border-radius: 1rem 1rem 0 0 !important;
        padding: 0.75rem !important;
      }

      /* Ribbon button overrides */
      html body #ribbon button,
      html body button#ribbon {
        border-radius: 1rem !important;
      }
    `;

    // Remove existing style tag to prevent duplicate injections on hot-reload
    const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
    if (existingStyle) {
      console.log('[CardMirror Custom Theme] Found existing style tag, removing old instance...');
      existingStyle.remove();
    }

    // Create and inject the new style element
    this.styleElement = document.createElement('style');
    this.styleElement.id = 'cardmirror-custom-theme-styles';
    this.styleElement.textContent = css;

    document.head.appendChild(this.styleElement);

    // Verification check in console
    const injected = document.getElementById('cardmirror-custom-theme-styles');
    if (injected) {
      console.log('[CardMirror Custom Theme] Success: <style id="cardmirror-custom-theme-styles"> injected into <head>.');
    } else {
      console.error('[CardMirror Custom Theme] Error: Failed to inject style tag into document.head.');
    }
  }

  onunload() {
    console.log('[CardMirror Custom Theme] Running onunload()...');
    if (this.styleElement) {
      this.styleElement.remove();
      console.log('[CardMirror Custom Theme] Style element successfully removed from DOM.');
    }
  }
}

// Universal export check for CommonJS vs Browser globals
if (typeof module !== 'undefined' && module.exports) {
  console.log('[CardMirror Custom Theme] Exporting class via module.exports');
  module.exports = CustomThemePlugin;
} else {
  console.log('[CardMirror Custom Theme] Exporting class via window.CustomThemePlugin');
  window.CustomThemePlugin = CustomThemePlugin;
}
