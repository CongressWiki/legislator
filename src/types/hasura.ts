export type Bill = {
  id: string;
  type: string;
  number: string;
  congress: string;
  title: string;
  subject: string;
  summary: string;
  updated_at: string;
  sponsor: OfficialWithImage;
  cosponsorships: Cosponsorship[];
  actions: Action[];
  status: string;
  status_at: string;
  introduced_at: string;
  created_at: string;
  by_request: boolean;
  short_title?: string;
  bill_text?: string;
  subjects?: string[];
  committee_reports?: Record<string, any>;
  related_bills?: Record<string, any>;
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

export type OfficialWithImage = Official & {
  image?: any;
};

export type Cosponsorship = {
  id: string;
  original_cosponsor: boolean;
  sponsored_at: string;
  state: string;
  district: string;
  withdrawn_at: any;
  elected_official: OfficialWithImage;
};

export type Action = {
  id: string;
  acted_at: string;
  action_code: string;
  references: Record<string, any>;
  text: string;
  type?: string;
  status?: string;
  how?: string;
  result?: string;
  vote_type?: string;
  where?: string;
  roll?: string;
  suspension?: string;
};
