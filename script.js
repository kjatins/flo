setTimeout(() => {
  const welcome = document.getElementById('welcome');

  // 👇️ hides element (still takes up space on the page)
  welcome.style.display = 'none';
}, 7000);

let home = document.getElementById('hometab');
home.addEventListener('click', () => {
  document.querySelector(".home").style.display = "";
  document.querySelector("#mybanner").style.display = "";
  document.querySelector(".searchbox").style.display = "none";
})

let showlist = document.getElementById('show');
showlist.addEventListener('click', () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".lofipl").style.display = "flex";
})
let goback = document.getElementById('goback');
goback.addEventListener('click', () => {
  document.querySelector(".home").style.display = "";
  document.querySelector(".lofipl").style.display = "none";
})

let search = document.getElementById('search');
search.addEventListener('click', () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".searchbox").style.display = "flex";
  document.querySelector("#mybanner").style.display = "none";
})

let masterback = document.getElementById('masterback');
masterback.addEventListener('click', () => {
  document.querySelector(".home").style.display = "";
  document.querySelector(".searchbox").style.display = "none";
  document.querySelector("#mybanner").style.display = "";
})


const showsong = ()=>{
  document.getElementById('table2').style.display="flex";
}

const searchFun = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let table = document.getElementById('table2');
  let tr = table.getElementsByTagName('tr');
  for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[0];
      if (td) {
          let textvalue = td.textContent || td.innerHTML;
          if (textvalue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

