// Create bucket

// Configure bucket poilcy

// Create user with permissions on bucket (use this user for uploads to generate presigned url)

import Translate from '@docusaurus/Translate';
import React from 'react';
import styles from "../../css/Home.module.css";

const uploadFile = async (e) => {
  const file = e.target.files?.[0];
  const filename = encodeURIComponent(file.name);
  const fileType = encodeURIComponent(file.type);

  const res = await fetch(
    `/api/upload_config?file=${filename}&fileType=${fileType}`
  );
  const { url, fields } = await res.json();
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const upload = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (upload.ok) {
    alert("Uploaded successfully!");
  } else {
    alert("Upload failed.");
  }
};

export default function Uploader() {
  return (
    <>
      <div className={styles.card_container}>
        <label>
          <p>Upload .xlsx config file (max 1MB).</p>
          <input
            type="file"
            name="file_upload"
            onChange={uploadFile}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, text/csv"
          />
        </label>
        <p>
          <Translate>

            Files will automatically upload and download

          </Translate></p>
        <input type="submit" />
      </div>
    </>
  );
}
