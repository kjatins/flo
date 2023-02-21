setTimeout(() => {
    const welcome = document.getElementById('welcome');
  
    // 👇️ hides element (still takes up space on the page)
    welcome.style.display = 'none';
  }, 7000);
  
  let showlist = document.getElementById('show');
  showlist.addEventListener('click',()=>{
    document.querySelector(".home").style.display = "none";
    document.querySelector(".lofipl").style.display = "flex";
  })