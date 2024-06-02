import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((y) => {
    const [photo, user] = y;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => console.error('Signup system offline'));
}
