import {accordionReducer, TOGGLE_CONST} from "./accordionReducer";
test('correct accordion should be toggle', () => {
    const endState =accordionReducer({collapsed: false}, {type: TOGGLE_CONST});
    expect(endState.collapsed).toBe(true);
})

test('expect error', () => {
    expect(() => {accordionReducer({collapsed: false}, {type: "123"})}).toThrowError();
})