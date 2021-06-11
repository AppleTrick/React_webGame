const { webpack } = require("webpack");

module.exports = {
    name : 'NumberBasesballHooks',
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js','.jsx'] // 해당요소에 있는 확장자 이름을 찾아준다.
    },

    // 입력값
    entry : {
        app : ['./client']
    },

    // 입력값을 어떤 요소를 통해 합쳐줄지 설정해줌
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                loader : 'babel-loader',
                options : {
                    presets : [
                        ['babel/preset-env', {
                            targets : { browsers : ['> 1% in KR'],},
                            debug : true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel'
                    ],
                    
                }
            }
        ]
    },

    // 웹팩에 추가적인 플러그인 -> 확장 프로그램 세팅
    plugins : [
        new webpack.LoaderOptionsPlugin({debug:true}),
        new RefreshWebpackPlugin(),
    ],


    // 나오는 결과 값
    output : {
        path : path.join(__dirname, 'dist'), // __dirname 현재 폴더 안에 dist
        filename : 'app.js',
        publicPath: '/dist/',
    },

    //핫로딩 서버 설정
    devServer : {
        publicPath : '/dist/',
        hot : true,
        open : true,
    }
}