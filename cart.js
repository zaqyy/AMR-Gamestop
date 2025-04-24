let cart = JSON.parse(localStorage.getItem("cart")) || {};
window.onload = updateTable;

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
    "qty18": { name: "Nintendo Switch", price: 89296.21 },
    // this are the processors
    "qty19": { name: "Intel® Core™ i9 Processor", price: 212500.00 },
    "qty20": { name: "Intel® Core™ i7 Processor", price: 161000.00 },
    "qty21": { name: "Intel® Core™ i5 Processor", price: 155500.00 },
    "qty22": { name: "Intel® Core™ i3 Processor", price: 41500.00 },
    "qty23": { name: "AMD Ryzen™ 9 7950X Desktop Processor", price: 186500.00 },
    "qty24": { name: "AMD Ryzen™ 7 7700X Desktop Processor", price: 110500.00 },
    "qty25": { name: "AMD Ryzen™ 5 7600X Desktop Processor", price: 72000.00 }

  };
  
function addToCart()
{
    cart = JSON.parse(localStorage.getItem("cart")) || {};

    for (let id in items) {
        const qty = parseInt(document.getElementById(id)?.value) || 0;
        if (qty > 0) {
            cart[id] = (cart[id] || 0) + qty;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart)); //saves cart
    updateTable();
    alert.showToast("Items added to cart!");
}

function updateTable() {
    const tbody = document.querySelector("#cart-table tbody");
    tbody.innerHTML = '';
    let total = 0;
  
    for (let id in cart) {
      const item = items[id];
      const qty = cart[id];
      const price = item.price * qty;
      total += price;
  
      tbody.innerHTML += `
        <tr id="row-${id}">
          <td>${item.name}</td>
          <td>${qty}</td>
          <td>${price.toFixed(2)}</td>
          <td><button class="remove-btn" onclick="removeItem('${id}')">Remove</button></td>
        </tr>
      `;
    }
  
    document.getElementById("total").innerText = total.toFixed(2);
  }
  

function saveFavourite() {
    localStorage.setItem("favouriteCart", JSON.stringify(cart));
    alert("Favourite Saved!!!");
}

function applyFavourite(){
    const fav = JSON.parse(localStorage.getItem("favouriteCart"));
    if (!fav) return alert("No favourite saved");
    for (let id in fav){
        document.getElementById(id).value = fav[id];
    }

    cart = fav;
    updateTable();
}

function clearFavourites() {
    const confirmFavClear = confirm("Are you sure you want to clear your saved favourite?")
    if (!confirmFavClear) return;

    localStorage.removeItem("favouriteCart");
    alert("Favourite has been cleared")
}

function buyNow(){
    if(Object.keys(cart).length === 0) {
        alert("Please add items to your cart before proceeding");
        return;
    }

    localStorage.setItem("checkoutCart", JSON.stringify(cart));

    window.location.href = "checkout.html" // need to create a webpage on this
    
}

// this is the remove item function for a specific product 
// incomplete: check on it
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
  
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
  
    container.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
  
    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
  }
  

function removeItem(id) 
{
    if (cart[id]){
        delete cart[id];
        localStorage.setItem("cart", JSON.stringify(cart)); //this updates the carts storage
        // check on this
        document.getElementById(id).value = 0; //this is to reset input 
        updateTable();
        showToast(`${items[id].name} removed from your cart.`);
    }
}