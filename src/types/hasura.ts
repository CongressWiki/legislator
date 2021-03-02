export type Bill = {
  id: string;
  type: string;
  number: string;
  congress: string;
  title: string;
  subject: string;
  summary: string;
  updated_at: string;
  sponsor: Official;
  cosponsorships: Cosponsorship[];
  actions: Array<Record<string, any>>;
  status: string;
  status_at: string;
  introduced_at: string;
  created_at: string;
  by_request: boolean;
  bill_text: string;
};

export type Official = {
  id: string;
  first_name: string;
  last_name: string;
  preferred_name: string;
  political_party: string;
  is_active: boolean;
  position: string;
  rank: string;
  senate_terms: number;
  state: string;
  term_end_at: string;
  term_start_at: string;
  updated_at: string;
  born_at: string;
  created_at: string;
  district: string | null;
  gender: string;
  house_terms: number;
};

export type Cosponsorship = {
  id: string;
  original_cosponsor: boolean;
  sponsored_at: string;
  state: string;
  district: string;
  withdrawn_at: any;
  elected_official: Official;
};
