module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description @fixable 禁止使用 !! ~ 等难以理解的运算符
         * 仅允许使用 !!
         */
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!']
            }
        ]
    }
};
