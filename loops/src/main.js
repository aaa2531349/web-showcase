const app=document.querySelector('#app');
app.innerHTML=`
<header class="nav"><a class="logo" href="#top">loops</a><nav><a href="#features">Pricing</a><a href="#features">Use cases</a><a href="#stories">Blog <i>New</i></a></nav><div class="actions"><a href="#demo">Book demo</a><a class="pill" href="#try">Buy template</a></div><button class="menu" aria-label="Menu">☰</button></header>
<main id="top">
  <section class="hero wrap reveal"><h1>capture.<br>summarise.<br>search.</h1><div class="hero-copy"><p>Capture every decision in seconds without chasing threads or docs.</p><div class="buttons"><a class="button light" href="#demo">Book a demo</a><a class="button dark" href="#try"><span>○</span> Try Loops free</a></div></div></section>
  <section class="hero-visual wrap reveal"><img src="./public/assets/EymRsmPTU0JW506onOoAc7xi4t4.jpg" alt="Abstract red Loops interface background"><div class="dashboard"><aside><b>loops</b><small>dashboard</small><small>threads</small><small>meetings</small><small>log out</small></aside><div class="feed"><div class="search">⌕ &nbsp; Search</div><h3>pinned</h3><article><b>Q3 Launch Timeline</b><p>Final sign-off on the updated shipping schedule. No changes after Friday.</p></article><article><b>Customer Feedback</b><p>Great feedback from our highest LTV users. Consider adjusting CTA.</p></article><h3>today</h3><article><b>Slack — #product</b><p>Are we still aiming for July 28 or moving to August?</p></article></div></div></section>
  <section class="statement wrap reveal"><h2>Loops is your team’s second brain. It captures decisions, summaries, and actions from the tools you use—so nothing slips through the cracks.</h2><div class="tags"><span>Asynchronous</span><span>Behind-the-scenes</span><span>Dark</span></div></section>
  <section id="features" class="feature-grid wrap reveal">
    <article class="integration-card"><span>01</span><div class="integration-list"><div><b>zentro</b><i class="switch on"></i></div><div><b>BRIKKA</b><i class="switch"></i></div><div><b>🔺 Nuvio</b><i class="switch"></i></div><div><b>Fableworks</b><i class="switch on"></i></div><div><b>⌘ Carelynx</b><i class="switch on"></i></div><div class="integration-count">Over 50 integrations</div></div><h3>Connect all your tools</h3></article>
    <article class="search-card"><span>02</span><div class="search-demo"><div class="fake-input">⌕ &nbsp;<span class="typed-query"></span><i class="caret"></i></div><div class="result demo-result"><b>Website redesign</b><br><small>Updated 12 mins ago</small></div></div><h3>Instantly find what you need</h3></article>
    <article class="focus-card"><span>03</span><ul class="demo-tabs"><li class="active">Today <b>8</b></li><li>Pinned <b>3</b></li><li>Threads <b>18</b></li><li>Mail <b>11</b></li></ul><h3>Focus on what matters</h3></article>
    <article class="assign-card"><span>04</span><div class="assign-demo"><label>Assign to</label><div class="assignee"><span class="avatar">MJ</span><strong>Mary Johnson</strong><i>⌄</i></div><div class="assignee-menu"><button data-name="Mary Johnson" data-initials="MJ">Mary Johnson</button><button data-name="James Lee" data-initials="JL">James Lee</button><button data-name="Clara Hughes" data-initials="CH">Clara Hughes</button></div></div><h3>Easily assign tasks</h3></article>
  </section>
  <section class="statement wrap reveal"><h2>Built to reduce meetings and repetition. With daily recaps and smart summaries, your team stays synced automatically to ensure progress.</h2></section>
  <section class="steps wrap reveal"><article><span>01</span><h3>Syncs in real time</h3><p>Teams across time zones stay updated with no extra effort needed, ever.</p></article><article><span>02</span><h3>Forget the details</h3><p>Leave it to Loops to capture every detail. Easily search it when you need it.</p></article><article><span>03</span><h3>Based in</h3><p>San Francisco, CA</p></article></section>
  <section class="dark-panel wrap reveal"><div class="panel-head"><p>Every screen stays current</p><span>Updating…</span></div><div class="activity"><div><small>Mail</small><b>[5]</b></div><div><small>Calendar</small><b>[8]</b></div><div><small>Threads</small><b>[16]</b></div></div><div class="timeline"><article><span>16:56</span><b>Review new proposal</b><p>David · Chloe · +2 others</p></article><article><span>17:08</span><b>Zoom w/ Jake tomorrow</b><p>Jessica · David</p></article></div><p class="panel-foot">Stay ahead with real-time info, no matter when or where you check. <a href="#try">Create an account →</a></p></section>
  <section class="statement wrap reveal"><h2>Decisions are captured automatically in the background, turning messy chats into clear, searchable team knowledge anyone can find.</h2></section>
  <section class="mosaic wrap reveal"><article class="wide"><small>Customise</small><h3>Tailored to your preference</h3><div class="themes"><span>Light</span><span>Dark</span><span>Auto</span></div></article><article><small>Takeaways from long discussions</small><h3>Latest project timeline</h3><p>by Marcus and Chloe</p><hr><h3>Product images in HD</h3><p>by Jessica</p></article><article><small>Browse chronologically</small><h3>July 7, 2025</h3><div class="hours">12 PM<br>1 PM<br>2 PM<br>3 PM<br>4 PM</div></article><article class="wide"><small>Control the team's access</small><div class="people"><p><b>Larry Smith</b><span>Administrator · Full access</span></p><p><b>James Thompson</b><span>Member · Can edit</span></p><p><b>Mary Johnson</b><span>Guest · Can view</span></p></div></article></section>
  <section id="stories" class="testimonial wrap reveal"><blockquote>“Loops cut our meeting time in half. We no longer waste hours syncing across teams—everyone just checks the daily summary and gets on with their day effortlessly.”</blockquote><div class="person"><img src="./public/assets/q3AaCzIxfAwO9Q6kez7Gh8L9jI.jpg" alt="Clara Hughes"><p><b>Clara Hughes</b><br>Head of Operations at Zentro</p></div></section>
  <section id="try" class="cta wrap reveal"><img src="./public/assets/noxZooSBxERZnMKL3nWAKneg88.png" alt="Red fabric abstract"><div><h2>just one<br><em>search.</em></h2><p>Start capturing what matters. Get aligned without chasing updates.</p><div class="buttons"><a class="button dark" href="#top">Try Loops free</a><a class="button light" href="#demo">Book a demo</a></div></div></section>
</main>
<footer class="wrap"><div class="foot-logo">loops</div><p>© 2026 Loops. All rights reserved.</p><div><b>Company</b><a href="#features">Pricing</a><a href="#features">Use cases</a><a href="#stories">Blog</a></div><div><b>Follow</b><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">X (Twitter)</a></div><form><b>Newsletter</b><p>Keep in touch with our product updates.</p><label><input type="email" placeholder="Email address"><button>Subscribe</button></label></form></footer>`;
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('shown')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));

// Framer-like motion system: load choreography, word reveals and restrained parallax.
document.querySelectorAll('.statement h2').forEach((heading) => {
  const words = heading.textContent.trim().split(/\s+/);
  heading.innerHTML = words.map((word, index) =>
    `<span class="motion-word" style="--word-index:${index}">${word}</span>`
  ).join(' ');
});

const wordObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('words-visible');
  });
}, { threshold: .24 });
document.querySelectorAll('.statement h2').forEach((heading) => wordObserver.observe(heading));

document.querySelectorAll('.feature-grid article, .steps article, .mosaic article').forEach((card, index) => {
  card.classList.add('motion-card');
  card.style.setProperty('--card-delay', `${(index % 4) * 85}ms`);
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('card-visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.motion-card').forEach((card) => cardObserver.observe(card));

const heroVisual = document.querySelector('.hero-visual > img');
const dashboard = document.querySelector('.dashboard');
let ticking = false;
function syncParallax() {
  const rect = document.querySelector('.hero-visual').getBoundingClientRect();
  const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight));
  heroVisual.style.setProperty('--hero-shift', `${progress * 24}px`);
  dashboard.style.setProperty('--dash-shift', `${progress * -15}px`);
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(syncParallax);
  }
}, { passive: true });
syncParallax();

const featureSection = document.querySelector('#features');
let demosStarted = false;
function startFeatureDemos() {
  if (demosStarted) return;
  demosStarted = true;
  const switches = [...document.querySelectorAll('.integration-card .switch')];
  let switchIndex = 0;
  setInterval(() => { switches[switchIndex].classList.toggle('on'); switchIndex = (switchIndex + 1) % switches.length; }, 720);
  const queries = ['website redesign', 'Q3 launch timeline', 'customer feedback'];
  const typed = document.querySelector('.typed-query');
  const result = document.querySelector('.demo-result');
  let queryIndex = 0, character = 0, deleting = false;
  setInterval(() => {
    const query = queries[queryIndex]; character += deleting ? -1 : 1; typed.textContent = query.slice(0, character);
    result.classList.toggle('result-visible', character > 4);
    if (!deleting && character === query.length) setTimeout(() => deleting = true, 900);
    if (deleting && character === 0) { deleting = false; queryIndex = (queryIndex + 1) % queries.length; }
  }, 95);
  const tabs = [...document.querySelectorAll('.demo-tabs li')]; let tabIndex = 0;
  setInterval(() => { tabs[tabIndex].classList.remove('active'); tabIndex = (tabIndex + 1) % tabs.length; tabs[tabIndex].classList.add('active'); }, 1400);
  const people = [...document.querySelectorAll('.assignee-menu button')]; const assignee = document.querySelector('.assignee'); let personIndex = 0;
  setInterval(() => { assignee.classList.add('changing'); setTimeout(() => { personIndex = (personIndex + 1) % people.length; assignee.querySelector('strong').textContent = people[personIndex].dataset.name; assignee.querySelector('.avatar').textContent = people[personIndex].dataset.initials; assignee.classList.remove('changing'); }, 240); }, 2100);
}
new IntersectionObserver((entries, observer) => { if (entries[0].isIntersecting) { startFeatureDemos(); observer.disconnect(); } }, { threshold: .2 }).observe(featureSection);
