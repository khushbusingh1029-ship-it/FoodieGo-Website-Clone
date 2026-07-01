import React from "react";

import "./App.css";

import {

FaClock,

FaEye,

FaStar,

} from "react-icons/fa";

const recipes = [

{

title: "Spicy Szechuan Chicken",

chef: "Chef Mei Lin",

category: "Dinner",

country: "Chinese",

rating: "4.8",

time: "10m",

views: "892 views",

level: "Medium",

image:

   "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",

},

{

title: "Thai Green Curry",

chef: "Sompong Sudarat",

category: "Dinner",

country: "Thai",

rating: "4.7",

time: "10m",

views: "1256 views",

level: "Hard",

image:

  "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Japanese Teriyaki Salmon",

chef: "Yuki Tanaka",

category: "Dinner",

country: "Japanese",

rating: "4.9",

time: "10m",

views: "1567 views",

level: "Easy",

image:

  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Korean Bibimbap",

chef: "Jisoo Kim",

category: "Dinner",

country: "Korean",

rating: "4.6",

time: "10m",

views: "1435 views",

level: "Medium",

image:

  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Vietnamese Pho",

chef: "Anh Nguyen",

category: "Soup",

country: "Vietnamese",

rating: "4.5",

time: "10m",

views: "1012 views",

level: "Hard",

image:

  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Indian Butter Chicken",

chef: "Rajesh Kumar",

category: "Main Dish",

country: "Indian",

rating: "4.9",

time: "15m",

views: "1789 views",

level: "Medium",

image:

  "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Greek Moussaka",

chef: "Eleni Papadopoulos",

category: "Dinner",

country: "Greek",

rating: "4.7",

time: "20m",

views: "876 views",

level: "Hard",

image:

  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

},

{

title: "Mexican Tacos Al Pastor",

chef: "Juan Carlos",

category: "Dinner",

country: "Mexican",

rating: "4.8",

time: "10m",

views: "1321 views",

level: "Medium",

image:

  "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1200&auto=format&fit=crop",

},

];

function App() {

return (

<div>

{/* navbar  */}

<nav className="navbar">

  <div className="logo">

    <h2>FoodieGO</h2>

  </div>

 <div className="nav">



  <ul className="nav-links">

    <li><a href="/">Home</a></li>

    <li><a href="/">About</a></li>

    <li><a href="/">Explore</a></li>

    <li><a href="/">How It Work</a></li>

    <li><a href="/">Contact Us</a></li>

  </ul>



  <button className="login-btn">Login</button>

 </div>



</nav>

    {/* main  */}

    <div className="main">

        {/* first  */}

<div className="first"><h1>Foodie on the Go With your Kodigo

</h1><p>Discover, Save, Share, and Savor: Explore Recipes, Connect with Cooks, and Review Delicious Dishes.</p><input type="text" placeholder="Search for recipes...." /><button>Search</button>

<div className="inside"><div className="in-first">12k<p>Users</p>

</div><div className="in-first">12k<p>Recipes</p>

</div><div className="in-first">12k<p>Downloads</p>

</div></div></div>{/* second  */}

<div className="second"><img

src="https://myfoodiego.vercel.app/assets/threePlateFood-BwecKOk9.png"

alt="Food"

style={{ width: "300px" }}

/>

</div>{/* third  */}

<div className="third"><img

src="https://myfoodiego.vercel.app/aboutImg.png"

alt="About"

style={{ width: "300px" }}

/>

</div>{/* forth  */}

<div className="forth"><h2>About Us</h2>

<p>Our platform is designed for food lovers, home cooks, and aspiring chefs alike. Whether you’re looking to discover new recipes, share your culinary creations, or connect with fellow food enthusiasts, Foodie Go is your go-to destination.

Join us on this delicious journey as we explore flavors from around the globe, celebrate diverse cuisines, and inspire each other to cook, share, and enjoy food together. Let’s make every meal a celebration</p>

</div></div>

    <div className="main-img">

      <img

src="https://myfoodiego.vercel.app/foodimages/header.png"

alt="header"

/>

</div>

  <div className="explore"><h1>Explore New Recipes</h1>

<p>Discover a variety of delicious recipes from around the world. Whether you're looking for quick meals, healthy options, or indulgent treats, we have something for everyone!</p>

  </div><RecipeCards/>

  <button className="seemore">See More </button>



</div>

);

}

export default App;

function RecipeCards() {

return (

<div className="recipe-container">

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



        <p className="chef">By {item.chef}</p>



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

