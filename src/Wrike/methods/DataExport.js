class DataExport {
  constructor(client) {
    this.client = client;
    this.endPoint = "/data_export"
  }

  async Get(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async GetById(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async Refresh(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async GetSchema(params = {}) {
    return await this.client.get("/data_export_schema", params);
  }
}

module.exports = DataExport;