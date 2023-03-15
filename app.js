const search =()=>{
    const serchbox=document.getElementById("search-item").value;
    let Text=serchbox.toUpperCase();
    console.log(Text)
    const storeitems=document.getElementById("product-list");
    const product=document.querySelectorAll('.product')
    const pname=document.getElementsByTagName("h2")
    for(var i=0 ;i< pname.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];
        // console.log(match)
        // console.log(match.textContent)
      if(match){
        var abc= match.textContent.toUpperCase();
        console.log(abc)
        console.log(abc.indexOf(serchbox))
      }
      if(abc.indexOf(Text)>-1){
           product[i].style.display="";
      }
      else{
        product[i].style.display="none"
      }
    }
    // console.log(abc)
}

