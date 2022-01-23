class Webhooks {
  constructor(client) {
    this.client = client;
    this.endPoint = "/webhooks"
  }

  /**
   * Create Account Webhooks
   * @param {string} params.hookUrl
   * @param {string} params.secret (optional) Client secret to check authenticity of the events later.
   * @param {array} params.events (optional) - Comma-separated list of events that client wants to subscribe to, in square brackets.
   *    Example: [AttachmentAdded,AttachmentDeleted]. If not specified, all events will be received.
   * @returns <Promise>
   */
  async CreateAccountWebhook(params = {}) {
    return await this.client.post(this.endPoint, params)
  }

  /**
   * Get Webhook(s) State
   * @returns <Promise>
   */
  async GetWebhooks() {
    return await this.client.get(this.endPoint);
  }

  /**
   * Get Webhook(s) by ids
   * @param {*} webhookId 
   * @returns 
   */
  async GetWebhooksByIds(ids = []) {
    return await this.client.get(this.endPoint + "/" + ids.join());
  }

  /**
   * Update Webhook State
   * @param {string} webhookId 
   * @param {string} status - Active | Suspended
   * @returns <Promise>
   */
  async UpdateWebhookState(webhookId, status) {
    return await this.client.put(`${this.endPoint}/${webhookId}`, { status });
  }
  /**
   * Delete Webhooks
   * @param {string} webhookId 
   * @returns <Promise>
   */
  async DeleteWebhookById(webhookId) {
    return await this.client.delete(`${this.endPoint}/${webhookId}`)
  }
}

module.exports = Webhooks;