import React from 'react';
import Layout from '@theme/Layout';
import ReportGenerationInputForm from '../components/InputForms/reportGenerationInputForm';
import TemplateGenerationForm from '../components/InputForms/templateGenerationForm';
import Uploader from '../components/InputForms/uploader';

export default function Tool() {
  return (
    <Layout title="Tool" description="Input tool">
      <div
        style={{
          display: 'flex',
          padding: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '50vh',
          fontSize: '20px',
          overflow: 'auto',
        }}>
        <ReportGenerationInputForm />
        <TemplateGenerationForm />
        <Uploader />
      </div>
    </Layout>
  );
}
