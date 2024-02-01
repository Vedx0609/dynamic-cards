import React , {useState} from 'react'
import './Cards-styles.css'

export default function DisplayCards() {

    const [selectedCar, setSelectedCar] = useState(0);
    const handleCarChange = (index) => {setSelectedCar(index);}

    const indexes = [1, 2, 3, 4, 5];
    const carDetails = [
        {
          title: 'Lamborghini Murcielago SV',
          modelYear: 2010,
          color: 'Neo Alderbaran',
          estimatedPrice: '$1,000,000',
          link: 'https://exclusivecarregistry.com/details/lamborghini/murcielago/21381',
        },
        {
          title: 'Pagani Zonda Cinque',
          modelYear: 2009,
          color: 'Verde Firenze',
          estimatedPrice: '$10,000,000',
          link: 'https://exclusivecarregistry.com/details/pagani/zonda/1482',
        },
        {
          title: 'Mclaren F1 GTR',
          modelYear: 1997,
          color: 'Gulf Livery',
          estimatedPrice: '$20,000,000',
          link: 'https://exclusivecarregistry.com/details/mclaren/f1/3852',
        },
        {
          title: 'Ferrari LaFerrari',
          modelYear: 2016,
          color: 'Rosso Corsa',
          estimatedPrice: '~$6,000,000',
          link: 'https://exclusivecarregistry.com/details/ferrari/laferrari/1451',
        },
        {
          title: 'Lamborghini Veneno',
          modelYear: 2013,
          color: 'Girgio Metalluro - Rosso Trim',
          estimatedPrice: '~$9,500,000',
          link: 'https://exclusivecarregistry.com/details/lamborghini/veneno/11',
        },
      ];

    return (
        <div id="wrapper">
            <h2>Vedant's Personal Favourites</h2>
            <div id="container">
                {indexes.map((carNumber, index) => (
                    <div key={carNumber}>
                        <input
                            type="radio"
                            name="cars"
                            id={`car${carNumber}`}
                            checked={index === selectedCar}
                            onChange={() => handleCarChange(index)}
                        />
                        <label htmlFor={`car${carNumber}`} className="cars">
                            <div className="card">
                                <div className="icon">{carNumber}</div>
                            </div>
                        </label>
                    </div>
                ))}
            </div>

            <div className="description-container">
                {indexes.map((carNumber) => (
                    <div 
                        key={`car${carNumber}-desc`}
                        className={`description ${selectedCar === carNumber - 1 ? 'visible' : 'hidden'}`}
                    >
                        <h3>{carDetails[carNumber - 1].title}</h3>
                        <p>
                            Model Year : {carDetails[carNumber - 1].modelYear}<br/>
                            Color : {carDetails[carNumber - 1].color}<br/>
                            Estimated Price : {carDetails[carNumber - 1].estimatedPrice}
                        </p>
                        <br/>
                        <a href={carDetails[carNumber - 1].link}>Click here for more information</a>
                    </div>
                ))}
            </div>
        </div>
    )
}