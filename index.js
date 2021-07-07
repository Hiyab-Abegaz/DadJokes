
//Creating event listener for button to genereate jokes
const button = document.querySelector('.btn')
button.addEventListener('click', function(event){
    //Call specific funtions I want to happen after clicking
    console.log('Ha Ha Ha');
    getDadJoke();
})
const getDadJoke =  async () => {
    const data = { Headers: { Accept: 'application/json'} }
    const res = await axios.get('https://icanhazdadjoke.com/', data)
    console.log(res)
}
