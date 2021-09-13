const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ALL = 'REMOVE_ALL';
const CHECK_ITEM = 'CHECK_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const addToCart = (item) => ({type: ADD_TO_CART, item});
const removeAll = () => ({type: REMOVE_ALL})
const checkItem = (id) => ({type: CHECK_ITEM, id})
const removeItem = (id) => ({type: REMOVE_ITEM, id})


export default{
	ADD_TO_CART,
	REMOVE_ALL,
	CHECK_ITEM,
	REMOVE_ITEM,
	addToCart,
	removeAll,
	checkItem,
	removeItem
}