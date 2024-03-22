import { IncomeStatementStatusEnum } from 'incidents/enums/incident-status-enum';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

type RemoteIncident = {
  impact: string;
  name: string;
  status: IncomeStatementStatusEnum;
  url: string;
  resolved_at: string;
  updated_at: string;
  created_at: string;
};

export class Incident {
  private static readonly statusMessages = {
    [IncomeStatementStatusEnum.Investigating]: 'Investigando',
    [IncomeStatementStatusEnum.Identified]: 'Identificado',
    [IncomeStatementStatusEnum.Monitoring]: 'Monitorando',
    [IncomeStatementStatusEnum.Resolved]: 'Resolvido',
  };

  constructor(private readonly remoteIncident: RemoteIncident) {}

  get impact() {
    return this.remoteIncident.impact;
  }

  get name() {
    return this.remoteIncident.name;
  }

  get status() {
    return Incident.statusMessages[this.remoteIncident.status] || '';
  }

  get url() {
    return this.remoteIncident.url;
  }

  get formatedCreatedAt() {
    const formatedDateTime = dayjs
      .utc(this.remoteIncident.created_at)
      .tz('America/Sao_Paulo')
      .format('DD/MM/YYYY [ás] HH:mm');

    return formatedDateTime;
  }
}

export const buildIncidentDTO = (remoteIncident: RemoteIncident) => new Incident(remoteIncident);
