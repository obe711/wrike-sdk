class WorkScheduleExceptions {
  constructor(client) {
    this.client = client;
    this.endPoint = "/workschedule_exclusions"
  }

  async QueryWorkScheduleExceptions(id, params = {}) {
    return await this.client.get("/workschedules/" + id + this.endPoint, params);
  }

  async QueryWorkScheduleException(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async CreateWorkScheduleException(params = {}) {
    return await this.client.post("/workschedules/" + id + this.endPoint, params);
  }

  async UpdateWorkScheduleException(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteWorkScheduleException(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = WorkScheduleExceptions;