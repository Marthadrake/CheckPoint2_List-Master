import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

// debugger

//TODO Don't forget to render to the screen after every data change.
function _draw() {
    let template = ``
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
    addlist(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value,
            kitchen: form.kitchen.value,
            outdoors: form.outdoors.value,
        }
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
    }

    deleteList(index) {
        _listService.deleteList(index)
        _draw()
    }

    deleteChores(listIndex, choresIndex) {
        _listService.deleteChores(listIndex, choresIndex)
        _draw()
    }
    //TODO: Your app will need the ability to create, and delete both lists and listItems
}