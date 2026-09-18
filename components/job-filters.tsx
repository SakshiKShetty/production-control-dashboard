import { Search, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Status } from "@/types/job"

type Props = {
  search: string
  status: Status | "All"
  sortField: "dueDate" | "quantity"
  sortDirection: "asc" | "desc"
  onSearchChange: (value: string) => void
  onStatusChange: (value: Status | "All") => void
  onSortFieldChange: (value: "dueDate" | "quantity") => void
  onSortDirectionChange: (value: "asc" | "desc") => void
  onClear: () => void
}

export default function JobFilters({
  search,
  status,
  sortField,
  sortDirection,
  onSearchChange,
  onStatusChange,
  onSortFieldChange,
  onSortDirectionChange,
  onClear
}: Props) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by product, customer or Job ID"
          className="pl-9"
        />
      </div>

      <Select
        value={status}
        onValueChange={(value) =>
          onStatusChange(value as Status | "All")
        }
      >
        <SelectTrigger className="w-full lg:w-[180px]">
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="All">All Statuses</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Delayed">Delayed</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={sortField}
        onValueChange={(value) =>
          onSortFieldChange(value as "dueDate" | "quantity")
        }
      >
        <SelectTrigger className="w-full lg:w-[160px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="dueDate">Due Date</SelectItem>
          <SelectItem value="quantity">Quantity</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() =>
          onSortDirectionChange(
            sortDirection === "asc" ? "desc" : "asc"
          )
        }
      >
        <ArrowUpDown className="mr-2 h-4 w-4" />
        {sortDirection === "asc" ? "Ascending" : "Descending"}
      </Button>

      <Button variant="ghost" onClick={onClear}>
        Clear
      </Button>
    </div>
  )
}