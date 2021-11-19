class Contacts {
  constructor(client) {
    this.client = client;
    this.endPoint = "/contacts"
  }

  async QueryContacts(params = {}, ids) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryContactsByIds(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async QueryContactsHistory(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join() + "/contacts_history", params);
  }

  async ModifyContact(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }
}

module.exports = Contacts;