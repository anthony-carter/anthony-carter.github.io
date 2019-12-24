const url = "https://api.propublica.org/congress/116/senate/members.json";
fetch(url, {
  method: "GET",
  mode: "CORS",
  headers: {
    "X-Auth-Token": "cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2"
  }
})
.then(response => response.json()) 
  .then(response => {
    renderResults(response.results[0].members)
})
