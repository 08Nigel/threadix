// PRODUCT DATABASE - Load from localStorage
let products = [];


// show the login page section

function showLoginPage() {
  document.body.innerHTML = `
    <style>
       body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to bottom right, #fff, #ffe6f0);
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .auth-container {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      width: 350px;
      text-align: center;
      animation: slideUp 0.8s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .auth-container h2 {
      margin-bottom: 20px;
      color: #ff4d88;
    }

    .auth-container form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .auth-container input {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      transition: border 0.3s;
    }

    .auth-container input:focus {
      border-color: #ff4d88;
      outline: none;
    }

    .auth-container button {
      background-color: #ff4d88;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .auth-container button:hover {
      background-color: #e6457a;
    }

    .toggle-link {
      margin-top: 10px;
      font-size: 13px;
      color: #666;
      cursor: pointer;
      text-decoration: underline;
    }

    </style>
    <div class="auth-container" id="authBox">
      <h2>Login to THREADIX</h2>
      <form id="loginForm">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div class="toggle-link" onclick="showSignupForm()">Don't have an account? Sign up</div>
    </div>
  `;
}

function showSignupForm() {
  const box = document.getElementById('authBox');
  box.innerHTML = `
    <h2>Create Your THREADIX Account</h2>
    <form id="signupForm">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <div class="toggle-link" onclick="showLoginPage()">Already have an account? Login</div>
  `;
}

//about us page
function aboutUsPage() {
  document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background-color: #ffffff;
        color: #333;
        animation: fadeIn 1s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      header {
        background-color: #008080;
        padding: 20px;
        text-align: center;
        color: white;
        font-size: 28px;
        font-weight: bold;
      }
      nav {
        background-color: #f8f8f8;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
        font-size: 16px;
      }
      nav a {
        color: #008080;
        text-decoration: none;
        font-weight: 500;
      }
      .about-container {
        padding: 40px 20px;
        max-width: 900px;
        margin: auto;
        text-align: center;
      }
      .about-container h2 {
        color: #008080;
        font-size: 32px;
        margin-bottom: 20px;
        animation: scaleUp 0.6s ease-in-out;
      }
      @keyframes scaleUp {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .about-container p {
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 30px;
      }
      .highlight {
        color: #ff69b4;
        font-weight: bold;
      }
      .team-section {
        margin-top: 40px;
      }
      .team-section h3 {
        font-size: 28px;
        color: #008080;
        margin-bottom: 20px;
      }
      .team-grid {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
      }
      .team-card {
        width: 220px;
        background-color: #f0f0f0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        animation: fadeIn 1s ease-in;
      }
      .team-card img {
        width: 100%;
        height: 220px;
        object-fit: cover;
      }
      .team-card .info {
        padding: 15px;
      }
      .team-card .info h4 {
        margin: 0;
        color: #008080;
        font-size: 20px;
      }
      .team-card .info p {
        margin: 5px 0 0;
        font-size: 16px;
        color: #555;
      }
      .back-btn {
        background-color: #ff69b4;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 40px;
      }
    </style>

    <header>THREADIX</header>
    <button class="back-btn" onclick="location.reload()">Back to Home</button>
    <nav>
      <a href="#home">Home</a>
      <a href="#">Just In</a>
      <a href="#">Specials</a>
      <a href="#">Contact Us</a>
      <a href="#">Follow Us</a>
    </nav>
    <div class="about-container">
      <h2>About Us</h2>
      <p>
        At <span class="highlight">THREADIX</span>, we believe fashion is more than clothing—it's a statement. 
        Our mission is to <span class="highlight">elevate your style</span> with exclusive designs, premium quality, 
        and bold creativity. Whether you're chasing trends or setting them, THREADIX is your go-to destination 
        for modern fashion that speaks volumes.
      </p>
      <p>
        Founded with passion and crafted with care, our collections blend timeless elegance with contemporary flair. 
        From streetwear to statement pieces, we curate fashion that fits your lifestyle and celebrates individuality.
      </p>

      <div class="team-section">
        <h3>Meet the Team</h3>
        <div class="team-grid">
          <div class="team-card">
            <img src="section image.jpg") alt="Nigel - Founder">
            <div class="info">
              <h4>Nigel</h4>
              <p>Founder</p>
            </div>
          </div>
          <div class="team-card">
            <img src="https://copilot.microsoft.com/th/id/BCO.7c4314d1-4bf2-4914-892c-2d96abac1718.png" alt="May - Designer">
            <div class="info">
              <h4>May</h4>
              <p>Designer</p>
            </div>
          </div>
          <div class="team-card">
            <img src="https://copilot.microsoft.com/th/id/BCO.6bed1b13-bc72-4a95-aaba-1602ec487320.png" alt="Nick - Tailor">
            <div class="info">
              <h4>Nick</h4>
              <p>Tailor</p>
            </div>
          </div>
        </div>
      </div>

      <button class="back-btn" onclick="location.reload()">Back to Home</button>
    </div>
  `;
}

function initializeDefaultProducts() {
  products = [
    {
        id: 1,
        name: "Hoodie",
        category: "shirts",
        price: 209.99,
        image: "https://images.unsplash.com/photo-1680292783974-a9a336c10366?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Great for casual outings"
    },
    {
        id: 2,
        name: "Hoodie",
        category: "shirts",
        price: 167.99,
        image: "https://images.unsplash.com/photo-1609873814058-a8928924184a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Great for casual outings"
    },
    {
        id: 3,
        name: "Hoodie",
        category: "shirts",
        price: 450.99,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Great for casual outings"
    },
    {
        id: 4,
        name: "Hoodie",
        category: "shirts",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1611817757591-c3f345024273?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Great for casual outings"
    },
    {
        id: 5,
        name: "Nike AF1",
        category: "Shoes",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Step into the future"
    },
    {
        id: 6,
        name: "Nike Deor",
        category: "Shoes",
        price: 5999.99,
        image: "https://images.unsplash.com/photo-1670105084645-d4e3c9800776?q=80&w=1578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Walk with your style"
    },
    {
        id: 7,
        name: "Nike Runner",
        category: "Shoes",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Tune your step"
    },
    {
        id: 8,
        name: "Adidas Gazielle",
        category: "Shoes",
        price: 1499.99,
        image: "https://images.unsplash.com/photo-1726312045271-63d746467b48?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Dress your attitude"
    },
    {
        id: 9,
        name: "Indian Dress",
        category: "dress",
        price: 3809.99,
        image: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Show your beauty"
    },
    {
        id: 10,
        name: "Amani DRess",
        category: "dress",
        price: 1800.99,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "The one you are looking for"
    },
    {
        id: 11,
        name: "Zara Dress",
        category: "dress",
        price: 879.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=783&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Be a lady in Red"
    },
    {
        id: 12,
        name: "Medi Dress",
        category: "dress",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1626193744876-3ee5bfe05902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Everyday midi dress"
    },
    {
        id: 13,
        name: "Sleezy T-Shirt",
        category: "shirts",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Express your attitude"
    },
    {
        id: 14,
        name: "Originals T-Shirt",
        category: "shirts",
        price: 40,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Express your thoughts"
    },
    {
        id: 15,
        name: "Custom T-Shirt",
        category: "shirts",
        price: 80.99,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Buy your style"
    },
    {
        id: 16,
        name: "Ferrari T-Shirt",
        category: "shirts",
        price: 119.99,
        image: encodeURI("section image.jpg"),
        rating: "★★★★☆",
        description: "Great for casual outings"
    },
    {
        id: 17,
        name: "For a Couple",
        category: "shirts",
        price: 70.99,
        image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Slide into your dress code"
    },
    {
        id: 18,
        name: "Gucci Hand Bag",
        category: "accessories",
        price: 3799.99,
        image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Slide into your dress code"
    },
    {
        id: 19,
        name: "Amani Hand Bag",
        category: "accessories",
        price: 1949.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Match your style"
    },
    {
        id: 20,
        name: "Gucci Hand Bag",
        category: "accessories",
        price: 170.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Complement your outfit"
    },
    {
        id: 21,
        name: "Louis Vitton Hand Bag",
        category: "accessories",
        price: 10000,
        image: "https://images.unsplash.com/photo-1691480288782-142b953cf664?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Carry your style"
    },
    {
        id: 22,
        name: "Nike air Bag",
        category: "accessories",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1573878930082-8f0fe89a2393?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Complete your look"
    },
    {
        id: 23,
        name: "Leather Custom Bag",
        category: "accessories",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1655303219938-3a771279c801?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Complement your outfit"
    },
    {
        id: 24,
        name: "Blitz Air Bag",
        category: "accessories",
        price: 1000,
        image: "https://images.unsplash.com/photo-1601987078664-863b07dc0907?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Carry your essentials"
    },
    {
        id: 25,
        name: "Sleek Bag",
        category: "accessories",
        price: 119.99,
        image: "https://plus.unsplash.com/premium_photo-1723649902661-216596f2ac1a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Great for carrying scholl books"
    },
    {
        id: 26,
        name: "Quatz Watch",
        category: "accessories",
        price: 1199.99,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Time is Money"
    },
    {
        id: 27,
        name: "Roman Watch",
        category: "accessories",
        price: 1865.99,
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Tell us the time"
    },
    {
        id: 28,
        name: "Fossil Watch",
        category: "accessories",
        price: 4000,
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Classic timepiece for any occasion"
    },
    {
        id: 29,
        name: "Luxury Watch",
        category: "accessories",
        price: 119.99,
        image: "https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Luxury timepiece for any occasion"
    },
    {
        id: 30,
        name: "Socks",
        category: "accessories",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1640026199235-c24aa417b552?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Comfortable and stylish socks for any occasion"
    },
    {
        id: 31,
        name: "Socks",
        category: "accessories",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1631180543602-727e1197619d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Comfortable and stylish socks for any occasion"
    },
    {
        id: 32,
        name: "Socks",
        category: "accessories",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1504659913281-61817e6e2e9b?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        description: "Comfortable and stylish socks for any occasion"
    },
  ];
  
}

let filteredProducts = [...products];
let currentCategory = null;
let currentPriceFilter = 'all';

// DISPLAY PRODUCTS
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');

    if (productsToShow.length === 0) {
        productGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/500x600?text=${product.name}'">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-rating">${product.rating}</span>
                <p class="product-price">R${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <button class="add-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
                    <button class="wishlist-btn" onclick="addToWishlist('${product.name}')">♡</button>
                </div>
            </div>
        </div>
    `).join('');
}

// FILTER BY CATEGORY
function filterByCategory(category) {
    currentCategory = currentCategory === category ? null : category;
    applyFilters();
}

// FILTER BY PRICE
function filterByPrice(range) {
    currentPriceFilter = range;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    applyFilters();
}

// APPLY ALL FILTERS
function applyFilters() {
    filteredProducts = products.filter(product => {
        let categoryMatch = !currentCategory || product.category === currentCategory;
        let priceMatch = true;

        if (currentPriceFilter === 'low') priceMatch = product.price < 50;
        else if (currentPriceFilter === 'mid') priceMatch = product.price >= 50 && product.price <= 100;
        else if (currentPriceFilter === 'high') priceMatch = product.price > 100;

        return categoryMatch && priceMatch;
    });

    displayProducts(filteredProducts);
}

// SEARCH PRODUCTS
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
    document.getElementById('searchInput').value = '';
}

// SORT PRODUCTS
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...filteredProducts];

    if (sortValue === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'newest') {
        sorted.reverse();
    }

    displayProducts(sorted);
}

// ADD TO CART
function addToCart(productName) {
    alert(`✓ "${productName}" added to cart!`);
}

// ADD TO WISHLIST
function addToWishlist(productName) {
    alert(`♡ "${productName}" added to wishlist!`);
}

// SCROLL TO PRODUCTS
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// TOGGLE SIDEBAR
function toggleSidebar(event) {
    event.preventDefault();
    const details = document.getElementById('categoryDetails');
    const body = document.body;
    
    if (details.open) {
        details.open = false;
        body.classList.remove('sidebar-open');
    } else {
        details.open = true;
        body.classList.add('sidebar-open');
    }
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', function() {

    // Initialize products directly
    initializeDefaultProducts();
    
    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });

    displayProducts(products);
});


//cart functionality
//*
function addToCart(products) {
  const product = products.find(p => p.name === productName);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
    console.log("Current cart:", cart);
    // You can also update the UI here (e.g., show cart count)
  } else {
    console.warn("Product not found:", productName);
  }
}
let cart = [];

// Show cart contents 
function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
    console.log("Current cart:", cart);
    function updateCartCount() {
  document.getElementById("cartLength").textContent = cart.length;
}
    updateCartCount();
  } else {
    console.warn("Product not found:", products);
  }
}

// the cart page functionalllity 

  // Example cart data
  let cartProducts = [
    { id: 1, name: "Black Hoodie", price: 209.99 },
    { id: 2, name: "Sneakers", price: 499.99 },
    { id: 3, name: "Luxury Watch", price: 119.99 }
  ];

  // Function to show cart items dynamically
  function showItems() {
    const cartDiv = document.getElementById("cartPage");

    // Build cart HTML dynamically
    let html = "<h2 style='color: rgb(209,36,36);'>Your Cart</h2>";

    if (cart.length === 0) {
      html += "<p>Your cart is empty.</p>";
      document.getElementById("cartLength").textContent = 0;
      cartDiv.innerHTML = html;
      return;
    }

    cartProducts.forEach((item, index) => {
      html += `
        <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding:10px 0;">
          <span>${item.name} - R${item.price.toFixed(2)}</span>
          <button class="remove-btn" style="background-color:rgb(209,36,36); color:#fff; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:14px;"
            onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    html += `<p id="total" style="text-align:right; font-size:18px; font-weight:bold; margin-top:20px; color:rgb(209,36,36);">Total: R${total.toFixed(2)}</p>`;

    // Inject HTML into cart div
    cartDiv.innerHTML = html;

    // Update cart length badge
    document.getElementById("cartLength").textContent = cart.length;
  }

  // Remove item from cart
  function removeItem(index) {
    cart.splice(index, 1);
    showItems();
  }
  //*/

  // contacy us page
