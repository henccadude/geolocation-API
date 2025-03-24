'use strict'

const errorHandler = function(err) {
  console.error(`this is my error ${err}`);
}

const getPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getJSON = async function(url, errorMsg = 'Something went wrong') {
  const response = await fetch(url);
  if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
  return await response.json();
}

const revealPosition = async function() {

  try {
    const position = await getPosition();
    const { latitude: lat, longitude:lng } = position.coords;
    const url1 = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    const url2 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`

    //responce from openstreetmap
    const data = await getJSON(url1)
    console.log(data.address.country);

    //responce from bigdatacloud
    const data1 = await getJSON(url2)
    console.log(data1.countryName)

  } catch(err) {
    errorHandler(err);
  }
}

revealPosition();

const parallelAPI = async function() {
  try 
  {const position = await getPosition();
  const { latitude: lat, longitude:lng } = position.coords;
  const resArr = await Promise.all([
    getJSON(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`),
    getJSON(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  ]);

  console.log(resArr[0].address.country);
  console.log(resArr[1].countryName);
  
  }catch(err) {
    errorHandler(err);
  }
}

parallelAPI();