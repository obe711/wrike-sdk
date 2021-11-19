class Account {
  constructor(client) {
    this.client = client;
    this.endPoint = "/account"
  }

  async QueryAccounts(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async ModifyAccount(params = {}) {
    return await this.client.put(this.endPoint, params);
  }
}

module.exports = Account;