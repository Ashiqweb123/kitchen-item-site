
let total=0;
 function handleclick(target)
 {
    const productItems=target.childNodes[3].innerText
    const li =document.createElement('li')
    
    li.innerText=productItems
    const productList=document.getElementById("product-list")
    console.log(productList)
    productList.appendChild(li)
    const price=(target.childNodes[5].innerText.split(" ")[1])
    total=parseInt(total)+parseInt(price)
    console.log(total)
    const TotalPrice=document.getElementById('total-price')
    TotalPrice.innerText=total;
   
 }
 
 function discount()
 {
   const promoCodeInput = document.getElementById("discount-field").value.trim(); // Get the entered promo code
    if (promoCodeInput === "SELL200") { // Check if the promo code is "SELL200"
        total -= 200; 
        total = Math.max(0, total);
        
        updateTotal();
        alert("Promo code applied successfully!");
    } else {
        alert("Invalid promo code. Please try again.");
    }
 }

 function updateTotal() {
   const totalPriceElement = document.getElementById('total-price');
   totalPriceElement.innerText = total.toFixed(2); // Display total with 2 decimal places
}

document.getElementById("apply-btn").addEventListener("click", discount);