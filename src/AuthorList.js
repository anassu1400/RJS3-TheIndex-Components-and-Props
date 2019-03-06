import React, { Component } from 'react';
import AuthorCard from './AuthorCard'

class AuthorList extends Component {
	
    render() {
    	const list = this.props.authors.map(author =>
			<AuthorCard key={author.first_name} author={author}/>
        );
        return (
        	<div className="row">
		    {list}
		    </div>
        );
    }
}
export default AuthorList;

