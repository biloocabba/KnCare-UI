pipeline {
    environment {
        dockerimagename = "biloocabba/kncare"
        dockerImage = ""
    }

    agent any

    stages {

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
