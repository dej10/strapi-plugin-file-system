# Strapi Plugin File-System

This is a plugin for Strapi that provides endpoints to interact with the media library, allowing you to retrieve folders and files.

- [Strapi Plugin File-System](#strapi-plugin-file-system)
  - [Installation](#installation)
    - [Enable The plugin](#enable-the-plugin)
  - [Usage](#usage)
    - [Get a specific folder by name](#get-a-specific-folder-by-name)
    - [Get all folders](#get-all-folders)
    - [Get root-level files](#get-root-level-files)
  - [Plugin Issue Submission Instructions](#plugin-issue-submission-instructions)
  - [Step 1: Check the Documentation](#step-1-check-the-documentation)
  - [Step 2: Browse Existing Issues](#step-2-browse-existing-issues)
  - [Step 3: Submitting an Issue](#step-3-submitting-an-issue)
  - [Step 4: Engaging with the Community](#step-4-engaging-with-the-community)
  - [Step 5: Providing Feedback and Contributing](#step-5-providing-feedback-and-contributing)
  - [License](#license)

## Installation

```bash
npm install strapi-plugin-file-system
```

or

```bash
yarn add strapi-plugin-file-system
```

### Enable The plugin

```javascript
module.exports = ({ env }) => ({
  // ...

  'file-system': {
    enabled: true,
  },

  // ...
})
```

## Usage

Once the plugin is installed and the Strapi server is running, you can access the following endpoints:

### Get a specific folder by name

```bash
Endpoint: GET /file-system/docs/:folderName
```

Description: Retrieves a specific folder from the media library by its name. Replace `:folderName` in the URL with the actual name of the folder.
It will also show all children/folders nested in it and files.

Warning: If you have complex structure of folders in your media library and you have few folders with same name then API will return always the first matching of folder name. In this case please use fetching a specific folder by path to have ability retrieve proper folder.

### Get a specific folder by path

```bash
Endpoint: GET /file-system/folder?path=fullPathToFolder
```

Description: Retrieves a specific folder from the media library by its path. Replace `fullPathToFolder` in the URL with the actual full path to the folder. First and last slashed in the path can be present or omit.
It will also show all files and folders nested in it.
Example:
Path: `/resorts/location2/photos`
Request: `/file-system/folder?path=/resorts/location2/photos`

### Get all folders

```bash
Endpoint: GET /file-system/folders
```

Description: Retrieves all folders from the media library.

### Get root-level files

```bash
Endpoint: GET /file-system/root-files
```

Description: Retrieves all files located at the root level of the media library.
Configuration

`No additional configuration is required for this plugin.`

## Plugin Issue Submission Instructions

Thank you for using our plugin! If you encounter any issues or have questions, please follow these instructions to submit them:

## Step 1: Check the Documentation

Before submitting an issue, please refer to the documentation provided with the plugin. It may already address your concern or provide a solution.

## Step 2: Browse Existing Issues

Take a moment to browse through the existing issues in our plugin's repository. Your issue might have already been reported or resolved. This can save you time and provide additional insights.

## Step 3: Submitting an Issue

If you cannot find a resolution to your problem, follow these steps to submit an issue:

1. Go to the plugin's repository on [GitHub](https://github.com/dej10/strapi-plugin-file-system).

2. Click on the "Issues" tab.

3. Click on the "New Issue" button.

4. Provide a clear and descriptive title for your issue.

5. In the issue description, explain the problem you are facing in detail. Include any relevant error messages, steps to reproduce the issue, and the expected behavior.

6. If applicable, provide the version of the plugin you are using, as well as information about your environment (e.g., operating system, browser, etc.).

7. Attach any relevant screenshots or code snippets that can help us understand the issue better.

8. Click on the "Submit new issue" button to create the issue.

## Step 4: Engaging with the Community

Once you've submitted your issue, our team will review it and provide assistance as soon as possible. In the meantime, you can engage with the community:

- Check for updates on your issue to see if any team members or community members have requested additional information or provided suggestions.

- Feel free to participate in discussions on other open issues or pull requests if you have relevant insights or can help other users.

## Step 5: Providing Feedback and Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This plugin is licensed under the MIT License. See the LICENSE file for more details.
