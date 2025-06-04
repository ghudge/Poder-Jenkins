pipeline {
    agent any

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    tools {
        nodejs 'NodeJS 18'
    }
    stages {
        stage('Test Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/ghudge/Poder-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests (Feature Files - Headless)') {
            steps {
                sh 'npx cypress run --browser chrome --spec'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.*,cypress/screenshots/**/*.*', allowEmptyArchive: true
        }
    }
}

