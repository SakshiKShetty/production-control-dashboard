import { Factory } from "lucide-react"

export default function DashboardHeader() {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-lg border bg-white p-2">
        <Factory className="h-5 w-5" />
      </div>

      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Production Control
        </h1>
        <p className="text-sm text-muted-foreground">
          Monitor production jobs, deadlines and machine assignments.
        </p>
      </div>
    </div>
  )
}