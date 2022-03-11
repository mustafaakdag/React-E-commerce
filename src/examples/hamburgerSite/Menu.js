import React from 'react'

function Menu() {

  let metalGroups = [
    {
      name: 'Iron Maiden',
      description: 'Bruce Dickinson çok enteresan adam..Steve harris gitaristi',
      country: 'UK'
    },
    {
      name: 'Gojira',
      description: 'Fransa dan böyle bir grup çıkması da enteresan ',
      country: 'France'
    },
    {
      name: 'Furtherial',
      description: 'On numara grup',
      country: 'Turkey'
    },
  ]

  return (
    <>
      {/* Menu Section */}
      <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center">Our Menu</h1>

          {
            metalGroups.map((item, key) => {

              return (<>
                <br />
                <h4>{item.name}</h4>
                <p className="w3-text-grey">
                  {item.description} {item.country}
                </p>

              </>)
            })
          }






        </div>
        <div className="w3-col l6 w3-padding-large">
          <img
            src="https://www.w3schools.com/w3images/tablesetting.jpg"
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <hr />
    </>

  )
}

export default Menu
