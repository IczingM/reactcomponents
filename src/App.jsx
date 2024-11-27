function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" alt="Placeholder" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation. We are a
          passionate team dedicated to providing high-quality solutions for the
          technology industry.
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment to staying at the
          forefront of technological advancements. Our team of experts is ready
          to collaborate with you to tackle your most complex challenges and
          drive your success.
        </p>
        <button className="learn-button">Learn More</button>
      </div>
    </main>
  );
}
function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          {[
            { title: "Premium Bluetooth Headphones", price: "2,400 Baht" },
            { title: "Classic Leather Watch", price: "4,000 Baht" },
            { title: "Organic Green Tea", price: "79.99 Baht" },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src="https://placehold.co/300x300" alt={product.title} />
              <h3>{product.title}</h3>
              <p className="product-price">{product.price}</p>
              <Button />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}
function Button() {
  return <button className="add-to-cart-button-secondary">Add to Cart</button>;
}
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;

