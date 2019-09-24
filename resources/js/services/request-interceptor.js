import axios from "axios";

// Global response interceptor
axios.interceptors.response.use(
  function(response) {
    console.log(response);
    switch (response.status) {
      // OK
      case 200:
        break;
      // Created
      case 201:
        break;
      // Accepted
      case 202:
        break;
      // Non-Authoritative Information
      case 203:
        break;
      // No Content
      case 204:
        break;
      // Reset Content
      case 205:
        break;
      // Partial Content
      case 206:
        break;
      // Multi-Status (WebDAV)
      case 207:
        break;
      // Multi-Status (WebDAV)
      case 208:
        break;
      // IM Used (HTTP Delta encoding)
      case 226:
        break;
      default:
        break;
    }
    return response;
  },
  function(error) {
    console.log(error);
    console.log(error.response);
    switch (error.response.status) {
      case 400: // Bad Request
        break;
      case 401: // Unauthorized
        break;
      case 402: // Payment Required
        break;
      case 403: // Forbidden
        break;
      case 404: // Not Found
        break;
      case 405: // Method Not Allowed
        break;
      case 406: // Not Acceptable
        break;
      case 407: // Proxy Authentication Required
        break;
      case 408: // Request Timeout
        break;
      case 409: // Conflict
        break;
      case 410: // Gone
        break;
      case 411: // Length Required
        break;
      case 412: // Precondition Failed
        break;
      case 413: // Payload Too Large
        break;
      case 414: // URI Too Long
        break;
      case 415: // Unsupported Media Type
        break;
      case 416: // Requested Range Not Satisfiable
        break;
      case 417: // Expectation Failed
        break;
      case 418: // I'm a teapot
        break;
      case 421: // Misdirected Request
        break;
      case 422: // Unprocessable Entity (WebDAV)
        break;
      case 423: // Locked (WebDAV)
        break;
      case 424: // Failed Dependency (WebDAV)
        break;
      case 426: // Upgrade Required
        break;
      case 428: // Precondition Required
        break;
      case 429: // Too Many Requests
        break;
      case 431: // Request Header Fields Too Large
        break;
      case 451: // Unavailable For Legal Reasons
        break;
      case 500: // Internal Server Error
      case 501: // Not Implemented
      case 502: // Bad Gateway
      case 503: // Service Unavailable
      case 504: // Gateway Timeout
      case 505: // HTTP Version Not Supported
      case 506: // Variant Also Negotiates
      case 507: // Insufficient Storage
      case 508: // Loop Detected (WebDAV)
      case 510: // Not Extended
      case 511: // Network Authentication Required
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

// export default function execute() {
//     axios.interceptors.request.use(function(config) {
//         const token = this.$store.state.token;
//         if(token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     }, function(err) {
//         return Promise.reject(err);
//     });
// }
