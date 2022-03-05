import React from 'react'

const OfficeMap=()=> {
  return (
    <div className="row d-flex mt-5">
    <div id="map" className="bg-white p-4">
        <iframe
      title="map"
      width="100%"
      height="400px"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      className="c-homemap__map-map"
      src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=28.787710189819336,77.28255462646484+(MissValentine%20Innerwear)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    ></iframe>
        </div>
    </div>
  )
}
export default OfficeMap;