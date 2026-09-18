"use client"

import { useMemo, useState } from "react"
import { jobs as initialJobs } from "@/data/jobs"
import { Job, Status } from "@/types/job"
import DashboardHeader from "@/components/dashboard-header"
import SummaryCards from "@/components/summary-cards"
import JobFilters from "@/components/job-filters"
import JobsTable from "@/components/jobs-table"
import JobDetailPanel from "@/components/job-detail-panel"

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<Status | "All">("All")
  const [sortField, setSortField] =
    useState<"dueDate" | "quantity">("dueDate")
  const [sortDirection, setSortDirection] =
    useState<"asc" | "desc">("asc")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const filteredJobs = useMemo(() => {
    const searchValue = search.trim().toLowerCase()

    const result = jobs.filter((job) => {
      const matchesSearch =
        searchValue === "" ||
        job.id.toLowerCase().includes(searchValue) ||
        job.product.toLowerCase().includes(searchValue) ||
        job.customer.toLowerCase().includes(searchValue)

      const matchesStatus =
        status === "All" || job.status === status

      return matchesSearch && matchesStatus
    })

    return [...result].sort((a, b) => {
      let comparison = 0

      if (sortField === "quantity") {
        comparison = a.quantity - b.quantity
      } else {
        comparison =
          new Date(a.dueDate).getTime() -
          new Date(b.dueDate).getTime()
      }

      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [jobs, search, status, sortField, sortDirection])

  const total = jobs.length

  const delayed = jobs.filter(
    (job) => job.status === "Delayed"
  ).length

  const completed = jobs.filter(
    (job) => job.status === "Completed"
  ).length

  const dueSoon = jobs.filter((job) => {
    const today = new Date("2026-09-18T00:00:00")
    const dueDate = new Date(`${job.dueDate}T00:00:00`)

    const difference =
      (dueDate.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)

    return difference >= 0 && difference <= 3
  }).length

  const handleStatusUpdate = (id: string, newStatus: Status) => {
    setJobs((currentJobs) =>
      currentJobs.map((job) =>
        job.id === id
          ? { ...job, status: newStatus }
          : job
      )
    )

    setSelectedJob((currentJob) =>
      currentJob && currentJob.id === id
        ? { ...currentJob, status: newStatus }
        : currentJob
    )
  }

  const clearFilters = () => {
    setSearch("")
    setStatus("All")
    setSortField("dueDate")
    setSortDirection("asc")
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        <DashboardHeader />

        <SummaryCards
          total={total}
          delayed={delayed}
          dueSoon={dueSoon}
          completed={completed}
        />

        <section className="space-y-4">
          <JobFilters
            search={search}
            status={status}
            sortField={sortField}
            sortDirection={sortDirection}
            onSearchChange={setSearch}
            onStatusChange={setStatus}
            onSortFieldChange={setSortField}
            onSortDirectionChange={setSortDirection}
            onClear={clearFilters}
          />

          <JobsTable
            jobs={filteredJobs}
            onSelectJob={setSelectedJob}
          />
        </section>
      </div>

      <JobDetailPanel
        job={selectedJob}
        open={selectedJob !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedJob(null)
          }
        }}
        onStatusUpdate={handleStatusUpdate}
      />
    </main>
  )
}