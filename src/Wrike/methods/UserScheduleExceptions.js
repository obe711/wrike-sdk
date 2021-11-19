class UserScheduleExceptions {
  constructor(client) {
    this.client = client;
    this.endPoint = "/user_schedule_exclusions"
  }

  async QueryUserScheduleExceptions(id, params = {}) {
    return await this.client.get(this.endPoint, params);
  }

  async QueryUserScheduleException(id, params = {}) {
    return await this.client.get(this.endPoint + "/" + id, params);
  }

  async CreateUserScheduleException(params = {}) {
    return await this.client.post(this.endPoint, params);
  }

  async UpdateUserScheduleException(id, params = {}) {
    return await this.client.put(this.endPoint + "/" + id, params);
  }

  async DeleteUserScheduleException(id, params = {}) {
    return await this.client.delete(this.endPoint + "/" + id, params);
  }
}

module.exports = UserScheduleExceptions;