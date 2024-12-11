import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceItem } from "@/components/resource-item"
import { resourceData } from "@/types/resource"
import { countTotalResources } from "@/lib/resource-utils"

export default function ResourceExplorer() {
  const totalResources = countTotalResources(resourceData)

  return (
    <div className="min-h-screen p-4 bg-black text-gray-200">
      <Card className="w-full max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <CardTitle className="text-gray-100 mb-1">Machine Learning Resources</CardTitle>
            <div className="text-sm text-gray-400 sm:hidden">
              Total Resources: {totalResources}
            </div>
          </div>
          <div className="text-sm text-gray-400 hidden sm:block">
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