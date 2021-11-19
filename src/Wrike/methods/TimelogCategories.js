class TimelogCategories {
  constructor(client) {
    this.client = client;
    this.endPoint = "/timelog_categories"
  }

  async QueryTimelogCategories(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
}

module.exports = TimelogCategories;