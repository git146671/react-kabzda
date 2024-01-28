

export const TOGGLE_CONST = "TOGGLE_COLLAPSED";

export type StateType = {
    collapsed: boolean;
}

type ActionType = {
    type: string
}
export const accordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONST:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default: {
            throw new Error("no suitable action type")
        }
    }
}