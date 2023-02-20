import React from "react";
import "./App.css";

import img1 from "./img_firebaseCLI/img1.png";
import img2 from "./img_firebaseCLI/img2.png";
import img3 from "./img_firebaseCLI/img3.png";
import img4 from "./img_firebaseCLI/img4.png";
import img5 from "./img_firebaseCLI/img5.png";

import img1_sonar from "./img_sonarCloud/img1.png";
import img2_sonar from "./img_sonarCloud/img2.png";
import img3_sonar from "./img_sonarCloud/img3.png";
import img4_sonar from "./img_sonarCloud/img4.png";
import img5_sonar from "./img_sonarCloud/img5.png";
import img6_sonar from "./img_sonarCloud/img6.png";
import img7_sonar from "./img_sonarCloud/img7.png";

import img1_unit from "./img_unitTest/img1.png";
import img2_unit from "./img_unitTest/img2.png";

import img1_cicd from "./img_cicd/img1.png";
import img2_cicd from "./img_cicd/img2.png";
import img3_cicd from "./img_cicd/img3.png";
import img4_cicd from "./img_cicd/img4.png";
import img5_cicd from "./img_cicd/img5.png";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#282c34",
      }}
    >
      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 1: Setup Firebase and Github</h1>
        <p>
          <a
            href="https://console.firebase.google.com/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            Create firebase project
          </a>
        </p>
        <p>
          <a
            href="https://github.com/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            Create github repository
          </a>
        </p>
      </ul>

      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 2: Setup React App</h1>
        <p>
          <a
            href="https://git-scm.com/downloads/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            Download Git
          </a>
        </p>
        <p>
          <a
            href="https://nodejs.org/en/download/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            Download NodeJS
          </a>
        </p>
        <p style={{ color: "white" }}>npm install -g firebase-tools</p>
        <p style={{ color: "white" }}>
          npx create-react-app my-app --template typescript
        </p>
      </ul>

      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 3: Setup Firebase CI/CD</h1>
        <p style={{ color: "white" }}>firebase init</p>
        <img src={img1} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img2} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img3} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img4} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img5} alt="img" style={{ maxWidth: "100%" }}></img>
      </ul>

      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 4: Deploy to Git</h1>
        <p style={{ color: "white" }}>git add .</p>
        <p style={{ color: "white" }}>git commit -m "first commit"</p>
        <p style={{ color: "white" }}>
          git remote add origin https://github.com/[your_git_url]
        </p>
        <p style={{ color: "white" }}>git push -u origin main</p>
      </ul>

      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 5: Setup SonarCloud</h1>
        <p>
          <a
            href="https://sonarcloud.io/login/"
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
          >
            Create Sonarcloud project
          </a>
        </p>
        <img src={img1_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img2_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img3_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img4_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
        <img src={img5_sonar} alt="img" style={{ maxWidth: "100%" }}></img>

        <p style={{ color: "white" }}>
          Create "sonar-project.properties" file on project root.
        </p>
        <img src={img6_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
        <div style={{ textAlign: "justify" }}>
          <p style={{ color: "white" }}>
            sonar.exclusions=build/**,public/**,**.json,**/**.css,**/**.test.tsx,src/index.tsx,src/reportWebVitals.ts,src/setupTests.ts
          </p>
          <p style={{ color: "white" }}>sonar.projectKey=[YOU_Project_Key]</p>
          <p style={{ color: "white" }}>
            sonar.organization=[YOUR_Organization_Key]
          </p>
          <p style={{ color: "white" }}>
            sonar.javascript.lcov.reportPaths=./coverage/lcov.info
          </p>
        </div>
        <img src={img7_sonar} alt="img" style={{ maxWidth: "100%" }}></img>
      </ul>

      <ul style={{ maxWidth: "50%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 6: Setup Unit Test</h1>
        <img src={img1_unit} alt="img" style={{ maxWidth: "100%" }}></img>
        <p style={{ color: "white" }}>"coverage": "npm test -- --coverage"</p>
        <img src={img2_unit} alt="img" style={{ maxWidth: "100%" }}></img>
        <div style={{ textAlign: "justify" }}>
          <p style={{ color: "white" }}>
            &quot;jest&quot;&#58;&#123; &quot;coverageThreshold&quot;&#58;
            &#123;
          </p>
          <p style={{ color: "white" }}>
            &quot;global&quot;&#58; &#123; &quot;branches&quot;&#58; 80,
          </p>
          <p style={{ color: "white" }}>
            &quot;functions&quot;&#58; 80, &quot;lines&quot;&#58; 80,
          </p>
          <p style={{ color: "white" }}>
            &quot;statements&quot;&#58; 80 &#125; &#125;,
          </p>
          <p style={{ color: "white" }}>
            &quot;coveragePathIgnorePatterns&quot;&#58; [
            &quot;src/index.tsx&quot;,
          </p>
          <p style={{ color: "white" }}>
            &quot;src/reportWebVitals.ts&quot; ] &#125;
          </p>
        </div>
      </ul>

      <ul style={{ maxWidth: "100%", padding: 0 }}>
        <h1 style={{ color: "white" }}>Step 7: Setup Github Action CI/CD</h1>
        <img src={img1_cicd} alt="img" style={{ maxWidth: "100%" }}></img>

        <h2 style={{ color: "white" }}>Create new SONARCLOUD_TOKEN</h2>
        <div>
          <img src={img2_cicd} alt="img" style={{ maxWidth: "50%" }}></img>
        </div>
        <img src={img3_cicd} alt="img" style={{ maxWidth: "50%" }}></img>

        <h2 style={{ color: "white" }}>Add SONARCLOUD_TOKEN to Github</h2>
        <div>
          <img src={img4_cicd} alt="img" style={{ maxWidth: "50%" }}></img>
        </div>
        <img src={img5_cicd} alt="img" style={{ maxWidth: "50%" }}></img>
      </ul>
    </div>
  );
}

export default App;
