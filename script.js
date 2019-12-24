start('https://api.propublica.org/congress/v1/116/senate/members.json');

function start(url) {
    var fetchData = fetch(url, {
            method: "GET",
            headers: new Headers({
                "X-API-Key": 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2'
            })
        })
        .then(onDataFetched)
        .catch(onDataFetched);

}


