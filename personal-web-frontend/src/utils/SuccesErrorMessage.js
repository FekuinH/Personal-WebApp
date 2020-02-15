import { notification } from "antd";

export function sendMessage(isSucces, message) {
    let status = isSucces ? 'success' : 'error';
    notification[status]({
        message: message
    })
}