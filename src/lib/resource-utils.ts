import { Resource } from "@/types/resource"

export function countTotalResources(resource: Resource): number {
  // Start with 1 to count the current resource (if it's not a folder)
  let count = resource.type === 'folder' ? 0 : 1

  // Recursively count children if they exist
  if (resource.children) {
    count += resource.children.reduce((total, child) => 
      total + countTotalResources(child), 0)
  }

  return count
}