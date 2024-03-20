export type RemoteIncidentUpdate = {
  body: string;
  status: string;
  markdown: string;
};

export class IncidentUpdate {
  constructor(private readonly remoteIncidentUpdate: RemoteIncidentUpdate) {}

  get body() {
    return this.remoteIncidentUpdate.body;
  }

  get status() {
    return this.remoteIncidentUpdate.status;
  }

  get markdown() {
    return this.remoteIncidentUpdate.markdown;
  }
}

export const buildIncidentUpdateDTO = (remoteIncidentUpdate: RemoteIncidentUpdate) =>
  new IncidentUpdate(remoteIncidentUpdate);
