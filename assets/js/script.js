// Typewriter
const roles = [
  "Web & App Developer",
  "React Native (Expo) Enthusiast",
  "Clean UI • Problem Solver"
];

let idx = 0, pos = 0, deleting = false;
const tw = document.getElementById('typewriter');

function typeLoop(){
  const word = roles[idx];
  tw.textContent = word.slice(0, pos);
  if(!deleting){
    if(pos < word.length){ pos++; }
    else { deleting = true; setTimeout(typeLoop, 1200); return; }
  }else{
    if(pos > 0){ pos--; }
    else { deleting = false; idx = (idx+1)%roles.length; }
  }
  setTimeout(typeLoop, deleting ? 40 : 90);
}
if(tw) typeLoop();

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

// Scroll active link & reveal on scroll
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.15});

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  let activeIndex = 0;
  sections.forEach((sec, i) => {
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120 && rect.bottom >= 120) activeIndex = i;
  });
  links.forEach((a,i)=> a.classList.toggle('active', i===activeIndex));
}, {passive:true});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (simple dark stays by default, pressing toggles a lighter background)
const toggle = document.getElementById('themeToggle');
let light = false;
if(toggle){
  toggle.addEventListener('click', ()=>{
    light = !light;
    document.documentElement.style.setProperty('--bg', light ? '#f8fafc' : '#0b0b12');
    document.documentElement.style.setProperty('--bg-alt', light ? '#ffffff' : '#111827');
    document.documentElement.style.setProperty('--text', light ? '#0b1220' : '#e5e7eb');
    document.documentElement.style.setProperty('--muted', light ? '#334155' : '#9ca3af');
    toggle.querySelector('.sun').style.display = light ? 'inline' : 'none';
    toggle.querySelector('.moon').style.display = light ? 'none' : 'inline';
  });
}

// Contact form uses mailto
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('Please fill in all fields.'); return false; }
  const subject = encodeURIComponent('Portfolio Contact — ' + name);
  const body = encodeURIComponent(`From: ${name} <${email}>

${message}`);
  window.location.href = `mailto:nayabnabi9@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
window.handleContact = handleContact;
