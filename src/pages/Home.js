import "../App.css";
import "../reset.css";
import ModalComponent from "../components/ModalComponent";

function Home() {
  return (
    <body>
      <div class="body-margin">
        <div class="title-contents">
          <a href="/" class="bn2">
            処理機能
          </a>
          <a href="/" class="change-function-bn">
            開く
          </a>
          <a href="/" class="change-function-bn-2">
            追加
          </a>
          <a href="/" class="change-function-bn-2">
            削除
          </a>
        </div>

        <div class="function-contents">
          <ModalComponent />
          <a href="/" class="bn3">
            aiueoaiueo
          </a>
          <a href="/" class="bn3">
            Button
          </a>
        </div>
        <div class="function-contents">
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
        </div>
        <div class="function-contents">
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
        </div>

        <div class="link">
          <a href="/">
            <h4 class="bn35">戻る</h4>
          </a>
          <a href="/">
            <h4 class="bn35">進む</h4>
          </a>
        </div>

        <div class="title-contents">
          <a href="/" class="bn2">
            外部リンク
          </a>
        </div>

        <div class="function-contents">
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
          <a href="/" class="bn3">
            Button
          </a>
        </div>
      </div>
    </body>
  );
}

export default Home;
