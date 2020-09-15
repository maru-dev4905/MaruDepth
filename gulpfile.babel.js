import gulp from "gulp";
import del from "del";
import image from "gulp-imagemin";
import sass from "gulp-sass";
import bro from "gulp-bro";
import babelify from "babelify";
import autoprefixer from "gulp-autoprefixer";
import gPug from "gulp-pug";
import concat from "gulp-concat";
import connect from "gulp-connect";
import changed from "gulp-changed";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";

sass.compiler = require("node-sass");

const DEV_SRC = "src";
const PUB_SRC = "dest";

const paths = {
    "dev" : {
         "js"  : DEV_SRC + "/js/*.js"
        ,"json": DEV_SRC + "/js/json/*.json"
        ,"css" : DEV_SRC + "/css/depth.scss"
        ,"img" : DEV_SRC + "/images/**/**"
        ,"font": DEV_SRC + "/fonts/**"
        ,"html": DEV_SRC + "/html/*.pug"
        ,"favicons" : DEV_SRC + "/favicons/**"
    },
    "pub" : {
          "js"   : PUB_SRC + "/js"
         ,"json" : PUB_SRC + "/js/json"
         ,"css"  : PUB_SRC + "/css"
         ,"img"  : PUB_SRC + "/images"
         ,"font" : PUB_SRC + "/fonts"
         ,"html" : PUB_SRC + "/"
         ,"favicons" : PUB_SRC + "/"
    },
    "watch" : {
          "js"   : DEV_SRC + "/js/*.js"
         ,"json" : DEV_SRC + "/js/json/*.json"
         ,"css"  : DEV_SRC + "/css/**/**/*.scss"
         ,"img"  : DEV_SRC + "/images/**"
         ,"html" : DEV_SRC + "/html/**/**/*.pug"
    }
}

const gulp_js = () => 
    gulp
        .src(paths.dev.js)
        .pipe(bro({
            transform:[
                babelify.configure({presets:["@babel/preset-env"]}),
                ["uglifyify",{global:true}]
            ]})
        )
        .pipe(concat("all.js"))
        .pipe(gulp.dest(paths.pub.js))

const gulp_json = () =>
    gulp
        .src(paths.dev.json)
        .pipe(gulp.dest(paths.pub.json))

const gulp_css = () =>
    gulp
        .src(paths.dev.css)
        .pipe(sass().on("error",sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.pub.css))

const gulp_html = () =>
    gulp
        .src(paths.dev.html)
        .pipe(gPug())
        .pipe(gulp.dest(paths.pub.html))

const gulp_image = () =>
    gulp
        .src(paths.dev.img)
        .pipe(changed(paths.pub.img))
        .pipe(image())
        .pipe(gulp.dest(paths.pub.img))

const gulp_favicon = () =>
    gulp
        .src(paths.dev.favicons)
        .pipe(image())
        .pipe(gulp.dest(paths.pub.favicons))

const gulp_fonts = () =>
    gulp
        .src(paths.dev.font)
        .pipe(gulp.dest(paths.pub.font))
        
const gulp_watch = () =>
    gulp.watch(paths.watch.js, gulp_js);
    gulp.watch(paths.watch.json, gulp_json);
    gulp.watch(paths.watch.css, gulp_css);
    gulp.watch(paths.watch.html, gulp_html);
    gulp.watch(paths.watch.img, gulp_image);

const webserver = () =>
    connect.server({
          root : PUB_SRC
        , livereload : true
        , port : 8001
    })

const clean = () => del([PUB_SRC + "/*"]);

const prepare = gulp.series([clean, gulp_image, gulp_favicon, gulp_fonts]);

const assets = gulp.series([gulp_html, gulp_css, gulp_js, gulp_json]);

const live = gulp.parallel([webserver, gulp_watch]);

export const build = gulp.series([prepare, assets, live]);