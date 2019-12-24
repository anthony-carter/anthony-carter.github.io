var fetchConfig =
        fetch(https://api.propublica.org/congress/v1/116/senate/members.json, {
            method: "GET",
            headers: new Headers({
                "X-API-Key": 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2'
            })
        }).then(function (response) {
            if (response.ok)
                return response.json();
        }).then(function (json) {
          
          
