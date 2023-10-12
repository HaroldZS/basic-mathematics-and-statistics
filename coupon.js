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

const couponList = [
  {
    name: "Regular",
    discount: 6,
  },
  {
    name: "Birthday",
    discount: 40,
  },
  {
    name: "Christmas",
    discount: 50,
  },
  {
    name: "Expert",
    discount: 80,
  },
  {
    name: "Gift",
    discount: 100,
  },
];

const calculateCouponObj = () => {
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

const calculateCouponObjArr = () => {
  const objArrPrice = Number(inputPrice.value);
  const objArrCoupon = inputCoupon.value;
  const objArrDiscount = couponList.find(
    (coupon) => coupon.name === objArrCoupon
  );

  if (!objArrPrice || !objArrCoupon) {
    pResult.innerHTML = "Inputs are required";
    return;
  }

  if (!objArrDiscount) {
    pResult.innerHTML = "Invalid coupon";
    return;
  }

  const newObjArrPrice = (objArrPrice * (100 - objArrDiscount.discount)) / 100;
  pResult.innerHTML = `New price with the coupon discount: ${newObjArrPrice}$`;
};

// btn.addEventListener("click", calculateCouponObj);
btn.addEventListener("click", calculateCouponObjArr);