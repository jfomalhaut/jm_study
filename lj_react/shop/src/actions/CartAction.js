
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ALL = 'REMOVE_ALL';
const CHECK_ITEM = 'CHECK_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addToCart = (item) => ({ type: ADD_TO_CART, item });
const checkItem = (id) => ({ type: CHECK_ITEM, id });
const removeAll = () => ({ type: REMOVE_ALL });
const removeItem = (id) => ({ type: REMOVE_ITEM, id });

export default {
	CHECK_ITEM,
	ADD_TO_CART,
	REMOVE_ITEM,
	REMOVE_ALL,
	addToCart,
	removeItem,
	checkItem,
	removeAll,
};