Page Link: https://dev.roost.ai/docs/api#tag/RoostGPT/operation/TestGptController_addTest
Query: Extract all visible elements, their descriptions, and functionalities. Include API endpoint details and their proposed use cases.
Extracted Content:
```json
{
  "explanation": "The webpage provided contains extensive API documentation for RoostAI's services. It includes API endpoints, their functionalities, request/response formats, and examples. However, there are no details about visible UI elements (e.g., buttons, links, or other interactive elements) or their descriptions and functionalities. The content is heavily focused on the technical API structure and use cases.",
  "visible_elements": "Not available",
  "descriptions_and_functionalities": "Not available",
  "api_endpoints": [
    {
      "endpoint": "https://dev.roost.ai/api/test",
      "method": "POST",
      "description": "Creates a new application with its configuration.",
      "use_case": "Used to create a test app with various configurations such as AI models, Git info, integration details, and test scope."
    },
    {
      "endpoint": "https://dev.roost.ai/api/test",
      "method": "GET",
      "description": "Fetches all tests.",
      "use_case": "Retrieves a list of all tests based on query parameters like license key, search term, and filters."
    },
    {
      "endpoint": "https://dev.roost.ai/api/test/createTestPlan",
      "method": "POST",
      "description": "Creates a test plan.",
      "use_case": "Used to configure and create a test plan including AI configurations, Git information, and test-specific settings."
    },
    {
      "endpoint": "https://dev.roost.ai/api/test/deleteTest",
      "method": "DELETE",
      "description": "Deletes test plans based on certain criteria.",
      "use_case": "Removes tests older than a specified duration using a license key."
    },
    {
      "endpoint": "https://dev.roost.ai/api/test/event/{trigger_id}",
      "method": "PATCH",
      "description": "Edits a trigger event.",
      "use_case": "Updates the status or other details of a trigger event."
    },
    {
      "endpoint": "https://dev.roost.ai/api/test/event/{trigger_id}/execute",
      "method": "POST",
      "description": "Executes a specific test event.",
      "use_case": "Triggers the execution of a test event with parameters like target URL, file path, and environment configuration."
    }
    // Additional endpoints omitted for brevity
  ]
}
```