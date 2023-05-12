import * as React from 'react';

// interfaces
export interface IContext {
  id?: number;
  title: string;
  subtitle: string;
}

interface Props {
  children: React.ReactNode;
}

// type
export type IsContextType = {
  campaign: IContext;
  setCampaign: any
};


export const IsContext = React.createContext<IsContextType | any>(null);

const IsProvider: React.FC<Props> = ({ children }) => {
  const [campaign, setCampaign] = React.useState<IContext>(
    {
      id: 1,
      title: 'Crônicas de Alsaid',
      subtitle: 'Entre areia e sangue'
    }
  );

  return <IsContext.Provider value={{ campaign, setCampaign }}>{children}</IsContext.Provider>;
};

export default IsProvider;