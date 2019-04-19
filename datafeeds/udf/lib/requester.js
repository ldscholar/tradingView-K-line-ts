import {logMessage} from './helpers';

var Requester = /** @class */ (function () {
    function Requester(headers) {
        if (headers) {
            this._headers = headers;
        }
    }

    Requester.prototype.sendRequest = function (datafeedUrl, urlPath, params) {
        if (params !== undefined) {
            var paramKeys = Object.keys(params);
            if (paramKeys.length !== 0) {
                urlPath += '?';
            }
            urlPath += paramKeys.map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(params[key].toString());
            }).join('&');
        }
        logMessage('New request: ' + urlPath);
        // Send user cookies if the URL is on the same origin as the calling script.
        var options = {credentials: 'same-origin'};
        if (this._headers !== undefined) {
            options.headers = this._headers;
        }
        //这里是返回数据的请求点
        console.log(datafeedUrl + "/" + urlPath, options);
        return fetch(datafeedUrl + "/" + urlPath, options)
            .then(function (response) {
                return response.text();
            })
            .then(function (responseTest) {
                console.log(responseTest);
                return JSON.parse(responseTest);
            });
    };
    return Requester;
}());
export {Requester};
