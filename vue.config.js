const path = require("path");
// uglifyjs-webpack-plugin插件用来缩小（压缩优化）js文件
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// MiniCssExtractPlugin插件将CSS提取到单独的文件中
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// BundleAnalyzerPlugin插件可视化分析工具来查看打包后的文件信息
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const assetsPath = function(_path) {
  const assetsSubDirectory = "static";
  return path.posix.join(assetsSubDirectory, _path);
};
const is_production = process.env.NODE_ENV === "production";
const cdn = {
  css: ["https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css"],
  js: [
    "https://cdn.bootcdn.net/ajax/libs/axios/0.20.0/axios.min.js",
    "https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js",
    "https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",
    "https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js",
    "https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js",
    "https://cdn.bootcdn.net/ajax/libs/vue-lazyload/1.3.0/vue-lazyload.js",
  ],
};
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  publicPath: "/",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 关闭生产环境的source map,以加速生产环境构建。
  productionSourceMap: false,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 修改loader或添加loader
  chainWebpack: (config) => {
    /**
     * 别名配置
     * 对某个目录/文件路径起别名
     */
    config.resolve.alias
      .set("@api", path.resolve(__dirname, "./src/api"))
      .set("@utils", path.resolve(__dirname, "./src/utils"));
    // svg rule loader  配置svg
    const svgRule = config.module.rule("svg"); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });

    // 修改images loader
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/icons"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|webp|svg|dpg)(\?.*)?$/);

    if (process.env.NODE_ENV === "production") {
      // 生产环境关闭eslint
      config.module.rule("eslint").uses.clear();
      // ============压缩图片 start============
      // 方式一
      // config.module
      //   .rule("images")
      //   .test(/\.(png|jpg|jpeg|gif|svg|svgz)$/i)
      //   .use("image-webpack-loader")
      //   .loader("image-webpack-loader")
      //   .options({ bypassOnDebug: true })
      //   .end();

      // 方式二
      config.module
        .rule("images")
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
        });
      // ============压缩图片 end============
      config.optimization.minimizer("UglifyJsPlugin").use(UglifyJsPlugin, [
        {
          uglifyOptions: {
            compress: {
              // warnings: false,
              drop_console: true, //console
              drop_debugger: false,
              pure_funcs: ["console.log"], //移除console
            },
          },
        },
      ]);
      // MiniCssExtractPlugin插件将CSS提取到单独的文件中
      config.plugin("MiniCssExtractPlugin").use(MiniCssExtractPlugin, [
        {
          filename: assetsPath("css/[name].[contenthash:8].css"),
          chunkFilename: assetsPath("css/[name].[contenthash:8].css"),
        },
      ]);
      // BundleAnalyzerPlugin插件可视化分析工具来查看打包后的文件信息
      config.plugin("BundleAnalyzerPlugin").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static",
          reportFilename: "report.html",
          openAnalyzer: false,
        },
      ]);
      config.plugin("CompressionWebpackPlugin").use(CompressionWebpackPlugin, [
        {
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        },
      ]);
      config.plugin("html").tap((args) => {
        args[0].cdn = cdn;
        return args;
      });
    } else {
      config.output
        .filename(assetsPath("js/[name].[hash].js"))
        .chunkFilename(assetsPath("js/[name].[hash].js"));
    }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      //externals里的模块不打包
      // Object.assign(config, {
      //   externals: externals,
      // });
      config.externals = {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
        "js-cookie": "Cookies",
        nprogress: "NProgress",
        "vue-lazyload": "VueLazyload",
      };
    } else {
      // 为开发环境修改配置...
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // 所有scss文件都会自动引入scss变量文件：prependData: `@import "~element-ui/packages/theme-chalk/src/common/var";`
        // prependData: `@import "~element-ui/packages/theme-chalk/src/common/var";`,
      },
      postcss: {
        plugins: [
          // 配置 postcss-pxtorem 自动转换px为rem
          require("postcss-pxtorem")({
            rootValue: 1, // 换算的基数  1rem = 1px
            selectorBlackList: [], // 忽略转换正则匹配项 例如：项目中使用了cube-ui 那么需要忽略cube-ui的样式 selectorBlackList  : ["cube-"] 即可忽略
            propList: ["*"],
          }),
        ],
      },
    },
  },
  devServer: {
    port: 8000,
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        secure: true,
        changeOrigin: true, // 是否跨域
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
};
