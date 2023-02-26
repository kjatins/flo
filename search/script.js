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

