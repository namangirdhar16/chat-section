const users = [];

const addUser = ({ name , room , id }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    const existingUser = users.find((user)=>user.name===name && user.room===room);
    if(existingUser)
    return {
        error : 'this user already exists'
    }
    users.push({
        name , room , id
    });
    const user = {
        name , room , id
    };
    return {
        user
    }
}

const removeUser = ({id}) => {
 
    const index = users.findIndex((user)=>{
        return user.id === id;
    });
    if(index !==-1)
    return users.splice(index,1)[0];
}

const getUser = (id) => {
    return users.find((user)=>user.id===id);
}
const getUsersInRoom = (room) => {
    return users.filter((user)=>user.room === room);
}


module.exports = {
    addUser , removeUser , getUser , getUsersInRoom
}




// const user = {
//     name: "test",
//     room : "test" ,
//     id : "test1",
// }
// const user2 = {
//     name : 'test2',
//     room : 'test2',
//     id : 'test2'
// }
// addUser(user);
// addUser(user);
// addUser(user2);
// console.log(removeUser(user2));
