Production Control Dashboard

A frontend mini product for factory operations teams to monitor
production jobs, track deadlines, view assigned machines, identify
delayed work orders, and update job status.

Live Demo

https://productioncontroldashboard.netlify.app

GitHub Repository

https://github.com/SakshiKShetty/production-control-dashboard

Overview

The Production Control Dashboard is designed as an internal operations
tool for quickly understanding the current production workload.

The dashboard provides a centralized view of production jobs and allows
an operations manager to:

View production jobs and work orders

Search by Job ID, product name, or customer

Filter jobs by status

Sort jobs by due date or quantity

View job details in a side panel

View the assigned machine

Review notes and operational issues

Update a job's production status

Monitor high-level production metrics

Handle empty search/filter results

The application uses local mock data because the assignment does not
require a backend, database, or authentication system.

Features

Production Jobs Table

Each work order contains:

Job ID

Product

Customer

Quantity

Due date

Status

Assigned machine

Supported statuses:

Pending

In Progress

Delayed

Completed

Search

Users can search jobs by:

Job ID

Product name

Customer name

The search is case-insensitive.

Status Filtering

The jobs table can be filtered by:

All statuses

Pending

In Progress

Delayed

Completed

Sorting

Jobs can be sorted by:

Due date

Quantity

Ascending and descending sorting are supported.

Job Detail Panel

Selecting a job opens a side panel with additional information,
including:

Job details

Customer

Quantity

Due date

Current status

Assigned machine

Notes / issues

Status Updates

The detail panel provides a simple status update action.

When a status is changed, the updated value is reflected in the
dashboard state and the relevant summary metrics are recalculated.

Status changes are session-based because this version does not use a
backend or persistent database.

Summary Metrics

The dashboard displays:

Total Jobs

Delayed Jobs

Jobs Due Soon

Completed Jobs

The metrics are calculated from the current job data rather than being
manually hardcoded.

Empty State

When a search or filter produces no matching jobs, the dashboard
displays a clear empty state instead of showing an empty table.

Technology Stack

The project uses the technologies specified in the assignment:

Next.js

React

TypeScript

Tailwind CSS

shadcn/ui

lucide-react

No external table, chart, icon, or UI library is used.

Project Structure

production-control-dashboard/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── dashboard-header.tsx
│   ├── summary-cards.tsx
│   ├── job-filters.tsx
│   ├── jobs-table.tsx
│   ├── status-badge.tsx
│   └── job-detail-panel.tsx
│
├── data/
│   └── jobs.ts
│
├── types/
│   └── job.ts
│
├── public/
│
├── package.json
└── README.md

Update the structure above if your final project uses different file
or component names.

Component Structure

app/page.tsx

Acts as the main dashboard and coordinates the application state.

Responsibilities include:

Maintaining the jobs state

Managing search

Managing status filtering

Managing sorting

Tracking the selected job

Calculating summary metrics

Handling status updates

components/dashboard-header.tsx

Displays the dashboard title and supporting description.

components/summary-cards.tsx

Displays the production summary metrics:

Total jobs

Delayed jobs

Due soon

Completed jobs

components/job-filters.tsx

Contains the search, status filter, and sorting controls.

components/jobs-table.tsx

Displays the filtered and sorted production jobs in a structured table.

Rows can be selected to view additional job information.

components/status-badge.tsx

Provides a reusable visual representation of the four supported job
statuses.

components/job-detail-panel.tsx

Displays detailed information about the selected job and provides the
status update interaction.

data/jobs.ts

Contains the local mock production job dataset.

types/job.ts

Contains the TypeScript definitions for jobs and job statuses.

Data Flow

The dashboard follows a simple state-driven data flow:

Mock Job Data
     |
     v
Search
     |
     v
Status Filter
     |
     v
Sorting
     |
     v
Displayed Jobs
     |
     v
Jobs Table
     |
     v
Selected Job
     |
     v
Job Detail Panel
     |
     v
Status Update
     |
     v
Updated Job State
     |
     +--------------------+
     |                    |
     v                    v
Jobs Table          Summary Metrics

This keeps the dashboard state centralized while allowing individual
components to focus on their specific UI responsibilities.

State Management

The application uses React state and does not require an external state
management library.

The main state includes:

Jobs

Search query

Status filter

Sort field

Sort direction

Selected job

The displayed jobs are derived from the current search, filter, and
sorting state.

UI / UX Decisions

The interface was intentionally designed as an internal factory
operations tool rather than a marketing website.

The design prioritizes:

Clear information hierarchy

Readable production tables

Quick status recognition

Compact but comfortable spacing

Direct access to job details

Minimal unnecessary decoration

Clear empty states

Responsive behavior

The jobs table is the primary focus because production work orders are
the main operational information.

The side panel allows the user to inspect a job without leaving the main
dashboard.

Assumptions

Job data is represented using local mock data because a backend and
database were not required.

Each job has one assigned machine.

The supported job statuses are Pending, In Progress, Delayed, and
Completed.

"Due Soon" is defined as jobs due today or within the next three
days.

Status changes are stored only in the current React session and are
not persisted after a page refresh.

Authentication and authorization are outside the scope of this
assignment.

The mock dataset represents example factory work orders and does not
contain real production data.

Responsive Behavior

The dashboard is designed to remain usable on smaller screens.

Summary cards adapt to available screen width.

The jobs table can scroll horizontally when required.

The side panel adapts to the available viewport.

Search and filter controls remain accessible on smaller layouts.

Loading and Error Handling

The current implementation uses local mock data rather than a remote
API.

Because there are no network requests in the current version, API
loading and network error states are not applicable.

If the data source were replaced with a production API, loading, retry,
and error states would be added.

Running Locally

Prerequisites

Node.js

npm

Git

Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project directory:

cd production-control-dashboard

Install dependencies:

npm install

Start the development server

npm run dev

Open:

http://localhost:3000

Production Build

To create a production build:

npm run build

To run the production build locally:

npm start

Deployment

The application is deployed on Netlify.

Live demo:

https://productioncontroldashboard.netlify.app

The current version uses local mock data and therefore does not require
environment variables or a backend service.

What I Would Improve With More Time

Backend Integration

Connect the dashboard to a production API and database so that jobs and
status changes can be persisted.

Persistent Status Updates

Store status changes in a backend along with timestamps and the user who
made the change.

Real-Time Updates

Add real-time updates for production status, machine availability,
delays, and completed jobs.

Machine Management

Add a dedicated machine view containing:

Machine status

Current job

Workload

Utilization

Maintenance information

Downtime

Audit History

Maintain a history of job status changes for operational tracking and
accountability.

Pagination

Add pagination or server-side data loading for larger production
datasets.

Authentication and Permissions

Add authentication and role-based permissions for operations managers,
operators, and administrators.

Production Analytics

A future version could include production metrics such as:

On-time completion rate

Production volume

Machine utilization

Delayed jobs by machine

Average production time

These features were kept outside the current scope to focus on the core
requirements of the assignment.

Submission

GitHub Repository:

https://github.com/SakshiKShetty/production-control-dashboard

Live Demo:

https://productioncontroldashboard.netlify.app
