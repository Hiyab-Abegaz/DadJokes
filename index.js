
//Creating event listener for button to genereate jokes
// connects to the h1 in html
const jokes = document.getElementById('joke')
const button = document.querySelector('.clicker')
button.addEventListener('click', function(event){
    //Call specific funtions I want to happen after clicking
    getDadJoke();
})

//Reterive Joke 
//Set joke to screen
const getDadJoke =  async () => {
    const tellDadJokesUrl = 'https://icanhazdadjoke.com/';
        let response;
        try {
            response = await axios.get(tellDadJokesUrl, { headers: { "Accept": "text/plain" } });            
        } catch (error) {
            response =  "Sorry son, an error has occurred!";
            return 
        }
        const joke = response.data
        console.log(joke)
// connecting the h1 with the joke genorater so know it prints when button is clicked
        jokes.textContent = joke       
}
