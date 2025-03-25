# 🚀 Naukri Profile Updater | Playwright + TypeScript

An advanced automation framework to seamlessly update **Naukri.com** profiles using **Playwright & TypeScript**. This project runs in **headless mode**, integrates with **Jenkins for scheduled execution (2 AM daily)**, and delivers **detailed test reports via email**. Built with **best practices**, including the **Page Object Model (POM), structured logging, and CI/CD integration**.

## 📌 Features

✅ **Automated Profile Updates** – Keeps your Naukri profile fresh & updated.

✅ **Playwright + TypeScript Best Practices** – Ensures maintainability & scalability.

✅ **Jenkins CI/CD Integration** – Automates execution at scheduled intervals.

✅ **Headless Execution** – Runs efficiently in the background.

✅ **Email Reporting** – Sends test execution reports via email.

✅ **Error Handling & Logging** – Captures failures & logs execution details.

---

## 📂 Project Structure

```
📁 naukri-profile-update-playwright-typescript
│-- 📁 tests/               # Test cases
│-- 📁 page-objects/        # Page Object Model (POM) classes
│-- 📁 reports/             # Generated test reports
│-- 📁 screenshots/         # Screenshots & execution videos
│-- 📁 node_modules/        # Installed dependencies
│-- 📄 playwright.config.ts # Playwright configuration
│-- 📄 package.json         # Project dependencies
│-- 📄 README.md            # Project documentation
```

---

## 🎬 Execution Preview

### **📸 Screenshots**
> Sample screenshot of the automated profile update process:

![Execution Screenshot](https://github.com/user-attachments/assets/97989d83-4da8-44b1-a27b-4bafbaa2263d)

### **📽️ Execution Video**
> Watch the automation in action:

[![Watch the video](screenshots/video-thumbnail.png)](https://github.com/user-attachments/assets/5f0154a1-5577-49f4-ace4-b7c2b1e09f1d)

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yogeshwankhede007/naukari-profile-update-playwright-typescript.git
cd naukri-profile-update-playwright-typescript
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run Tests Locally**
```sh
npx playwright test
```

### **4️⃣ Run in Headless Mode**
```sh
npx playwright test --headed=false
```

---

## ⚙️ Jenkins Integration

To schedule automated execution at **2 AM daily**, configure the **Jenkinsfile**:
```groovy
pipeline {
    agent any
    triggers {
        cron('0 2 * * *')
    }
    stages {
        stage('Checkout') { steps { git 'https://github.com/yogeshwankhede007/naukari-profile-update-playwright-typescript.git' } }
        stage('Install Dependencies') { steps { sh 'npm install' } }
        stage('Run Tests') { steps { sh 'npx playwright test' } }
        stage('Publish Report') {
            steps { publishHTML(target: [reportName: 'Test Report', reportDir: 'playwright-report', reportFiles: 'index.html']) }
        }
    }
    post {
        always {
            emailext(subject: "Naukri Automation Report", body: "Find attached report.", attachmentsPattern: "playwright-report/index.html")
        }
    }
}
```

---

## 📧 Email Reporting

This project automatically **sends test execution reports** via email after every Jenkins run. Ensure SMTP is configured in Jenkins before enabling this feature.

---

## 🛠️ Contributing

🚀 Feel free to fork this repository, enhance it, and submit pull requests! Contributions are always welcome.

---

## 📝 License

This project is **MIT Licensed**. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

🔹 **GitHub:** [username](https://github.com/yogeshwankhede007)  
🔹 **LinkedIn:** [profile](https://www.linkedin.com/in/ywankhede/)  
🔹 **Email:** yogiwankhede007@gmail.com  

---

🔥 **Automate your Naukri profile updates effortlessly with Playwright!**

