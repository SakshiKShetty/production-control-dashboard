export type Status =
  | "Pending"
  | "In Progress"
  | "Delayed"
  | "Completed"

export interface Job {
  id: string
  product: string
  customer: string
  quantity: number
  dueDate: string
  status: Status
  machine: string
  notes: string
}