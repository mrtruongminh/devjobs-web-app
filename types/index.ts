export type Job = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  logoWidth: number;
  logoHeight: number;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};
