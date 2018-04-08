const apiHost = 'https://data.ripple.com'

function addDay(date){
  let nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + 1)
  nextDate = nextDate.toISOString()
  nextDate  = nextDate.substr(0, nextDate.length-5) + nextDate.substr(nextDate.length-1);
  return nextDate
}

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    //keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    keyValuePairs.push(key + '=' + obj[key]);

  }
  return keyValuePairs.join('&');
}

export default {
  async fetchStats() {
    try {
      const response = await fetch(apiHost + '/v2/stats');
      const responseJson = await response.json();
      console.log(responseJson)
      statsJson = responseJson['stats'].slice(0,100)
      return statsJson;
    }
    catch (error) {
      console.error(error)
    }
  },
  async fetchPayments(date) {
    try {
      console.log('In fetchPayments')
      console.log(date)
      nextDate = addDay(date)
      console.log('nextDate: ', nextDate)
      const txPayloadObj = {'start':date,'end':nextDate}
      const txPayload = objToQueryString(txPayloadObj)
      const response = await fetch(apiHost + `/v2/payments/?${txPayload}`);
      const responseJson = await response.json();
      payments = responseJson['payments']
      console.log(payments)
      return payments;
    }
    catch (error) {
      console.error(error)
    }
  }
}