class AppController {
  constructor() {}

  static getHomepage(req, res) {
    res.status(200).send("Hello Holberton School!");
  }
}
