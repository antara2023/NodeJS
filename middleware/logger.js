import express from 'express'

const loggerMiddleware = ((req,res,next)=>{
    console.log('Time', Date.now())
    const reqRes = {
        req: {
            url: req.url,
            body: req.body
        },
        res: {
            data: 'Dummy'
        },
        time: Date.now()
    }
    console.log(reqRes)
    next()
})

export default loggerMiddleware