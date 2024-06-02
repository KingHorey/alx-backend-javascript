export default function getFullResponseAPI(success) {
  if (success === true) {
    return Promise.resolve(
      {
        body: 200,
      },
    );
  }

  return Promise.reject(new Error('The Fake API is not working'));
}
