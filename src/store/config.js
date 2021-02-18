
export const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    number: 0
}

export function reducer(state, action) {

    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }

        case 'divisao':
            return { ...state, number: state.number / 7 }

        case 'multi':
            return { ...state, number: state.number * 25 }

        case 'arre':
            return { ...state, number: Math.round(Number(state.number)) }

        case 'rece':
            return { ...state, number: (state.number +  action.num)  }

        case 'login':
            return { ...state, user: { name: action.name } }

        case 'logout':
            return { ...state, user: { name: 'Sem usuario' } }

        default:
            return state
    }
}