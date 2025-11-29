import { Link } from 'react-router-dom'

function Navigation (){
	return (
		<div className="navigation">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
	);
}	
 export default Navigation;