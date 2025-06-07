export default function Hero(){
  return(
    <section
    aria-label="Hero section"
    className="hero"
    >
      <section
      aria-label="Content Section"
      className="hero-content"
      >
        <div
        aria-label="content-grid"
        className=".hero-content-grid"
        >
          <header>
            <h1
            aria-label="Display title"
            className="display-title stick-to-text text-yellow"
            >Little Lemon</h1>
            <h2
            aria-label="Subtitle"
            className="subtitle stick-to-text text-gray"
            >Chicago</h2>
          </header>
          <p
          aria-label="Hero Paragraph"
          className="stick-to-text paragraph py-5 text-gray"
          >Welcome to Little Lemon, a small bistro with big Mediterranean flavor. Founded by two friends, it’s built on love for fresh, simple food. Every dish brings warmth, tradition, and a touch of citrus.</p>
          <button
          aria-label="Reserve a table button"
          className="cta-button"
          type="button"
          onClick={``}
          >Reserve a Table</button>
        </div>
      </section>
      <img
      aria-label="Hero image" 
      className="hero-img"
      />
    </section>
  )
}