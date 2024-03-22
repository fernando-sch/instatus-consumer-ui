import { IncidentCard } from 'incidents/components/incident-card';
import { useFetchIncidents } from 'incidents/hooks/use-fetch-incidents';

export const IncidentPage = () => {
  const { incidents } = useFetchIncidents();
  const isIncidentsEmpty = incidents.length === 0;

  return (
    <main className="bg-[#1B1B1B] w-full h-screen">
      <header className="flex items-center justify-center text-white min-h-28 max-h-30 bg-[#0E546D]">
        <h2 className="text-xl">Últimos Incidentes</h2>
      </header>
      <main className="flex justify-center mt-5">
        {isIncidentsEmpty ? (
          <p className="text-gray-300">Nenhum incidente encontrado</p>
        ) : (
          incidents.map((incident, index) => <IncidentCard key={index} incident={incident} />)
        )}
      </main>
    </main>
  );
};
