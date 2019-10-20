class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    //display profile in UI
    showProfile(user) {

            this.profile.innerHTML = `
        <div class='card card-body mb-3>
        <div class ='row'>
        <div class='col-md-3'>
        <img class='img-fluid mb-2' src="${gif.embed_url}"> 
        <a href='${gif.embed_url}' target='_blank' class='btn btn-primary btn-block mb-4'>View Profile</a>

        </div>
        <div class='col-md-9>
        <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
        <span class='badge badge-primary'>Public Gist: ${user.public_gist}</span>
        <span class='badge badge-primary'>followers: ${user.followers}</span>
        <span class='badge badge-info'>following: ${user.following}</span>
        <br> <br>
        <ul class="list-group">
        <li class="list-group-item">company:${user.company}</li>
        <li class="list-group-item">website/blog:${user.blog}</li>
        <li class="list-group-item">location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>

        </ul>


        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3>Latest Repos</h3>
        <div id="repos"></div>
        `;

        }
        // show alert
    showAlert(message, className) {
            // clear any remaining alert
            this.claerAlert();
            // create div
            const div = document.createElement('div');
            //add classes
            div.className = className;
            //Add text
            div.appendChild(document.createTextNode(message));
            //get parent
            const container = document.querySelector('.searchContainer')
                // get search box
            const search = document.querySelector('.search')
                // insert alert
            container.insertBefore(div, search);


            setTimeout(() => {
                this.claerAlert();
            }, 3000);

        }
        // clear alert message
    claerAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}