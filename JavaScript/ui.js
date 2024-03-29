class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `<div class="card card-body">
        <div class="row">
            <div class="col-1-of-3">
                
                <a href="${
                  user.html_url
                }" target="_blank" class="btn"><img src="${
      user.avatar_url
    }">View Profile</a>
            </div>
            <div class="col-1-of-9>
               <span class="badge">Public Repos: ${user.public_repos}</span>
               <span class="badge">Public Gists: ${user.public_gists}</span>
               <span class="badge">Followers: ${user.followers}</span>
               <span class="badge">Following: ${user.following}</span>
               <br><br>
               <ul class="list-group">
                 <li class="list-group-item">Company: ${user.company}</li>
                 <li class="list-group-item">Blog: ${user.blog}</li>
                 <li class="list-group-item">Location: ${user.location}</li>
                 <li class="list-group-item">Created At: ${user.created_at}</li>
               </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body>
           <div class="row">
              <div class="col-1-of-6>
              <a class="repo-header" href="${repo.html_url}" target="_blank">${
        repo.name
      }</a>
              </div>
              <div class="col-1-of-6>
                <span class="badge">Stars: ${repo.stargazers_count}</span>
                <span class="badge">Watchers: ${repo.watchers_count}</span>
                <span class="badge">Forks: ${repo.forks_count}</span>
              </div>
           </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');

    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
