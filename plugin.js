// Remove existing style tag if it already exists
const existingStyle = document.getElementById('cardmirror-custom-theme-styles');
if (existingStyle) {
  existingStyle.remove();
}

// Inject custom styles directly into <head>
const css = `
  /* Cardmirror main pane styling */
  html body .pmd-pane {
    padding: 1.75rem !important;
    background:none;
    box-shadow: 0px 0px 21px 4px rgba(0,0,0,0.42);
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
  background-image: linear-gradient(
      90deg,
      rgba(200, 0, 0, 0.5) 50%,
      transparent 50%
    ),
    linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 50%);
  background-size: 50px 50px;
}

`;

const styleElement = document.createElement('style');
styleElement.id = 'cardmirror-custom-theme-styles';
styleElement.textContent = css;


document.head.appendChild(styleElement);
console.log('[CardMirror Custom Theme] Bare JS styles applied successfully.');
