pipeline {
    agent any

    environment {
        // Use double backslashes on Windows
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}\\.cache\\Cypress"
    }

    tools {
        nodejs 'NodeJS 18.20.8'  // Must match the name configured in Jenkins → Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone from GitHub using credentials
                 git branch: 'main', url: 'https://github.com/ghudge/Poder-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests (Feature Files - Headless)') {
            steps {
                // Run Cypress in headless Chrome
                bat 'npx cypress run --spec "cypress/e2e/Features/P3_01_loginPoderValidAndInvalid.feature" --browser chrome'
            }
        }
        stage('Generate Report') {
            steps {
                // Run Cypress in headless Chrome
                bat 'node cucumber-html-report.js'
            }
        }
        stage('Zip Report') {
            steps {
                // Use PowerShell to zip the report folder
                bat '''
                    powershell -Command "Compress-Archive -Path target\\site\\html-report -DestinationPath target\\site\\html-report.zip"
                '''
            }
        }
    }

    post {
        always {
            // Publish the HTML report in Jenkins UI
            publishHTML([
                reportDir: 'target/site/html-report',
                reportFiles: 'index.html',
                reportName: 'Test Report',
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true
            ])

            // Archive the ZIP file so it can be downloaded
            archiveArtifacts artifacts: 'target/site/html-report.zip', fingerprint: true
        }
    }
}
