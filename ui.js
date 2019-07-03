class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    `<div class="card card-body">
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
            </div>
        </div>
    </div>`;
  }
}
