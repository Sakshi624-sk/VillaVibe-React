import React from 'react'

export default function Regoins() {
  return (
    <>
    <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>Indulge in luxury and elegance with our curated selection of top pick villas, meticulously chosen for your ultimate getaway experience.</p>
        <div className="region_continer">
            <div className="card">
                <img src="/region1.jpg" alt="mountains" />
                <h2><span>90</span>Properties</h2>
            </div>
            <div className="card">
                <img src="/region2.jpg" alt="Coastline" />
                <h2><span>54</span>Properties</h2>
            </div>
        </div>
    </section>
    </>
  )
}
