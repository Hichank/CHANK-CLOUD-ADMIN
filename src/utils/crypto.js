import CryptoJS from "crypto-js";

// 解密
export const decrypt = (data, key) => {
    if (key) {
        const result = CryptoJS.AES.decrypt(
            CryptoJS.enc.Base64.stringify(CryptoJS.enc.Base64.parse(data)),
            CryptoJS.enc.Utf8.parse(key),
            { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
        ).toString(CryptoJS.enc.Utf8).toString()
        return JSON.parse(result);
    }
}

// 加密
export const encrypt = (data, key) => {
    if (key) {
        return CryptoJS.AES.encrypt(
            CryptoJS.enc.Utf8.parse(JSON.stringify(data)),
            CryptoJS.enc.Utf8.parse(key),
            { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
        ).toString();
    }
}