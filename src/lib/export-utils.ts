import { Resource } from '@/types/resource'

function generateResourceHTML(resources: Resource[], level = 0): string {
  const indent = '  '.repeat(level)

  return resources
    .map((resource) => {
      if (resource.type === 'folder') {
        return `
${indent}<details>
${indent}  <summary>${resource.name}</summary>
${resource.children ? generateResourceHTML(resource.children, level + 1) : ''}
${indent}</details>`
      } else {
        return `
${indent}<div class="resource">
${indent}  <a href="${resource.url}" target="_blank">${resource.name}</a>
${indent}</div>`
      }
    })
    .join('')
}

export function generateDownloadableHTML(resources: Resource): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ML Resources</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
      background: #000;
      color: #e5e5e5;
    }
    
    details {
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.05);
    }
    
    summary {
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: background 0.2s;
    }
    
    summary:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    
    .resource {
      padding: 0.5rem 1rem;
      margin: 0.25rem 0;
    }
    
    a {
      color: #60a5fa;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Machine Learning Resources</h1>
  ${generateResourceHTML(resources.children || [])}
</body>
</html>`
}
