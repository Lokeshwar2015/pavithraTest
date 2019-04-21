
const uuidv4 = require('uuid/v4');

const userAction=()=>({
type : "CREATE_USER",
payload : ""
})

export const createUser=(user) =>  {

  if(!user.id)
     user["id"] = uuidv4();

    return ({
        type: 'CREATE_USER',
        payload: user
    })
}

export default userAction;