"use client"

import * as React from "react"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Resource } from "@/types/resource"
import { ResourceIcon } from "./resource-icon"

interface ResourceItemProps {
  resource: Resource
  level?: number
}

export function ResourceItem({ resource, level = 0 }: ResourceItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const toggleExpand = () => {
    if (resource.type === 'folder') {
      setIsExpanded(!isExpanded)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    if (resource.type !== 'folder' && resource.url) {
      e.preventDefault()
      window.open(resource.url, '_blank')
    }
  }

  return (
    <div className="select-none">
      <div
        className={cn(
          "flex items-center gap-2 px-2 py-1 rounded-lg cursor-pointer transition-all duration-200",
          resource.type === 'folder' 
            ? "hover:bg-zinc-800" 
            : "hover:bg-zinc-800/50 hover:text-blue-400"
        )}
        style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
        onClick={resource.type === 'folder' ? toggleExpand : handleClick}
      >
        <ChevronRight
          className={cn(
            "w-4 h-4 shrink-0 transition-transform text-gray-400",
            isExpanded && "rotate-90",
            resource.type !== 'folder' && "invisible"
          )}
        />
        <div className="flex-shrink-0">
          <ResourceIcon type={resource.type} />
        </div>
        <span className="truncate text-gray-200 flex-1 min-w-0">{resource.name}</span>
      </div>
      {isExpanded && resource.children && (
        <div className="mt-1">
          {resource.children.map((child) => (
            <ResourceItem key={child.id} resource={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
