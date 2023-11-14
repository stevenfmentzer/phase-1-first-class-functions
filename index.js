function receivesAFunction(callbackFunction){
    callbackFunction();
} 

function returnsANamedFunction(){
    return function returnFunction(){
    };
}
// function returnsAnAnonymousFunction(item){
//     return function(item){
//         return item;
//     }
// };

function returnsAnAnonymousFunction(){
    return () => item
    };