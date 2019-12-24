const url = 'https://api.propublica.org/congress/v1/116/senate/members.json';

fetch(url, {
            method: "GET",
            headers: new Headers({
                "X-API-Key": 'cHWA0cyVrIeIZHFmZyrlp3UBNFO1aqLn7LsYLij2'
            })
  })
    .then(response => response.json()) 
    .then(response => {
    renderResults(response.results[0].members)
  })
/*
function renderResults(data){
  console.log(data)
  const members = data.map((member) =>
    <li>
      <a href={member.url} target='_blank'>{`${member.first_name} ${member.last_name}, ${member.office}`}</a>
    </li>
    );

    ReactDOM.render(
      <ul>{members}</ul>,
      document.getElementById('members'))
}
*/
