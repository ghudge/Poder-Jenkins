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

        stage('Verify Cypress Install') {
            steps {
                bat 'npx cypress verify'
            }
        }

        stage('Run Cypress Tests (Feature Files - Headless)') {
            steps {
                // Run Cypress in headless Chrome
                bat 'npx cypress run --spec "cypress/e2e/Features/P3_01_loginPoderValidAndInvalid.feature" --browser chrome'
            }
        }

        stage('Check Node & NPM Versions') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
    }

    post {
        always {
            // Archive test results: videos and screenshots
            archiveArtifacts artifacts: 'cypress/videos/**/*.*,cypress/screenshots/**/*.*', allowEmptyArchive: true
        }
    }
}

