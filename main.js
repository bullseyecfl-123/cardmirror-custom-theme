export default class CustomThemePlugin {
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

    const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
    if (existingStyle) {
      existingStyle.remove();
    }

    this.styleElement = document.createElement('style');
    this.styleElement.id = 'cardmirror-custom-theme-styles';
    this.styleElement.textContent = css;

    document.head.appendChild(this.styleElement);
    console.log('[CardMirror Custom Theme] Styles successfully injected into <head>.');
  }

  onunload() {
    console.log('[CardMirror Custom Theme] Running onunload()...');
    if (this.styleElement) {
      this.styleElement.remove();
      console.log('[CardMirror Custom Theme] Style element removed.');
    }
  }
}
