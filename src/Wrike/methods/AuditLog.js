class AuditLog {
  constructor(client) {
    this.client = client;
    this.endPoint = "/audit_log"
  }

  async Get(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
}

module.exports = AuditLog;