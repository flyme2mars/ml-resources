import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceItem } from "@/components/resource-item"
import { resourceData } from "@/types/resource"
import { countTotalResources } from "@/lib/resource-utils"
import Link from "next/link"
import { Coffee } from "lucide-react"

// Custom X logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1200 1200" 
    className={className}
  >
    <path 
      fill="currentColor" 
      d="M714.163 519.284L1160.89 0h-105.86L667.137 450.887L357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152L784.34 1226.37H1140zM569.165 687.828l-47.468-67.894L159.04 76.138h162.11l304.85 435.405l47.464 67.894l396.089 566.716h-162.11z"
    />
  </svg>
)

export default function ResourceExplorer() {
  const totalResources = countTotalResources(resourceData)

  return (
    <div className="min-h-screen p-4 bg-black text-gray-200 flex flex-col">
      <Card className="w-full max-w-2xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 flex-grow">
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
      
      <footer className="mt-4 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 items-center">
          <Link 
            href="https://x.com/flyme2_mars" 
            target="_blank" 
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <XLogo className="w-5 h-5" />
            <span>@martian</span>
          </Link>
          <Link 
            href="https://buymeacoffee.com/flyme2mars" 
            target="_blank" 
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <Coffee className="w-5 h-5" />
            <span>Buy Me a Coffee</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}