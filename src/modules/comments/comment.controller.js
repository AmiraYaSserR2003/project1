import db_connection from '../../../DB/connection.js'



export const addComment = (req,res,next)=>{
    const { content , addedBy, productId, rate} = req.body

    const insertQuery = 
    `
    INSERT INTO comments (content , addedBy, productId, rate)
    VALUES ('${content}', ${addedBy}. ${productId}, ${rate})
    `
    db_connection.execute(insertQuery,(err,result)=>{
        if(err)
            {
                return res.json({message: "query error ", error: err.message})
            }
            if(!result.affectedRows){
                return res.json({message:"comment not added"})
            }
            return res.json({message:'comment added your id is ${result.insertId}' })
    })
}

export const getComments = (req,res)=>{
    const selectQuery= 
    `
    SELECT * FROM comments 
    INNER JOIN products
    on comments.productId = products.id
    INNER JOIN users
    on comments.addedBy = users.id
    WHERE comments.productId = ${req.query.productId}
    `
    db_connection.execute(selectQuery,(err,result)=>{
        if(err)
        {
            return res.json({messege: 'query error', error: err.message})
        }
        if(!result.length){
            return res.json({messege: 'no products found'})
        }
        return res.json({messege: 'product fetched successfully ', data: result})
    })
    }














