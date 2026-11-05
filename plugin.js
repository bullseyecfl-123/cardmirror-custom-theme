// Remove existing style tag if it already exists
const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
if (existingStyle) {
  existingStyle.remove();
}

// Inject custom styles directly into <head>
const css = `
  /* Cardmirror main pane styling */
  html body .pmd-pane {
    padding: 2rem !important;
  }

  /* Chip header styling */
  html body .pmd-pane-chip {
    border-radius: 1rem 1rem 0 0 !important;
    padding: 0.75rem !important;
  }

  /* Ribbon button overrides */
  #ribbon button,
  button#ribbon {
    border-radius: 1rem !important;
    transform:scale(1);
    transition:all 0.3s;
    z-index:auto;
    
  }
  html body #ribbon button:hover {
    transform:scale(1.25) !important;
    z-index:2000;
    background: rgba(230,230,230,0.4);
    backdrop-filter:blur(4px);
  }
  .pmd-multi-shell {
  --s: 6em;
  --d: 0.3em;
  --bg: #232228;
  --fg: rgb(90, 92, 102);
  background-color: var(--bg);
  background-image: radial-gradient(
      var(--d) var(--d) at 25% 25%,
      var(--fg) 100%,
      transparent 100%
    ),
    radial-gradient(
      var(--d) var(--d) at 75% 75%,
      var(--fg) 100%,
      transparent 100%
    );
  background-size: var(--s) calc(var(--s) * 0.577350269);
}

`;

const styleElement = document.createElement('style');
styleElement.id = 'cardmirror-custom-theme-styles';
styleElement.textContent = css;


document.head.appendChild(styleElement);
console.log('[CardMirror Custom Theme] Bare JS styles applied successfully.');
