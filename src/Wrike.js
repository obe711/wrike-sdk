const Client = require("./Wrike/Client");

const Spaces = require("./Wrike/methods/Spaces");
const Account = require("./Wrike/methods/Account");
const Contacts = require("./Wrike/methods/Contacts");
const Users = require("./Wrike/methods/Users");
const Timelogs = require("./Wrike/methods/Timelogs");
const Groups = require("./Wrike/methods/Groups");
const Invitations = require("./Wrike/methods/Invitations");
const Workflows = require("./Wrike/methods/Workflows");
const CustomFields = require("./Wrike/methods/CustomFields");
const Comments = require("./Wrike/methods/Comments");
const Dependencies = require("./Wrike/methods/Dependencies");
const EDiscovery = require("./Wrike/methods/EDiscovery");
const HourlyRates = require("./Wrike/methods/HourlyRates");
const Blueprints = require("./Wrike/methods/Blueprints");
const AsyncJob = require("./Wrike/methods/AsyncJob");
const AccessRoles = require("./Wrike/methods/AccessRoles");
const AuditLog = require("./Wrike/methods/AuditLog");
const DataExport = require("./Wrike/methods/DataExport");
const TimelogCategories = require("./Wrike/methods/TimelogCategories");

/**
 * SDK library for accessing the wrike APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var Wrike = require('wrike-sdk');
 * var wrike = new Wrike({
 *     accessToken: process.env.PERMANANT_ACCESS_TOKEN,
 * });
 * ```
 *
 * @param {Object} params
 * @param {string} params.accessToken the API key used to authenticate the API
 * 
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
class Wrike {
  constructor(params = {}) {
    this.client = new Client(params);
    this.version = this.client.version;

    this.contacts = new Contacts(this.client);
    this.users = new Users(this.client);
    this.groups = new Groups(this.client);
    this.invitations = new Invitations(this.client);
    this.account = new Account(this.client);
    this.workflows = new Workflows(this.client);
    this.customfields = new CustomFields(this.client);
    // FoldersProjects
    // Tasks
    this.comments = new Comments(this.client);
    this.dependencies = new Dependencies(this.client)
    this.timelogs = new Timelogs(this.client);
    this.timelogcategories = new TimelogCategories(this.client);
    // Attachments
    this.spaces = new Spaces(this.client);
    this.dataexport = new DataExport(this.client);
    this.auditlog = new AuditLog(this.client);
    this.accessroles = new AccessRoles(this.client);
    this.asyncjob = new AsyncJob(this.client);
    // Approvals
    // WorkSchedules
    // WorkScheduleExceptions
    // UserScheduleExceptions
    this.blueprints = new Blueprints(this.client);
    this.ediscovery = new EDiscovery(this.client);
    this.hourlyrates = new HourlyRates(this.client)
  }
}

module.exports = Wrike;