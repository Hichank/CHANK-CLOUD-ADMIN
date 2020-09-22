export default [
    {
        // 登录
        url: '/auth/login',
        type: 'POST',
        response: () => {
            return {
                code: 200,
                data: {
                    token: "LUOHAICHANG",
                }
            }
        }
    },
]