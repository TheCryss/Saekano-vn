# Deployment
## How to Deploy in GCP App Engine
1. Create a Google Cloud Source repository mirroring github.
2. Enable App Engine in the project, then open cloud shell (docker and git preinstalled).
3. Clone GSR repository.
4. As HEAD tag not provided use git checkout [branch].
5. Create app.yaml to deploy the app
6. run gcloud app deploy
7. run gcloud app browse
