const Io = {
  ws: null,
  init: function () {
    const BrowserWebSocket = window.WebSocket || window.MozWebSocket
    this.ws = new BrowserWebSocket('ws://118.190.201.181:3010')
  },
  subscribeKline: function (params, callback) {

    if (this.ws === null) {
      this.init()
    }

    if (this.ws.readyState) {
      this.ws.send(JSON.stringify(params))//传递数据请求参数
    } else {
      this.ws.onopen = evt => {
        this.ws.send(JSON.stringify(params))//传递数据请求参数
      }
    }
    this.ws.onmessage = e => {
      callback(JSON.parse(e.data))//把数据结果返回给 回调函数
    }

  }
}
export default Io
