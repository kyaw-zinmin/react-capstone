export default function About(){
  return(
    <section
    className="about"
    >
      <div
      aria-label="About Content"
      className="about-content"
      >
        <h1
        aria-label="About Content Title"
        className="display-title text-green stick-to-text row-span-1 row-start-2 self-end place-self-start"
        >Little Lemon</h1>
        <h2
        aria-label="About Content Subtitle"
        className="subtitle text-yellow stick-to-text row-span-1 row-start-3 self-start place-self-start"
        >Chicago</h2>
        <p
        aria-label="About Content Description"
        className="paragraph stick-to-text row-span-3 row-start-4 "
        >
          Little Lemon is a small bistro with big Mediterranean flavor. Founded by two friends, it’s built on love for fresh, simple food. Every dish brings warmth, tradition, and a touch of citrus.
        </p>
      </div>
      <div
      aria-label="About Images"
      className="about-imgs"
      >
        <img 
        className="abt-img col-span-3 col-start-2 row-span-4 row-start-1 z-1 justify-self-end self-start"
        alt="Chefs cooking at Little Lemon Restaurant"
        src={"/assets/images/photos/Mario and Adrian A.jpg"}
        />
        <img 
        className="abt-img col-span-3 col-start-1 row-span-4 row-start-3 z-0 justify-self-start self-end"
        alt="Chefs cooking at Little Lemon Restaurant"
        src={"/assets/images/photos/Mario and Adrian b.jpg"}
        />
      </div>
    </section>
  )
}