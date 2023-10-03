const {User,Comment} = require('../models/schema')
const utils=require('../utils/utils')
exports.storeUser = async(req, res) => {    
    let response = await utils.sendRequest('comments')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for (let i = 0; i < response.data.comments.length; i++) {
        let id=await User.find({userId: response.data.comments[i].user.id})
        if(id.length===0){
            User.create({ userId: response.data.comments[i].user.id,username:response.data.comments[i].user.username }).then(() => {
            })
        }
        else{
            console.log("already found")
        }
    }
    res.send("inserted successfully")
}

exports.storeComment = async (req, res) => {
    let response = await utils.sendRequest('comments')
    if (response?.error) {
        console.log("ERROR:", response)
        return;
    }
    for (let i = 0;i< response.data.comments.length; i++) {
    let obj={"commentId": response.data.comments[i].id,
        "body": response.data.comments[i].body,
        "postId": response.data.comments[i].postId,
        "user": {
            "userId": response.data.comments[i].user.id,
            "username": response.data.comments[i].user.username
        }
    }
    let id=await Comment.find({commentId: response.data.comments[i].id})
    if(id.length===0){
        await Comment.create(obj);
    }
    else{
        console.log("comments found")
    }
    }
    res.send("Data Inserted successfully")
}
