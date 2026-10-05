/* Server-safe (no React): the key and the pre-paint script used by layout.tsx */
export const THEME_KEY = "pomera-theme";

/* Runs before first paint: saved choice, else the device preference. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;
