export default function AboutComp(){
  return (
    <section className="aboutcomp">
      <div className="abtcmptext">
        <header className="abtcmptext-header">
          <h1 className="title abtcmptext-h1">
            Little Lemon
          </h1>
          <h2 className="subtitle abtcmptext-h2">
            Chicago
          </h2>
        </header>
        <p className="p abtcmptext-p">
          Little Lemon is a charming restaurant where the scent of sea salt mingles with zesty citrus. Housed in a former fisherman’s shack, its sunny yellow awning and hand-painted lemon murals invite guests into a warm, family-run haven.
        </p>
      </div>
      <div className="abtcmpimg">
        <img 
        className="abtcmpimg-img imgover"
        src='/assets/images/photos/Mario and Adrian A.jpg'
        alt="Little Lemon Restaurant"/>
        <img
        className="abtcmpimg-img imgunder"
        src='/assets/images/photos/Mario and Adrian b.jpg'
        alt="Little Lemon Restaurant"/>
      </div>
    </section>
  )
}