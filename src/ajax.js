const apiHost = 'https://data.ripple.com'

export default {
  async fetchStats() {
    try {
      let response = await fetch(apiHost + '/v2/stats');
      let responseJson = await response.json();
      statsJson = responseJson['stats'].slice(0,100)
      console.log(statsJson)
      return statsJson;
    }
    catch (error) {
      console.error(error)
    }
  }
}