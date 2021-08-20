# typescript-training
https://www.tohoho-web.com/ex/typescript.html
上記のリンクを参照しました。

◆初期設定方法
$ mkdir sample
$ cd sample
$ npm init
$ npm install typescript
$ echo export PATH=\$PATH:`pwd`/node_modules/.bin >> ~/.bashrc
$ source ~/.bashrc
$ tsc --version

◆実行方法
１）tsc (TypeScript Compiler)コマンドを使用して TypeScript ファイルを JavaScript ファイルにコンパイルします。
$ tsc sample.ts

２）コンパイルされた sample.js を node で実行します。
$ node sample.js
