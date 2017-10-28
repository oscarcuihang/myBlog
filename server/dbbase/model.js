module.exports = {
    article:{
        title:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        text:{
            type: String,
            require: true
        },
        time:{
            createAt:{
                type: Date,
                default: Date.now()
            } 
        }
    },
    comment:{
        articleId:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        text:{
            type: String,
            require: true
        },
        time:{
            type: Date,
             default: Date.now()
        }
    }
}