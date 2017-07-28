import axios from 'axios';

const urlPrefix = 'https://api.github.com';

// For high volume usage of the github API, you need to create github IDs:
const githubClientId = '';
const githubSecretId = '';

function getProfile(userName) {
  const url = `${urlPrefix}/users/${userName}${appendParams()}`;
  return axios.get(url).then(user => user.data);
}

function getRepos(userName) {
  const url = `${urlPrefix}/users/${userName}/repos${appendParams('?per_page=100')}`;
  return axios.get(url);
}

function getStarCount(repos) {
  return repos.data.reduce(
    (count, repo) => count + repo.stargazers_count, 
    0);
}

function calculateScore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function appendParams(params = '') {
  let response = params;

  if (githubClientId) {
    response += (params) ? '&' : '?';
    response += `client_id=${githubClientId}&client_secret=${githubSecretId}`;  
  }

  return response;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(data => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos),
      stars: getStarCount(repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export default {

  battle: (players) => 
    axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError),

  fetchPopularRepos: (language) => {
    let encodedUri = window.encodeURI(`${urlPrefix}/search/repositories` 
        + appendParams(`?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`));

    switch(language) {
      case 'C#':
        encodedUri = encodedUri.replace(/C#/, 'C%23');
        break;
      case 'C++':
        encodedUri = encodedUri.replace(/C\+\+/, 'C%2B%2B');
        break;  
    }

    return axios.get(encodedUri)
      .then(response => response.data.items);
  }
};