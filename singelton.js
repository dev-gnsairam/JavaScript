const Singletol = (function(){
    let instance;

    function createInstance(){
        const object = new Object({id:1, name:"John"});
        return object;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singletol.getInstance();
const instanceb = Singletol.getInstance();

console.log(instanceA)
if(instanceA === instanceb){
    console.log("instance is same")
}