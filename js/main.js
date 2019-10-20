//init UI

//select and named the button i want the event to happen
const searchGiphy = document.getElementById('submit');
//added an event listener to the button

searchGiphy.addEventListener('click', submit);

// wrote a function to get input when the button is clicked. 
//'click' is the event and 'submit is the function name
function submit(e) {
    const userText = document.querySelector('input').value;
    const xhr = new XMLHttpRequest();
    //console.log(userText)
    // wrote a function to say what should happen on click
    // if (userText.Text !== '') {
    //make http call
    xhr.open('GET',
        `https://api.giphy.com/v1/gifs/search?api_key=5zVtjNIcGO5vztzNFP0K7FKMiHwQnIcY&q=
        ${userText}&limit=5&offset=0
        &rating=G&lang=en`, true);


    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            //console.log(response)

            var output = '';

            if (response.meta.msg === 'OK') {
                response.data.forEach(function(gif) {
                    output += `<img src = '${gif.embed_url}'>`
                        //console.log(output)
                });
            } else {
                output += `<li>something went wrong</li>`
            }

            document.querySelector('#profile').innerHTML = output
        }
    }




    xhr.send();

    e.preventDefault();

}