
document.addEventListener("DOMContentLoaded",()=>{
      let i=1;
      let circle= document.querySelector(".circle");

  function advice(e){
            e.preventDefault();
            let i=Math.floor(Math.random()*200)
        axios.get(`https://api.adviceslip.com/advice/${i}`)
    .then(res=> {
        let id=res.data.slip.id;
        let advice=res.data.slip.advice;
       let quote=document.querySelector("q");
       let h1=document.querySelector(".adviceId");
       h1.innerText=`Advice #${id}`
       quote.innerText=`${advice}`;
    })
    .catch(err=>console.log(`advice deleted ${err}`))
}

      circle.addEventListener("click",advice);
    
    
})



