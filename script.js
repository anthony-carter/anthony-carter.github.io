let fetchSenators = () => {
 fetch('https://api.propublica.org/congress/v1/116/senate/members.json', {
  method: 'GET',
  mode: 'CORS',
  headers: {
  'X-API-Key': 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2'
  }
}).then(response => response.json()) 
  .then(response => {
    renderResults(response.results[0].members)
})}
