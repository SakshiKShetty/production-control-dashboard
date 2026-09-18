# Production Control Dashboard

A frontend dashboard designed for factory operations teams to monitor production jobs, track deadlines, view machine assignments, identify delayed work orders, and update job statuses from a single interface.

<p align="center">
  <a href="https://productioncontroldashboard.netlify.app">
    <strong>Live Demo</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/SakshiKShetty/production-control-dashboard">
    <strong>GitHub Repository</strong>
  </a>
</p>

---

## Overview

The Production Control Dashboard is an internal operations tool focused on giving production teams a quick overview of their current workload.

Instead of navigating through multiple screens, an operations manager can use one dashboard to:

- Monitor production work orders
- Search jobs by ID, product, or customer
- Filter jobs by status
- Sort jobs by due date or quantity
- View assigned machines
- Inspect job-specific notes and issues
- Update production status
- Monitor key production metrics
- Handle empty search and filter results

The application currently uses local mock data because the assignment does not require a backend, database, or authentication system.

---

## Features

### Production Overview

The dashboard provides four key production metrics:

| Metric | Description |
|---|---|
| **Total Jobs** | Total number of production jobs |
| **Delayed** | Jobs currently marked as delayed |
| **Due Soon** | Jobs due today or within the next three days |
| **Completed** | Jobs marked as completed |

The metrics are calculated dynamically from the current job state.

### Production Jobs Table

Each job contains:

- Job ID
- Product
- Customer
- Quantity
- Due Date
- Status
- Assigned Machine

Supported statuses:

- `Pending`
- `In Progress`
- `Delayed`
- `Completed`

### Search

Search jobs using:

- Job ID
- Product name
- Customer name

Search is case-insensitive.

### Filtering

Jobs can be filtered by status:

- All Statuses
- Pending
- In Progress
- Delayed
- Completed

### Sorting

Jobs can be sorted by:

- Due Date
- Quantity

Both ascending and descending order are supported.

### Job Detail Panel

Clicking a job opens a side panel containing:

- Product information
- Customer
- Quantity
- Due date
- Assigned machine
- Current status
- Notes and operational issues

The user can inspect the job without leaving the main dashboard.

### Status Updates

The detail panel allows the user to change a job's status.

When the status is updated:

1. The job state is updated.
2. The table reflects the new status.
3. Summary metrics are recalculated automatically.

Since there is no backend in the current version, status changes are session-based and are lost after a page refresh.

### Empty State

When no jobs match the current search or filters, the dashboard displays a clear empty state instead of an empty table.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React framework and application structure |
| **React** | UI and state management |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling and responsive layouts |
| **shadcn/ui** | UI components |
| **Lucide React** | Interface icons |
| **Netlify** | Deployment |

No external table, chart, or additional UI library is used.

---

## Architecture

The application follows a simple component-based architecture.

```text
                    Production Job Data
                           │
                           ▼
                      page.tsx
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        Search &        Status        Sorting
        Filtering       Filter
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                      Jobs Table
                           │
                           ▼
                     Select Job
                           │
                           ▼
                  Job Detail Panel
                           │
                           ▼
                    Update Status
                           │
                           ▼
                    Updated State
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
        Jobs Table                 Summary Metrics
