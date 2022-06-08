import {Action} from './actions';

//model com uma propriedade chamada tokens.
export interface TokenState {
    tokens:string
}
// Definindo para o state um valor inícial que no caso está vazio no momento.
const initialState = {
    tokens:''
}
                             //state: recebe o tipo da model e o estado inicial.
export const tokenReducer = (state:TokenState = initialState, action:Action) => {//<-- reducer recebe 2 parametros o estado inicíal e ação que irá modificar o estado inicial do parametro.
    switch (action.type){// <-- verifica o tipo da action
        case 'ADD_TOKEN':{ //<-- caso seja do tipo adicionar token
            return{tokens:action.payload} // <-- será preenchido o token
        }
        default:
                return state // <-- caso não, ficara com o estado inicial,vazio.
    }
}