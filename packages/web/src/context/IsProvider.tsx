import * as React from 'react';

// interfaces
export interface IContext {
  id: string;
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
  const campaignID: string | null = localStorage.getItem("campaignID");
  
  const [campaign, setCampaign] = React
    .useState<IContext>(
      !campaignID
        ? {
            id: "",
            title: "",
            subtitle: "",
          }
        : JSON.parse(campaignID)
    );

  return <IsContext.Provider value={{ campaign, setCampaign }}>{children}</IsContext.Provider>;
};

export default IsProvider;