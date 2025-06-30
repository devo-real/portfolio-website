document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.theme-toggle');
  const icon = toggleBtn.querySelector('i');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Get saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme ? savedTheme : (prefersDark.matches ? 'dark' : 'light');

  setTheme(theme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  prefersDark.addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      toggleBtn.setAttribute('aria-label', 'Switch to light theme');
    } else {
      icon.className = 'fas fa-moon';
      toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    }
  }
});
