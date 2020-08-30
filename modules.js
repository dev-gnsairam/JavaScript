/*
    Standard Pattern
*/

const UICtrl = (function(){
    let text = "Hello Content";                 // Private variables

    let fullName = "Sohali";

    const changeText = function(){
        const element = document.querySelector("h1");
        element.textContent = text;
    }

    return {
        callChangeText: function(){             // Public Varibales or functions
            changeText();
        }
    }
})()

const changeText = UICtrl.callChangeText();

/*
    Module Revealing Pattern
*/

const itemCtrl = (function(){
    let data = [];

    function add(item){
      result =  data.push(item);
      if(result){
        console.log("Item added");
      } else {
        console.log("Failed to add");
      }
    }

    function get(id){
        return data.find(function(item){
            return item.id === id;
        })
    }

    return {
        add,
        get
    }
})();


itemCtrl.add({id:1, name:"test"});
itemCtrl.add({id:2, name:"test1"});
console.log(itemCtrl.get(2));