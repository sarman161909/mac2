const memory = document.getElementById('memory');

const secondMemory = document.getElementById('second-memory');

const secondStorage = document.getElementById('second-storage');

const thirdStorage = document.getElementById('third-storage');

const deliveryCharge = document.getElementById('delivery-charge');

const bestPrice = document.getElementById('best-price');

const memoryCost = document.getElementById('memory-cost');

const storageCost = document.getElementById('storage-cost');

const deliveryCost = document.getElementById('delivery-cost');

let totalPrice = document.getElementById('total-price');

const applyButton = document.getElementById('apply-btn');

const newtotal = document.getElementById('discount-total-price')

const firstStorage = document.getElementById('first-storage');
firstStorage.addEventListener('click', function () {
    storageCost.innerText = "0";
    
});

//total price
totalPrice.addEventListener('click', function() {
    
});

//input button
applyButton.addEventListener('click', function() {
    const applyInput = document.getElementById('apply-input');
    const inputText = applyInput.value;
   
   if(inputText == 'stevekaku'){
       const totalPriceText = totalPrice.innerText;
       const totalPriceValue = parseFloat(totalPriceText);
       const discount =  totalPriceValue - (totalPriceValue * 0.2);
      
      newtotal.innerText = discount;
      applyInput.value = '';
   }
   
});


//free delivery
const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function() {
    deliveryCost.innerText = "0";
});

//memory
  memory.addEventListener('click', function () {
    memoryCost.innerText = "0";

    updateTotal();
});
//16gb 2nd memory
secondMemory.addEventListener('click', function () {
    memoryCost.innerText = "180";

    updateTotal();

});
//storage
secondStorage.addEventListener('click', function () {
    storageCost.innerText = "100";

    updateTotal();

});
//third-storage
thirdStorage.addEventListener('click', function () {
   storageCost.innerText = "180";

   updateTotal();
});

//choose your delivery charge with cost 20
deliveryCharge.addEventListener('click', function () {
    deliveryCost.innerText = "20";

    updateTotal();

});

 //function er moddhe sob gulo jog korbo
 function updateTotal(){
    const bestDaam = parseInt(bestPrice.innerText);
    const memoryDaam = parseInt(memoryCost.innerText);
    const storageDaam = parseInt(storageCost.innerText);
    const deliveryDaam = parseInt(deliveryCost.innerText);
   
    const grandTotal = bestDaam + memoryDaam + storageDaam + deliveryDaam  ;

    totalPrice.innerText = grandTotal;

    newtotal.innerText = grandTotal;
};