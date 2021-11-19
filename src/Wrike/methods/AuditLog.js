class AuditLog {
  constructor(client) {
    this.client = client;
    this.endPoint = "/audit_log"
  }

  async GetAuditLog(params = {}) {
    return await this.client.get(this.endPoint, params);
  }
}

module.exports = AuditLog;