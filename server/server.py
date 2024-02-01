from flask import Flask, request, jsonify
from cloud_costs import cloud_costs_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Endpoint to process user survey responses and recommend optimal cloud service and instance
@app.route('/api/recommend-cloud', methods=['POST'])
def recommend_cloud():
    data = request.json

    # Extract user survey responses
    budgetSet = data.get("budgetSet")
    usage_workloads = data.get("usage_workloads")
    preferredFeatures = data.get("preferredFeatures")

    # Find the optimal cloud provider and instance based on user responses
    recommendation = compute_optimal_recommendation(budgetSet)

    return jsonify(recommendation)


# Function to compute the optimal cloud recommendation based on user responses
def compute_optimal_recommendation(budgetSet):
    optimal_recommendation = {"cloud_provider": None, "instance": None, "cost": float('inf')}

    # Iterate through cloud providers and their instances
    for provider, provider_data in cloud_costs_data.items():
        for platform, instances in provider_data.get("instances", {}).items():
            for instance in instances:
                # Placeholder: Assume that cost is determined based on memory
                instance_cost = calculate_instance_cost(instance)

                # Placeholder: Consider only instances within budget
                if instance_cost <= budgetSet:
                    # Placeholder: Simple logic to determine optimal recommendation
                    if instance_cost < optimal_recommendation["cost"]:
                        optimal_recommendation["cloud_provider"] = provider
                        optimal_recommendation["instance"] = f"{platform} - {instance['instance_name']}"
                        optimal_recommendation["cost"] = instance_cost

    return optimal_recommendation

# Placeholder function to calculate instance cost
def calculate_instance_cost(instance):
    # Placeholder: Simple cost calculation based on memory
    memory_gb = parse_memory_to_gb(instance["memory"])
    cost_per_gb = 0.05  # Placeholder cost per GB
    return memory_gb * cost_per_gb


# Placeholder function to parse memory to GB (replace with actual logic)
def parse_memory_to_gb(memory):
    return int(memory.replace("GB", ""))