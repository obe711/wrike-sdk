class HourlyRates {
  constructor(client) {
    this.client = client;
    this.endPoint = "/hourly_rates_provision"
  }

  async Provision(ids, params = {}) {
    return await this.client.put("/contacts/" + ids.join() + this.endPoint, params);
  }
}

module.exports = HourlyRates;