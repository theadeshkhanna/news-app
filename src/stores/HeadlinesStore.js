import { observable, action } from 'mobx';
import axios from '../axios-instance';

class HeadlinesStore {

    @observable headlines = [];
    @observable radioValues = [
        {
            "value": "health",
            "name" : "Health"
        },
        {
            "value": "business",
            "name" : "Business"
        },
        {
            "value": "entertainment",
            "name" : "Entertainment"
        },
        {
            "value": "general",
            "name" : "General"
        },
        {
            "value": "science",
            "name" : "Science"
        },
        {
            "value": "sports",
            "name" : "Sports"
        },
        {
            "value": "technology",
            "name" : "Technology"
        }
    ]

    @action getHeadlines = (value) => {
            axios.get('top-headlines?country=in&category='+value+'&apiKey=8e817e7f7d6c4de3b20c50e0feb19752')
                .then(res => {
                    const headlineList = [];

                    res.data.articles.forEach(element => {
                        headlineList.push(element);
                    });

                    this.headlines = headlineList;

                }).catch(res => {
                    console.log(res.data);
                });
    }
}

const store = new HeadlinesStore();
export default store;