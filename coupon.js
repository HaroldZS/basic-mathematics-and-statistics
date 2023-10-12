const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calculate-btn");
const pResult = document.querySelector("#result");

const discounts = {
  Regular: 6,
  Birthday: 40,
  Christmas: 50,
  Expert: 80,
  Gift: 100,
};

const calculateCoupon = () => {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  const discount = discounts[coupon];

  if (!price || !coupon) {
    pResult.innerHTML = "Inputs are required";
    return;
  }

  if (!discount) {
    pResult.innerHTML = "Invalid coupon";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerHTML = `New price with the coupon discount: ${newPrice}$`;
};

btn.addEventListener("click", calculateCoupon);