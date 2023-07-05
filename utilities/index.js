function castToBytes(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes == 0) {
    return "n/a";
  }

  const byte = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

  if (byte == 0) {
    return bytes + " " + sizes[byte];
  }

  return (bytes / Math.pow(1024, byte)).toFixed(1) + " " + sizes[byte];
}

module.exports = {
  castToBytes,
};
