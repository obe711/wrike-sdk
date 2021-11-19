class CustomFields {
  constructor(client) {
    this.client = client;
    this.endPoint = "/customfields"
  }

  async QueryCustomFields(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryCustomFieldsByIds(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async CreateCustomField(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async ModifyCustomField(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

}

module.exports = CustomFields;