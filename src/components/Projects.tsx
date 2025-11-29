import { useState } from 'react'

interface Project {
	id: number
	name: string
	productionRate: number
	costPerSqFt: number
}

interface ProjectsProps {
	projects: Project[]
	setProjects: (projects: Project[]) => void
}

function Projects({ projects, setProjects}: ProjectsProps) {
	// VARIABLES
	const [formData, setFormData] = useState({
		name: '',
		productionRate: '',
		costPerSqFt: ''
	})

	const formFields = [
	  { key: 'name', label: 'Project Name', type: 'text' },
	  { key: 'productionRate', label: 'Production Rate', type: 'number' },
	  { key: 'costPerSqFt', label: 'Cost per Sq Ft', type: 'number' }
	]

	// CLICK HANDLERS
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if(formData.name.trim()) {
			const newProject = {
				id: Date.now(),
				name: formData.name,
				productionRate: parseFloat(formData.productionRate) || 0,
				costPerSqFt: parseFloat(formData.costPerSqFt) || 0
			}
			setProjects([...projects, newProject])
			setFormData({name: '', productionRate: '', costPerSqFt: ''})
		}
	}

	const handleDelete = (id: number) => {
		setProjects(projects.filter(p => p.id ! == id))
	}

	return(
		<div className="projects">
			<h1>Projects</h1>

			<form onSubmit={handleSubmit}>
				{formFields.map(field => (
				  <input
				    key={field.key}
				    type={field.type}
				    value={formData[field.key]}
				    onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
				    placeholder={field.label}
				  />
				))}
				<button type="submit">Add Project</button>
			</form>

			<div className="projectsList">
				{projects.map(project => (
					<div className="project" key={project.id}>
						<h3>{project.name}</h3>
						<span className="production-rate">{project.productionRate}</span>
						<span className="cost-per-sqft">{project.costPerSqFt}</span>
						<button className="delete-btn btn" onClick={() => handleDelete(project.id)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects