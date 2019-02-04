# Enpass to CSV

A simple script to convert the exported vault json from Enpass 6 to a csv file

## Requirements

- You need Node.js to run this script
- Enpass 6

## Usage

Export your Enpass 6 vault into json format from the desktop application

Run the following command and provide the location of the input and output files

```
node parse.js <path to json file> <path to csv output file>
```

By default, it will read `vault.json` and output `vault.csv` in local directory

### Disclaimer

Use at own risk. Please verify the csv output yourself before importing to another password manager
