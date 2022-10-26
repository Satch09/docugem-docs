import S3 from "aws-sdk/clients/s3";

export default async function handler(req, res) {
  const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  const post = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: {
      key: `input/${req.query.file}`,
      "Content-Type": req.query.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ["content-length-range", 0, 1048576], // up to 1 MB
    ],
  });
  res.status(200).json(post);
}