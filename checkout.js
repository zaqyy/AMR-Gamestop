document.getElementById('checkoutForm').addEventListener('submit', function (e) {e.preventDefault();
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);// basically delivery of the product is in the next 3 days
    showToast(`Thank you for your purchase!\nYour order will be delivered by: ${deliveryDate.toDateString()}`);
    window.location.href = "index.html";
});

// submit button

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);
  
    alert(`Thank you for your purchase!\nYour order will be delivered by: ${deliveryDate.toDateString()}`);
    
    // Optional: redirect or clear the form
    window.location.href = "index.html"; // or another page

    localStorage.removeItem("cart")
  });
  

  const items = {
    "qty1": { name: "Xbox Elite Controller", price: 49108.60 },
    "qty2": { name: "Xbox Wireless Headset", price: 29763.42 },
    "qty3": { name: "Pulse Cipher Controller", price: 20833.50 },
    "qty4": { name: "Access™ Controller", price: 26786.78 },
    "qty5": { name: "PS Portal Midnight", price: 59529.82 },
    "qty6": { name: "PULSE Elite Headset", price: 44646.62 },
    "qty7": { name: "PULSE Explore Earbuds", price: 59529.82 },
    "qty8": { name: "XBOX Series X Galaxy Black", price: 163712.20 },
    "qty9": { name: "XBOX Series X Carbon Black", price: 142875.73 },
    "qty10": { name: "XBOX Series S All Digital Robot White", price: 74413.01 },
    "qty11": { name: "XBOX Series X All Digital Robot White", price: 127992.53 },
    "qty12": { name: "PlayStation 5 Console", price: 148829.00 },
    "qty13": { name: "PlayStation 5 Pro Console", price: 208361.80 },
    "qty14": { name: "DualSense Edge™ Wireless Controller", price: 59529.82 },
    "qty15": { name: "DualSense™ Wireless Controller", price: 22321.82 },
    "qty16": { name: "Nintendo Switch Lite", price: 59529.82 },
    "qty17": { name: "Nintendo Switch – OLED Model", price: 104179.41 },
    // this are the processors
    "qty19": { name: "Intel® Core™ i9 Processor", price: 212500.00 },
    "qty20": { name: "Intel® Core™ i7 Processor", price: 161000.00 },
    "qty21": { name: "Intel® Core™ i5 Processor", price: 155500.00 },
    "qty22": { name: "Intel® Core™ i3 Processor", price: 41500.00 },
    "qty23": { name: "AMD Ryzen™ 9 7950X Desktop Processor", price: 186500.00 },
    "qty24": { name: "AMD Ryzen™ 7 7700X Desktop Processor", price: 110500.00 },
    "qty25": { name: "AMD Ryzen™ 5 7600X Desktop Processor", price: 72000.00 }

    //now the graphic cards
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  function displayCheckoutCart() {
    // check on this
    const cart = JSON.parse(localStorage.getItem("checkoutCart"));
    if (!cart) return;

    const tbody = document.querySelector("#checkout-cart-table tbody");
    let total = 0;

    for (let id in cart) {
        const qty = cart[id];
        const item = items[id];
        const price = item.price * qty;
        total += price;

        tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${qty}</td>
        <td>${price.toFixed(2)}</td>
      </tr>
    `;
    }
    document.getElementById("checkout-total").innerText = total.toFixed(2);
  }

  window.onload = displayCheckoutCart

  // remove button on different pages doesnt work