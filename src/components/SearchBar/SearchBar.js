import React, { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      term:'',
      location:'',
      sortBy:'best_match'
    }
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
  }
  getSortByClass=(sortByOption)=>{
    if(this.state.sortBy === sortByOption){
      return 'active'
    }else{
      return ''
    }
  }
  handleSortByChange=(sortByOption)=>{
    this.setState({
      sortBy: sortByOption
    })
  }
  handleTermChange=(e)=>{
    this.setState({
      term: e.target.value
    })
  }
  handleLocationChange=(e)=>{
    this.setState({
      location: e.target.value
    })
  }
  handleSearch=(e)=>{
    e.preventDefault();
    const {term,location,sortBy}=this.state;
    this.props.searchYelp(term,location,sortBy)
  }
  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={()=>{this.handleSortByChange(sortByOptionValue)}}>{sortByOption}</li>;
    });
  };
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;


