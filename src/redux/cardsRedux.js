import shortid from 'shortid';
import { strContains } from '../utils/strContains';

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );
export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite === true);
// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const toggleCardFavorite = (payload) => ({
  type: { TOGGLE_CARD_FAVORITE },
  payload,
});
export const addCard = (payload) => ({ type: { ADD_CARD }, payload });
const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};
export default cardsReducer;