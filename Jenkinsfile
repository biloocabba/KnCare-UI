pipeline {

    agent any

    stages {

        stage('Build image and push to Openshift registry') {
            steps{
                script {
                    sh 'oc apply -f kn-care-frontend-prod.yml'
                    sh 'oc start-build kn-care-frontend-prod -n cp-697974'
                }
            }
        }

        stage('Deploy the Frontend to pod ') {

            steps{
                script {
                    sh 'oc apply -f Deployment-kn-care-frontend-prod.yml'
                }
            }
        }
    }
}
