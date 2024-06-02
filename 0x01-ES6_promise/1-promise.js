export default function getFullResponseAPI(success) {
  if (success === true) {
    return Promise.resolve(
      {
        status: 200,
        body: 'Success',
      },
    );
  }

  return Promise.reject(new Error('The Fake API is not working'));
}
