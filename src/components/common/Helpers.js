import React from "react";
import jwt_decode from 'jwt-decode';
import moment from "moment";
import instance, {ADMIN_URL, BASE_URL} from "../../api/config";
let defaultURI = "";

const Helper = {
    isValidPassword(password) {
        let reMin14Characters = /^[a-zA-Z0-9.*@!#%&()^~{}]{14,30}/;
        let reSpecialCharacter = /[*@!#%&()^~{}]+/;
        let reUpperCase = /[A-Z]+/;
        let reLowerCase = /[a-z]+/;
        let reNumeric = /[0-9]+/;

        return (
            reMin14Characters.test(password) &&
            reSpecialCharacter.test(password) &&
            reUpperCase.test(password) &&
            reLowerCase.test(password) &&
            reNumeric.test(password)
        );
    },
    isValidUsername(username) {
        let reAlphaNumeric = /^[a-zA-Z0-9]+$/;
        return reAlphaNumeric.test(username);
    },
    isDouble(num) {
        let re = /^[-+]?[0-9]*\.?[0-9]*/;
        return re.test(num);
    },
    isEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    isNumber(num) {
        let numberReg = /^\d*$/;
        return numberReg.test(num) && num.toString().length >= 10 && num.toString().length <= 11;
    },
    wordsWithNoSpecialChars(str) {
        let words = /^[a-zA-Z ]*$/;
        return words.test(str);
    },
    isInteger(value) {
        let numberReg = /^[1-9]\d*$/;
        return numberReg.test(value);
    },
    isDecimal(value) {
        let numberReg = /^[0-9]+(\.[0-9]+)?$/;
        return numberReg.test(value);
    },
    isUrl(url) {
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        return expression.test(url);
    },
    isSkypeId(id) {
        let expression = /^[a-zA-Z][a-zA-Z0-9_\.]{5,31}$/;
        return expression.test(id);
    },
    formateDate(date) {
        if (!!date) {
            return moment(date).format("DD/MM/YYYY");
        } else {
            return "";
        }
    },
    formatDateMonthFirst(date) {
        if (!!date) {
            return moment(date).format("MMM D,YYYY");
        } else {
            return "";
        }
    },
    isPercentage(value, minRange = -100, maxRange = 100) {
        if (!isNaN(parseInt(value)) && parseInt(value) >= minRange && parseInt(value) <= maxRange) {
            return true;
        } else {
            return "";
        }
    },
    completeDateFormat(cell, row, rowIndex, formatExtraData) {
        if (row.dateAndTime) {
            return moment(row.dateAndTime).format("dddd, MMMM Do YYYY	");
        } else {
            return "";
        }
    },
    /*Limit text characters*/
    limitText: (text, textLimit) => {
        if (text.length >= textLimit) {
            text = `${text.slice(0, textLimit)}...`;
        }
        return text;
    },
    /**
     * Convert bytes to Human Readable.
     * @link https://stackoverflow.com/a/14919494
     * @param bytes
     * @param si {bool} Binary or Decimal. true = 1000
     * @returns {string}
     */
    humanFileSize: (bytes, si) => {
        var thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) {
            return bytes + " B";
        }
        var units = si
            ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
            : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
        var u = -1;
        do {
            bytes /= thresh;
            ++u;
        } while (Math.abs(bytes) >= thresh && u < units.length - 1);
        return bytes.toFixed(1) + " " + units[u];
    },

    /**
     * Alpha Numeric with dash(-)
     * Enclose this in /^$/ starting and ending string.
     * @returns {string}
     */
    getNameRegExString: () => {
        return "[a-zA-Z\\-]*";
    },
    /**
     * Alpha Numeric with dash(-) & Space
     * Enclose this in /^$/ starting and ending string.
     * @returns {string}
     */
    getNameWithSpaceRegExString: () => {
        return "[a-zA-Z\\- ]*";
    },
    getCnicREgExString() {
        return "/\\d{5}-\\d{7}-\\d{1}$/";
    },
    /**
     * Pakistan Phone Number.
     * Enclose this in /^$/ starting and ending string.
     * @returns {string}
     */
    getPhoneNumberRegExString: () => {
        return "(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})";
    },
    /**
     * Pakistan Mobile Number
     * Enclose this in /^$/ starting and ending string.
     * @returns {string}
     */
    getMobileNumberRegExString: () => {
        return "(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})";
    },
    dateFormatFull(date) {
        if (date) {
            return moment(date).format("dddd, MMMM Do YYYY	");
        } else {
            return "";
        }
    },
    /**
     * Convert a base64 string in a Blob according to the data and contentType.
     *
     * @param b64Data {String} Pure base64 string without contentType
     * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
     * @param sliceSize {Int} SliceSize to process the byteCharacters
     * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
     * @return Blob
     */
    b64toBlob: (fileName, b64Data, contentType, sliceSize) => {
        // Split the base64 string in data and contentType
        var block = b64Data.split(";");
        // Get the content type of the image
        var contentType = block[0].split(":")[1];
        // get the real base64 content of the file
        var realData = block[1].split(",")[1];

        contentType = contentType || "";
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(realData);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new File(byteArrays, fileName, {type: contentType});
        return blob;
    },
    getAgeByDOB: date => {
        let age = 0;
        if (Math.abs(date.diff(moment(), "years")) > 0) {
            age = Math.abs(date.diff(moment(), "years")) + " Year(s)";
        } else if (Math.abs(date.diff(moment(), "months")) > 0) {
            age = Math.abs(date.diff(moment(), "months")) + " Month(s)";
        } else {
            age = Math.abs(date.diff(moment(), "days")) + " Day(s)";
        }
        return age;
    },
    getMrNumber: () => {
        return "\b[a-zA-Z0-9]{8}\b";
    },
    extractSubModulePermissions: (permissionsArray, subModuleName, callback) => {
        if (!!permissionsArray && permissionsArray.hasOwnProperty(subModuleName)) {
            let permissionObject = {};
            permissionsArray[subModuleName].map(item => {
                permissionObject[item] = true;
            });
            callback(permissionObject);
        } else {
            callback(null);
        }
    },
    appendToken: url => {
        let key = "Authorization";
        let value = encodeURI(localStorage.getItem("API_TOKEN"));
        if (url.indexOf("?") !== -1) {
            var kvp = url.substr(url.indexOf("?")).split("&");
            let i = kvp.length;
            let x;
            while (i--) {
                x = kvp[i].split("=");

                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join("=");
                    break;
                }
            }

            if (i < 0) {
                kvp[kvp.length] = [key, value].join("=");
            }
            url = url.substr(0, url.indexOf("?")) + kvp.join("&");
        } else {
            url += `?${key}=${value}`;
        }
        return url;
    },
    appendApi: url => {
        return defaultURI + url.substr(1);
    }
};
export default Helper;

export const MailHelper = {
    getLastSegmentFromString: (input) => {
        return input.split('/').pop();
    },
    getMailCategoryIDbyNameFromArray: (mailCategoryArray,name) => {
        let mailCategoryID = undefined;
        mailCategoryArray.map(item => {
            if(item.name.toLowerCase() === name.toLowerCase()) {
                mailCategoryID = item.id;
            }
        });
        return mailCategoryID;
    },
    getMailCorrespondenceIDbyNameFromArray: (mailCorrespondenceArray,name) => {
        let mailCorrespondenceID = undefined;
        mailCorrespondenceArray.map(item => {
            if(item.name.toLowerCase() === name.toLowerCase()) {
                mailCorrespondenceID = item.id;
            }
        });
        return mailCorrespondenceID;
    },
    getMailTypeIDbyNameFromArray: (mailTypeArray,name) => {
        let mailTypeID = undefined;
        mailTypeArray.map(item => {
            if(item.name.toLowerCase() === name.toLowerCase()) {
                mailTypeID = item.id;
            }
        });
        return mailTypeID;
    },
    /**
     * Return Mail Category String may be used for making request.
     * @param mailData Can be found in mail initial state `MANAGE_MAIL.UISettings.selectedMailPageData`
     * @param mailPage Current Mail page
     * @param mailCorrespondence Current Correspondence that will be changed
     * @param selectedMailCategory Current selected Mail Category
     * @returns {string|*}
     */
};


export const arrowGenerator = color => {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: "-0.95em",
            width: "3em",
            height: "1em",
            "&::before": {
                borderWidth: "0 1em 1em 1em",
                borderColor: `transparent transparent ${color} transparent`
            }
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: "-0.95em",
            width: "3em",
            height: "1em",
            "&::before": {
                borderWidth: "1em 1em 0 1em",
                borderColor: `${color} transparent transparent transparent`
            }
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: "-0.95em",
            height: "3em",
            width: "1em",
            "&::before": {
                borderWidth: "1em 1em 1em 0",
                borderColor: `transparent ${color} transparent transparent`
            }
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: "-0.95em",
            height: "3em",
            width: "1em",
            "&::before": {
                borderWidth: "1em 0 1em 1em",
                borderColor: `transparent transparent transparent ${color}`
            }
        }
    };
};

export function base64ToBlob(base64Data, contentType) {
    contentType = contentType || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);

        let bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {type: contentType});
}

function getMyTime(h, m) {
    if (h.toString().length < 2) {
        h = '0' + h;
    }
    if (m.toString().length < 2) {
        m = '0' + m;
    }
    return `${h}${m}`
}

export function getDTGDate() {
    let newDate = new Date();
    var mS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${newDate.getDate()}${getMyTime(newDate.getHours(), newDate.getMinutes())} ${mS[newDate.getMonth()]}`
}

export function getHrsDateTimeFormat(d) {
    let newDate = new Date(d);
    if (isNaN(newDate.getTime())) {
        console.log("Invalid Date", d);
        return "";
    }
    var mS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return `${newDate.getDate()} ${mS[newDate.getMonth()]} ${newDate.getYear() - 100}, ${getMyTime(newDate.getHours(), newDate.getMinutes())} hrs `
}

/*To reverse string - For example: "hello" -> "olleh" */
export const reverseString = (string) => {
    // return string.split("").reverse().join("");
    return string;
};
/*To retrieve value from store */
export const getAppStoreValue = (key) => {
    if (isAppStore()){
        return JSON.parse(localStorage.getItem(reverseString("app_store")))[key];
    }else {
        return "";
    }
};

/**
 * 
 * Extraction of Data for Profile
 * 
 */
export const getNames=(res)=>{
    let groups={};
    let organisations={};
    groups=res.groups.map(item=>(item.groupName))
    organisations = res.appointments.map(item=>(
        console.log("Organisation",item)
    ))
}

/*To check if app-store exists */
export const isAppStore = () => {
    return localStorage.getItem(reverseString("app_store")) !== null;
};


/**
 * decode the Jwt Token and return the json format
 */
export const getDecodedToken = (JWTtoken) => {
    return jwt_decode(JWTtoken)
}

export function shadeColor(color, percent) {

    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}
//To generate random ID 'n' digits long
export const generateRandomID = (n = 5) => {
    return Array.from({length: n}).map(x => 'x').join('').replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export function getOffsetTop(elem) {
    var offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
    } while (elem = elem.offsetParent);
    return offsetTop;
}

export const getValidUrl = (url = '') => {
    let newUrl = window.decodeURIComponent(url);
    newUrl = newUrl
        .trim()
        .replace(/\s/g, '');
    if (/^(:\/\/)/.test(newUrl)) {
        return `http${newUrl}`;
    }
    if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
        return `http://${newUrl}`;
    }
    return newUrl;
};

export const getReferOriginIDByNameAndArray = (referOriginArray,name) => {
    let referOriginID = undefined;
    referOriginArray.map(item => {
        if(item.name.toLowerCase() === name.toLowerCase()) {
            referOriginID = item.id;
        }
    });
    return referOriginID;
}

/**
 * Get Value by Name given in @param by Key Value pair also given in @param. Tree Should be provided for Tree Processing
 * @param treeData
 * @param key
 * @param value
 * @param name
 * @returns {function(*): string}
 */

export const getBase64DataFromUrl = (path,callback) => {
    let url = `${ADMIN_URL}v1/admin/login/screen/content/view?image=${path}`;

    var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.open('GET', url, true);
        xmlHTTP.responseType = 'arraybuffer';
        xmlHTTP.onload = function (e) {
            var arr = new Uint8Array(this.response);
            var raw = String.fromCharCode.apply(null, arr);
            var b64 = btoa(raw);
            // var dataURL = "data:image/png;base64," + b64;
            callback(b64);
        };
        xmlHTTP.send();
}