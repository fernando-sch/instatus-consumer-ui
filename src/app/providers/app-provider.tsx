import { ReactQueryProvider } from 'app/providers/react-query-provider';
import { ReactRouterDomProvider } from 'app/providers/react-router-dom-provider';

export const AppProvider = () => {
  return (
    <ReactQueryProvider>
      <ReactRouterDomProvider />
    </ReactQueryProvider>
  );
};
