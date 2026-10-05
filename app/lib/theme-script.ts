/* Server-safe (no React): the key and the pre-paint script used by layout.tsx */
export const THEME_KEY = "pomera-theme";

/* Runs before first paint: the saved choice, otherwise dark (the default theme). */
export const THEME_INIT_SCRIPT = `(function(){var t='dark';try{var s=localStorage.getItem('${THEME_KEY}');if(s==='light'||s==='dark'){t=s}}catch(e){}document.documentElement.setAttribute('data-theme',t)})();`;
