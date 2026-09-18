import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Factory
} from "lucide-react"

type Props = {
  total: number
  delayed: number
  dueSoon: number
  completed: number
}

export default function SummaryCards({
  total,
  delayed,
  dueSoon,
  completed
}: Props) {
  const cards = [
    {
      title: "Total Jobs",
      value: total,
      icon: Factory
    },
    {
      title: "Delayed",
      value: delayed,
      icon: AlertTriangle
    },
    {
      title: "Due Soon",
      value: dueSoon,
      icon: Clock3
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2
    }
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon

        return (
          <Card key={card.title}>
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-muted-foreground">
                  {card.title}
                </p>
                <p className="mt-2 text-3xl font-semibold">
                  {card.value}
                </p>
              </div>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}