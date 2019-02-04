const fs = require('fs');
const args = process.argv;
const inputFile = args[2] || 'vault.json';
const outputFile = args[3] || 'vault.csv';

console.log('\nREADING: ' + inputFile + '\n');

try {
  const contents = fs.readFileSync(inputFile);
  const vault = JSON.parse(contents);

  const csvOutput = ['url,username,password,extra,name,grouping,fav'];
  const fieldMapping = {
    url: 'url',
    username: 'username',
    email: 'username',
    password: 'password',
  };

  vault.items.forEach(function(item) {
    const rowData = {
      url: '',
      username: '',
      password: '',
      extra: '',
      name: item.title,
      grouping: '',
      fav: item.favourite,
    };

    Object.keys(fieldMapping).forEach(function(type) {
      const key = fieldMapping[type];
      item.fields.forEach(function(field) {
        if (field.type === type) {
          if (field.value && !rowData[key]) {
            rowData[key] = '"' + field.value + '"';
          }
        }
      });
    });
    csvOutput.push(
      Object.keys(rowData)
        .map(function(key) {
          return rowData[key];
        })
        .join(','),
    );
  });

  console.log('WRITING: ' + outputFile + '\n');
  fs.writeFileSync(outputFile, csvOutput.join('\n'));
} catch (err) {
  throw err;
}
