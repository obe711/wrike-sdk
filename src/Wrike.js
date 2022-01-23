const Client = require("./Wrike/Client");

const Contacts = require("./Wrike/methods/Contacts");
const Users = require("./Wrike/methods/Users");
const Groups = require("./Wrike/methods/Groups");
const Invitations = require("./Wrike/methods/Invitations");
const Account = require("./Wrike/methods/Account");
const Workflows = require("./Wrike/methods/Workflows");
const CustomFields = require("./Wrike/methods/CustomFields");
const FoldersProjects = require("./Wrike/methods/FoldersProjects");
const Tasks = require("./Wrike/methods/Tasks");
const Comments = require("./Wrike/methods/Comments");
const Dependencies = require("./Wrike/methods/Dependencies");
const Timelogs = require("./Wrike/methods/Timelogs");
const TimelogCategories = require("./Wrike/methods/TimelogCategories");
const Attachments = require("./Wrike/methods/Attachments");
const Spaces = require("./Wrike/methods/Spaces");
const DataExport = require("./Wrike/methods/DataExport");
const AuditLog = require("./Wrike/methods/AuditLog");
const AccessRoles = require("./Wrike/methods/AccessRoles");
const AsyncJob = require("./Wrike/methods/AsyncJob");
const Approvals = require("./Wrike/methods/Approvals");
const WorkSchedules = require("./Wrike/methods/WorkSchedules");
const WorkScheduleExceptions = require("./Wrike/methods/WorkScheduleExceptions");
const UserScheduleExceptions = require("./Wrike/methods/UserScheduleExceptions");
const Blueprints = require("./Wrike/methods/Blueprints");
const EDiscovery = require("./Wrike/methods/EDiscovery");
const HourlyRates = require("./Wrike/methods/HourlyRates");
const Webhooks = require("./Wrike/methods/Webhooks");

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
    this.folders = new FoldersProjects(this.client);
    this.tasks = new Tasks(this.client);
    this.comments = new Comments(this.client);
    this.dependencies = new Dependencies(this.client)
    this.timelogs = new Timelogs(this.client);
    this.timelogcategories = new TimelogCategories(this.client);
    this.attachments = new Attachments(this.client);
    this.spaces = new Spaces(this.client);
    this.dataexport = new DataExport(this.client);
    this.auditlog = new AuditLog(this.client);
    this.accessroles = new AccessRoles(this.client);
    this.asyncjob = new AsyncJob(this.client);
    this.approvals = new Approvals(this.client);
    this.workschedules = new WorkSchedules(this.client);
    this.workscheduleexceptions = new WorkScheduleExceptions(this.client);
    this.userscheduleexceptions = new UserScheduleExceptions(this.client);
    this.blueprints = new Blueprints(this.client);
    this.ediscovery = new EDiscovery(this.client);
    this.hourlyrates = new HourlyRates(this.client);
    this.webhooks = new Webhooks(this.client);
  }
}

module.exports = Wrike;