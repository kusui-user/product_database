product_database

npm install node-sass@5.0.0
npm install sass-loader@10.1.1
npm install --save-dev @nuxtjs/style-resources

  buildModules: [
    "@nuxtjs/style-resources",
  ],
  
  styleResources: {
    scss: [
      '~/assets/_variables.scss',
    ],
  },

  コンポーネント内で変数を使っても、
ビルド時にstyleResourcesで設定したファイルを考慮してくれるように(´ω｀)

※注意!!※
ドキュメントにも書いてあるけど、
変数・mixins・functionだけをインポートするビルドモジュールで、
実際に使われるCSSはインポートされないので注意。とのこと。

<!-- スクロールマジックインストール -->
npm i vue-scrollmagic --save

<!-- google fonts インストール -->
npm install nuxt-webfontloader

<!-- axios インストール -->
npm install --save @nuxtjs/axios