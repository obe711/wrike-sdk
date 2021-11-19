class AsyncJob {
  constructor(client) {
    this.client = client;
    this.endPoint = "/async_job"
  }

  async Get(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }
}

module.exports = AsyncJob;