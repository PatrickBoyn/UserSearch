const gitHub = new GitHub();
const ui = new UI();
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', e => {
  const userText = e.target.value;

  if (userText !== '') {
    gitHub.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile.
    ui.clearProfile();
  }
});
