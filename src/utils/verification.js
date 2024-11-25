// src/utils/verification.js
import { Buffer } from 'buffer';
import crypto from 'crypto-browserify';
const publicKey = fs.readFileSync("public.pem", "utf8");

export async function verifySignature(signature, payload) {
    try {
        const verifier = crypto.createVerify("SHA256");

        verifier.update(payload);
        verifier.end();

        const decodedSignature = Buffer.from(signature, "base64");
        const isVerified = verifier.verify(publicKey, decodedSignature);

        if (isVerified) {
            console.log("Signature is valid");
            return true;
        }
        return false;
    } catch (err) {
        console.log(err);
        return false;
    }
}