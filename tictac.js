let b = document.querySelector("body");
let d = document.querySelector("h1")
let cur = "bright";
d.addEventListener("click",()=>
{
    if(cur==="bright")
    {    
        cur="dark"
          b.classList.add("dark");
          b.classList.remove("bright");
    }
    else if(cur ==="dark")
    {    
        cur = "bright";
         b.classList.add("bright");
          b.classList.remove("dark");
    }
})


let win = [[0,1,2],
           [0,3,6],
           [0,4,8],
           [3,4,5],
           [6,7,8],
           [2,5,8],
           [1,4,7],
           [2,4,6]
          ];


 let a = document.querySelectorAll(".cla1");
  let turn0 = true;
  let turnx = false;
  let count= 0;
 a.forEach((box)=>
{
    box.addEventListener("click",()=>{
          if(turn0)
          {
           
            turn0 = false;
            box.innerText = "O";
          }
          else
          {
          
            turn0= true;
            box.innerText = "X";

          }
          box.disabled = true;
           count++;
           console.log(count);
           
         if(winner())
         {
            if(turn0)
            {
                let c= document.createElement("p");
                c.innerText = "PLAYERX WIN!!"
                c.setAttribute("class","none")
                let d = document.querySelector("main")
               d.prepend(c);

               let e = document.createElement("p");
               e.innerText = "NEW GAME";
               e.setAttribute("class","non");

               d.prepend(e);
               
               let rese = document.querySelector("#reset");
               e.addEventListener("click",rese.onclick)

               e.addEventListener("click",()=>
            {
                e.remove();
            })


               a.forEach((boxes)=>{

                boxes.disabled =true;

               })
                
            }
            else
            {
                let c= document.createElement("p");
                c.innerText = "PLAYERO WIN!!"
                c.setAttribute("class","none")
                let d = document.querySelector("main")
               d.prepend(c);

               let e = document.createElement("p");
               e.innerText = "NEW GAME";
               e.setAttribute("class","non");
               d.prepend(e);

               let rese = document.querySelector("#reset");
               e.addEventListener("click",rese.onclick);

               e.addEventListener("click",()=>
                {
                    e.remove();
                })
    

               a.forEach((boxes)=>{

                boxes.disabled =true;

               })
            }
           

         }
         if(count===9 && winner() === false)
            { 
 
             let c= document.createElement("p");
             c.innerText = "None WIN"
             c.setAttribute("class","none")
             let d = document.querySelector("main")
            d.prepend(c);

            let e = document.createElement("p");
               e.innerText = "NEW GAME";
               e.setAttribute("class","non");
               d.prepend(e);

               let rese = document.querySelector("#reset");
               e.addEventListener("click",rese.onclick);

               e.addEventListener("click",()=>
                {
                    e.remove();
                })
    
 
 
            }
      
    })
})

  function winner()
  {
    for(let boxes of win)
    {
        if(a[boxes[0]].innerText === a[boxes[1]].innerText && a[boxes[1]].innerText === a[boxes[2]].innerText  && a[boxes[0]].innerText !== "-"  && a[boxes[1]].innerText !== "-" && a[boxes[2]].innerText !== "-")
          return true;
   }
          return false;
  }
    //you can't  rewrite
// let a = document.querySelector("#container");
  
//    let con = "X";
//   a.onclick = (e)=>
//   {

//     if(e.target.innerText =="-")
//     {  
//         e.target.innerText = con;
//         if(con=="X")
//        {
//         con ="O";
//        }
//        else
//        {
//          con ="X";
//        }

//     }
    
      

//   }
  
   



     // you can rewrite it //
// let a = document.querySelector("#container");
// a.addEventListener("click", (e)=>
// {   
//     let c  = e.target;
//     let curr = c.innerText;
    
//      if(curr =="-")
//         c.innerText = "X";
//      else if(curr ==="X")
//           c.innerText = "O";
//      else if(curr === "O")
//           c.innerText = "-";

      

        
// })

let e =document.querySelector("#reset")
e.onclick = ()=>
{  
    let f = document.querySelector("#container");
    let g= f.children;
    // console.log(g);
    let t = 0;
    while(t!==9)
    {    
        g[t].disabled = false;
         g[t].innerText = "-";
         t++;
         
    }

    document.querySelector(".none").remove();
    document.querySelector(".non").remove();
    count =0;
  

}