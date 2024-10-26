const alldiv=document.querySelector(".all")
const topdiv=document.querySelector(".topf")
const selldiv=document.querySelector(".sell")
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
    },
    {
        id:4,
        image:"images/img-pro-04.jpg",
        name:"Papaya",
        price:15.79,
        stock:9,
        qty:0
    }
]
function displayallprod()
{
    vege.map((p1)=>{
        alldiv.innerHTML+=`
        <div class="col">
              <div class="card h-100 disp bg-light">
                <div class="position-relative">
                <img src=${p1.image} class="card-img-top" alt="...">

                <p class="price position-absolute top-0 end-0 text-center">SALE</p>
                <div class="hide">
                  <button class="text-white btn1 position-absolute bottom-0 start-0">Add to Cart</button>
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
displayallprod()
function disptopfprod()
{
    vege.slice(1,3).map((p2)=>{
        topdiv.innerHTML+=`
        <div class="col">
              <div class="card h-100 disp bg-light">
                <div class="position-relative">
                <img src=${p2.image} class="card-img-top" alt="...">

                <p class="price position-absolute top-0 end-0 text-center">SALE</p>
                <div class="hide">
                  <button class="text-white btn1 position-absolute bottom-0 start-0">Add to Cart</button>
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
                        $${p2.price}
                      </p>
                </div>
              </div>
        </div>
        `
    })
}
disptopfprod()
function dispsellprod()
{
    vege.filter((p3)=>{
        if(p3.id!=2 && p3.id!=3)
        {
            selldiv.innerHTML+=`
            <div class="col">
                  <div class="card h-100 disp bg-light">
                    <div class="position-relative">
                    <img src=${p3.image} class="card-img-top" alt="...">

                    <p class="price position-absolute top-0 end-0 text-center">SALE</p>
                    <div class="hide">
                    <button class="text-white btn1 position-absolute bottom-0 start-0">Add to Cart</button>
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
                            $${p3.price}
                          </p>
                    </div>
                    </div>
             </div>
        `
}})
}
dispsellprod()
