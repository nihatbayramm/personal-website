const $=s=>document.querySelector(s);
const safe=(f,d)=>{try{return f()}catch(e){return d}};
const CONTACT_EMAIL=""; // e-posta adresini buraya yaz: "ornek@mail.com"

const TR={eyebrow:"Öğrenmeye ve üretmeye açığım",hi:"Merhaba, ben",role:"Bilgisayar Mühendisi",
lead:"Siber güvenlik, web programlama, veri bilimi ve makine öğrenmesi alanlarında kendimi geliştirmeye tutkuyla bağlıyım.",
cta1:"GitHub'ı Gör",cta2:"İletişime Geç",st1:"Depo",st2:"Teknoloji",st3:"Sertifika",
nav_about:"Hakkımda",nav_skills:"Yetenekler",nav_projects:"Projeler",nav_edu:"Eğitim",nav_certs:"Sertifikalar",nav_contact:"İletişim",
t_about:"Hakkımda",t_skills:"Teknolojiler",t_proj:"Projeler",t_edu:"Eğitim",t_certs:"Sertifikalar",t_contact:"Benimle İletişime Geç",
c1t:"Siber Güvenlik",c1d:"Etik hacking, ağ analizi ve güvenlik araçları.",
c2t:"Web Geliştirme",c2d:"Temiz HTML/CSS'ten Angular ve .NET'e frontend ve backend.",
c3t:"Veri ve Yapay Zekâ",c3d:"Python ile veri bilimi ve makine öğrenmesi.",
hs:"Lise",bg1:"Mezun · 2026",grad:"2026 · Mezun",ce:"Bilgisayar Mühendisliği (Lisans)",it:"Bilişim Teknolojileri, Web Tasarım",ll:"Dil ve Linux",
more:"GitHub'daki tüm depolar",fm_t:"Bana mesaj gönder",send:"Gönder",
fn_p:"Adın",fe_p:"E-posta",fm_p:"Mesajın",
p1:"Ağ trafiğinde FFT ile frekans analizi yaparak anormallikleri tespit eden sistem.",
p2:"YOLO ile yüz maskesi tespiti yapan nesne algılama modeli.",
p3:"Linux sistem kaynaklarını izlemek için Python ile yazılmış araç.",
p4:"Yapay zekâ bootcamp'inde geliştirdiğim Python çalışmaları.",
p5:"Siber güvenlik odaklı Python kodlarım.",
p6:"CSS ile hazırlanmış Güneş Sistemi görseli.",
go:"Depoyu aç",ok:"Mesaj hazırlandı, e-posta uygulaman açılıyor.",
miss:"Form henüz bağlı değil. Şimdilik LinkedIn üzerinden ulaşabilirsin.",bad:"Lütfen tüm alanları doldur."};
const words={en:['Cybersecurity','Web Development','Data Science','Machine Learning'],tr:['Siber Güvenlik','Web Geliştirme','Veri Bilimi','Makine Öğrenmesi']};
const EN={};document.querySelectorAll('[data-i18n]').forEach(e=>EN[e.dataset.i18n]=e.innerHTML);
document.querySelectorAll('[data-ph]').forEach(e=>EN[e.dataset.ph]=e.placeholder);
EN.p1="Detects anomalies in network traffic using FFT-based frequency analysis.";
EN.p2="Object detection model that spots face masks using YOLO.";
EN.p3="A Python tool for monitoring Linux system resources.";
EN.p4="Python work from my artificial intelligence bootcamp.";
EN.p5="My cybersecurity-focused Python code.";
EN.p6="A Solar System visual built with CSS.";
EN.go="Open repository";EN.ok="Message ready, opening your mail app.";
EN.miss="The form isn't connected yet. For now, reach me on LinkedIn.";EN.bad="Please fill in all fields.";
let lang=safe(()=>localStorage.getItem('lang'),null)||((navigator.language||'').startsWith('tr')?'tr':'en');
const t=k=>(lang==='tr'?TR:EN)[k];

const projects=[
 ['FFT-Based-Network-Anomaly-Detection-System','fa-wave-square','Python','p1'],
 ['YoloMaskeTespitModeli','fa-mask-face','YOLO','p2'],
 ['Linux-System-Monitor','fa-gauge-high','Python','p3'],
 ['Pupilica-Artificial-Intelligence-Bootcamp','fa-brain','Python','p4'],
 ['cyber-security','fa-user-shield','Python','p5'],
 ['solar-system','fa-sun','CSS','p6']];
$('#projGrid').innerHTML=projects.map(p=>`<a class="card proj" href="https://github.com/nihatbayramm/${p[0]}" target="_blank" rel="noopener">
<div class="top"><i class="fas ${p[1]}"></i><span class="lang mono">${p[2]}</span></div>
<h3>${p[0].replace(/-/g,' ').replace(/_/g,' ')}</h3><p data-i18n="${p[3]}"></p><span class="go"><span data-i18n="go"></span> <i class="fas fa-arrow-right"></i></span></a>`).join('');

function apply(){
  document.documentElement.lang=lang;$('#lang').textContent=lang==='tr'?'EN':'TR';
  document.querySelectorAll('[data-i18n]').forEach(e=>e.innerHTML=t(e.dataset.i18n));
  document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=t(e.dataset.ph));
  w=0;c=0;del=false;
}
$('#lang').onclick=()=>{lang=lang==='tr'?'en':'tr';safe(()=>localStorage.setItem('lang',lang));apply()};

let theme=safe(()=>localStorage.getItem('theme'),null)||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
function setTheme(){document.documentElement.dataset.theme=theme;$('#theme').innerHTML=`<i class="fas fa-${theme==='dark'?'sun':'moon'}"></i>`}
$('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';safe(()=>localStorage.setItem('theme',theme));setTheme()};setTheme();

const el=$('#typed');let w=0,c=0,del=false;
(function tick(){const s=words[lang][w%4]||'';el.textContent=s.slice(0,c);
  if(!del&&c>=s.length){del=true;return setTimeout(tick,1400)}
  if(del&&c<=0){del=false;w=(w+1)%4}
  c+=del?-1:1;setTimeout(tick,del?40:80)})();

$('#year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
document.querySelectorAll('[data-count]').forEach(n=>{const to=+n.dataset.count;let i=0;const s=setInterval(()=>{i++;n.textContent=Math.round(to*i/40);if(i>=40){clearInterval(s);n.textContent=to+'+'}},35)});

addEventListener('scroll',()=>{const h=document.documentElement;$('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
document.querySelectorAll('.card:not(.form)').forEach(cd=>{
  cd.addEventListener('pointermove',e=>{const r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    cd.style.setProperty('--mx',x*100+'%');cd.style.setProperty('--my',y*100+'%');
    cd.style.transform=`translateY(-6px) perspective(700px) rotateX(${(.5-y)*6}deg) rotateY(${(x-.5)*8}deg)`});
  cd.addEventListener('pointerleave',()=>cd.style.transform='')});

$('#form').addEventListener('submit',e=>{e.preventDefault();
  const n=$('#fn').value.trim(),m=$('#fe').value.trim(),b=$('#fm').value.trim(),st=$('#fstatus');
  st.className='status';
  if(!n||!/^\S+@\S+\.\S+$/.test(m)||!b){st.classList.add('err');st.textContent=t('bad');return}
  if(!CONTACT_EMAIL){st.classList.add('err');st.textContent=t('miss');return}
  st.textContent=t('ok');
  location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Website: '+n)}&body=${encodeURIComponent(b+'\n\n'+n+' <'+m+'>')}`;
});
apply();

/* ===== Fantastic background: stars + living network + shooting stars ===== */
(()=>{
  const cv=$('#bg'),ctx=cv.getContext('2d');let W,H,D,P=[],S=[],M=[],mx=-999,my=-999,sy=0;
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rnd=(a,b)=>a+Math.random()*(b-a);
  function init(){D=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*D;cv.height=H*D;ctx.setTransform(D,0,0,D,0,0);
    const n=Math.min(W<700?45:95,Math.floor(W*H/15000));
    P=Array.from({length:n},()=>({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.3,.3),vy:rnd(-.3,.3),r:rnd(1,2.2),h:Math.random()<.5?262:187}));
    S=Array.from({length:W<700?70:150},()=>({x:rnd(0,W),y:rnd(0,H),r:rnd(.3,1.3),t:rnd(0,6.28),z:rnd(.05,.4)}))}
  addEventListener('resize',init);addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
  addEventListener('scroll',()=>sy=scrollY,{passive:true});
  setInterval(()=>{if(!document.hidden&&M.length<2)M.push({x:rnd(0,W),y:rnd(-20,H*.4),l:rnd(90,170),v:rnd(7,12),a:1})},2600);
  const light=()=>document.documentElement.dataset.theme==='light';
  function frame(ts){
    ctx.clearRect(0,0,W,H);const L=light();
    for(const s of S){s.t+=.03;const y=((s.y-sy*s.z)%H+H)%H;ctx.globalAlpha=(.35+.65*Math.abs(Math.sin(s.t)))*(L?.35:1);
      ctx.fillStyle=L?'#5b6480':'#cfe3ff';ctx.beginPath();ctx.arc(s.x,y,s.r,0,6.28);ctx.fill()}
    ctx.globalAlpha=1;
    for(const p of P){
      const dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy);
      if(d<150){const f=(150-d)/150;p.vx+=dx/d*f*.12;p.vy+=dy/d*f*.12}
      p.vx*=.985;p.vy*=.985;if(Math.abs(p.vx)<.08)p.vx+=rnd(-.02,.02);if(Math.abs(p.vy)<.08)p.vy+=rnd(-.02,.02);
      p.x+=p.vx;p.y+=p.vy;if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;if(p.y<-10)p.y=H+10;if(p.y>H+10)p.y=-10}
    for(let i=0;i<P.length;i++){const a=P[i];
      for(let j=i+1;j<P.length;j++){const b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<130){ctx.strokeStyle=`hsla(${a.h},90%,${L?45:70}%,${(1-d/130)*(L?.28:.38)})`;ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
      const dm=Math.hypot(a.x-mx,a.y-my);
      if(dm<170){ctx.strokeStyle=`rgba(34,211,238,${(1-dm/170)*.6})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mx,my);ctx.stroke()}
      ctx.fillStyle=`hsl(${a.h},90%,${L?45:70}%)`;ctx.shadowColor=`hsl(${a.h},90%,60%)`;ctx.shadowBlur=L?0:10;ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,6.28);ctx.fill();ctx.shadowBlur=0}
    for(let i=M.length-1;i>=0;i--){const m=M[i];m.x+=m.v;m.y+=m.v*.45;m.a-=.012;
      const g=ctx.createLinearGradient(m.x,m.y,m.x-m.l,m.y-m.l*.45);g.addColorStop(0,`rgba(255,255,255,${m.a})`);g.addColorStop(1,'rgba(124,92,255,0)');
      ctx.strokeStyle=g;ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(m.x,m.y);ctx.lineTo(m.x-m.l,m.y-m.l*.45);ctx.stroke();
      if(m.a<=0||m.x>W+200)M.splice(i,1)}
    if(!still)requestAnimationFrame(frame)}
  init();requestAnimationFrame(frame);
})();

/* ===== Name scramble ===== */
(()=>{const g=$('.grad'),orig=g.textContent,ch='01<>/{}[]#$%&*+=?ABCDEFGHJKLMNPQRSTUVWXYZ';let run=false;
  function go(){if(run)return;run=true;let f=0;const id=setInterval(()=>{f++;
    g.textContent=orig.split('').map((c,i)=>c===' '?' ':(i<f/2?c:ch[Math.random()*ch.length|0])).join('');
    if(f>orig.length*2){clearInterval(id);g.textContent=orig;run=false}},35)}
  setTimeout(go,300);g.addEventListener('pointerenter',go)})();

/* ===== Magnetic buttons + cursor ring + staggered reveal ===== */
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  const cur=$('#cursor');
  addEventListener('pointermove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';cur.classList.add('on')});
  document.querySelectorAll('a,button,.chips span,.card').forEach(n=>{
    n.addEventListener('pointerenter',()=>cur.classList.add('big'));n.addEventListener('pointerleave',()=>cur.classList.remove('big'))});
  document.querySelectorAll('.btn,.social a,.tool').forEach(b=>{
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});
    b.addEventListener('pointerleave',()=>b.style.transform='')})}
document.querySelectorAll('.reveal').forEach(s=>s.querySelectorAll('.card,.chips span,.item,.social a').forEach((n,i)=>n.style.setProperty('--i',i%8)));

(()=>{const nav=$('.nav'),m=$('#menu');
  const close=()=>{nav.classList.remove('open');m.setAttribute('aria-expanded','false');m.innerHTML='<i class="fas fa-ellipsis-vertical"></i>'};
  m.onclick=()=>{const o=nav.classList.toggle('open');m.setAttribute('aria-expanded',o);m.innerHTML=o?'<i class="fas fa-xmark"></i>':'<i class="fas fa-ellipsis-vertical"></i>'};
  document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',close));
  addEventListener('scroll',close,{passive:true});
})();

(()=>{const sync=()=>{$('#lang2').textContent=$('#lang').textContent;$('#theme2').innerHTML=$('#theme').innerHTML};
  $('#lang2').onclick=()=>{$('#lang').click();sync()};$('#theme2').onclick=()=>{$('#theme').click();sync()};
  $('#lang').addEventListener('click',sync);$('#theme').addEventListener('click',sync);sync()})();
