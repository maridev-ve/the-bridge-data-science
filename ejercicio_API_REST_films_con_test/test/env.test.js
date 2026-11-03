const fs = require('fs');
const path = require('path');

describe('Environment setup', () => {
  it('should have a .env file in the root directory', () => {
    const envPath = path.join(__dirname, '..', '.env');
    const fileExists = fs.existsSync(envPath);
    expect(fileExists).toBe(true, ".env file is missing in the root directory.");
  });

  it('should have API_KEY defined in the .env file', () => {
    require('dotenv').config();
    const apiKey = process.env.API_KEY;
    expect(apiKey).toBeDefined();
    if (!apiKey) {
      console.error("API_KEY is not defined in the .env file.");
    }
    expect(apiKey).not.toBe('');
    if (apiKey === '') {
      console.error("API_KEY is empty in the .env file.");
    }
  });
});
