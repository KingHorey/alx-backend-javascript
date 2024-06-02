import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(firstName, lastName);
  const user = signUpUser(fileName);

  return Promise.all([photo, user]).then((data) => data).catch(() => {});
}
