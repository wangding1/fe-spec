modlue.exports = {
  plugins: ["wd-fe-eslint-plugin"],
  rules: {
    "wd-fe-eslint-plugin/no-http-url": "warn",
    "wd-fe-eslint-plugin/no-secret-info": "error",
    "wd-fe-eslint-plugin/no-js-in-ts-project": ["error",{
      autoMerge:true,
      whiteList:[]      
    }],
  },
};
