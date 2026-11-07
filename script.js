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
hs:"Lise",ce:"Bilgisayar Mühendisliği (4. Sınıf)",it:"Bilişim Teknolojileri, Web Tasarım",ll:"Dil ve Linux",
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
