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
    
  }

  /* Chip header styling */
  .pmd-pane-chip {
    border-radius: 1rem 1rem 0 0 !important;
    padding: 1rem !important;
    box-shadow: inset 0 1px 5px rgba(255, 255, 255, 0.7);
  }
  .pmd-pane-footer {
    border-radius: 0 0 1rem 1rem !important;
    padding: 1rem !important;
  }

  /* Ribbon button overrides */
  #ribbon button, .ribbon-color-control{
    border-radius: 1rem !important;
    transform:scale(1);
    transition:all 0.3s;
    z-index:auto;
    
  }
  #ribbon button:hover, .ribbon-color-control:hover {
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
.pmd-pill-tray {
left:0.5rem !important;
bottom: 1.75rem !important;
}
#status-bar {
  padding: 1rem .75rem !important;
}
.pmd-home-screen {
    background: linear-gradient(0deg, black, rgb(0, 0, 85));
}
.pmd-home-title {
font-size:3rem;
}
.pmd-home-tagline {
color:white;
}
.pmd-nav-item:hover {
position:relative; 
max-width:500px;
width:fit-content;
z-index:50;
}
`;

const styleElement = document.createElement('style');
styleElement.id = 'cardmirror-custom-theme-styles';
styleElement.textContent = css;


document.head.appendChild(styleElement);
console.log('[CardMirror Custom Theme] Bare JS styles applied successfully.');
