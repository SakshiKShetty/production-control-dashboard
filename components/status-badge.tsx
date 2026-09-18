import { Badge } from "@/components/ui/badge"
import { Status } from "@/types/job"

type Props = {
  status: Status
}

export default function StatusBadge({ status }: Props) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
    Delayed: "bg-red-100 text-red-800 border-red-200",
    Completed: "bg-green-100 text-green-800 border-green-200"
  }

  return (
    <Badge variant="outline" className={styles[status]}>
      {status}
    </Badge>
  )
}