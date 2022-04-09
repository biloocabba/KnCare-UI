pipeline {
    environment {
        dockerimagename = "biloocabba/kncare"
        dockerImage = ""
    }

    agent any

    stages {

        stage('Checkout Source') {
            steps {
                git 'https://github.com/KNITS-OS/KnCare-UI.git'
            }
        }

        stage('Build image') {
            steps{
                script {
                    dockerImage = docker.Build("$dockerimagename")
                }
            }
        }

        stage('Pushing Image') {
            environment {
                registryCredential = 'docker-hub-repo'
            }
            steps{
                script {
                    docker.withRegistry( 'https://registry.hub.docker.com', registryCredential  ) {
                        dockerImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }
}
