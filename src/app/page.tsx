import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceItem } from "@/components/resource-item"
import { resourceData } from "@/types/resource"

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-black text-gray-200">
      <Card className="w-full max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800">
        <CardHeader>
          <CardTitle className="text-gray-100">Machine Learning Resources</CardTitle>
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
  );
}
