//PUT请求：如果两个请求相同，后一个请求会把第一个请求覆盖掉。（所以PUT用来改资源）
//POST请求：后一个请求不会把第一个请求覆盖掉。（所以Post用来增加源）
import request from '../utils/request';
//用户
//删除
export function DeleteUnfinishedOrderByUUID(orderId) {
    return request({
        method: 'DELETE',
        url: '/api/Order/DeleteUnfinishedOrderByUUID',
        params: {
            uuid: orderId,
        }
    })
}

//查询
export function GetOrdersNumByConditionWithAccount(account, orderId, keyword, type) {
    return request({
        method: 'GET',
        url: '/api/Order/GetOrdersNumByConditionWithAccount',
        params: {
            account: account,
            uuid: orderId,
            hotelNameAddress: keyword,
            key: type
        }
    })
}

export function GetOrdersByConditionWithAccount(pageSize, currentPage, account, orderId, keyword, type) {
    return request({
        method: 'GET',
        url: '/api/Order/GetOrdersByConditionWithAccount',
        params: {
            pagesize: pageSize,
            currentpage: currentPage,
            account: account,
            uuid: orderId,
            hotelNameAddress: keyword,
            key: type
        }
    })
}

//全部订单
export function getOrderByUserAccountCount(account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetOrdersNumByUserAccount',
        params: {
            account: account
        }
    })
}
export function getOrderByUserAccount(pageSize, currentPage, account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetOrdersByUserAccount',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
            account: account
        }
    })
}



//未完成订单
export function GetUnfinishedOrdersNumByUserAccount(account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetUnfinishedOrdersNumByUserAccount',
        params: {
            account: account
        }
    })
}
export function GetUnfinishedOrdersByUserAccount(pageSize, currentPage, account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetUnfinishedOrdersByUserAccount',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
            account: account
        }
    })
}



//待评价订单
export function GetUnevaluatedOrdersNumByUserAccount(account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetUnevaluatedOrdersNumByUserAccount',
        params: {
            account: account
        }
    })
}
export function GetUnevaluatedOrdersByUserAccount(pageSize, currentPage, account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetUnevaluatedOrdersByUserAccount',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
            account: account
        }
    })
}


//已评价订单
export function GetEvaluatedOrdersNumByUserAccount(account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetEvaluatedOrdersNumByUserAccount',
        params: {
            account: account
        }
    })
}
export function GetEvaluatedOrdersByUserAccount(pageSize, currentPage, account) {
    return request({
        method: 'GET',
        url: '/api/Order/GetEvaluatedOrdersByUserAccount',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
            account: account
        }
    })
}

//管理员
//删除
export function DeleteOrderByUUID(orderId) {
    return request({
        method: 'DELETE',
        url: '/api/administration/DeleteOrderByUUID',
        params: {
            uuid: orderId,
        }
    })
}
//查询 各个页面需要修改
export function GetOrdersNumByConditionWithoutAccount(orderId, keyword, type) {
    return request({
        method: 'GET',
        url: '/api/administration/GetOrdersNumByConditionWithoutAccount',
        params: {
            uuid: orderId,
            hotelNameAddress: keyword,
            key: type
        }
    })
}

export function GetOrdersByConditionWithoutAccount(pageSize, currentPage, orderId, keyword, type) {
    return request({
        method: 'GET',
        url: '/api/administration/GetOrdersByConditionWithoutAccount',
        params: {
            pagesize: pageSize,
            currentpage: currentPage,
            uuid: orderId,
            hotelNameAddress: keyword,
            key: type
        }
    })
}
//全部订单
export function GetAllOrdersNum() {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllOrdersNum',
    })
}
export function GetAllOrders(pageSize, currentPage) {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllOrders',
        params: {
            pageSize: pageSize,
            currentPage: currentPage
        }
    })
}

//未完成订单
export function GetAllUnfinishedOrdersNum() {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllUnfinishedOrdersNum',
    })
}
export function GetAllUnfinishedOrders(pageSize, currentPage) {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllUnfinishedOrders',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
        }
    })
}
//待评价订单
export function GetAllUnevaluatedOrdersNum() {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllUnevaluatedOrdersNum',
    })
}
export function GetAllUnevaluatedOrders(pageSize, currentPage) {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllUnevaluatedOrders',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
        }
    })
}
//已完成订单
export function GetAllEvaluatedOrdersNum() {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllEvaluatedOrdersNum',
    })
}
export function GetAllEvaluatedOrders(pageSize, currentPage) {
    return request({
        method: 'GET',
        url: '/api/administration/GetAllEvaluatedOrders',
        params: {
            pageSize: pageSize,
            currentPage: currentPage,
        }
    })
}
