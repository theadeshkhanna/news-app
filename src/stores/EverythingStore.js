import { observable, action } from 'mobx';
import axios from '../axios-instance';

class EverythingStore {
    @observable everything = [];

    @action getEverything = (query) => {
        axios.get('everything?q='+query+'&apiKey=8e817e7f7d6c4de3b20c50e0feb19752')
                .then(res => {
                    const everythingList = [];

                    res.data.articles.forEach(element => {
                        everythingList.push(element);
                    });

                    this.everything = everythingList;

                }).catch(res => {
                    console.log(res.data);
                });
    }
}

const store = new EverythingStore();
export default store;