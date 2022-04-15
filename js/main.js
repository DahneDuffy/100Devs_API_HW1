import {apiKey} from './config.js';

//Does not handle accented letters yet

document.querySelector('button').addEventListener('click',getFetch);

function getFetch(){
  const name = document.querySelector('input').value;
  
  //initialize Bearer token from LOTR API (imported from postman)
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${apiKey}`);

  //initialize requestOptions object, including authorization header^
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`https://the-one-api.dev/v2/character?name=/${name}/i`, requestOptions)
    .then(response => response.json())//parse as JSON
    .then(result => {

      //console.log character object results, and clear previous results from DOM
      console.log(result.docs);
      document.querySelector('ul').innerText=null;

      //Iterate through array of character object and return info
      result.docs.forEach(obj=>{

        const li = document.createElement('li');
        li.textContent = `${obj.name}: ${obj.gender} ${obj.race}. born: ${obj.birth}.  died: ${obj.death}.  Learn more here: (${obj.wikiUrl})`;
        document.querySelector('ul').appendChild(li);
        
      })
    })
    .catch(error => console.log('error', error));
}