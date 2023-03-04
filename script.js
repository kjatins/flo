setTimeout(() => {
  const welcome = document.getElementById('welcome');

  // 👇️ hides element (still takes up space on the page)
  welcome.style.display = 'none';
}, 7000);

let home = document.getElementById('hometab');
home.addEventListener('click', () => {
  document.querySelector(".home").style.display = "";
  // document.querySelector(".searchbox").style.display = "none";
})

let masterback = document.getElementById('masterback');
masterback.addEventListener('click', () => {
  document.querySelector(".home").style.display = "";
  document.querySelector(".container1").style.display = "";
  document.querySelector('#masterback').style.display = "none";
  document.querySelector(".lofipl").style.display = "none";
  document.querySelector(".lofipl1").style.display = "none";

})
let showlofi = document.getElementById('showlofi');
showlofi.addEventListener('click', () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".container1").style.display = "none";
  document.querySelector(".lofipl").style.display = "flex";
  document.querySelector(".lofipl1").style.display = "none";
  document.querySelector('#masterback').style.display = "flex";
})

let showtrend = document.getElementById('showtrend');
showtrend.addEventListener('click', () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".container1").style.display = "none";
  document.querySelector(".lofipl1").style.display = "flex";
  document.querySelector(".lofipl").style.display = "none";
  document.querySelector('#masterback').style.display = "flex";
})

let searchinput = document.querySelector("#myInput");
searchinput.addEventListener('input',(e)=>{
  if(searchinput.value == ""){
    document.querySelector('#table2').style.display = 'none';
  }else{
    document.querySelector('#table2').style.display = 'flex';
  }
})


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

