//Class
class Menu {
    items : Array<string>;
    pages :number;

    constructor(item_list: Array<string>, total_pages:number){
        this.items = item_list;
        this.pages = total_pages;
    }

    //Method
    list() : void{
        console.log("Our menus for today:");
        for(var i=0; i<this.items.length;i ++){
            console.log(this.items[i]);
        }
    }
}

//Inheritance
class HappyMeal extends Menu {
    // Properties は省略可能だがconstructorは定義する必要あり。
    constructor(item_list: Array<string>, total_pages: number) {
      super(item_list, total_pages);
    }
  }

//変数宣言
var origiri: string = "onigiri", calories: number = 200;
let gohan : string = "rice", cal :number = 500;

//インターフェース
interface Person {
    name : string;
    age : number;
}

// Personインターフェースの構造に従う変数を定義します。
var zinthi = {
    name: 'ZinThi',
    age: 31
}


//関数
function todayMeal(food: string, energy: number){
    return `My ${food} has ${energy} calories.`
}

function todayMealOneLine(food: string, energy: number){
    return "My " + food + " has " + energy + " calories."
}

function intro(person : Person) : string {
    return `My name is ${person.name}. I am ${person.age}!`
}


//Output
console.log(todayMeal(origiri,calories));
console.log(todayMealOneLine(gohan,cal));
console.log(intro(zinthi));

// Menuクラスのインスタンスを作成します。
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);
console.log("Sunday Menu");
// メソッドを呼びます。
sundayMenu.list();

// HappyMealクラスのインスタンスを作成
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);
console.log("HappyMeal Menu");
// 継承されたメソッドを実行。
menu_for_children.list();