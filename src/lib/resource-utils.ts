import { Resource } from '@/types/resource'

export function countTotalResources(resource: Resource): number {
  // Start with 1 to count the current resource (if it's not a folder)
  let count = resource.type === 'folder' ? 0 : 1

  // Recursively count children if they exist
  if (resource.children) {
    count += resource.children.reduce((total, child) => total + countTotalResources(child), 0)
  }

  return count
}

export function searchResources(resource: Resource, searchTerm: string): Resource | null {
  // If search is empty, return the original resource
  if (!searchTerm.trim()) return resource

  const term = searchTerm.toLowerCase()

  // Check if current resource matches
  const matches = resource.name.toLowerCase().includes(term)

  // If it has children, search through them
  if (resource.children) {
    const matchingChildren = resource.children.map((child) => searchResources(child, term)).filter((child): child is Resource => child !== null)

    if (matchingChildren.length > 0) {
      return {
        ...resource,
        children: matchingChildren,
      }
    }
  }

  // Return the resource if it matches, null otherwise
  return matches ? resource : null
}
