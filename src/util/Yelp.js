const API_KEY =
  "4wyhA2DgRv3UwXLvVK_KF9vKoRWPm-whUrG9mwolrdaS97f9jCrBItahgaS8PBh_HKbmiCxUa_6nx0eD_YR-l5EFLFh9NLt2vL2doWRZi8AHeqH2uiqrbAXG2aJJXHYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      }
    )
      .then(resp => {
        return resp.json();
      })
      .then(jsonresp => {
        if (jsonresp.businesses) {
          console.log(jsonresp.businesses);
          return jsonresp.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.display_address,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
