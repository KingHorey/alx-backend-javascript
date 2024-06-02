import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  photo.then((y) => {
    const { body } = y;
    user.then((x) => console.log(body, x.firstName, x.lastName));
  }).catch(new Error('Signup system offline'));
}
