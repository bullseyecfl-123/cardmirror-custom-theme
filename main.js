export default class CustomThemePlugin {
  constructor(app) {
    this.app = app;
    this.styleElement = null;
  }

  onload() {
    const css = `
      :root {
        --brand-primary: #4a90e2 !important; 
        --bg-main-panel: #1a1a24 !important;
        --text-color: #f5f5f7 !important;
      }
    `;
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
