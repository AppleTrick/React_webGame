const path = require('path');
const webpack = require('webpack');
// 노드에서 경로를 쉽게 조작할수있게 해주는것

const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

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
            test : /\.jsx?$/,
            loader : 'babel-loader',    //js 나 jsx를 babel을 적용시킨다.
            options : {
                presets : [
                    // presets에는 여러가지 설정이 복잡하게 들어가기때문에 여러개가 들어갈 수 밖에 없게 된다.
                    ['@babel/preset-env',{
                        targets : {
                            // preset-env를 꼭 해줘야 된다. 옛날것을 지원을 못해줄수있다. 이를 바벨에서 처리를 해줌,
                            browsers:['> 1% in KR'], // browserslist에서 브라우저 설정 옵션들 보기
                        },
                        debug : true,
                    }],
                    '@babel/preset-react',
                ],
                // preset-enc 다수의 플러그인들
                // 추가적인 설정을 적용하고 싶다.
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ],
            },
        }],
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({debug: true}),
        new RefreshWebpackPlugin(),
    ], // 확장프로그램의 개념
    output : {  // 출력
        path : path.join(__dirname, 'dist'), // __dirname 현재 폴더 안에 dist
        filename : 'app.js',
        publicPath: '/dist/',
    },

    devServer : {
        publicPath : '/dist/',
        hot : true,
        open : true,
    }
};

// 목적 : jsx를 합쳐서 app.js를 만들어서 index에서 작동하게 만들어주는것 !