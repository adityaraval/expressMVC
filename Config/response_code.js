const Ok = {
        message:"Operation Executed Successfully",
        code:"OK",
        status_code:200
    }

const ServerError = {
        message:"Something Bad Happend On Server",
        code:"INTERNAL_SERVER_ERROR",
        status_code:500
    }

module.exports = {Ok,ServerError}