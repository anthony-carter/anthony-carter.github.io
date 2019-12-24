const url = "https://api.propublica.org/congress/116";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Auth-Token": "cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

