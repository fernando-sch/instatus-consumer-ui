import { useQuery } from '@tanstack/react-query';

import { axiosClient } from 'services/axios-client';

import { Incident, buildIncidentDTO } from 'incidents/dto/incident';

const useFetchIncidentsQuery = () => {
  return useQuery<Incident[]>({
    queryKey: ['incidents'],
    queryFn: () => axiosClient.get('/incidents').then((response) => response.data.data.map(buildIncidentDTO)),
  });
};

export const useFetchIncidents = () => {
  const { data: incidents = [] } = useFetchIncidentsQuery();
  return { incidents };
};
