"""Creates a single project."""


def GenerateConfig(context):
    organization_id = context.properties['organization']
    billing_account_id = context.properties['billing_account']
    project_name = context.properties['project_name']
    project_id = context.properties['project_id']
    apis = context.properties['apis']
    iam = context.properties['iam']

    resources = []

    resources.append({
        'name': 'project_' + project_id,
        'type': 'cloudresourcemanager.v1.project',
        'properties': {
            'name': project_name,
            'projectId': project_id,
            'parent': {
                'type': 'organization',
                'id': organization_id
            }
        }
    })

    resources.append({
        'name': 'billing_' + project_id,
        'type': 'deploymentmanager.v2.virtual.projectBillingInfo',
        'metadata': {
            'dependsOn': [
                'project_' + project_id,
            ]
        },
        'properties': {
            'name': 'projects/' + project_id,
            'billingAccountName': 'billingAccounts/' + billing_account_id
        }
    })

    for api in apis:
        resources.append({
            'name': 'api_' + project_id + '_' + api,
            'type': 'deploymentmanager.v2.virtual.enableService',
            'metadata': {
                'dependsOn': [
                    'project_' + project_id,
                    'billing_' + project_id,
                ]
            },
            'properties': {
                'consumerId': 'project:' + project_id,
                'serviceName': api
            }
        })

    resources.append({
        # Get the IAM policy first so that we do not remove any existing bindings.
        'name': 'get-iam-policy_' + project_id,
        'action': 'gcp-types/cloudresourcemanager-v1:cloudresourcemanager.projects.getIamPolicy',
        'properties': {
            'resource': project_id,
        },
        'metadata': {
            'dependsOn': ['api_' + project_id + '_' + api for api in apis],
            'runtimePolicy': ['UPDATE_ALWAYS']
        }
    })

    resources.append({
        'name': 'patch-iam-policy_' + project_id,
        'action': 'gcp-types/cloudresourcemanager-v1:cloudresourcemanager.projects.setIamPolicy',
        'properties': {
            'resource': project_id,
            'policy': '$(ref.get-iam-policy_' + project_id + ')',
            'gcpIamPolicyPatch': {
                  'add': iam,
            }
        }
    })

    return {'resources': resources}
