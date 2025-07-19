document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const entries = {};
    formData.forEach((value, key) => {
      entries[key] = value;
    });
  
    console.log("Payment info (demo):", entries);
  
    document.getElementById("confirmation").innerText =
      "Payment info received. (Demo only, no real payment processed.)";
  
    this.reset();
  });