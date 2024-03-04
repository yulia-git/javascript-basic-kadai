const botton=document.getElementById('btn');
const text=document.getElementById('text');
botton.addEventListener('click',()=>{
 setTimeout(()=>{
  text.textContent='ボタンをクリックしました';
},2000);
})