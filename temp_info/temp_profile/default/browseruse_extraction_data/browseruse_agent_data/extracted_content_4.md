Page Link: https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_addTest
Query: Extract all visible information and semantic context from the page.
Extracted Content:
```json
{
  "response": {
    "context": "This webpage appears to be an API documentation site for Roost.ai, focusing on automating test case generation and execution using large language models (LLMs) and generative AI. The page details various API endpoints, their parameters, request/response schemas, and examples.",
    "query_result": {
      "vague_query": true,
      "page_relevance": true,
      "content_extraction": {
        "visible_information": {
          "site_title": "Roost.ai | Your Testing Co-Pilot Powered by Generative AI",
          "product_name": "RoostGPT",
          "description": "Automated Test Case Generation using LLMs",
          "required_technologies": "JavaScript must be enabled to run the app."
        },
        "semantic_context": {
          "main_functionality": "Automated testing and test case generation",
          "core_technologies": "Generative AI, Large Language Models",
          "API_details": {
            "API_title": "RoostAI APIs",
            "API_version": "latest",
            "API_specification_download_link": "https://dev.roost.ai/api/test"
          },
          "key_endpoints": [
            {
              "endpoint_name": "Create Test App",
              "method": "POST",
              "description": "Creates a new application with its configuration.",
              "authorization": "Bearer",
              "endpoint_url": "https://dev.roost.ai/api/test",
              "request_schema": {
                "app_id": "string",
                "test_name": "string",
                "git_type": "github",
                "ai_model_info": {
                  "selected_model": "openai"
                },
                "git_info": {
                  "source": {
                    "access_token": "string",
                    "selected_branch": "string"
                  }
                },
                "integration_info": {
                  "type": "jira"
                },
                "additional_info": {
                  "language": "string",
                  "test_type": "unit"
                }
              },
              "response_sample": {
                "id": "56f9dade-e3b9-47c4-99d0-1a17397c3f40",
                "test_name": "string"
              }
            },
            {
              "endpoint_name": "Get All Test Plans",
              "method": "GET",
              "description": "Fetches all test plans.",
              "authorization": "Bearer",
              "endpoint_url": "https://dev.roost.ai/api/test/getAllTestPlan",
              "response_sample": {
                "code": 404,
                "message": "Not found"
              }
            }
          ]
        }
      }
    }
  }
}
```