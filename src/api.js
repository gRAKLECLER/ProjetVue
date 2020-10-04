export function GetData(){
  return fetch("https://the-one-api.dev/v2/character?limit=100", {
    headers: new Headers({
      'Authorization': 'Bearer QwqDTghdYH_tZikaMTRV'
    })
  })
  .then(Response => Response.json())
}