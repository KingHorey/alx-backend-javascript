import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);

  return Promise.allSettled([photo, user]).then((result) => {
    const results = result.map((x) => (
      {
        status: x.status,
        value: x.value || x.message,
      }
     ));
     return results;
    }).catch((err) => console.error(err));
}
