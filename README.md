# Strapi Plugin File-System

This is a plugin for Strapi that provides endpoints to interact with the media library, allowing you to retrieve folders and files.

- [Strapi Plugin File-System](#strapi-plugin-file-system)
  - [Installation](#installation)
    - [Enable The plugin](#enable-the-plugin)
  - [Usage](#usage)
    - [Get a specific folder by name](#get-a-specific-folder-by-name)
    - [Get all folders](#get-all-folders)
    - [Get root-level files](#get-root-level-files)
  - [Contributing](#contributing)
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
It will also show all children/folders nested in it and files

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

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This plugin is licensed under the MIT License. See the LICENSE file for more details.#
