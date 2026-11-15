const services = [
 {id:1,name:"Dry Cleaning",description:"Professional care for delicate and everyday garments.",price:200,image:"https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=500&q=80"},
 {id:2,name:"Wash & Fold",description:"A fresh, clean wash with neatly folded clothes.",price:120,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"},
 {id:3,name:"Ironing",description:"Crisp, wrinkle-free clothes ready to wear.",price:80,image:"https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=500&q=80"},
 {id:4,name:"Premium Laundry",description:"Special fabric treatment with extra attention.",price:300,image:"https://images.unsplash.com/photo-1545173168-9f1947e381c4?auto=format&fit=crop&w=500&q=80"}
];
const cart=[];
const serviceList=document.getElementById("serviceList");
const cartItems=document.getElementById("cartItems");
const emptyState=document.getElementById("emptyState");
const totalAmount=document.getElementById("totalAmount");
const cartCount=document.getElementById("cartCount");
const form=document.getElementById("bookingForm");
const message=document.getElementById("formMessage");

function renderServices(){
 serviceList.innerHTML=services.map(s=>`
 <article class="service-card">
  <img src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/eaf4fb/347eae?text=Service'">
  <div><h3>${s.name}</h3><p>${s.description}</p>
   <div class="service-meta"><span class="price">₹${s.price.toFixed(2)}</span></div>
   <div class="actions"><button class="skip" type="button" data-skip="${s.id}">Skip Item ⊖</button><button class="add" type="button" data-add="${s.id}">Add Item ⊕</button></div>
  </div>
 </article>`).join("");
}
function renderCart(){
 cartItems.innerHTML=cart.map((item,i)=>`<tr><td>${i+1}</td><td>${item.name}</td><td>₹${item.price.toFixed(2)}</td><td><button class="remove" data-remove="${item.cartId}" type="button">Remove</button></td></tr>`).join("");
 emptyState.hidden=cart.length>0;
 totalAmount.textContent="₹"+cart.reduce((sum,item)=>sum+item.price,0).toFixed(2);
 cartCount.textContent=`${cart.length} ${cart.length===1?"item":"items"}`;
}
serviceList.addEventListener("click",event=>{
 const add=event.target.closest("[data-add]");
 const skip=event.target.closest("[data-skip]");
 if(add){
  const service=services.find(s=>s.id===Number(add.dataset.add));
  if(service){cart.push({...service,cartId:Date.now()+"-"+Math.random()});renderCart();add.textContent="Added ✓";setTimeout(()=>add.textContent="Add Item ⊕",900);}
 }
 if(skip){const card=skip.closest(".service-card");card.style.opacity=".4";setTimeout(()=>card.style.opacity="1",650);}
});
cartItems.addEventListener("click",event=>{
 const button=event.target.closest("[data-remove]");if(!button)return;
 const index=cart.findIndex(item=>String(item.cartId)===button.dataset.remove);
 if(index!==-1)cart.splice(index,1);renderCart();
});
form.addEventListener("submit",event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 if(cart.length===0){message.style.color="#d65363";message.textContent="Please add at least one service before booking.";return;}
 const name=document.getElementById("fullName").value.trim();
 const names=cart.map(item=>item.name).join(", ");
 const total=cart.reduce((sum,item)=>sum+item.price,0);
 message.style.color="#27804c";
 message.textContent=`Thank you, ${name}! Your booking for ${names} (₹${total.toFixed(2)}) has been received.`;
 cart.length=0;renderCart();form.reset();
});
document.getElementById("logoutBtn").addEventListener("click",()=>{
 document.getElementById("username").textContent="Guest";
 message.style.color="#71808a";message.textContent="You are now viewing the page as a guest.";
});
const menuToggle=document.getElementById("menuToggle"),navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.addEventListener("click",event=>{if(event.target.matches("a"))navLinks.classList.remove("open");});
renderServices();renderCart();
