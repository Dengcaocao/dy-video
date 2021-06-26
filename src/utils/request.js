let baseUrl = ''
let loadingNum = 0
// #ifndef H5
baseUrl = '/api/'
// #endif
// #ifndef Mp
baseUrl = 'http://172.20.10.2:1012'
// #endif

function request(params) {
  if (loadingNum === 0) {
    uni.showLoading()
  }
  loadingNum ++
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + params.url,
      method: baseUrl + params.method,
      success: res => {
        resolve(res)
      },
      fail:(err) => {
        reject(err)
      },
      complete: () => {
        loadingNum --
        if (loadingNum <= 0) {
          uni.hideLoading()
        }
      }
    })
  })
}