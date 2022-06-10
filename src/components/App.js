import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { images : [] };
    onSearchSubmit = async (term) => {
         //console.log(term);
         const response = unsplash.get('/search/photos',{
            params : { query : term },
         });
         //console.log((await response).data.results);
         const carsData = ((await response).data.results);
         this.setState({ images : carsData });
     }

    render(){
        return(
            <div className="ui container" style={{marginTop : "10px"}}>
                <SearchBar onSubmitCallback = {this.onSearchSubmit} />
                <ImageList list = {this.state.images} />
            </div>
        );
    }
}

export default App;