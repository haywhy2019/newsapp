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
        //`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userText}&api-key=7AsSNEQ3yLt3hAU11oVrxZtqZWeERlIM`, true);
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userText}&fq=news_desk:("fashion")fq=source:("The New York Times")&api-key=7AsSNEQ3yLt3hAU11oVrxZtqZWeERlIM`, true);


    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response)

            var output = '';

            response.response.docs.forEach(function(form) {
                output += `<div class='container card bg-dark text-white'><div>HeadLine:<br>${form.headline.main} <br>Abstract:<br>${form.abstract} </div><br><a href ='${form.web_url}'>Read More</a></div>`

                console.log(output)

            });
        } else {
            output += `<li>something went wrong</li>`
        }

        document.querySelector('#profile').innerHTML = output
    }





    xhr.send();

    e.preventDefault();

}