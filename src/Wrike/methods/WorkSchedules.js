class WorkSchedules {
  constructor(client) {
    this.client = client;
    this.endPoint = "/workschedules"
  }

  async QueryWorkSchedules(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
  async QueryWorkSchedule(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async CreateWorkSchedule(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async UpdateWorkSchedule(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteWorkSchedule(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = WorkSchedules;