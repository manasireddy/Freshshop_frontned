let prods1=document.querySelector(".prods1")
let cartitemsel=document.querySelector(".offcanvas-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-light sup");

let vege = [
    {
        id:1,
        image:"images/img-pro-01.jpg",
        name:"Carrots",
        price:7.79,
        stock:10,
        qty:0
    },
    {
        id:2,
        image:"images/img-pro-02.jpg",
        name:"Tomato",
        price:9.79,
        stock:8,
        qty:0
    },
    {
        id:3,
        image:"images/img-pro-03.jpg",
        name:"Grapes",
        price:10.79,
        stock:13,
        qty:0
    }
]
function displayallprods1()
{
    vege.map((p1)=>{
        prods1.innerHTML+=`
        <div class="col">
              <div class="card h-100 disp bg-light">
                <div class="position-relative">
                <img src=${p1.image} class="card-img-top" alt="...">

                <p class="price position-absolute top-0 end-0 text-center">SALE</p>
                <div class="hide">
                  <button class="text-white btn1 position-absolute bottom-0 start-0" onclick="addtocart(${p1.id})">Add to Cart</button>
                  <ul class="list-unstyled text-white position-absolute bottom-0 end-0" style="background-color: #b0b435;">
                    <li class="p-2"><i class="fa-solid fa-eye" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="View"></i></li>
                    <li class="p-2"><i class="fa-solid fa-arrows-rotate" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Compare"></i></li>
                    <li class="p-2"><i class="fa-regular fa-heart" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Wishlist"></i></li>
                  </ul>
                </div>
                </div>
                <div class="card-body">
                      <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                      <p class="card-text price">
                        $${p1.price}
                      </p>
                </div>
              </div>
        </div>
        `
    })
}
for(let i=0;i<3;i++)
{
    displayallprods1()
}
let cart=JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
  //check if product already exist
  if(cart.some((item)=>item.id===id))
  {
    changeqty("plus",id);
  }
  else
  {
    const item=vege.find((product)=>product.id===id);
  cart.push({
    ...item,
    qty:1
  });

  }
  updatecart(); 
}
function updatecart()
{
  rendercartitems();
  rendersubtotal();
  localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
  cartitemsel.innerHTML="";
  cart.forEach((item)=>{
    cartitemsel.innerHTML+=`
                      <table class="table w-100">
                      <tbody>
                        <tr><td><img src=${item.image} height=50 width=50></td>
                        <td><p style="font-size:13px;">${item.name}</p></td>
                        <td>$${item.price}</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg></td>
                        <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i></td>
                        </tr></tbody></table>
                      `
  })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
              qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
              qty++;
            }
        }
        return {
          ...item,
          qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    localStorage.setItem("Amount",JSON.stringify(totalprice))
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}

