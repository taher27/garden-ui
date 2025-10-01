Page Link: https://dev.roost.ai/gptCLIForm
Query: Extract details about the elements and functionalities available on this page.
Extracted Content:
```json
{
  "query": "Extract details about the elements and functionalities available on this page.",
  "response": {
    "pageDescription": "The webpage appears to be part of a platform called Roost.ai, which functions as a testing co-pilot powered by Generative AI and Large Language Models. The page outlines various configurable elements and functionalities for testing, integration, and advanced options.",
    "elementsAndFunctionalities": {
      "RoostGPT Config": "Configuration options for RoostGPT are mentioned but not detailed.",
      "Login": "A login option is provided, but no specific functionality is detailed.",
      "Test Suite": {
        "Configurable Fields": {
          "Name": "User-provided input for the test suite name.",
          "Test Type": ["Unit Test"],
          "Code Language": ["Java"],
          "Test Framework": ["JUnit5"],
          "Java Version": ["Java SE 21 (Default)"],
          "Java Build Tool": ["Maven"],
          "Maven Version": ["Maven 3.8.6 (Default)"]
        }
      },
      "Gen AI Models": {
        "Configurable Fields": {
          "AI Provider": "User-provided input.",
          "Open AI Base URL": "User-provided input.",
          "Open AI Token": "User-provided input with a 'Verify' button."
        }
      },
      "Code Repositories": {
        "Configurable Fields": {
          "Code Repo": "Github",
          "Type": ["Cloud", "Enterprise (self-hosted)"],
          "Source Repository": {
            "Github Token": "User-provided input with a 'Verify' button."
          }
        }
      },
      "Integration": {
        "Type": "No specific details provided."
      },
      "Advanced": {
        "Options": {
          "Skip Methods With Existing Test": "Toggle option (default OFF).",
          "Single Test File Per Source File": "Toggle option (default OFF).",
          "Environment Variables": "Option to 'Add Env Vars'.",
          "Maximum Depth": "Traverse to all sub-directories.",
          "Vulnerability Testing": "Check for Vulnerability.",
          "Roost User Input Type": ["Text", "File"],
          "Additional Prompt": "User-provided input.",
          "User Language": ["English"],
          "Timeout (in hrs)": "User-provided input (default 1).",
          "Iterations": "User-provided input (default 1).",
          "Functions to Test": "User-provided input.",
          "Custom Annotations": "User-provided input.",
          "Download Env Config": "Option to download environment configuration."
        }
      },
      "Footer Links": {
        "About Roost": "Link to information about Roost.",
        "Privacy Policy": "Link to privacy policy.",
        "Documentation": "Link to documentation.",
        "API Reference": "Link to API reference.",
        "Download CLI": "Option to download CLI.",
        "Install VS Code Extension": "Option to install VS Code extension."
      }
    },
    "notes": "The elements and functionalities outlined above are based on the visible content of the webpage. Some features might require additional context or interaction (e.g., login or enabling JavaScript) to fully understand or access them."
  }
}
```