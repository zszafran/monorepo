# --- begin runfiles.bash initialization v2 ---
# Copy-pasted from the Bazel Bash runfiles library v2.
set -uo pipefail; f=bazel_tools/tools/bash/runfiles/runfiles.bash
source "${RUNFILES_DIR:-/dev/null}/$f" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "${RUNFILES_MANIFEST_FILE:-/dev/null}" | cut -f2- -d' ')" 2>/dev/null || \
  source "$0.runfiles/$f" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "$0.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "$0.exe.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
  { echo>&2 "ERROR: cannot find $f"; exit 1; }; f=; set -e
# --- end runfiles.bash initialization v2 ---

BIN="$(rlocation gcloud_sdk/bin/gcloud)"
ORGANIZATION_ID="${1}"
BILLING_ID="${2}"
PROJECT_ID="monorepo-dm-$(( $RANDOM % 1000 ))"
PROJECT_NAME="Deployment Manager"

echo "Organization: ${ORGANIZATION_ID}"
echo "Billing: ${BILLING_ID}"
echo "Project: ${PROJECT_ID}"

${BIN} auth login
${BIN} projects create "${PROJECT_ID}" --name="${PROJECT_NAME}" --organization="${ORGANIZATION_ID}"
${BIN} config set project "${PROJECT_ID}"
${BIN} services enable deploymentmanager.googleapis.com
${BIN} services enable cloudresourcemanager.googleapis.com
${BIN} services enable cloudbilling.googleapis.com
${BIN} services enable iam.googleapis.com
${BIN} services enable servicemanagement.googleapis.com
