import "../App.css";
import "../reset.css";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";
import { useEffect, useState } from "react";

function Home() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    initialProcess();
  }, []);

  const initialProcess = async () => {
    const result = await axios.get("http://localhost:8080/");
    console.log(result);
    setFeatures(result.data);
  };

  console.log(features);

  return (
    <body>
      <div class="body-margin">
        <div class="title-contents">
          <p class="title-btn">Feature List</p>
          <a href="/" class="change-function-bn">
            Add
          </a>
          <a href="/" class="change-function-bn-2">
            Delete
          </a>
        </div>

        <div class="function-contents">
          {features.map((feature, index) => (
            <ModalComponent
              key={index}
              featureName={feature.feature_name}
              title={feature.feature_display_name}
              explanation={feature.feature_explanation}
            />
          ))}
        </div>

        <div class="link">
          <a href="/">
            <h4 class="bn35">Back</h4>
          </a>
          <a href="/">
            <h4 class="bn35">Next</h4>
          </a>
        </div>

        <div class="title-contents">
          <p class="title-btn">External Links</p>
        </div>

        <div class="function-contents">
          <a
            target="_blank"
            href="https://www.notion.so/IT-db3defa34daf49a2be4c24213d745aeb?pvs=4"
            class="bn3"
            rel="noreferrer"
          >
            Notion
          </a>
          <a
            target="_blank"
            href="https://github.com/"
            class="bn3"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://qiita.com/"
            class="bn3"
            rel="noreferrer"
          >
            Qiita
          </a>
        </div>
      </div>
    </body>
  );
}

export default Home;
