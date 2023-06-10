# Strapi Plugin File-Sysytem

This is a plugin for Strapi that provides endpoints to interact with the media library, allowing you to retrieve folders and files.

## Installation

```shell
npm install
```

1. Clone the repository or download the source code.
2. Copy the plugin folder into your Strapi project's `plugins` directory.
3. Install the plugin's dependencies by running the following command:
4. Start your server

## Usage

Once the plugin is installed and the Strapi server is running, you can access the following endpoints:

### Get a specific folder by name

```bash
Endpoint: GET /fs/docs/:folderName
```

Description: Retrieves a specific folder from the media library by its name. Replace `:folderName` in the URL with the actual name of the folder.

### Get all folders

```bash
Endpoint: GET /fs/folders
```

Description: Retrieves all folders from the media library.

### Get root-level files

```bash
Endpoint: GET /fs/root-files
```

Description: Retrieves all files located at the root level of the media library.
Configuration

`No additional configuration is required for this plugin.`

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This plugin is licensed under the MIT License. See the LICENSE file for more details.#
