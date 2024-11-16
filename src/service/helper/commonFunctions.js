

function base64ToBlob(base64Data) {
    const binaryData = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: 'application/octet-stream' });
};

export { base64ToBlob };