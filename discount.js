const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calculate-btn");
const pResult = document.querySelector("#result");
btn.addEventListener("click", calculateDiscount);

function calculateDiscount() {
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  if (!price || !discount) {
    pResult.innerHTML = "Inputs are required";
    return;
  }

  if (discount > 100) {
    pResult.innerHTML = "Discount must be maximum up to 100%";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerHTML = `New price with discount: ${newPrice}$`;
}
