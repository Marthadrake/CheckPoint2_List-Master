import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()



//TODO Don't forget to render to the screen after every data change.
function _draw() {
    let template = ""
    let lists = _listService.list
    lists.forEach((list, index) => {
        template += list.getTemplate(index)

    })
    document.querySelector('#list').innerHTML = template

}


//Public
export default class ListController {
    constructor() {
        console.log("controller")
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _draw()
    }
    addList(event) {
        event.preventDefault()

        let form = event.target
        let newList = { name: form.name.value }

        _listService.addList(newList);
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _draw()
    }
    addChores(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newChores = form.chores.value

        _listService.addchores(newChores, listIndex)
        _draw()
        alert("Chores")
    }

    deleteList(index) {
        _listService.deleteList(index)
        _draw()
        alert("Deleted List")
    }

    deleteChores(listIndex, choresIndex) {
        _listService.deleteChores(listIndex, choresIndex)
        _draw()
        alert("Deleted Chores")
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
}