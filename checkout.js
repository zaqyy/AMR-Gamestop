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
    "qty25": { name: "AMD Ryzen™ 5 7600X Desktop Processor", price: 72000.00 },

    //now the graphic cards

    "qty26": { name: "GeForce RTX™ 4060 VENTUS 2X WHITE 8G OC", price: 125000.00 },
    "qty27": { name: "GeForce GTX 1660 SUPER™ VENTUS XS OC", price: 96000.00 },
    "qty28": { name: "GeForce GTX 1050 Ti 4GT OCV1", price: 61000.00 },
    "qty29": { name: "TUF Gaming GeForce RTX™ 3070 Ti OC Edition", price: 473500.00 },
    "qty30": { name: "TUF Gaming GeForce RTX™ 3080 Ti OC Edition", price: 530000.00 },
    "qty31": { name: "Asus ROG Strix GeForce RTX™ 3060 V2 OC Edition", price: 291667.00 },
    "qty32": { name: "GeForce RTX™ 4060 Ti GAMING X 8G", price: 235500.00 },

    // motherboard
    "qty33": { name: "X570-A PRO", price: 73000.00 },
    "qty34": { name: "B450 GAMING PLUS MAX", price: 43500.00 },
    "qty35": { name: "Z790 GAMING PLUS WIFI", price: 99500.00 },
    "qty36": { name: "MAG B650 TOMAHAWK WIFI", price: 93000.00 },
    "qty37": { name: "B650 GAMING PLUS WIFI", price: 76000.00 },
    "qty38": { name: "B450M PRO-VDH", price: 31500.00 },
    "qty39": { name: "MPG B550 GAMING PLUS", price: 65000.00 },

    //memory
    "qty40": { name: "VENGEANCE® LPX 16GB (2 x 8GB) DDR4 3200MHz C16", price: 13500.00 },
    "qty41": { name: "VENGEANCE® RGB 48GB (2x24GB) DDR5 5200MT/s CL38", price: 107500.00 },
    "qty42": { name: "DOMINATOR® PLATINUM RGB 32GB (2 x 16GB) DDR4 3200MHz C16", price: 51000.00 },
    "qty43": { name: "VENGEANCE® RGB 32GB (2x16GB) DDR5 5600MT/s CL36", price: 17500.00 },

    // storage devices
    "qty44": { name: "WD Elements Portable - 1TB", price: 2750.00 },
    "qty45": { name: "Baseus SSD Enclosure Type-C GEN2", price: 9850.00 },
    "qty46": { name: "JetFlash 700/730 USB Drive", price: 3500.00 },
    "qty47": { name: "JetFlash 930C USB Drive", price: 21500.00 },
    "qty48": { name: "SanDisk Desk Drive - 8TB", price: 249900.00 },
    "qty49": { name: "SPATIUM S270 SATA 2.5", price: 11500.00 },
    "qty50": { name: "ADATA SD620 External SSD", price: 27900.00 }

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