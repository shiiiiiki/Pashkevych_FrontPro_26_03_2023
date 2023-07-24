class User {
  #id = null;
  name = null;
  phone = null;
  website = null;
  email = null;
  constructor({ id, name, phone, website, email }) {
    this.#id = id;
    this.name = name;
    this.phone = phone;
    this.website = website;
    this.email = email;
  }

  static isUser(obj) {
    return obj instanceof User;
  }

  get id() {
    return this.#id;
  }
}

const user = new User(users[0]);
