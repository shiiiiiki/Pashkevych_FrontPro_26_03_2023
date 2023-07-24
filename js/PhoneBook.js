class PhoneBook {
  #contacts = [];
  #searchedContacts = [];
  #callInProgress = false;

  constructor(users) {
    this.#fillContacts(users);
  }

  #fillContacts(users) {
    users.forEach((userData) => {
      this.#contacts.push(new User(userData));
    });
  }

  addContact(contact) {
    if (contact instanceof User) {
      this.#contacts.push(contact);
    } else {
      console.log("Error: Invalid contact, must be an instance of User.");
    }
  }

  removeContact(userId) {
    this.#contacts = this.#contacts.filter((contact) => contact.id !== userId);
  }

  searchContacts(searchTerm) {
    this.#searchedContacts = this.#contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return this.#searchedContacts;
  }

  call(userId) {
    if (!this.#callInProgress) {
      const user = this.#contacts.find((contact) => contact.id === userId);
      if (user) {
        this.#callInProgress = true;
        callController.startCall(user.phone);
      } else {
        console.log("Error: User not found in contacts.");
      }
    } else {
      this.endCall();
    }
  }

  endCall() {
    if (this.#callInProgress) {
      callController.endCall();
      this.#callInProgress = false;
    }
  }

  renderUsers() {
    const phoneBookElement = document.querySelector(".contacts__list ul");

    phoneBookElement.innerHTML = "";

    this.#contacts.forEach((contact) => {
      const contactElement = document.createElement("li");
      contactElement.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      contactElement.dataset.userId = contact.id;

      const contactNameElement = document.createElement("span");
      contactNameElement.classList.add("contacts__contact");
      contactNameElement.textContent = contact.name;

      const buttonsContainer = document.createElement("div");

      const callButton = document.createElement("button");
      callButton.type = "button";
      callButton.classList.add("btn", "btn-success");
      callButton.innerHTML = '<i class="bi bi-telephone"></i>';
      callButton.addEventListener("click", () => this.call(contact.id));

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.classList.add("btn", "btn-danger");
      removeButton.innerHTML = '<i class="bi bi-trash"></i>';
      removeButton.addEventListener("click", () => {
        this.removeContact(contact.id);
        this.renderUsers();
      });

      buttonsContainer.appendChild(callButton);
      buttonsContainer.appendChild(removeButton);
      contactElement.appendChild(contactNameElement);
      contactElement.appendChild(buttonsContainer);

      phoneBookElement.appendChild(contactElement);
    });
  }

  setEvents() {
    const callButtons = document.querySelectorAll(
      ".contact button:first-child"
    );
    const removeButtons = document.querySelectorAll(
      ".contact button:last-child"
    );
    const buttonsAll = document.querySelectorAll(".contact button");

    callButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const userId = button.parentNode.dataset.userId;
        if (!this.#callInProgress) {
          this.#callInProgress = true;
          this.call(userId);

          buttonsAll.forEach((btn) => {
            btn.disabled = true;
            btn.classList.add("btn btn-secondary");
          });

          button.classList.remove("btn btn-success");
          button.classList.add("btn btn-danger");
        } else {
          this.endCall();

          buttonsAll.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("btn btn-secondary");
          });

          button.classList.remove("btn btn-danger");
          button.classList.add("btn btn-success");
        }
      });
    });

    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const userId = button.parentNode.dataset.userId;
        this.removeContact(userId);
        this.renderUsers();
      });
    });
  }
}

const phoneBook = new PhoneBook(users);
phoneBook.renderUsers();
phoneBook.setEvents();
