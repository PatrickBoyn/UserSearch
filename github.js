class GitHub {
  constructor() {
    // This is a public API, you can get your own key for free,
    // You just need it if you are going to make a lot of calls to the server.
    this.client_id = '30d094971baa5a82230c';
    this.client_secret = '2340b9d2900a5c07e147a2407f34ea5575366f9e';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
