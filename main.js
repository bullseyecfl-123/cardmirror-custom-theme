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
  }
  /* Targeted navbar class */
  #ribbon {
    position: relative !important;
    padding-bottom: 24px !important; /* Extra room for the wreath line */
  }

  /* Wreath border using a positioned pseudo-element */
  #ribbon {
    content: "" !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 24px !important;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 60 24"><path fill="none" stroke="%232ecc71" stroke-width="2" d="M0,12 Q15,4 30,12 T60,12"/><circle cx="15" cy="8" r="3" fill="%2327ae60"/><circle cx="45" cy="16" r="3" fill="%2327ae60"/><path d="M12,8 Q15,4 18,7 Q15,10 12,8 Z" fill="%232ecc71"/><path d="M42,16 Q45,12 48,15 Q45,18 42,16 Z" fill="%232ecc71"/></svg>') !important;
    background-repeat: repeat-x !important;
    background-size: contain !important;
    pointer-events: none !important;
  }
`;

const styleElement = document.createElement('style');
styleElement.id = 'cardmirror-custom-theme-styles';
styleElement.textContent = css;

document.head.appendChild(styleElement);
console.log('[CardMirror Custom Theme] Bare JS styles applied successfully.');
