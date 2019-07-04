class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `<div class="card card-body">
        <div class="row">
            <div class="col-1-of-3">
                <img src="${user.avatar_url}">
                <a href="${
                  user.html_url
                }" target="_blank" class="btn">View Profile</a>
            </div>
            <div class="col-1-of-9>
               <span>Public Repos: ${user.public_repos}</span>
               <span>Public Gists: ${user.public_gists}</span>
               <span>Followers: ${user.followers}</span>
               <span>Following: ${user.following}</span>
               <br><br>
               <ul class="list-group">
                 <li class="list-group-item">Company: ${user.company}</li>
                 <li class="list-group-item">Blog: ${user.blog}</li>
                 <li class="list-group-item>Location: ${user.location}</li>
                 <li class="list-group-item>Created At: ${user.created_at}</li>
               </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = className;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
