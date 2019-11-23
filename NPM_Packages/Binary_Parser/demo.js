// Module import
var Parser = require("binary-parser").Parser;
 
// Build an IP packet header Parser
var ipHeader = new Parser()   // Returned object represents a parser which parses nothing.
  .endianess("big")
  .bit4("version")
  .bit4("headerLength")
  .uint8("tos")
  .uint16("packetLength")
  .uint16("id")
  .bit3("offset")
  .bit13("fragOffset")
  .uint8("ttl")
  .uint8("protocol")
  .uint16("checksum")
  .array("src", {
    type: "uint8",
    length: 4
  })
  .array("dst", {
    type: "uint8",
    length: 4
  });
 
// Prepare buffer to parse.
var buf = Buffer.from("450002c5939900002c06ef98adc24f6c850186d1", "hex");
 
// Parse buffer and show result
console.log(ipHeader.parse(buf));