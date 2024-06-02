export default function getFullResponseAPI(success) {
  if (success === true){
    return new Promise(()=> {
      {
        status: 200,
        body: 'success'
      }
    })
  }
  else {
    return new Promise(() => 'The fake API is not working currently')
  }
}
