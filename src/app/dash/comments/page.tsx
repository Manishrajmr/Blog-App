import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trash2, CheckCircle } from "lucide-react"

const comments = [
  {
    id: 1,
    user: "John Doe",
    content: "This article was very helpful. Thanks!",
    status: "pending",
  },
  {
    id: 2,
    user: "Sarah Smith",
    content: "Great explanation, learned a lot.",
    status: "approved",
  },
]

export default function CommentsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Comments</CardTitle>
          <CardDescription>
            Manage and moderate user comments
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start justify-between rounded-lg border p-4"
            >
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback>
                    {comment.user.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">{comment.user}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {comment.content}
                  </p>

                  <Badge
                    variant={
                      comment.status === "approved"
                        ? "default"
                        : "secondary"
                    }
                    className="mt-2"
                  >
                    {comment.status}
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2">
                {comment.status === "pending" && (
                  <Button size="icon" variant="outline">
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                )}

                <Button size="icon" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
