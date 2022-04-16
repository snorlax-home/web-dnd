const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');
const stockCount = parseInt(document.getElementById('stock-count').innerHTML);

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  if (currentValue > 1) {
    inputField.value = currentValue - 1;
  } else {
    inputField.value = 1;
    alert("You can't add less than 1 item into your cart!");
  }
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  if (currentValue < stockCount) {
    inputField.value = currentValue + 1;
  } else {
    inputField.value = stockCount;
    alert("You can't have more products than we have in stock!");
  }
});
