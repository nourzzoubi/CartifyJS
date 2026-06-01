let cartSidebar = document.getElementById("cartSidebar");
let cartOverlay = document.getElementById("cartOverlay");
let shoppingBasket = document.getElementsByClassName("shopping-basket")[0];
let closeCart = document.getElementById("closeCart");

let products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Audio",
        price: 45,
        description: "Premium sound with deep bass and noise cancellation.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 60,
        description: "Track your health, steps, heart rate, and daily activity.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    },
    {
        id: 3,
        name: "Sport Sneakers",
        category: "Fashion",
        price: 75,
        description: "Comfortable sneakers for daily walking and training.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        id: 4,
        name: "Laptop Pro",
        category: "Electronics",
        price: 899,
        description: "Powerful laptop for coding, design, and productivity.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600"
    },
    {
        id: 5,
        name: "Classic Glasses",
        category: "Fashion",
        price: 35,
        description: "Modern glasses with a clean and stylish frame.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600"
    },
    {
        id: 6,
        name: "Luxury Perfume",
        category: "Home",
        price: 55,
        description: "Elegant fragrance with a premium long-lasting scent.",
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600"
    },
    {
        id: 7,
        name: "Studio Headset",
        category: "Audio",
        price: 95,
        description: "Clear audio headset for gaming, music, and calls.",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600"
    },
    {
        id: 8,
        name: "Gaming Console",
        category: "Electronics",
        price: 499,
        description: "Next-level gaming performance and entertainment.",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600"
    },
    {
        id: 9,
        name: "Water Bottle",
        category: "Sports",
        price: 20,
        description: "Keep your drink cold during workouts and outdoor days.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600"
    },
    {
        id: 10,
        name: "Vintage Camera",
        category: "Electronics",
        price: 120,
        description: "Classic camera style for creative photography lovers.",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600"
    },
    {
        id: 11,
        name: "Modern Chair",
        category: "Home",
        price: 150,
        description: "Minimal chair design for a clean room setup.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
    },
    {
        id: 12,
        name: "Running Shoes",
        category: "Fashion",
        price: 80,
        description: "Lightweight running shoes for comfort and speed.",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600"
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 70,
        description: "Portable speaker with strong bass and clean sound.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
    },
    {
        id: 14,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 25,
        description: "Smooth wireless mouse for work, gaming, and study.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600"
    },
    {
        id: 15,
        name: "Backpack",
        category: "Fashion",
        price: 65,
        description: "Stylish backpack for university, travel, and daily use.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    },
    {
        id: 16,
        name: "Desk Lamp",
        category: "Home",
        price: 40,
        description: "Elegant desk lamp for night work and study sessions.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
    },
    {
        id: 17,
        name: "Fitness Gloves",
        category: "Sports",
        price: 30,
        description: "Comfortable gloves for gym workouts and lifting.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
    },
    {
        id: 18,
        name: "Keyboard RGB",
        category: "Electronics",
        price: 110,
        description: "Mechanical keyboard with RGB lights and fast response.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
    },
    {
        id: 19,
        name: "Football Ball",
        category: "Sports",
        price: 35,
        description: "Durable football ball for training and matches.",
        image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=600"
    },
    {
        id: 20,
        name: "Earbuds Pro",
        category: "Audio",
        price: 85,
        description: "Small wireless earbuds with premium sound quality.",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600"
    }
];

let cart = [];
let currentCategory = "All";
let searchText = "";

// =====================
// Render Products
// =====================
function renderProducts(productsList) {
    let productsGrid = document.getElementById("productsGrid");

    productsGrid.innerHTML = "";

    if (productsList.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center text-center py-20">
                <span class="material-symbols-outlined text-7xl text-yellow-400/40 mb-4">
                    search_off
                </span>
                <h3 class="text-2xl font-bold text-white">No products found</h3>
                <p class="text-gray-400 mt-2">Try another keyword or category.</p>
            </div>
        `;
        return;
    }

    productsList.forEach(function (product) {
        productsGrid.innerHTML += `
            <div class="group bg-slate-500/10 border border-white/10 rounded-3xl overflow-hidden
                        hover:border-yellow-400/70 hover:shadow-[0_0_30px_rgba(250,204,21,0.18)]
                        transition-all duration-300">

                <div class="relative h-64 overflow-hidden bg-white/5">
                    <img src="${product.image}"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">

                    <span class="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                        ${product.category}
                    </span>
                </div>

                <div class="p-5">
                    <h3 class="text-xl font-bold text-white">${product.name}</h3>
                    <p class="text-gray-400 text-sm mt-2">${product.description}</p>

                    <div class="flex items-center justify-between mt-5">
                        <span class="text-2xl font-bold text-yellow-400">$${product.price}.00</span>

                        <button class="addToCart px-4 py-2 rounded-xl bg-yellow-400 text-black font-bold
                                        hover:bg-yellow-300 active:scale-95 transition-all"
                                data-id="${product.id}">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// =====================
// Search + Filter Together
// =====================
function applyFiltersAndSearch() {
    let result = products.filter(function (product) {
        let matchesCategory;

        if (currentCategory === "All") {
            matchesCategory = true;
        } else {
            matchesCategory = product.category === currentCategory;
        }

        let productName = product.name.toLowerCase();
        let productDescription = product.description.toLowerCase();
        let productCategory = product.category.toLowerCase();

        let matchesSearch =
            productName.includes(searchText) ||
            productDescription.includes(searchText) ||
            productCategory.includes(searchText);

        return matchesCategory && matchesSearch;
    });

    renderProducts(result);
}

// =====================
// Active Filter Button
// =====================
function setActiveFilter(clickedButton) {
    let filterButtons = document.querySelectorAll(".filterBtn");

    filterButtons.forEach(function (button) {
        button.classList.remove(
            "bg-yellow-400",
            "text-black",
            "border-yellow-400",
            "shadow-[0_0_18px_rgba(250,204,21,0.35)]"
        );

        button.classList.add(
            "bg-slate-500/10",
            "text-gray-300",
            "border-white/10"
        );
    });

    clickedButton.classList.remove(
        "bg-slate-500/10",
        "text-gray-300",
        "border-white/10"
    );

    clickedButton.classList.add(
        "bg-yellow-400",
        "text-black",
        "border-yellow-400",
        "shadow-[0_0_18px_rgba(250,204,21,0.35)]"
    );
}

// =====================
// Filter Events
// =====================
let filterButtons = document.querySelectorAll(".filterBtn");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentCategory = button.dataset.category;

        applyFiltersAndSearch();

        setActiveFilter(button);
    });
});

// =====================
// Search Event
// =====================
let searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        searchText = searchInput.value.toLowerCase().trim();

        applyFiltersAndSearch();
    });
}

// =====================
// Open / Close Cart
// =====================
function openCart() {
    cartSidebar.classList.remove("translate-x-full");

    cartOverlay.classList.remove("hidden");

    setTimeout(function () {
        cartOverlay.classList.remove("opacity-0");
    }, 10);
}

function closeCartSidebar() {
    cartSidebar.classList.add("translate-x-full");

    cartOverlay.classList.add("opacity-0");

    setTimeout(function () {
        cartOverlay.classList.add("hidden");
    }, 300);
}

// =====================
// Add To Cart
// =====================
function addToCart(productId) {
    let selectedProduct = products.find(function (product) {
        return product.id === productId;
    });

    if (!selectedProduct) {
        return;
    }

    let productInCart = cart.find(function (item) {
        return item.id === productId;
    });

    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            category: selectedProduct.category,
            quantity: 1
        });
    }

    renderCart();
    updateCartNumber();
    updateCartTotals();
    openCart();
}

// =====================
// Render Cart
// =====================
function renderCart() {
    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <span class="material-symbols-outlined text-7xl text-yellow-400/40 mb-4">
                    shopping_cart
                </span>

                <h3 class="text-xl font-bold text-white">Your cart is empty</h3>
                <p class="text-sm text-gray-400 mt-2">
                    Add products and they will appear here.
                </p>
            </div>
        `;
        return;
    }

    cart.forEach(function (item) {
        cartItems.innerHTML += `
            <div class="cartItem bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4
                        hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.12)]
                        transition-all duration-300"
                 data-id="${item.id}">

                <img src="${item.image}"
                     class="w-20 h-20 rounded-xl object-cover">

                <div class="flex-1">
                    <div class="flex justify-between gap-3">
                        <div>
                            <h3 class="font-bold text-white">${item.name}</h3>
                            <p class="text-sm text-gray-400">$${item.price}.00 each</p>
                        </div>

                        <button class="removeItem text-gray-400 hover:text-red-500 transition-all">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                    </div>

                    <div class="mt-4 flex items-center justify-between">
                        <div class="flex items-center gap-2 bg-black/30 rounded-full p-1">
                            <button class="decreaseQty w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all">
                                -
                            </button>

                            <span class="w-8 text-center font-bold">${item.quantity}</span>

                            <button class="increaseQty w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all">
                                +
                            </button>
                        </div>

                        <p class="font-bold text-yellow-400">
                            $${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

// =====================
// Cart Number
// =====================
function updateCartNumber() {
    let totalItems = 0;

    cart.forEach(function (item) {
        totalItems += item.quantity;
    });

    document.querySelector(".numItems").textContent = totalItems;
}

// =====================
// Cart Totals
// =====================
function updateCartTotals() {
    let subtotal = 0;

    cart.forEach(function (item) {
        subtotal += item.price * item.quantity;
    });

    let discount = 0;
    let total = subtotal - discount;

    document.getElementById("subtotalPrice").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("discountPrice").textContent = "-$" + discount.toFixed(2);
    document.getElementById("totalPrice").textContent = "$" + total.toFixed(2);
}

// =====================
// Global Click Events
// =====================
document.addEventListener("click", function (event) {
    let addButton = event.target.closest(".addToCart");
    let increaseButton = event.target.closest(".increaseQty");
    let decreaseButton = event.target.closest(".decreaseQty");
    let removeButton = event.target.closest(".removeItem");

    if (addButton) {
        let productId = Number(addButton.dataset.id);
        addToCart(productId);
    }

    if (increaseButton) {
        let cartItem = increaseButton.closest(".cartItem");
        let productId = Number(cartItem.dataset.id);

        cart.forEach(function (item) {
            if (item.id === productId) {
                item.quantity++;
            }
        });

        renderCart();
        updateCartNumber();
        updateCartTotals();
    }

    if (decreaseButton) {
        let cartItem = decreaseButton.closest(".cartItem");
        let productId = Number(cartItem.dataset.id);

        cart.forEach(function (item) {
            if (item.id === productId && item.quantity > 1) {
                item.quantity--;
            }
        });

        renderCart();
        updateCartNumber();
        updateCartTotals();
    }

    if (removeButton) {
        let cartItem = removeButton.closest(".cartItem");
        let productId = Number(cartItem.dataset.id);

        cart = cart.filter(function (item) {
            return item.id !== productId;
        });

        renderCart();
        updateCartNumber();
        updateCartTotals();
    }
});

// =====================
// Cart Sidebar Events
// =====================
shoppingBasket.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartSidebar);
cartOverlay.addEventListener("click", closeCartSidebar);

// =====================
// First Load
// =====================
renderProducts(products);
renderCart();
updateCartNumber();
updateCartTotals();