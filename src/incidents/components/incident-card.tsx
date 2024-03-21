import { Incident } from '@/incidents/dto/incident';

type IncidentCardType = {
  incident: Incident;
};

export const IncidentCard = ({ incident }: IncidentCardType) => {
  return (
    <div className="max-w-3xl p-3 border border-gray-400 rounded-lg bg-[#1B1B1B]">
      <p className="mb-2 font-bold text-white">{incident.name}</p>
      <p className="text-gray-400">
        Criado em: <span className="text-gray-300">{incident.formatedCreatedAt}</span>
      </p>
      <p className="mb-4 text-gray-400">
        Status: <span className="text-gray-300">{incident.status}</span>
      </p>
      <a
        href={incident.url}
        className="mb-3 inline-flex gap-1 items-center px-2 py-1 font-medium text-center text-[#1B1B1B] bg-white rounded-lg hover:bg-gray-100 focus:outline-none"
      >
        Saiba mais
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </a>
    </div>
  );
};
