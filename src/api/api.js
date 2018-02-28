import request from "@/utils/request";
const baseUrl = "https://xcxcgj.gotomore.cn/api/api.php?s=";
// const baseUrl = "http://192.168.0.113/api/api.php?s=";
export default class {
  /**
   *
   * @api {method} /Mallvcard/getVcardsByUser getVcardsByUser
   * @apiName getVcardsByUser
   * @apiGroup MyPage
   * @apiDescription 根据用户token用户已有卡片,
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getVcardsByUser(data) {
    const url = `${baseUrl}/Mallvcard/getVcardsByUser`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Mallvcard/getVcardGivenList getVcardGivenList
   * @apiName getVcardGivenList
   * @apiGroup MyPage
   * @apiDescription 根据用户token用户已有卡片,
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getVcardGivenList(data) {
    const url = `${baseUrl}/Mallvcard/getVcardGivenList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Mallvcard/getCardInfo getCardInfo
   * @apiName getCardInfo
   * @apiGroup MyPage
   * @apiDescription 根据用户token用户已有卡片,
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value,
         id:@id  // vc_id
     }
   *
   *

   *
   */
  static async getCardInfo(data) {
    const url = `${baseUrl}/Mallvcard/getCardInfo`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Mallvcard/getRecommendVcards  getRecommendVcards
   * @apiName getRecommendVcards
   * @apiGroup MyPage
   * @apiDescription 获取推荐卡片列表
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   */
  static async getRecommendVcards(data) {
    const url = `${baseUrl}/Mallvcard/getRecommendVcards`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Coupon/getCouponByUser getCouponByUser
   * @apiName getCouponByUser
   * @apiGroup MyPage
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   *
   * @apiSuccessExample {type} Success-Response:
     {
         data : [{
           out_trade_no:'@id',
           ....
          //  TODO  过期时间 别的字段已经够用
         }]
     }
   *
   *
   */
  static async getCouponByUser(data) {
    const url = `${baseUrl}/Coupon/getCouponByUser`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Coupon/getRecommendCoupon  getRecommendCoupon
   * @apiName getRecommendCoupon
   * @apiGroup MyPage
   * @apiDescription 根据用户token用户已有优惠券
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   */
  static async getRecommendCoupon(data) {
    const url = `${baseUrl}/Coupon/getRecommendCoupon`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Recommend/getMasterInMy  getMasterInMy
   * @apiName getMasterInMy
   * @apiGroup MyPage
   * @apiDescription 获取我的推荐师傅信息
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
         data : [{
           photo:'@src',
           nickname:'@cname',
           exp_str:'@cword',
           skill:'@cword',
           opendid:'@id'
           link:'@url'
         }]
     }
   *
   */

  static async getMasterInMy(data) {
    const url = `${baseUrl}/Recommend/getMasterInMy`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Consumption/getConsumptionList  getConsumptionList
   * @apiName getConsumptionList
   * @apiGroup MyPage
   * @apiDescription 获取卡片使用记录
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value,
         type  : 'vcard | coupon ' ,
         id : '@id"
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
         data : [{
           photo:'@src',
           nickname:'@cname',
           exp_str:'@cword',
           skill:'@cword',
           opendid:'@id'
           link:'@url'
         }]
     }
   *
   */

  static async getConsumptionList(data) {
    const url = `${baseUrl}/Consumption/getConsumptionList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Recommend//getRecommendGoodsList  getRecommendGoodsList
   * @apiName getRecommendGoodsList
   * @apiGroup MyPage
   * @apiDescription 获取推荐商品列表
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value,
         type  : 'vcard | coupon '
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
      data : {
        page_data:{
          total:1,
          current_page:1,
          last_page:1
        },
        list:[{
          photo:'@src',
          goods_name:"@cword",
          goods_price:Int,
          sku_id:"@id"
        }]
      }
     }
   *
   */

  static async getRecommendGoodsList(data) {
    const url = `${baseUrl}/Recommend/getRecommendGoodsList`;
    return await request.post(url, data);
  }

  /**
   *
   * @api {method} /Mallvcard/getVcardGivenList getVcardGivenList
   * @apiName getVcardGivenList
   * @apiGroup MyPage
   * @apiDescription 获取用户获赠的卡片,
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getVcardGivenList(data) {
    const url = `${baseUrl}/Mallvcard/getVcardGivenList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Mallvcard/getGiveVcardInfo getGiveVcardInfo
   * @apiName getGiveVcardInfo
   * @apiGroup MyPage
   * @apiDescription 获取获赠卡片信息,
   *
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getGiveVcardInfo(data) {
    const url = `${baseUrl}/Vcard/getGiveVcardInfo`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Activity/userHomeList userHomeList
   * @apiName userHomeList
   * @apiGroup MyPage
   * @apiDescription 我的页面 推送用户最新活动,
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         token : value
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async userHomeList(data) {
    const url = `${baseUrl}/Activity/userHomeList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /AllQrcode/getMyVcard getMyVcard
   * @apiName getMyVcard
   * @apiGroup MyPage
   * @apiDescription 我的页面 推送用户最新活动,
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         list_no : value
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getMyVcard(data) {
    const url = `${baseUrl}/AllQrcode/getMyVcard`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /AllQrcode/giveVcard giveVcard
   * @apiName giveVcard
   * @apiGroup MyPage
   * @apiDescription 我的页面 推送用户最新活动,
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         list_no : value
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async giveVcard(data) {
    const url = `${baseUrl}/AllQrcode/giveVcard`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {method} /Product/getProduct getProduct
   * @apiName getProduct
   * @apiGroup MyPage
   * @apiDescription 我的页面 推送用户最新活动,
   *
   * @apiParam  {String} token 公共头部已带
   *
   * @apiParamExample  {type} Request-Example:
     {
         pro_id : '@id'
     }
   *
   * @apiSuccessExample {type} Success-Response:
     {
        data : {
        page_data:{
          total:'@number',
          current:'@number'
        },
        list:[{
          out_trade_no:'@id',
            ....
          //  TODO  过期时间 别的字段已经够用
        }]
      }
     }
   *
   *
   */
  static async getProduct(data) {
    const url = `${baseUrl}/Product/getProduct`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {post} /MallCat/getCatList getCatList
   * @apiName getCatList
   * @apiGroup MallCat
   * @apiDescription 获取接待订单二维码链接和过期时间
   *
   * @apiParamExample  {type} Request-Example:
     {
       order_sn:String,  //订单号
     }
   *
   */
  static async getCatList(data) {
    const url = `${baseUrl}/MallCat/getCatList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {post} /Product/getProductList getProductList
   * @apiName getProductList
   * @apiGroup Product
   * @apiDescription 获取产品接口
   *
   * @apiParamExample  {type} Request-Example:
     {
       order_sn:String,  //订单号
     }
   *
   */
  static async getProductList(data) {
    const url = `${baseUrl}/Product/getProductList`;
    return await request.post(url, data);
  }
  /**
   *
   * @api {post} /Vcard/getMyGive getMyGive
   * @apiName getMyGive
   * @apiGroup Product
   * @apiDescription 获取赠送卡列表
   * status: 赠送的卡的状态 -1取所有，0未被领取，1已领取, 2过期退回，3撤销赠送 默认为 -1
   * type: 0为我领取的   1为我赠送的 默认是0
   * list_no: 不传则为用户所有的赠送的记录
   *
   * @apiParamExample  {type} Request-Example:
     {
       status: :String,  //订单号
     }
   *
   */
  static async getMyGive(data) {
    const url = `${baseUrl}/Vcard/getMyGive`;
    return await request.post(url, data);
  }
  /**

   * @api {post} /GiveVcard/resetGiveVcard resetGiveVcard
   * @apiName resetGiveVcard
   * @apiGroup Product
   * @apiDescription 撤销洗车卡
   * status: 赠送的卡的状态 -1取所有，0未被领取，1已领取, 2过期退回，3撤销赠送 默认为 -1

   *
   * @apiParamExample  {type} Request-Example:
     {
       card_code: :String,  //卡号
     }
   *
   */
  static async resetGiveVcard(data) {
    const url = `${baseUrl}/GiveVcard/resetGiveVcard`;
    return await request.post(url, data);
  }
  /**

   * @api {post} /GiveVcard/payWechat payWechat
   * @apiName payWechat
   * @apiGroup Product
   * @apiDescription 微信支付
   * 
   *
   */
  static async payWechat(data) {
    const url = `${baseUrl}/GiveVcard/payWechat`;
    return await request.post(url, data);
  }
  /**

   * @api {post} /Activity/getActivity getActivity
   * @apiName getActivity
   * @apiGroup Product
   * @apiDescription 活动公告
   * 
   *
   */
  static async getActivity(data) {
    const url = `${baseUrl}/Activity/getActivity`;
    return await request.post(url, data);
  } 
  /**

   * @api {post} /Customer/getCustomer getCustomer
   * @apiName getCustomer
   * @apiGroup Product
   * @apiDescription 获取用户信息
   * 
   *
   */
  static async getCustomer(data) {
    const url = `${baseUrl}/Customer/getCustomer`;
    return await request.post(url, data);
  } 
  /**

   * @api {post} /VcardLog/vcardReceiveLog vcardReceiveLog
   * @apiName vcardReceiveLog
   * @apiGroup Product
   * @apiDescription 获取公共展示领取记录
   * 
   *
   */
  static async vcardReceiveLog(data) {
    const url = `${baseUrl}/VcardLog/vcardReceiveLog`;
    return await request.post(url, data);
  } 
  /**

   * @api {post} /Mallvcard/vcardReceiveLog vcardReceiveLog
   * @apiName vcardReceiveLog
   * @apiGroup Product
   * @apiDescription 获取公共购买领取记录
   * 
   *
   */
  static async vcardBuyLog(data) {
    const url = `${baseUrl}/Customer/vcardBuyLog`;
    return await request.post(url, data);
  } 
  /**

 * @api {post} /SalaryRecord/getUserSalaryRecord getUserSalaryRecord
 * @apiName getUserSalaryRecord
 * @apiGroup Product
 * @apiDescription 获取用户的佣金记录
 * 
 *
 */
  static async getUserSalaryRecord(data) {
    const url = `${baseUrl}/SalaryRecord/getUserSalaryRecord`;
    return await request.post(url, data);
  } 
  /**

 * @api {post} /ActivityUserInfo/addActivityUser addActivityUser
 * @apiName addActivityUser
 * @apiGroup Product
 * @apiDescription 0122店面接待添加活动用户接口
 * 
 *
 */
  static async addActivityUser(data) {
    const url = `${baseUrl}/ActivityUserInfo/addActivityUser`;
    return await request.post(url, data);
  } 
  /**

 * @api {post} /WechatQr/productQr productQr
 * @apiName productQr
 * @apiGroup Product
 * @apiDescription 获取产品活动二维码
 * 
 *
 */
  static async productQr(data) {
    const url = `${baseUrl}/WechatQr/productQr`;
    return await request.post(url, data);
  } 
}

//  TOOD
// 添加车辆信息的接口需要添加vin码


