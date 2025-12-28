import "./main.css"
export default function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="title">
          <h1>
            Discover the World <br />
            With Modern Travel
          </h1>

          <p>
            Explore breathtaking destinations, book unforgettable tours, and
            create memories that last a lifetime. Travel smarter, travel
            further.
          </p>

          <button className="hero-btn">Explore Tours</button>
        </div>

        <div className="photos">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Tropical beach"
          />
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Mountain landscape"
          />
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            alt="City travel"
          />
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Desert adventure"
          />
        </div>
      </section>
    </main>
  );
}
