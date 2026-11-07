const $=s=>document.querySelector(s);const safe=(f,d)=>{try{return f()}catch(e){return d}};
let theme=safe(()=>localStorage.getItem('theme'),null)||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
function setTheme(){document.documentElement.dataset.theme=theme;$('#theme').innerHTML=`<i class="fas fa-${theme==='dark'?'sun':'moon'}"></i>`}
$('#theme').onclick=()=>{theme=theme==='dark'?'light':'dark';safe(()=>localStorage.setItem('theme',theme));setTheme()};setTheme();
$('#year').textContent=new Date().getFullYear();
const t=$('time');if(t)t.textContent=new Date(t.textContent+'T00:00:00').toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'});
addEventListener('scroll',()=>{const h=document.documentElement;$('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
document.querySelectorAll('pre').forEach(pre=>{const b=document.createElement('button');b.className='copy mono';b.textContent='Kopyala';
  b.onclick=()=>{const txt=pre.querySelector('code').innerText;(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>{b.textContent='Kopyalandı ✓'},()=>{b.textContent='Kopyalanamadı'});setTimeout(()=>b.textContent='Kopyala',1600)};pre.appendChild(b)});
