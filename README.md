# Monorepo

This is a proof-of-concept repo

## Quick Start

`yarn install`

`yarn certs`

`yarn frontend:client:dev`

`yarn frontend:client:prod`

`yarn frontend:server`

`yarn lint`

`yarn lint:fix`

## Boostrap Infra

- Create GCP Project for `devops`

```shell
GCP_ORG=987654321
GCP_PROJECT=my-project-12345

gcloud auth login
gcloud projects create ${GCP_PROJECT} --name=DevOps --organization=${GCP_ORG}
gcloud config set project ${GCP_PROJECT}

gcloud services enable deploymentmanager.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com
gcloud services enable cloudbilling.googleapis.com
gcloud services enable iam.googleapis.com
gcloud services enable servicemanagement.googleapis.com

gcloud iam service-accounts create github \
  --description="GitHub service account" \
  --display-name="GitHub"


# Wrong, need to add service account 470017183571@cloudservices.gserviceaccount.com
gcloud projects add-iam-policy-binding \
 ${GCP_PROJECT} \
 --member="serviceAccount:github@${GCP_PROJECT}.iam.gserviceaccount.com" \
 --role='roles/resourcemanager.organizationViewer'

gcloud organizations add-iam-policy-binding \
 ${GCP_ORG} \
 --member="serviceAccount:github@${GCP_PROJECT}.iam.gserviceaccount.com" \
 --role='roles/resourcemanager.projectCreator'

gcloud organizations add-iam-policy-binding \
 ${GCP_ORG} \
 --member="serviceAccount:github@${GCP_PROJECT}.iam.gserviceaccount.com" \
 --role='roles/billing.user'

gcloud iam service-accounts keys create secrets/github.json \
  --iam-account=github@${GCP_PROJECT}.iam.gserviceaccount.com
```

- Add GitHub Sercret `GCP_SERVICE_KEY` with contents of `secrets/github.json`
- Create `devel` branch on GitHub

## Visual Studio Code - Dev Container

## Bazel Monorepo
