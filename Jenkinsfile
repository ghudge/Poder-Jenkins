pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}\\.cache\\Cypress"
    }

    tools {
        nodejs 'NodeJS 18.20.8'  // Make sure this name matches Jenkins config exactly
    }
    
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/ghudge/Poder-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests (Feature Files - Headless)') {
            steps {
                // Specify your spec file(s) after --spec or remove it to run all
                bat 'npx cypress run --browser chrome --spec "cypress/e2e/**/*.feature"'
            }
        }

        stage('Test Node') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.*,cypress/screenshots/**/*.*', allowEmptyArchive: true
        }
    }
}
