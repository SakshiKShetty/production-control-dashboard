import { Job } from "@/types/job"
import StatusBadge from "./status-badge"

type Props = {
  jobs: Job[]
  onSelectJob: (job: Job) => void
}

function formatDate(date: string) {
  const today = new Date("2026-09-18T00:00:00")
  const target = new Date(`${date}T00:00:00`)

  const difference =
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)

  if (difference === 0) return "Today"
  if (difference === 1) return "Tomorrow"

  return target.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })
}

export default function JobsTable({ jobs, onSelectJob }: Props) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-lg border bg-white py-16 text-center">
        <h3 className="text-lg font-medium">No jobs found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          No jobs match your current search or filters.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      <table className="w-full min-w-[850px] text-sm">
        <thead className="border-b bg-muted/40">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Job ID</th>
            <th className="px-4 py-3 text-left font-medium">Product</th>
            <th className="px-4 py-3 text-left font-medium">Customer</th>
            <th className="px-4 py-3 text-left font-medium">Quantity</th>
            <th className="px-4 py-3 text-left font-medium">Due Date</th>
            <th className="px-4 py-3 text-left font-medium">Status</th>
            <th className="px-4 py-3 text-left font-medium">Machine</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr
              key={job.id}
              onClick={() => onSelectJob(job)}
              className="cursor-pointer border-b last:border-0 hover:bg-muted/30"
            >
              <td className="px-4 py-4 font-medium">{job.id}</td>
              <td className="px-4 py-4">{job.product}</td>
              <td className="px-4 py-4">{job.customer}</td>
              <td className="px-4 py-4">
                {job.quantity.toLocaleString()}
              </td>
              <td className="px-4 py-4">{formatDate(job.dueDate)}</td>
              <td className="px-4 py-4">
                <StatusBadge status={job.status} />
              </td>
              <td className="px-4 py-4">{job.machine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}