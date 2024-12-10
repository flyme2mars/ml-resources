import { FileText, Folder, Github, Video } from 'lucide-react'
import { ResourceType } from "@/types/resource"

export function ResourceIcon({ type }: { type: ResourceType }) {
  switch (type) {
    case 'folder':
      return <Folder className="w-4 h-4 text-gray-400" />
    case 'video':
      return <Video className="w-4 h-4 text-red-400" />
    case 'github':
      return <Github className="w-4 h-4 text-gray-400" />
    case 'article':
    case 'document':
    default:
      return <FileText className="w-4 h-4 text-gray-400" />
  }
}
