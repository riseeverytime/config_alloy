module.exports = {
    rules: {
        /**
         * 必须使用 if (foo === 5) 而不是 if (5 === foo)
         *
         * @category best-practices
         * @fixable
         */
        yoda: [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ]
    }
};
