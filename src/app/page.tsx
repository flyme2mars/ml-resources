import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceItem } from "@/components/resource-item"
import { resourceData } from "@/types/resource"
import { countTotalResources } from "@/lib/resource-utils"

export default function ResourceExplorer() {
  const totalResources = countTotalResources(resourceData)

  return (
    <div className="min-h-screen p-4 bg-black text-gray-200">
      <Card className="w-full max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-gray-100">Machine Learning Resources</CardTitle>
          <div className="text-sm text-gray-400">
            Total Resources: {totalResources}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {resourceData.children?.map((resource) => (
              <ResourceItem key={resource.id} resource={resource} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}