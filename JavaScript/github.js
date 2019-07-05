const secret = new Secrets();

class GitHub {
  constructor() {
    // This is a public API, you can get your own key for free,
    // You just need it if you are going to make a lot of calls to the server.
    this.client_id = secret.clientId();
    this.client_secret = secret.clientSecret();
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }client_id=${this.client_id}&sort=${this.repos_sort}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
