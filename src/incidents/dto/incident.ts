import { RemoteIncidentUpdate, buildIncidentUpdateDTO } from '@/incidents/dto/incident-update';

type RemoteIncident = {
  impact: string;
  name: string;
  status: string;
  url: string;
  resolved_at: string;
  updated_at: string;
  created_at: string;
  incident_updates: RemoteIncidentUpdate[];
};

export class Incident {
  constructor(private readonly remoteIncident: RemoteIncident) {
    this.remoteIncident.incident_updates = remoteIncident.incident_updates.map(buildIncidentUpdateDTO);
  }

  get impact() {
    return this.remoteIncident.impact;
  }

  get name() {
    return this.remoteIncident.name;
  }

  get status() {
    return this.remoteIncident.status;
  }

  get url() {
    return this.remoteIncident.url;
  }

  get resolvedAt() {
    return this.remoteIncident.resolved_at;
  }

  get updatedAt() {
    return this.remoteIncident.updated_at;
  }

  get createdAt() {
    return this.remoteIncident.created_at;
  }

  get incidentUpdates() {
    return this.remoteIncident.incident_updates;
  }
}

export const buildIncidentDTO = (remoteIncident: RemoteIncident) => new Incident(remoteIncident);
