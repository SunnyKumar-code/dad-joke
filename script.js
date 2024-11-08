let joke = document.querySelector('p');
let getBtn = document.querySelector('button');

async function getJoke() {
    joke.innerText = "Loading..."; 
    let header = {
        headers: { 'X-Api-Key': 'VDcV5lUlgPP1X3kCkfSQog==QgeCVnr0Mcu7a5Rp' }
    };
    let url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
    
    try {
        let res = await fetch(url, header);
        let data = await res.json();
        joke.innerText = `${data[0].joke} 😂😂` ;
    } catch (error) {
        joke.innerText = "Oops! Could not load a joke.";
        console.error("Error fetching joke:", error);
    }
};

getBtn.addEventListener('click', getJoke);
