import React, {Component} from 'react';
import CategoryCard from './category-card.jsx';
import Results from './results.jsx';

export default class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                "American",
                "Asian",
                "Indian",
                "Italian",
                "Mexican",
                "Seafood",
                "French",
                "Canadian"
            ],
            categoryUrls: [
                "http://aui.adelphi.edu/wp-content/uploads/2017/01/American_Foods_ADE.jpg", 
                "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/chinese-beef-aubergine-hotpot.jpg?itok=7obVX214", 
                "http://www.indianmasalabistro.com/images/banner2.jpg",
                "https://i.ndtvimg.com/i/2015-12/italian_625x350_41450863014.jpg",
                "https://www.visitstockton.org/images/made/images/remote/https_files.idssasp.com/public/C102/0740e0c3-1adc-45f6-902c-e09b99d7a4ab/4cc8d671-c1b3-4114-8448-9274ffcb5379_768_432auto_s_c1.jpg",
                "https://www.makemytrip.com/travel-guide/media/dg_image/maldives/Sea-food.jpg",
                "https://lefrancophile.com/wp-content/uploads/2010/02/french-baguette.gif",
                "http://www.readersdigest.ca/wp-content/uploads/2016/01/poutine-canadian-dishes.jpg"
            ],
            categoryComponents: [],
            cardresults: ''
        }

        this.categoryCardCallBack = (dataFromChild) => {
            this.setState({cardresults: dataFromChild })
        }
    }
    componentWillMount() {
        let items = this
            .state
            .categories
            .map((item, i) => {
                let category = {
                    name: item,
                    picture: this.state.categoryUrls[i]
                }
                return (
                    <div key={item}>
                        <CategoryCard callbackFromParent={this.categoryCardCallBack} category={category} />
                    </div>
                )
            });
        this.setState({categoryComponents: items});
    }
    render() {
        console.log("YES OVER HERE: ", this.state.cardresults)
        return (
            <section className="categorySection">
                <div className="categoryHeader">
                    <h1>Categories</h1>
                    <p>Everyone loves these.</p>
                </div>
                <div className="categoryRow">
                    {this.state.categoryComponents}
                </div>
                <Results data ={this.state.cardresults}/>
            </section>
        )
    }
}