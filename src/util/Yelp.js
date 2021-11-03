const apiKey = 'h8dPyMjsH5Yi1gYIO4nBv3yRnO4B_SzkYdHRAr8eSqpC1oo1JnMZRmPLvkFF7TOY_5VhflCR8u76O-hy8Ty5a-tVKHlFUnS8bS1qEq37hlD7Tq8zXkXKyTiGXOuCYXYx';

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`), {
      headers: {
      Authorization: `Bearer: ${apiKey}`
      },
    }.then(response => {
      return response.json
    }).then((jsonResponse) => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        });
      }
    })
  } 
};

export default yelp;
