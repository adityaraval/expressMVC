let Ok = (code,message,data,status_code) => {
    let object = {
        code:code || "",
        message:message || "",
        data:data || "",
        status_code:status_code || ""
    }
    return object;
}

let ServerError = (code,message,data,status_code) => {
    let object = {
        code:code || "",
        message:message || "",
        data:data || "",
        status_code:status_code || ""
    }
    return object;
}

module.exports = { Ok, ServerError }
