class ajaxResponse {
  constructor() {
    this.status = false;
    this.msg = null;
    this.data = null;
    this.auth = false;
  }
  statusOK() {
    this.status = true;
  }
  statusFail(msg) {
    this.status = false;
    this.msg = msg;
  }
  authOK() {
    this.auth = true;
  }
  authFail(msg) {
    this.auth = false;
    this.status = false;
    this.msg = msg;
  }
  get _status() {
    return this.status;
  }
  set _msg(msg) {
    this.msg = msg;
  }
  get _msg() {
    return this.msg;
  }
  set _data(data) {
    this.data = data;
  }
  get _data() {
    return this.data;
  }
}

export default ajaxResponse;