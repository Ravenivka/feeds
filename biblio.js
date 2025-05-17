
const testArray = ['firstbook', 'secondbook', 'thridbook'];
class BooksCase {
    #list = [];
    constructor(array = []) {
        if (array.length != new Set(array).size){
            throw new Error('Возможно в списке есть дубликаты');
        }
        this.#list = array;
    }

    showAll() {
        return this.#list;
    }

    addBook(str) {
        if (this.#list.includes(str)) {
            throw new Error('Такая книга уже есть');
        }
        this.#list.push(str);
        return this.#list;
    }
    getBook(index) {
        if (index < 0) {
            throw new Error('Недопустимый индекс');
        } else if (index >= this.#list.length) {
            throw new Error('Индекс вне диапазона');
        } else {
            return this.#list[index];
        }
    }

    hasBook(str) {
        return this.#list.includes(str) ;
    }
    removeBook(str) {
        if (this.hasBook(str)){
            let index = this.#list.indexOf(str);
            this.#list.splice(index, 1);
            return this.#list;
        } else {
            throw new Error('Такой книги нет');
        }
    }

}
/*
function view(bib) {
    
    bib.showAll().forEach(element => {
        console.log(element);
    });
}
const bib1 = new BooksCase(testArray);
console.log(bib1.hasBook('secondbook'));

*/



