import { useEffect, useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Job, Status } from "@/types/job"
import StatusBadge from "./status-badge"

type Props = {
  job: Job | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusUpdate: (id: string, status: Status) => void
}

export default function JobDetailPanel({
  job,
  open,
  onOpenChange,
  onStatusUpdate
}: Props) {
  const [status, setStatus] = useState<Status>("Pending")

  useEffect(() => {
    if (job) {
      setStatus(job.status)
    }
  }, [job])

  if (!job) return null

  const handleSave = () => {
    onStatusUpdate(job.id, status)
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto px-6 sm:max-w-[360px]">
        <SheetHeader>
          <SheetTitle>{job.id}</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">Product</p>
            <p className="mt-1 font-medium">{job.product}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Customer</p>
            <p className="mt-1 font-medium">{job.customer}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Quantity</p>
            <p className="mt-1 font-medium">
              {job.quantity.toLocaleString()} units
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Due Date</p>
            <p className="mt-1 font-medium">{job.dueDate}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Machine</p>
            <p className="mt-1 font-medium">{job.machine}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Current Status</p>
            <div className="mt-2">
              <StatusBadge status={job.status} />
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Notes / Issues</p>
            <p className="mt-1 leading-6">{job.notes}</p>
          </div>

          <div className="space-y-3 border-t pt-5">
            <div>
              <p className="mb-2 text-sm font-medium">Update Status</p>

              <Select
                value={status}
                onValueChange={(value) => setStatus(value as Status)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="In Progress">
                    In Progress
                  </SelectItem>
                  <SelectItem value="Delayed">Delayed</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full" onClick={handleSave}>
              Save Status
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}