

const initialState={
	name : "Pavithra",
	userArray: []
}
const userReducer = (state=initialState,action)=>{

	switch (action.type) {
		case 'CREATE_USER':
			return {
				userArray: [...state.userArray, action.payload]
			};
		default:
		  return state;
	}

}
export default userReducer

