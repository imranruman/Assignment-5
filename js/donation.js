document.getElementById('add-for-event')
.addEventListener('click', function(event){
      event.preventDefault();
})

const donationInput = document.getElementById('add-donation').value;
   const donationNumber = parseFloat(donationInput);

const balance = document.getElementById('balance-donation').innerText;
  const balanceNumber = parseFloat(balance);

  const newBalance = donationInput + balanceNumber;

  document.getElementById('add-donation').innerText; = newBalance;
