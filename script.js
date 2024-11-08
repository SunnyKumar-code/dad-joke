let joke = document.querySelector('.joke');
let getBtn = document.querySelector('button');


async function getJoke() {
    joke.innerText = "Loading..."; 
    let header = {
        headers: { 'X-Api-Key': 'VDcV5lUlgPP1X3kCkfSQog==QgeCVnr0Mcu7a5Rp' },
    };
    let url = 'https://api.api-ninjas.com/v1/dadjokes';
    
    try {
        
        let res = await fetch(url, header);
        let data = await res.json();
        console.log(data);
        joke.innerText = `${data[0].joke} 😂😂` ;
    } catch (error) {
        console.log(error)
        joke.innerText = "Oops! Could not load a joke.";
        console.error("Error fetching joke:", error);
    }
};

getBtn.addEventListener('click', getJoke);
