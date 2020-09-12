export default [
    {
        // 登录
        url: '/api/user/login',
        type: 'POST',
        response: () => {
            return {
                code: 200,
                data: {
                    token: "LUOHAICHANG",
                    id: '1',
                    username: "测试人员"
                }
            }
        }
    },
    {
        // 获取用户信息
        url: '/api/user/auth',
        type: 'POST',
        response: () => {
            return {
                code: 200,
                data: {
                    "SUCCESS_101": true,
                    "SUCCESS_1011": true,
                    "SUCCESS_1012": true,
                },
            }
        },
    },
    {
        // 注销登录
        url: '/api/user/send/messages',
        type: 'POST',
        response: () => {
            return {
                code: 200,
                data: 123456
            }
        }
    },
]