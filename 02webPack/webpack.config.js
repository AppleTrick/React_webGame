const path = require('path');
// 노드에서 경로를 쉽게 조작할수있게 해주는것

module.exports = {
    name : 'word-relay-setting',    // 모듈 이름
    mode : 'development', // 실서비스 : production
    devtool : 'eval', // 빠르게
    resolve : {
        extensions : ['.js','.jsx'] // 확장자를 찾아준다.
    },

    entry : {   // 입력
        // 다른곳에서 불러왔다면 굳이 불러올 필요가 없다,
        app: ['./client'],
    },

    module : {
        rules: [{
            test : /\.jsx?/,
            loader : 'babel-loader',    //js 나 jsx를 babel을 적용시킨다.
            options : {
                presets : ['@babel/preset-env','@babel/preset-react'],
            },
        }],
    },

    output : {  // 출력
        path : path.join(__dirname, 'dist'), // __dirname 현재 폴더 안에 dist
        filename : 'app.js'
    },
};

// 목적 : jsx를 합쳐서 app.js를 만들어서 index에서 작동하게 만들어주는것 !