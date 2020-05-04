import { observable, action } from 'mobx';
import axios from '../axios-instance';

class HeadlinesStore {

    @observable headlines = [];
    @observable totalResults = 0;
    @observable totalPages = 0;
    @observable pageSize = 9;
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

    @action getHeadlines = (value, pageNumber) => {

        let link = null;

        if (pageNumber) {
            link = 'top-headlines?country=in&category='+value+'&pageSize=9&page='+pageNumber+'&apiKey=8e817e7f7d6c4de3b20c50e0feb19752'
        } else {
            link = 'top-headlines?country=in&category='+value+'&pageSize=9&apiKey=8e817e7f7d6c4de3b20c50e0feb19752';
        }

            axios.get(link)
                .then(res => {
                    const headlineList = [];

                    res.data.articles.forEach(element => {
                        headlineList.push(element);
                    });

                    this.headlines = headlineList;
                    this.totalResults = res.data.totalResults;
                    this.calculateTotalPages();

                }).catch(res => {
                    console.log(res.message);
                });
    }

    @action calculateTotalPages = () => {
        this.totalPages = Math.ceil(this.totalResults / this.pageSize);
    }
}

const store = new HeadlinesStore();
export default store;