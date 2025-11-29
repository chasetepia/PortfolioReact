import { useState, useEffect } from 'react'
import Projects from '../components/Projects'
import ProjectStats from '../components/ProjectStats'

interface Project {
	id: number
	name: string
	productionRate: number
	costPerSqFt: number
}

function Home() {
	const [loaded, setLoaded] = useState(false);
	const [projects, setProjects] = useState<Project[]>(() => {
		const saved = localStorage.getItem('projects')
		setLoaded(true)
		return saved ? JSON.parse(saved) : []
	})

	useEffect(() => {
		localStorage.setItem('projects', JSON.stringify(projects))
	}, [projects])


	return(
		<div className="home page-wrapper">
			<h1>Home</h1>
			<Projects projects={projects} setProjects={setProjects} />
			<ProjectStats projects={projects} />
		</div>
	)
}

export default Home