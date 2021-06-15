export type Bill = {
  id: string;
  type: string;
  number: string;
  congress: string;
  title: string;
  subject: string;
  summary: string;
  updated_at: string;
  sponsor_id: string;
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
  roll_calls: RollCall[];
  originalChamber: 'HOUSE' | 'SENATE' | 'PRESIDENT';
};

export type Official = {
  id: string;
  first_name: string;
  last_name: string;
  preferred_name: string;
  political_party: string;
  is_active: boolean;
  position: string;
  rank: string | null;
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
  president_terms: number;
  vice_president_terms: number;
};

export type OfficialWithImage = Official & {
  image?: any;
};

export type Cosponsorship = {
  id: string;
  original_cosponsor: boolean;
  sponsored_at: string;
  state: string;
  district: string | null;
  withdrawn_at: any;
  elected_official_id: string;
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
  committees?: Array<Record<string, any>>;
  chamber: 'HOUSE' | 'SENATE' | 'PRESIDENT';
  amendment_id: string;
  bill_id: string;
};

export type RollCall = {
  id: string;
  date: string;
  updated_at: string;
  congress: number;
  number: number;
  chamber: string;
  question: string;
  requires: string;
  result: string;
  session: string;
  subject: string | null;
  type: string;
  record_modified_at: string | null;
  result_text: string;
  nomination: Record<string, any> | null;
  bill_id: string | null;
  amendment_id: string | null;
  votes?: RollCallVote[];
};

export type RollCallVote = {
  id: string;
  created_at: string;
  elected_official_id: string;
  elected_official: OfficialWithImage;
  roll_call_id: string;
  decision: string;
  date: string;
  state: string | null;
};
