export type Action = {type:"ADD_TOKEN"; payload:string} // <-- tipo da action e a informação que action leva.


//<--Método que ira enviar ação por meio  do dispacht  até a REDUCER.
export const  addToken= (token:string):Action =>({

    type:"ADD_TOKEN",
    payload: token,

});