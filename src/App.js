import React, { Component } from 'react';
import NewsCard from './NewsCard';
import NavBar from './NavBar'
import './App.css';
import RecentBlogs from './RecentBlogs';
import { Card } from 'semantic-ui-react';

class App extends Component{
	constructor(){
		super();
		this.state={
			items: [],
			isLoaded: false
		}
	}
	componentDidMount(){
		var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-07-12&' +
          'sortBy=popularity&' +
          'apiKey=7fedd036293d48448adf862a638ff957';

		var req = new Request(url);

		fetch(req)
		    .then(response => response.json())
		    .then(
		    	data => {
		    		console.log(data);
		    		this.setState({
						items: data.articles,
						isLoaded: true
					})
		    	})
	}
	render(){
		if(!this.state.isLoaded){
			return(
				<div>Loading......</div>
				)
		}
		else{
			const newsCard = this.state.items.map(
			(i) =><NewsCard
					 author={i.author}
					 img={i.urlToImage} 
					 content={i.content}
					 name={i.source.name}
					 />
			)
			const recentImg = this.state.items.map(
				(j) => <RecentBlogs img={j.urlToImage} />
				)
			return(
				<div>
					<NavBar />
					<div  className="details">
						<section className="main">
							<Card.Group>
								{newsCard}
							</Card.Group>
						</section>
						<section className="recent">

							{recentImg}
						</section>		
					</div>
								
				</div>
			)
		}
		
	}
}
export default App;