 // minus button method
 document.getElementById('minus').addEventListener('click',function(){
    console.log('minus button clicked');
    let decrese = document.getElementById("input").value;
    let decreseNumber = parseFloat(decrese);
    let currentDecreseNumber = (decreseNumber-1);
    document.getElementById('input').value = currentDecreseNumber;

    console.log(currentDecreseNumber);
    console.log(decreseNumber);
    let iphonePrice = document.getElementById('iphonePrice').innerText;
    let number = parseFloat(iphonePrice);
    console.log(number);
    let iphoneCurrentPrice = number-1219;
    console.log(iphoneCurrentPrice);
    document.getElementById('iphonePrice').innerText = iphoneCurrentPrice;

    let subtotal = document.getElementById('Subtotal').innerText;
    let subtotalNumber = parseFloat(subtotal);
    console.log("subtotal num =",subtotalNumber);
    document.getElementById('Subtotal').innerText=iphoneCurrentPrice;
 })

 // plus button method
    document.getElementById('plus').addEventListener('click',function(){
    console.log('plus button has been clicked');
    let increse = document.getElementById('input').value;
    increse=parseFloat(increse);
    console.log("the value =",increse);
    let currentNumber = (increse+1);
    document.getElementById('input').value=currentNumber;
    

    let currentPrice = document.getElementById('iphonePrice').innerText;
    currentPrice = parseFloat(currentPrice);
    let totalPrice = currentPrice+1219;
    console.log(totalPrice);
    document.getElementById('iphonePrice').innerText=totalPrice;

    let subtotal = document.getElementById('Subtotal').innerText;
    let subtotalNumber = parseFloat(subtotal);
    console.log("subtotal num =",subtotalNumber);
    document.getElementById('Subtotal').innerText=totalPrice;

    
 })

 // cover minus Button method

 let coverDecrese = document.getElementById('2ndMinus').addEventListener('click',function(){
    console.log("cover decrese button has been clicked");
    let currentInput = document.getElementById('2ndInput').value;
    let number = parseFloat(currentInput);
    console.log("the input is =",number);
    let currentInputNumber = number-1;
    document.getElementById('2ndInput').value=currentInputNumber;

    let coverCurrentPrice = document.getElementById('coverPrice').innerText;
    let coverPriceNumber = parseFloat(coverCurrentPrice);
    console.log(coverPriceNumber);

    let coverDecresePrice = coverCurrentPrice-59;
    console.log(coverDecresePrice);
    document.getElementById('coverPrice').innerText=coverDecresePrice;

    let subtotal = document.getElementById('Subtotal').innerText;
    let subtotalNumber = parseFloat(subtotal);
    console.log("subtotal num =",subtotalNumber);
    document.getElementById('Subtotal').innerText=coverDecresePrice;
 })

 // cover plus button method
 

 let coverIncrese = document.getElementById('2ndPlus').addEventListener('click',function(){
    console.log("cover plus button has been clicked");
    let coverPrice =  document.getElementById('coverPrice').innerText;
    let coverPriceNum = parseFloat(coverPrice);
    console.log(coverPriceNum);

       let coverIncreseQ = document.getElementById('2ndInput').value;
       let coverIncreseNumber = parseFloat(coverIncreseQ);
       console.log(coverIncreseNumber);
       let totalCover = coverIncreseNumber+1;
       document.getElementById('2ndInput').value = totalCover;

       let coverCurrentPrice = document.getElementById('coverPrice').innerText;
       let coverCurrentPriceNumber = parseFloat(coverCurrentPrice);
       console.log(coverCurrentPriceNumber);
       let totalCoverPrice = coverCurrentPriceNumber+59;
       console.log(totalCoverPrice);
       document.getElementById('coverPrice').innerText= totalCoverPrice;

       let subtotal = document.getElementById('Subtotal').innerText;
    let subtotalNumber = parseFloat(subtotal);
    console.log("subtotal num =",subtotalNumber);
    document.getElementById('Subtotal').innerText=totalCoverPrice;

  


 })

 