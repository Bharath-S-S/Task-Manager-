pipeline {
    agent any

    stages {
        stage('Clone git') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/Aloneduckling/task-manager-react.git'
            }
        }
        stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
            
        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Test'){
            steps{
                sh 'npm run test'
            }
        }
    
    }
}
