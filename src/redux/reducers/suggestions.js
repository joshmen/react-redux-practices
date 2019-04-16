//import { type as findCurrentItemType } from '../actions/findCurrentItem';
//import items from '../../data/items';

import { type as findSuggestions } from '../actions/findSuggestions';
import items from '../../data/items';
const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findSuggestions: {
            const regex = new RegExp(`^${payload}`, 'i')

            return items.filter(n => regex.test(n.title));
        }
        default:
            return state;
    }
}

export default reducer;