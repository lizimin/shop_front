import store from '../store';
import request from "@/utils/request";

const baseUrl = "https://xcxcgj.gotomore.cn/api/api.php?s=";

export default (fetch = function(url = '', data = {}) {
  var host = 'https://xcxcgj.gotomore.cn';
  var api_url = host + '/api/api.php?s=' + url;
   return request.post(api_url, data);
  // return new Promise(function(resolve, reject) {
  //   $.ajax({
  //     type: 'POST',
  //     url: api_url,
  //     data: data
  //   })
  //     .done(function(data) {
  //       resolve({ data: data.data, error: data.error, message: data.message });
  //     })
  //     .fail(function(jqXHR, textStatus) {
  //       // console.log(jqXHR)
  //       store.commit('updatetoastdata', {
  //         toastdata: { status: true, text: '网络错误' }
  //       });
  //       reject(jqXHR);
  //     });
  // });
});

// static async getVcardGivenList(data) {
//   const url = `${baseUrl}/Mallvcard/getVcardGivenList`;
//   return await request.post(url, data);
// }
// export default fetch = function(url = '', field= {}, need_access_token = true){
//   // data.openid = store.state.vux.openid
//   field.access_token = VueCookie.get('access_token')
//   // var openid = store.state.vux.openid
//   var openid = store.state.vux.openid
//   var getToken = new Promise(function(resolve, reject){
//     if(need_access_token && !store.state.vux.token.access_token){
//       ajaxfetch('customer/syncLzUser', {openid: openid}).then(function(d){
//         let {data, error, message} = d
//         store.commit('updatetoken', data)
//         if(openid){
//           VueCookie.set('access_token', data.access_token, {expires: '12h'})
//           VueCookie.set('openid', openid, {expires: '12h'})
//         }
//         field.access_token = data.access_token
//         resolve(data)
//       }, function(){
//         resolve('no ')
//       })
//     }else{
//       resolve('access_token')
//     }
//   })

//   return new Promise(function(resolve, reject){
//     getToken.then((d) => {
//       ajaxfetch(url, field).then((d)=>{
//         resolve(d)
//       })
//     }, (d) => {
//       ajaxfetch(url, field).then((d)=>{
//         resolve(d)
//       })
//     })
//   })

// }
