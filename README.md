#### PTA で使用可能な Web 総会決議用ホームページ

作成日：2022年3月 Update 2024年4月

技術スタック：<br>
Next.js 14.2.2<br>
react 18.2.0<br>
TailwindCSS 3.0.7<br>
react-pdf 5.7.1<br>
他は package.json を参照<br>

仕様等：<br>
議案：議案は pdf で作成し、google docs に配置して下段で誰でも閲覧可能なリンクとして貼られてます。また、本プロジェクトの public フォルダに pdfを保存することで、サイト中に pdf が埋め込まれます。<br>index.jsの11行目をpdf名の変更してください。：const url = '/sokai_2024.pdf'<br>
フォーム：Google Form を利用しリンクを貼りました。<br>
デプロイ：Vercel を推奨しますが、Next.js が動けばどこでもよいと思います。<br>
レスポンシブ：本アプリはモバイルと PC にレスポンシブです。<br>
pdfの埋め込みはローカルでは動かないですが、Vercelにデプロイすると動きます。
代替手段：Google サイト（2022 年 7 月に大きなバージョン変更あり）にも pdf 埋め込み機能があり、本サイトと同様のサイトが作成可能かと思います。


#### 連絡先

Yohei Komori<br>
email:hurumori@gmail.com
