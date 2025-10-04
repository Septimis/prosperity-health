// Handle navigation without page reload
const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');

function on_navigation_clicked(page_to_load) {
  links.forEach(l => l.classList.remove('active'));
  pages.forEach(p => p.classList.remove('active'));

  try
  {
    document.getElementById(`${page_to_load}-link`).classList.add('active');
    document.getElementById(`${page_to_load}`).classList.add('active');

    window.scrollTo({top: 0, behavior: 'smooth'});
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }
  catch(error)
  {
    document.getElementById('error').classList.add('active');
    console.error(`Expected to navigate to ${page_to_load}. But could not find it.\n${error}`);
  }
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});