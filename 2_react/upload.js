// // thanks to ChatGpt 3.5
// // prompt: I need node.js with no 3rd party lib that can upload all files in /dist (which is build web site file, including html and js) to specific endpoint. its cli program that accept 2 args, 1. is for endpoint 2. is for subdomain which will send attached in header

const fs = require('fs');
const http = require('http');
const path = require('path');

// Function to read all files in a directory and return an array of file paths
function getFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    return files.map(file => path.join(dir, file.name));
}

// Function to simulate file upload via POST request
function simulateFileUpload(filePath, endpoint, subdomain) {
    const fileContent = fs.readFileSync(filePath);

    const boundary = '------WebKitFormBoundary1234567890'; // Change the boundary as needed
    const data = `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${path.basename(filePath)}"\r\nContent-Type: application/octet-stream\r\n\r\n${fileContent}\r\n--${boundary}--\r\n`;

    const options = {
        hostname: endpoint,
        port: 80, // Change the port if needed
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': `multipart/form-data; boundary=${boundary}`,
            'Subdomain': subdomain,
            'Content-Length': Buffer.from(data, 'utf-8').length,
        },
    };

    const req = http.request(options, res => {
        let responseData = '';

        res.on('data', chunk => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log(`File ${filePath} uploaded successfully.`);
            console.log(responseData);
        });

        res.on('error', err => {
            console.error(`Error while uploading file ${filePath}: ${err}`);
        });
    });

    req.write(data);
    req.end();
}

// CLI program
if (process.argv.length !== 4) {
    console.error('Usage: node upload.js <endpoint> <subdomain>');
    process.exit(1);
}

const endpoint = process.argv[2];
const subdomain = process.argv[3];
const distPath = path.join(__dirname, 'dist');

// Get all files in the /dist directory
const files = getFiles(distPath);

// Simulate file upload for each file to the specified endpoint with the provided subdomain
files.forEach(file => {
    simulateFileUpload(file, endpoint, subdomain);
});
