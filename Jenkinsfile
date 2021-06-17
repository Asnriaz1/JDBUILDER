// Powered by Infostretch 

timestamps {

node () {

	stage ('specialisedjobs-frontend - Checkout') {
 	 checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'bitbucket', url: 'https://bitbucket.org/specialisedjobs/specialisedjobs-react']]]) 
	}
	stage ('specialisedjobs-frontend - Build') {
 	
// Unable to convert a build step referring to "jenkins.plugins.nodejs.NodeJSCommandInterpreter". Please verify and convert manually if required.		// Shell build step
sh """ 
cd frontend-site && npm install
npm run build 
 """ 
	}
	stage ('specialisedjobs-frontend - Post build actions') {
/*
Please note this is a direct conversion of post-build actions. 
It may not necessarily work/behave in the same way as post-build actions work.
A logic review is suggested.
*/
		// Mailer notification
		step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: 'm.adeel@specialisedjobs.com', sendToIndividuals: false])
 
	}
}
}