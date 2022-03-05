class Timelogs {
  constructor(client) {
    this.client = client;
    this.endPoint = "/timelogs"
  }

  async QueryTimelogs(params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryTimelogsRange(start, end, params = {}) {
    let trackedDate = `"start":"${start}","end":"${end}"`;
    return await this.client.get(this.endPoint + `?trackedDate={${trackedDate}}`, params);
  }

  async QueryContactTimelogs(id, params = {}) {
    return await this.client.get("/contacts/" + id + this.endPoint, params);
  }

  async QueryFolderTimelogs(id, params = {}) {
    return await this.client.get("/folders/" + id + this.endPoint, params);
  }

  async QueryTaskTimelogs(id, params = {}) {
    return await this.client.get("/tasks/" + id + this.endPoint, params);
  }

  async QueryCategoriesTimelogs(id, params = {}) {
    return await this.client.get("/timelog_categories/" + id + this.endPoint, params);
  }

  async QueryTimelogsByIds(ids, params = {}) {
    return await this.client.get(this.endPoint + "/" + ids.join(), params);
  }

  async CreateTimelog(id, params = {}) {
    return await this.client.post(this.endPoint + "/" + id, params);
  }

  async ModifyTimelog(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteTimelog(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = Timelogs;