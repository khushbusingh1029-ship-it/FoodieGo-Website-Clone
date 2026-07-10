import React, { useState } from "react";
import { FaClock, FaEye, FaStar } from "react-icons/fa";
import "./App.css";
const recipes = [
  {
    title: "Dosa",
    rating: "4.8",
    time: "10m",
    views: "892 views",
    level: "Medium",
    image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-dosa-is-sitting-on-a-plate-and-sauce-image_2887017.jpg",
  },
  {
    title: "Thali",
    rating: "4.7",
    time: "10m",
    views: "1256 views",
    level: "Hard",
    image:
    "https://media.istockphoto.com/id/952317478/photo/indian-thali-food.jpg?s=170667a&w=0&k=20&c=_URIfzpym2r5dUW1eaKwkqxTyTD1dqG-eNBM2ekdvXQ=",
  },
  {
    title: " Sandwich",
    rating: "4.9",
    time: "10m",
    views: "1567 views",
    level: "Easy",
    image:
    "https://recetinas.com/wp-content/uploads/2022/07/sandwich-club.jpg",

  },
  {
    title:"Rice",
   
    rating: "4.6",
    time: "10m",
    views: "1435 views",
    level: "Medium",
    image:"https://www.secondrecipe.com/wp-content/uploads/2018/07/tamarind-rice-2019-2.jpg",
  },
  {
    title: "Samosa",
    rating: "4.5",
    time: "10m",
    views: "1012 views",
    level: "Hard",
    image:
    "https://www.zedamagazine.com/wp-content/uploads/2018/06/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg",
  },
  {
    title: "Momos",
    rating: "4.9",
    time: "15m",
    views: "1789 views",
    level: "Medium",
    image:
    "http://4.bp.blogspot.com/-BD6z0rLHgCQ/VBlZyMzRbdI/AAAAAAAAAL4/oAc_IiFGUyM/s1600/Veg-momos.jpg",
  },
  {
    title: "Burger",
    rating: "4.7",
    time: "20m",
    views: "876 views",
    level: "Hard",
    image:
      "https://static.vecteezy.com/system/resources/previews/037/264/771/non_2x/ai-generated-food-for-fast-food-in-form-of-delicious-hot-homemade-burger-with-meat-cutlet-and-vegetables-free-photo.jpg",
  },
  {
    title: "Pizza",
    rating: "4.8",
    time: "10m",
    views: "1321 views",
    level: "Medium",
    image:
      "https://images5.alphacoders.com/357/thumb-1920-357914.jpg",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredRecipes(recipes);
      return;
    }

    const result = recipes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredRecipes(result);
  };

  return (

    <div>
      {/* navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>FoodieGO</h2>
        </div>

        <div className="nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#explore">Explore</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* main */}
      <div className="main" id="home">
        <div className="first">
          <h1>Foodie on the Go With your Kodigo</h1>
          <p>
            Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks,
            and Review Delicious Dishes.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for recipes...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}><a href="#explore">Search</a></button>
          </div>

          <div className="inside">
            <div className="in-first">12k<p>Users</p></div>
            <div className="in-first">12k<p>Recipes</p></div>
            <div className="in-first">12k<p>Downloads</p></div>
          </div>
        </div>

        <div className="second">
          <img
            src="https://myfoodiego.vercel.app/assets/threePlateFood-BwecKOk9.png"
            alt="Food"
            style={{ width: "300px" }}
          />
        </div>

        <div className="third">
          <img
            src="https://myfoodiego.vercel.app/aboutImg.png"
            alt="About"
            style={{ width: "300px" }}
          />
        </div>

        <div className="forth" id="about">
          <h2>About Us</h2>
          <p>
            Our platform is designed for food lovers, home cooks, and aspiring chefs alike.
            Whether you’re looking to discover new recipes, share your culinary creations,
            or connect with fellow food enthusiasts.
          </p>
        </div>
      </div>

      <div className="main-img">
        <img
          src="https://myfoodiego.vercel.app/foodimages/header.png"
          alt="header"
          />
      </div>

      <div className="explore" id="explore" >
        <h1>Explore New Recipes</h1>
        <p>
          Discover a variety of delicious recipes from around the world.
        </p>
      </div>
      <RecipeCards   recipes={filteredRecipes} />
      {/* <button className="seemore">
        See More
      </button> */}
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}
export default App;


function RecipeCards({ recipes }) {
  if (recipes.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        This Recipe is Not Available 😔
      </h2>
    );
  }

  return (
    <div className="recipe-container" >
      {recipes.map((item, index) => (
        <div className="recipe-card" key={index}>
          <div className="image-box">
            <img src={item.image} alt={item.title} />

            <span className={`level ${item.level.toLowerCase()}`}>
              {item.level}
            </span>
          </div>

          <div className="recipe-content">
            <h3>{item.title}</h3>


            <div className="tags">
              <span>{item.category}</span>
              <span>{item.country}</span>
            </div>

            <div className="info">
              <span>
                <FaStar /> {item.rating}
              </span>
              <span>
                <FaClock /> {item.time}
              </span>
              <span>
                <FaEye /> {item.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <h2>Reach Out
With FoodieGo Team</h2>
<p>We would love to hear from you! Whether you have questions, feedback,
   or need assistance, our team is here to help. Please
    fill out the form on the right, and
   we will get back to you as soon as possible.
    Your thoughts and suggestions are important to us!</p>
      </div>
      <div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send </button>
        </form>
      </div>
      </div>)
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Foodie Go</h2>
          <p>
            Your go-to platform for discovering and sharing delicious recipes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>Stay connected for new recipes & updates</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Foodie Go. All rights reserved.</p>
      </div>
    </footer>
  );
}










