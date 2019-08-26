import List from "../Models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    deleteChores(listIndex, choresIndex) {
        _state.lists[listIndex].chores.splice(choresIndex, 1)
        this.saveLists()
    }
    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists
    }
    addchores(newChores, listIndex) {
        _state.list[listIndex].chores.push(newChores)
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.lists)
    }


    constructor() {
        console.log("service")
        this.loadLists();

    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    get list() {
        return _state.lists.map(list => new List(list))
    }
    //NOTE call saved list everytime you change the list collection in any way

    //NOTE this method will get the lists from local storage at the start of the app
    loadLists() {
        let savedLists = JSON.parse(localStorage.getItem("lists"))
        if (savedLists) {
            _state.lists = savedLists;
        }
    }
    saveLists() {
        console.log(JSON.stringify(_state.lists))
        localStorage.setItem("lists", JSON.stringify(_state.lists))
    }


}
