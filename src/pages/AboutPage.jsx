import React from 'react'
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
        <div className="abount">
            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a produt of service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card> 
  )
}

export default AboutPage