export type Bill = {
  id: string
  type: string
  number: string
  title: string
  subject: string
  summary: string
  updated_at: string
  sponsor: string
  congress: string
  actions: Array<Record<string, any>>
  status: string
  status_at: string
  introduced_at: string
  created_at: string
  by_request: boolean
}
