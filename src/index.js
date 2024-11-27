function generateUniqueCombination() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const uniqueStr = `${timestamp}-${randomNum}`;
    const hash = btoa(uniqueStr);  // Base64 encoding for uniqueness
    return hash;
}
