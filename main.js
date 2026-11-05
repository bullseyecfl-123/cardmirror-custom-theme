// Remove existing style tag if it already exists
const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
if (existingStyle) {
  existingStyle.remove();
}

// Inject custom styles directly into <head>
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
    transform:scale(1);
    transition:all 0.3s ease;
    z-index:auto;
  }
  html body #ribbon button:hover {
    transform:scale(1.06);
    z-index:2000;
  }
`;

const styleElement = document.createElement('style');
styleElement.id = 'cardmirror-custom-theme-styles';
styleElement.textContent = css;

document.head.appendChild(styleElement);
console.log('[CardMirror Custom Theme] Bare JS styles applied successfully.');
