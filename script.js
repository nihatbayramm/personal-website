const words=['Cybersecurity','Web Development','Data Science','Machine Learning'];
const el=document.getElementById('typed');let w=0,c=0,del=false;
function tick(){const s=words[w];el.textContent=s.slice(0,c);
  if(!del&&c===s.length){del=true;return setTimeout(tick,1400)}
  if(del&&c===0){del=false;w=(w+1)%words.length}
  c+=del?-1:1;setTimeout(tick,del?40:80)}
tick();
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
