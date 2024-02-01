#data for cloud providers

cloud_costs_data = {
    "AWS": {
        "instances": {
            "EC2": [
                {"instance_name": "t3.medium", "memory": "2GB", "usage_workloads": "web_hosting"},
                {"instance_name": "c6gn.large", "memory": "4GB"},
                # Add more EC2 instances as needed
            ],
            "Lambda": [
                {"instance_name": "lambda_function_1", "memory": "128MB"},
                {"instance_name": "lambda_function_2", "memory": "256MB"},
                # Add more Lambda instances as needed
            ],
            # Add more AWS platforms as needed
        }
    },
    "Azure": {
        "instances": {
            "Virtual Machines": [
                {"instance_name": "Standard_B1s", "memory": "1GB"},
                {"instance_name": "Standard_D2s_v3", "memory": "8GB"},
                # Add more Virtual Machines instances as needed
            ],
            "Azure Functions": [
                {"instance_name": "function_app_1", "memory": "128MB"},
                {"instance_name": "function_app_2", "memory": "256MB"},
                # Add more Azure Functions instances as needed
            ],
            # Add more Azure platforms as needed
        }
    },
    "GCP": {
        "instances": {
            "Compute Engine": [
                {"instance_name": "n1-standard-1", "memory": "3.75GB"},
                {"instance_name": "n1-highmem-2", "memory": "13GB"},
                # Add more Compute Engine instances as needed
            ],
            "Cloud Functions": [
                {"instance_name": "function_1", "memory": "256MB"},
                {"instance_name": "function_2", "memory": "512MB"},
                # Add more Cloud Functions instances as needed
            ],
            # Add more GCP platforms as needed
        }
    },
    "IBM Cloud": {
        "instances": {
            "Virtual Servers": [
                {"instance_name": "bx2.4x16", "memory": "16GB"},
                {"instance_name": "mx2.8x32", "memory": "32GB"},
                # Add more Virtual Servers instances as needed
            ],
            "Cloud Functions": [
                {"instance_name": "function_1", "memory": "256MB"},
                {"instance_name": "function_2", "memory": "512MB"},
                # Add more Cloud Functions instances as needed
            ],
            # Add more IBM Cloud platforms as needed
        }
    },
}