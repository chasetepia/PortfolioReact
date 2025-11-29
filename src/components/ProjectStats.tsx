interface Project {
  id: number
  name: string
  productionRate: number
  costPerSqFt: number
}

interface ProjectStatsProps {
  projects: Project[]
}

function ProjectStats({ projects }: ProjectStatsProps) {
  if (projects.length === 0) {
    return <div className="project-stats">No projects yet</div>
  }

  const totalCost = projects.reduce((sum, p) => sum + p.costPerSqFt, 0)
  const totalRate = projects.reduce((sum, p) => sum + p.productionRate, 0)
  const avgCost = totalCost / projects.length
  const avgRate = totalRate / projects.length

  return (
    <div className="project-stats">
      <h2>Stats</h2>
      <p>Total Projects: {projects.length}</p>
      <p>Total Cost/SqFt: ${totalCost.toFixed(2)}</p>
      <p>Average Cost/SqFt: ${avgCost.toFixed(2)}</p>
      <p>Total Production Rate: {totalRate.toFixed(2)}</p>
      <p>Average Production Rate: {avgRate.toFixed(2)}</p>
    </div>
  )
}

export default ProjectStats