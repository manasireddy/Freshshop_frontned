let cart=JSON.parse(localStorage.getItem("CART"))
let price=JSON.parse(localStorage.getItem("Amount"))
let cartel=document.getElementById("cprods")
cart.map((item,index)=>{
    cartel.innerHTML+=`
    <tr>
    <td><img src=${item.image} height=100 width=100></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.qty}</td>
    <td>${item.qty*item.price}</td>
    <td><i class="fa-solid fa-xmark"></i></td>
    </tr>
    `
})
document.getElementById("tot").innerHTML=price.toFixed(2)
document.getElementById("gtot").innerHTML=price+40+10+2































